import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ALLOWED_EMAILS = [
  'info@g-knowthyself.com',
  'OtoI.snowman@gmail.com',
  'fujii@g-knowthyself.com',
  'asakura@g-knowthyself.com',
  'iida@g-knowthyself.com',
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'メールアドレスが必要です。' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.toLowerCase().trim()
    const allowedNormalized = ALLOWED_EMAILS.map((e) => e.toLowerCase())

    if (!allowedNormalized.includes(normalizedEmail)) {
      return NextResponse.json(
        { error: 'このメールアドレスは許可されていません。' },
        { status: 403 }
      )
    }

    const originalEmail = ALLOWED_EMAILS.find(
      (e) => e.toLowerCase() === normalizedEmail
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
    return NextResponse.json(
      { error: 'リクエストの処理中にエラーが発生しました。' },
      { status: 500 }
    )
  }
}
