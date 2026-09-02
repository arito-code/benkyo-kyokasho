import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { isAllowedEmail, getOriginalEmail, createAuthToken } from '@/lib/auth'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login?error=missing_token', request.url))
  }

  try {
    const decoded = JSON.parse(atob(token))
    const { email } = decoded

    if (!email || !isAllowedEmail(email)) {
      return NextResponse.redirect(new URL('/login?error=invalid_email', request.url))
    }

    const originalEmail = getOriginalEmail(email)
    if (!originalEmail) {
      return NextResponse.redirect(new URL('/login?error=invalid_email', request.url))
    }

    const authToken = await createAuthToken(originalEmail)

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
