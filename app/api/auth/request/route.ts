import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { isAllowedEmail, getOriginalEmail, createAuthToken } from '@/lib/auth'

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

    if (!isAllowedEmail(email)) {
      return NextResponse.json(
        { error: 'このメールアドレスは許可されていません。' },
        { status: 403 }
      )
    }

    const originalEmail = getOriginalEmail(email)
    if (!originalEmail) {
      return NextResponse.json(
        { error: 'このメールアドレスは許可されていません。' },
        { status: 403 }
      )
    }

    const authToken = createAuthToken(originalEmail)

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
