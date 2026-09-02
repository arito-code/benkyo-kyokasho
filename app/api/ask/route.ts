import { NextRequest, NextResponse } from 'next/server'
import { askQuestion } from '@/lib/ask'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { question, context } = body

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: '質問が必要です。' },
        { status: 400 }
      )
    }

    if (question.length > 1000) {
      return NextResponse.json(
        { error: '質問は1000文字以内にしてください。' },
        { status: 400 }
      )
    }

    const answer = await askQuestion(question, context)

    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Ask API error:', error)
    return NextResponse.json(
      { error: '回答の生成中にエラーが発生しました。' },
      { status: 500 }
    )
  }
}
