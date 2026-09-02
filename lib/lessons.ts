export interface Lesson {
  id: string
  title: string
  description: string
  summary: string
  keywords: string[]
}

const lessons: Lesson[] = [
  {
    id: '01-electricity',
    title: '電気の基礎',
    description: '電圧・電流・抵抗の基本概念とオームの法則を学びます。',
    summary: `電圧は「押し」、電流は「流れる量」、抵抗は「流れにくさ」です。
電圧は＋側が高く、−側が低くなっています。
オームの法則: V = I × R（電圧 = 電流 × 抵抗）`,
    keywords: ['電圧', '電流', '抵抗', 'オームの法則', '電池', 'ボルト', 'アンペア', 'オーム'],
  },
]

export function getLessonContent(lessonId: string): Lesson | undefined {
  return lessons.find((l) => l.id === lessonId)
}

export function getAllLessons(): Lesson[] {
  return lessons
}

export function searchLessons(query: string): Array<{ lessonId: string; score: number }> {
  const queryLower = query.toLowerCase()
  const queryTerms = queryLower.split(/\s+/)
  
  const results: Array<{ lessonId: string; score: number }> = []
  
  for (const lesson of lessons) {
    let score = 0
    
    for (const term of queryTerms) {
      if (lesson.title.toLowerCase().includes(term)) {
        score += 10
      }
      
      if (lesson.keywords.some((k) => k.toLowerCase().includes(term))) {
        score += 5
      }
      
      if (lesson.summary.toLowerCase().includes(term)) {
        score += 2
      }
      
      if (lesson.description.toLowerCase().includes(term)) {
        score += 1
      }
    }
    
    if (score > 0) {
      results.push({ lessonId: lesson.id, score })
    }
  }
  
  return results.sort((a, b) => b.score - a.score)
}
