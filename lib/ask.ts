import { getLessonContent, searchLessons } from './lessons'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const AI_GATEWAY_API_KEY = process.env.AI_GATEWAY_API_KEY

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string
    }
  }>
}

async function askOpenAI(question: string, context?: string): Promise<string> {
  const apiKey = OPENAI_API_KEY || AI_GATEWAY_API_KEY
  
  if (!apiKey) {
    throw new Error('No API key configured')
  }

  const systemPrompt = `あなたは日本語で理系の質問に答える教師です。
ですます調で回答してください。「ね」「よ」などの終助詞は使わないでください。
回答は明確で簡潔にしてください。

${context ? `参考情報:\n${context}` : ''}`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: question },
      ],
      max_tokens: 500,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.status}`)
  }

  const data: OpenAIResponse = await response.json()
  return data.choices[0]?.message?.content || '回答を生成できませんでした。'
}

function extractiveAnswer(question: string): string {
  const searchResults = searchLessons(question)
  
  if (searchResults.length === 0) {
    return `申し訳ありませんが、「${question}」に関する情報は見つかりませんでした。
学習コンテンツを参照してください。`
  }

  const relevantContent = searchResults.slice(0, 3)
  
  let answer = '関連する学習内容から抜粋します。\n\n'
  
  for (const result of relevantContent) {
    const content = getLessonContent(result.lessonId)
    if (content) {
      answer += `【${content.title}】\n`
      answer += content.summary + '\n\n'
    }
  }
  
  return answer.trim()
}

export async function askQuestion(question: string, context?: string): Promise<string> {
  const hasApiKey = OPENAI_API_KEY || AI_GATEWAY_API_KEY

  if (hasApiKey) {
    try {
      return await askOpenAI(question, context)
    } catch (error) {
      console.error('OpenAI API error, falling back to extractive:', error)
      return extractiveAnswer(question)
    }
  }

  return extractiveAnswer(question)
}
