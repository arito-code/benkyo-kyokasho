import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    { error: 'ログイン認証は廃止されました。' },
    { status: 410 }
  )
}
