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
      { number: 21, title: 'ダイオードとは何か', slug: '21-diode', ready: true },
      { number: 22, title: 'トランジスタとは何か', slug: '22-transistor', ready: true },
      { number: 23, title: 'リレーとは何か', slug: '23-relay', ready: true },
      { number: 24, title: 'MOSFETとは何か', slug: '24-mosfet', ready: true },
      { number: 25, title: 'アナログとデジタル', slug: '25-analog-digital', ready: true },
      { number: 26, title: 'ADCとは何か', slug: '26-adc', ready: true },
      { number: 27, title: 'PWMとは何か', slug: '27-pwm', ready: true },
      { number: 28, title: 'プルアップとプルダウン', slug: '28-pull-up-down', ready: true },
      { number: 29, title: 'デバウンス', slug: '29-debounce', ready: true },
      { number: 30, title: '入出力を組み合わせる', slug: '30-combine-io', ready: true },
    ],
  },
  {
    id: 4,
    title: 'センサーで世界を測る',
    lessons: [
      { number: 31, title: '温度センサー', slug: '31-temp-sensor', ready: true },
      { number: 32, title: '光センサー', slug: '32-light-sensor', ready: true },
      { number: 33, title: '距離センサー', slug: '33-distance-sensor', ready: true },
      { number: 34, title: '人感センサー', slug: '34-pir-sensor', ready: true },
      { number: 35, title: '湿度センサー', slug: '35-humidity-sensor', ready: true },
      { number: 36, title: '加速度センサー', slug: '36-accel-sensor', ready: true },
      { number: 37, title: '振動センサー', slug: '37-vibration-sensor', ready: true },
      { number: 38, title: '磁気センサー', slug: '38-magnetic-sensor', ready: true },
      { number: 39, title: '圧力センサー', slug: '39-pressure-sensor', ready: true },
      { number: 40, title: 'センサーの選び方', slug: '40-choosing-sensors', ready: true },
      { number: 41, title: '', slug: '41-sensors-11', ready: false },
      { number: 42, title: '', slug: '42-sensors-12', ready: false },
      { number: 43, title: '', slug: '43-sensors-13', ready: false },
    ],
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
