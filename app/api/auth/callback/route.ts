import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login?error=missing_token', request.url))
  }

  try {
    const decoded = JSON.parse(atob(token))
    const { email } = decoded

    if (!email || !ALLOWED_EMAILS.map((e) => e.toLowerCase()).includes(email.toLowerCase())) {
      return NextResponse.redirect(new URL('/login?error=invalid_email', request.url))
    }

    const originalEmail = ALLOWED_EMAILS.find(
      (e) => e.toLowerCase() === email.toLowerCase()
    )

    const authToken = btoa(JSON.stringify({ email: originalEmail, ts: Date.now() }))

    const cookieStore = await cookies()
    cookieStore.set('study_auth', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })

    return NextResponse.redirect(new URL('/', request.url))
  } catch {
    return NextResponse.redirect(new URL('/login?error=invalid_token', request.url))
  }
}
