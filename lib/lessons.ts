import { phases, getLessonByNumber } from './course'

export interface Lesson {
  id: string
  title: string
  description: string
  summary: string
  keywords: string[]
}

const lessonContent: Record<string, Lesson> = {
  '01-electricity': {
    id: '01-electricity',
    title: '電気とは何か',
    description: '電圧・電流・抵抗の基本概念とオームの法則を学びます。',
    summary: `電圧は「押し」、電流は「流れる量」、抵抗は「流れにくさ」です。
電圧は＋側が高く、−側が低くなっています。
オームの法則: V = I × R（電圧 = 電流 × 抵抗）`,
    keywords: ['電圧', '電流', '抵抗', 'オームの法則', '電池', 'ボルト', 'アンペア', 'オーム'],
  },
  '02-machine': {
    id: '02-machine',
    title: '機械とは何か',
    description: '機械の役割と電気との違いを学びます。',
    summary: `機械は「力を伝えて物を動かす」仕組みです。
電気が情報やエネルギーを運ぶのに対し、機械は物理的な仕事をします。
モーターは電気を回転の力に変える、電気と機械の橋渡し役です。`,
    keywords: ['機械', 'モーター', 'ギア', '力', '仕事', '回転'],
  },
  '03-computer': {
    id: '03-computer',
    title: 'コンピュータとは何か',
    description: 'コンピュータの役割とプログラムの基本を学びます。',
    summary: `コンピュータは「計算と判断をする機械」です。
プログラムという指示書に従って動きます。
マイコンは小さなコンピュータで、センサーやモーターを制御できます。`,
    keywords: ['コンピュータ', 'プログラム', 'マイコン', '計算', '判断', '制御'],
  },
  '04-io': {
    id: '04-io',
    title: '入力と出力',
    description: '入力と出力の概念、コンピュータが世界とつながる仕組みを学びます。',
    summary: `入力は「外から情報を受け取る」こと、出力は「外に向けて動作する」ことです。
センサーは入力、LEDやモーターは出力の代表例です。
コンピュータは入力を受け取り、処理して、出力を返します。`,
    keywords: ['入力', '出力', 'センサー', 'LED', 'モーター', 'GPIO'],
  },
}

export function getLessonContent(lessonId: string): Lesson | undefined {
  return lessonContent[lessonId]
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonContent)
}

export function searchLessons(query: string): Array<{ lessonId: string; score: number }> {
  const queryLower = query.toLowerCase()
  const queryTerms = queryLower.split(/\s+/)

  const results: Array<{ lessonId: string; score: number }> = []

  for (const lesson of Object.values(lessonContent)) {
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

export { phases, getLessonByNumber }
