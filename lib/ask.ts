import { getLessonContent, getAllLessons, searchLessons } from './lessons'

export interface AskResponse {
  answer: string
  source: 'model' | 'lesson'
}

const PEDAGOGY_CONTEXT = `教育方針:
- ですます調で回答してください
- 「ね」「よ」などの終助詞は使わないでください
- 電圧は「押し」です
- 電流は「流れる量」です
- 抵抗は「流れにくさ」です
- 押しは＋側が高いです（電圧は＋側が高く、−側が低い）
- 第1回本文を根拠にしてください
- 本文にないものは作らないでください`

function buildLessonContext(lessonId?: string): string {
  if (lessonId) {
    const lesson = getLessonContent(lessonId)
    if (lesson) {
      return `現在の授業【${lesson.title}】:\n${lesson.summary}\n\n${lesson.description}`
    }
  }

  const lessons = getAllLessons()
  let context = '学習コンテンツ:\n\n'

  for (const lesson of lessons) {
    context += `【${lesson.title}】\n`
    context += `${lesson.summary}\n\n`
  }

  return context
}

async function tutorAnswer(question: string, lessonId?: string): Promise<AskResponse> {
  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_GATEWAY_API_KEY

  if (!apiKey) {
    return extractiveAnswer(question, lessonId)
  }

  const lessonContext = buildLessonContext(lessonId)

  const systemPrompt = `あなたは日本語で理系の質問に答える教師です。

${PEDAGOGY_CONTEXT}

${lessonContext}

上記の学習コンテンツと教育方針に基づいて、質問に回答してください。
回答は明確で簡潔にしてください。`

  try {
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
      console.error(`OpenAI API error: ${response.status}`)
      return extractiveAnswer(question, lessonId)
    }

    interface OpenAIResponse {
      choices: Array<{
        message: {
          content: string
        }
      }>
    }

    const data: OpenAIResponse = await response.json()
    const content = data.choices[0]?.message?.content

    if (!content) {
      return extractiveAnswer(question, lessonId)
    }

    return {
      answer: content,
      source: 'model',
    }
  } catch (error) {
    console.error('OpenAI API error, falling back to extractive:', error)
    return extractiveAnswer(question, lessonId)
  }
}

function extractiveAnswer(question: string, lessonId?: string): AskResponse {
  if (lessonId) {
    const lesson = getLessonContent(lessonId)
    if (lesson) {
      return {
        answer: `【${lesson.title}】\n${lesson.summary}`,
        source: 'lesson',
      }
    }
  }

  const searchResults = searchLessons(question)

  if (searchResults.length > 0) {
    const relevantContent = searchResults.slice(0, 3)
    let answer = ''

    for (const result of relevantContent) {
      const content = getLessonContent(result.lessonId)
      if (content) {
        if (answer) answer += '\n\n'
        answer += `【${content.title}】\n`
        answer += content.summary
      }
    }

    return {
      answer: answer.trim(),
      source: 'lesson',
    }
  }

  const defaultLesson = getLessonContent('01-electricity')
  if (defaultLesson) {
    return {
      answer: `電気の基礎について説明します。\n\n${defaultLesson.summary}`,
      source: 'lesson',
    }
  }

  return {
    answer: `電圧は「押し」、電流は「流れる量」、抵抗は「流れにくさ」です。電圧は＋側が高く、−側が低くなっています。オームの法則は V = I × R で表されます。`,
    source: 'lesson',
  }
}

export async function askQuestion(question: string, lessonId?: string): Promise<AskResponse> {
  return tutorAnswer(question, lessonId)
}
