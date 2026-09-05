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
  '05-sensor-intro': {
    id: '05-sensor-intro',
    title: 'センサーとは何か',
    description: 'センサーの仕組みと種類、物理量を電気信号に変える原理を学びます。',
    summary: `センサーは、温度・光・距離などの物理量を電気信号に変える部品です。
人間の五感のように、コンピュータに外の世界を知らせます。
センサーの値を「入力」として、コンピュータは判断を行います。`,
    keywords: ['センサー', '入力', '温度センサー', '光センサー', '距離センサー', 'ボタン', '物理量', '電気信号'],
  },
  '06-program': {
    id: '06-program',
    title: 'プログラムとは何か',
    description: 'プログラムの仕組み、順番に命令を実行する仕組みを学びます。',
    summary: `プログラムは、コンピュータへの「順番が決まった指示書」です。
「もし〜なら」「繰り返す」などの命令を並べて、自動で動かします。
センサーの値を見て、何をするか判断するのがプログラムの役割です。`,
    keywords: ['プログラム', '命令', '条件分岐', '繰り返し', '処理', '自動化'],
  },
  '07-voltage': {
    id: '07-voltage',
    title: '電圧とは何か',
    description: 'Phase 2の始まり。電圧の本質と、電流・抵抗との関係を深く学びます。',
    summary: `電圧は、電気を流そうとする「押し」の力です。
電流は実際に流れる電気の量、抵抗は流れにくさです。
電圧が高いほど強く押すので、同じ抵抗なら電流が多く流れます。`,
    keywords: ['電圧', '電流', '抵抗', 'ボルト', 'アンペア', 'オーム', 'オームの法則', '電源'],
  },
  '08-current': {
    id: '08-current',
    title: '電流とは何か',
    description: '電流の概念を深く学びます。流れる量としての電流、アンペアの単位、電流と部品の関係を理解します。',
    summary: `電流は、回路を流れる電気の量です。水道にたとえると、パイプを流れる水の量にあたります。
電流の単位はアンペア（A）で、小さな電流はミリアンペア（mA）で表します。
部品には流せる電流の限界があり、超えると壊れてしまいます。`,
    keywords: ['電流', 'アンペア', 'mA', '電気', '流れる量', 'LED', '電池'],
  },
  '09-resistance': {
    id: '09-resistance',
    title: '抵抗とは何か',
    description: '抵抗の概念を深く学びます。流れにくさとしての抵抗、オームの単位、抵抗で電流を制限する方法を理解します。',
    summary: `抵抗は、電気の流れにくさです。水道にたとえると、パイプの細さにあたります。
抵抗の単位はオーム（Ω）で、数字が大きいほど電流が流れにくくなります。
抵抗を使うと電流を制限でき、LEDなどの部品を守ることができます。`,
    keywords: ['抵抗', 'オーム', 'Ω', '流れにくさ', 'LED', '抵抗器', 'カラーコード'],
  },
  '10-ohms-law': {
    id: '10-ohms-law',
    title: 'オームの法則',
    description: '電圧・電流・抵抗の関係を式で表すオームの法則を学びます。V=IRの計算方法を理解します。',
    summary: `オームの法則は V = I × R（電圧 = 電流 × 抵抗）です。
電流を求めるときは I = V ÷ R、抵抗を求めるときは R = V ÷ I を使います。
水道のたとえ: 電圧=押す力、電流=流れる量、抵抗=流れにくさ の関係がこの式で表せます。`,
    keywords: ['オームの法則', '電圧', '電流', '抵抗', 'V=IR', '計算', '回路設計'],
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
