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
      { number: 41, title: 'センサーのノイズ', slug: '41-sensor-noise', ready: true },
      { number: 42, title: 'センサーの校正', slug: '42-sensor-calibration', ready: true },
      { number: 43, title: 'センサーの組み合わせ', slug: '43-sensor-fusion', ready: true },
    ],
  },
  {
    id: 5,
    title: 'M5Stack・小さなコンピュータ',
    lessons: [
      { number: 44, title: 'M5Stackとは何か', slug: '44-m5stack-intro', ready: true },
      { number: 45, title: 'M5Stackの画面表示', slug: '45-m5stack-display', ready: true },
      { number: 46, title: 'M5Stackのボタン', slug: '46-m5stack-buttons', ready: true },
      { number: 47, title: 'Groveコネクタ', slug: '47-grove-connector', ready: true },
      { number: 48, title: 'I2C通信の基本', slug: '48-i2c-basics', ready: true },
      { number: 49, title: 'M5StackのWi-Fi', slug: '49-m5stack-wifi', ready: true },
      { number: 50, title: '簡易ダッシュボード', slug: '50-simple-dashboard', ready: true },
      { number: 51, title: 'M5Stackの電源管理', slug: '51-m5stack-power', ready: true },
      { number: 52, title: 'M5Stackのライブラリ', slug: '52-m5stack-libraries', ready: true },
      { number: 53, title: 'M5Stackで最初のプロジェクト', slug: '53-m5stack-first-project', ready: true },
      { number: 54, title: 'M5Stackのトラブル対処', slug: '54-m5stack-troubleshoot', ready: true },
    ],
  },
  {
    id: 6,
    title: '通信・IoT',
    lessons: [
      { number: 55, title: 'シリアル通信とは何か', slug: '55-serial-communication', ready: true },
      { number: 56, title: 'UART・I2C・SPIの違い', slug: '56-uart-i2c-spi', ready: true },
      { number: 57, title: 'Wi-Fi接続の仕組み', slug: '57-wifi-connection', ready: true },
      { number: 58, title: 'HTTPリクエスト', slug: '58-http-request', ready: true },
      { number: 59, title: 'MQTTプロトコル', slug: '59-mqtt-protocol', ready: true },
      { number: 60, title: 'REST APIの基本', slug: '60-rest-api', ready: true },
      { number: 61, title: 'クラウドサービス入門', slug: '61-cloud-basics', ready: true },
      { number: 62, title: 'JSONデータ形式', slug: '62-json-format', ready: true },
      { number: 63, title: 'IoTセキュリティの基本', slug: '63-iot-security', ready: true },
      { number: 64, title: 'ゲートウェイとは何か', slug: '64-gateway', ready: true },
      { number: 65, title: '通信プロトコルの選び方', slug: '65-protocol-choice', ready: true },
      { number: 66, title: 'IoTまとめと次へ', slug: '66-iot-wrap', ready: true },
    ],
  },
  {
    id: 7,
    title: 'Raspberry Piとカメラ',
    lessons: [
      { number: 67, title: 'Raspberry Piとは何か', slug: '67-raspi-intro', ready: true },
      { number: 68, title: 'OSのインストールとSSH', slug: '68-raspi-os-ssh', ready: true },
      { number: 69, title: 'Raspberry PiのGPIO', slug: '69-raspi-gpio', ready: true },
      { number: 70, title: 'カメラモジュール', slug: '70-camera-module', ready: true },
      { number: 71, title: '画像を撮影する', slug: '71-capture-image', ready: true },
      { number: 72, title: '映像をストリーミング', slug: '72-video-streaming', ready: true },
      { number: 73, title: 'OpenCV入門', slug: '73-opencv-intro', ready: true },
      { number: 74, title: '画像の保存と転送', slug: '74-image-storage', ready: true },
      { number: 75, title: 'Raspberry Piの電源', slug: '75-raspi-power', ready: true },
      { number: 76, title: 'Raspberry PiとM5Stackの使い分け', slug: '76-raspi-vs-m5', ready: true },
      { number: 77, title: 'Raspberry Piまとめ', slug: '77-raspi-wrap', ready: true },
    ],
  },
  {
    id: 8,
    title: 'AI・画像認識',
    lessons: [
      { number: 78, title: 'AIと画像認識', slug: '78-ai-vision-intro', ready: true },
      { number: 79, title: '分類と検出の違い', slug: '79-classification-detection', ready: true },
      { number: 80, title: '画像モデルの直感', slug: '80-image-model-intuition', ready: true },
      { number: 81, title: '', slug: '81-ai-4', ready: false },
      { number: 82, title: '', slug: '82-ai-5', ready: false },
      { number: 83, title: '', slug: '83-ai-6', ready: false },
      { number: 84, title: '', slug: '84-ai-7', ready: false },
    ],
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
