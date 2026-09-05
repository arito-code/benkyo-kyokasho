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
  '11-circuit': {
    id: '11-circuit',
    title: '回路とは何か',
    description: '電気が流れる道「回路」の基本を学びます。閉じた輪と電流の関係を理解します。',
    summary: `回路は、電気が流れるための「閉じた輪」です。
電池の＋極から出た電気は、導線と部品を通って−極に戻ります。
輪が切れていると電流は流れません。これが回路の基本原理です。`,
    keywords: ['回路', '閉回路', '電流', '導線', '配線', '電池', 'ループ'],
  },
  '12-series-parallel': {
    id: '12-series-parallel',
    title: '直列と並列',
    description: '部品のつなぎ方「直列」と「並列」の違いを学びます。電圧と電流がどう変わるか理解します。',
    summary: `直列は部品を一列につなぐ方法、並列は枝分かれさせてつなぐ方法です。
直列では電流が同じで電圧が分かれます。並列では電圧が同じで電流が分かれます。
LEDを2つ光らせるとき、直列か並列かで明るさや必要な電圧が変わります。`,
    keywords: ['直列', '並列', '直列回路', '並列回路', '電圧', '電流', 'LED', '配線'],
  },
  '13-power-sources': {
    id: '13-power-sources',
    title: '電源の種類',
    description: '電池、ACアダプター、USBなど、回路に電気を供給する電源の種類と特徴を学びます。',
    summary: `電源は回路に電気を供給する部品です。乾電池は1.5V、USB電源は5V、ACアダプターは様々な電圧があります。
電源には直流（DC）と交流（AC）があり、電子工作では主に直流を使います。
使う部品に合った電圧の電源を選ぶことが大切です。`,
    keywords: ['電源', '電池', 'USB', 'ACアダプター', '直流', '交流', 'DC', 'AC', 'ボルト'],
  },
  '14-ground': {
    id: '14-ground',
    title: 'グラウンドとは何か',
    description: '回路の基準点「グラウンド（GND）」の役割を学びます。なぜ回路図に必ず登場するか理解します。',
    summary: `グラウンド（GND）は回路の電圧の基準点で、0Vの場所です。
電圧は「どこを基準にするか」で決まります。GNDを基準にして5Vや3.3Vを測ります。
回路図では「⏚」の記号で表し、電池の−極に相当します。`,
    keywords: ['グラウンド', 'GND', '基準点', '0V', 'マイナス', '−極', '電圧'],
  },
  '15-led-resistor': {
    id: '15-led-resistor',
    title: 'LEDと抵抗',
    description: 'LEDを安全に光らせるための抵抗の計算方法を学びます。順方向電圧（Vf）を含めた実践的な回路設計です。',
    summary: `LEDには順方向電圧（Vf）があり、赤色LEDは約2Vです。
5V電源でLEDを光らせるとき、抵抗にかかる電圧は 5V - 2V = 3V です。
20mA流すには R = 3V ÷ 0.02A = 150Ω の抵抗が必要です。`,
    keywords: ['LED', '抵抗', '順方向電圧', 'Vf', 'オームの法則', '電流制限', '発光ダイオード'],
  },
  '16-switch-button': {
    id: '16-switch-button',
    title: 'スイッチとボタン',
    description: '回路のオン・オフを切り替えるスイッチとボタンの仕組みを学びます。',
    summary: `スイッチは回路を「つなぐ」「切る」を切り替える部品です。
押している間だけオンになるのがモーメンタリ、押すたびに切り替わるのがオルタネイトです。
スイッチを入れると回路が閉じて電流が流れ、切ると回路が開いて電流が止まります。`,
    keywords: ['スイッチ', 'ボタン', 'タクトスイッチ', 'モーメンタリ', 'オルタネイト', '入力', '開閉'],
  },
  '17-breadboard': {
    id: '17-breadboard',
    title: 'ブレッドボード',
    description: 'はんだ付け不要で回路を試せるブレッドボードの使い方を学びます。',
    summary: `ブレッドボードは、はんだ付けなしで回路を組める便利な実験台です。
穴に部品の足を差し込むだけで配線でき、何度でもやり直しができます。
横一列の穴は内部でつながっていて、電源ラインは縦につながっています。`,
    keywords: ['ブレッドボード', '配線', '実験', 'プロトタイプ', '穴', '電源ライン', '接続'],
  },
  '18-multimeter': {
    id: '18-multimeter',
    title: 'テスターで測る',
    description: 'テスター（マルチメーター）を使って電圧・電流・抵抗を測る方法を学びます。',
    summary: `テスター（マルチメーター）は電圧・電流・抵抗を測る計測器です。
電圧を測るときは測りたい2点に並列につなぎます。電流は回路を切って直列に入れます。
測る前に正しいレンジ（範囲）を選び、赤い端子がプラス側です。`,
    keywords: ['テスター', 'マルチメーター', '測定', '電圧', '電流', '抵抗', 'レンジ', '計測'],
  },
  '19-reading-parts': {
    id: '19-reading-parts',
    title: '電子部品の読み方',
    description: '電子部品に書かれた文字や色の意味を読み取る方法を学びます。抵抗のカラーコードを理解します。',
    summary: `電子部品には値を示すマーキングがあります。
抵抗は色の帯（カラーコード）で値を表します。茶=1、赤=2、橙=3...と覚えます。
コンデンサやICにも型番や値が印刷されていて、データシートで詳細を調べます。`,
    keywords: ['カラーコード', '抵抗', 'マーキング', '部品', '読み方', '色', 'データシート'],
  },
  '20-capacitor': {
    id: '20-capacitor',
    title: 'コンデンサとは何か',
    description: '電気を一時的に蓄えるコンデンサの仕組みと役割を学びます。',
    summary: `コンデンサは電気を一時的に蓄えて放出する部品です。
電池が「タンク」なら、コンデンサは「バケツ」のようなものです。素早く充放電できます。
ノイズを取り除いたり、電圧を安定させたりするために使います。`,
    keywords: ['コンデンサ', 'キャパシタ', '蓄電', '充電', '放電', 'μF', 'ノイズ', '電解コンデンサ'],
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
