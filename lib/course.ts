export interface Phase {
  id: number
  title: string
  lessons: LessonInfo[]
}

export interface LessonInfo {
  number: number
  title: string
  slug: string
  ready: boolean
}

export const phases: Phase[] = [
  {
    id: 1,
    title: 'ものづくりの世界を知る',
    lessons: [
      { number: 1, title: '電気とは何か', slug: '01-electricity', ready: true },
      { number: 2, title: '機械とは何か', slug: '02-machine', ready: true },
      { number: 3, title: 'コンピュータとは何か', slug: '03-computer', ready: true },
      { number: 4, title: '入力と出力', slug: '04-io', ready: true },
      { number: 5, title: 'センサーとは何か', slug: '05-sensor-intro', ready: true },
      { number: 6, title: 'プログラムとは何か', slug: '06-program', ready: true },
    ],
  },
  {
    id: 2,
    title: '電気の基本',
    lessons: [
      { number: 7, title: '電圧とは何か', slug: '07-voltage', ready: true },
      { number: 8, title: '電流とは何か', slug: '08-current', ready: true },
      { number: 9, title: '抵抗とは何か', slug: '09-resistance', ready: true },
      { number: 10, title: 'オームの法則', slug: '10-ohms-law', ready: true },
      { number: 11, title: '回路とは何か', slug: '11-circuit', ready: true },
      { number: 12, title: '直列と並列', slug: '12-series-parallel', ready: true },
      { number: 13, title: '電源の種類', slug: '13-power-sources', ready: true },
      { number: 14, title: 'グラウンドとは何か', slug: '14-ground', ready: true },
      { number: 15, title: 'LEDと抵抗', slug: '15-led-resistor', ready: true },
      { number: 16, title: 'スイッチとボタン', slug: '16-switch-button', ready: true },
      { number: 17, title: 'ブレッドボード', slug: '17-breadboard', ready: true },
      { number: 18, title: 'テスターで測る', slug: '18-multimeter', ready: true },
    ],
  },
  {
    id: 3,
    title: '部品と入力・出力',
    lessons: [
      { number: 19, title: '電子部品の読み方', slug: '19-reading-parts', ready: true },
      { number: 20, title: 'コンデンサとは何か', slug: '20-capacitor', ready: true },
      ...Array.from({ length: 10 }, (_, i) => ({
        number: 21 + i,
        title: '',
        slug: `${String(21 + i).padStart(2, '0')}-components-${i + 3}`,
        ready: false,
      })),
    ],
  },
  {
    id: 4,
    title: 'センサーで世界を測る',
    lessons: Array.from({ length: 13 }, (_, i) => ({
      number: 31 + i,
      title: '',
      slug: `${String(31 + i).padStart(2, '0')}-sensors-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 5,
    title: 'M5Stack・小さなコンピュータ',
    lessons: Array.from({ length: 11 }, (_, i) => ({
      number: 44 + i,
      title: '',
      slug: `${String(44 + i).padStart(2, '0')}-m5stack-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 6,
    title: '通信・IoT',
    lessons: Array.from({ length: 12 }, (_, i) => ({
      number: 55 + i,
      title: '',
      slug: `${String(55 + i).padStart(2, '0')}-iot-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 7,
    title: 'Raspberry Piとカメラ',
    lessons: Array.from({ length: 11 }, (_, i) => ({
      number: 67 + i,
      title: '',
      slug: `${String(67 + i).padStart(2, '0')}-raspi-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 8,
    title: 'AI・画像認識',
    lessons: Array.from({ length: 7 }, (_, i) => ({
      number: 78 + i,
      title: '',
      slug: `${String(78 + i).padStart(2, '0')}-ai-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 9,
    title: 'ロボット・科学・宇宙',
    lessons: Array.from({ length: 7 }, (_, i) => ({
      number: 85 + i,
      title: '',
      slug: `${String(85 + i).padStart(2, '0')}-robot-space-${i + 1}`,
      ready: false,
    })),
  },
  {
    id: 10,
    title: '技術を組み合わせる',
    lessons: [
      { number: 92, title: '工場の温度監視', slug: '92-factory-temp', ready: false },
      { number: 93, title: '振動センサー', slug: '93-vibration', ready: false },
      { number: 94, title: '人感通知システム', slug: '94-people-notify', ready: false },
      { number: 95, title: 'カメラで欠陥検出', slug: '95-camera-defects', ready: false },
      { number: 96, title: '農業IoT', slug: '96-agriculture', ready: false },
    ],
  },
  {
    id: 11,
    title: '技術営業・卒業',
    lessons: Array.from({ length: 4 }, (_, i) => ({
      number: 97 + i,
      title: '',
      slug: `${String(97 + i).padStart(2, '0')}-graduation-${i + 1}`,
      ready: false,
    })),
  },
]

export function getLessonByNumber(num: number): LessonInfo | undefined {
  for (const phase of phases) {
    const lesson = phase.lessons.find((l) => l.number === num)
    if (lesson) return lesson
  }
  return undefined
}

export function getPhaseByLessonNumber(num: number): Phase | undefined {
  for (const phase of phases) {
    if (phase.lessons.some((l) => l.number === num)) {
      return phase
    }
  }
  return undefined
}

export function getAllReadyLessons(): LessonInfo[] {
  return phases.flatMap((p) => p.lessons.filter((l) => l.ready))
}
