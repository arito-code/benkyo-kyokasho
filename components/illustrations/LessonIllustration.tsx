interface LessonIllustrationProps {
  lessonNumber: number
  ready?: boolean
}

export default function LessonIllustration({ lessonNumber, ready = true }: LessonIllustrationProps) {
  if (!ready) {
    return <SoonIllustration />
  }

  switch (lessonNumber) {
    case 1:
      return <Lesson1Illustration />
    case 2:
      return <Lesson2Illustration />
    case 3:
      return <Lesson3Illustration />
    case 4:
      return <Lesson4Illustration />
    case 5:
      return <Lesson5Illustration />
    case 6:
      return <Lesson6Illustration />
    case 7:
      return <Lesson7Illustration />
    case 8:
      return <Lesson8Illustration />
    case 9:
      return <Lesson9Illustration />
    case 10:
      return <Lesson10Illustration />
    default:
      return <SoonIllustration />
  }
}

function Lesson1Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="電気とは何か - 電池と押し"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      <g transform="translate(250, 15)">
        <rect x="0" y="10" width="60" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <rect x="60" y="22" width="8" height="16" fill="#3b6ea5" />
        <line x1="15" y1="30" x2="25" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="20" y1="25" x2="20" y2="35" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="40" y1="30" x2="50" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <text x="20" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10">＋</text>
        <text x="45" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10">−</text>
      </g>

      <g transform="translate(340, 15)">
        <path d="M0 30 L40 30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="40,25 50,30 40,35" fill="#3b6ea5" />
        <text x="25" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">押し</text>
      </g>

      <g transform="translate(410, 15)">
        <text x="0" y="35" fill="#3b6ea5" fontSize="14" fontWeight="600">V</text>
        <text x="20" y="35" fill="#4a4a4a" fontSize="11">電圧</text>
      </g>
    </svg>
  )
}

function Lesson2Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="機械とは何か - ギアとモーター"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Gear 1 */}
      <g transform="translate(250, 20)">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="25" cy="25" r="6" fill="#3b6ea5" />
        <line x1="25" y1="5" x2="25" y2="0" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="39" y1="11" x2="43" y2="7" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="45" y1="25" x2="50" y2="25" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="39" y1="39" x2="43" y2="43" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="25" y1="45" x2="25" y2="50" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="11" y1="39" x2="7" y2="43" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="5" y1="25" x2="0" y2="25" stroke="#3b6ea5" strokeWidth="4" />
        <line x1="11" y1="11" x2="7" y2="7" stroke="#3b6ea5" strokeWidth="4" />
      </g>

      {/* Arrow */}
      <g transform="translate(310, 35)">
        <path d="M0 10 L30 10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="30,5 40,10 30,15" fill="#3b6ea5" />
      </g>

      {/* Gear 2 (smaller) */}
      <g transform="translate(360, 25)">
        <circle cx="20" cy="20" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" fill="#3b6ea5" />
        <line x1="20" y1="5" x2="20" y2="0" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="31" y1="9" x2="34" y2="6" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="35" y1="20" x2="40" y2="20" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="31" y1="31" x2="34" y2="34" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="20" y1="35" x2="20" y2="40" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="9" y1="31" x2="6" y2="34" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="5" y1="20" x2="0" y2="20" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="9" y1="9" x2="6" y2="6" stroke="#3b6ea5" strokeWidth="3" />
      </g>

      <text x="320" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">力を伝える</text>
    </svg>
  )
}

function Lesson3Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="コンピュータとは何か - 計算と判断"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Computer/Chip */}
      <g transform="translate(260, 15)">
        <rect x="20" y="10" width="40" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        {/* Pins */}
        <line x1="30" y1="10" x2="30" y2="3" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="40" y1="10" x2="40" y2="3" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="50" y1="10" x2="50" y2="3" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="30" y1="50" x2="30" y2="57" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="40" y1="50" x2="40" y2="57" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="50" y1="50" x2="50" y2="57" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="20" y1="20" x2="13" y2="20" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="20" y1="30" x2="13" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="20" y1="40" x2="13" y2="40" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="60" y1="20" x2="67" y2="20" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="60" y1="30" x2="67" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="60" y1="40" x2="67" y2="40" stroke="#3b6ea5" strokeWidth="2" />
        {/* Center dot */}
        <circle cx="40" cy="30" r="4" fill="#3b6ea5" />
      </g>

      {/* Arrow to result */}
      <g transform="translate(350, 30)">
        <path d="M0 15 L25 15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="25,10 35,15 25,20" fill="#3b6ea5" />
      </g>

      {/* Result */}
      <g transform="translate(395, 20)">
        <rect x="0" y="5" width="50" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <text x="25" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">判断</text>
      </g>

      <text x="305" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">計算する</text>
    </svg>
  )
}

function Lesson4Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="入力と出力 - センサーとLED"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Input - Sensor */}
      <g transform="translate(200, 20)">
        <circle cx="20" cy="20" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="20" cy="20" r="8" fill="#3b6ea5" opacity="0.3" />
        <circle cx="20" cy="20" r="3" fill="#3b6ea5" />
        <text x="20" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">入力</text>
      </g>

      {/* Arrow to computer */}
      <g transform="translate(250, 35)">
        <path d="M0 5 L30 5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="30,0 40,5 30,10" fill="#3b6ea5" />
      </g>

      {/* Computer */}
      <g transform="translate(300, 20)">
        <rect x="0" y="5" width="40" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" fill="#3b6ea5" />
        <text x="20" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">処理</text>
      </g>

      {/* Arrow to output */}
      <g transform="translate(350, 35)">
        <path d="M0 5 L30 5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="30,0 40,5 30,10" fill="#3b6ea5" />
      </g>

      {/* Output - LED */}
      <g transform="translate(400, 15)">
        <path d="M10 25 L30 25 L20 5 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="8" y1="30" x2="32" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="12" y1="35" x2="28" y2="35" stroke="#3b6ea5" strokeWidth="2" />
        {/* Light rays */}
        <line x1="5" y1="10" x2="0" y2="5" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="0" x2="20" y2="-5" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
        <line x1="35" y1="10" x2="40" y2="5" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
        <text x="20" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">出力</text>
      </g>
    </svg>
  )
}

function Lesson5Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="センサーとは何か - 物理量を電気信号に"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Physical quantity (waves) */}
      <g transform="translate(220, 20)">
        <circle cx="25" cy="25" r="20" fill="none" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" />
        <text x="25" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="8">温度</text>
        <text x="25" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="8">光</text>
        <text x="25" y="58" textAnchor="middle" fill="#4a4a4a" fontSize="9">物理量</text>
      </g>

      {/* Arrow */}
      <g transform="translate(275, 35)">
        <path d="M0 10 L30 10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="30,5 40,10 30,15" fill="#3b6ea5" />
      </g>

      {/* Sensor */}
      <g transform="translate(325, 15)">
        <rect x="0" y="5" width="50" height="40" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="25" cy="25" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="25" cy="25" r="4" fill="#3b6ea5" />
        <text x="25" y="58" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">センサー</text>
      </g>

      {/* Arrow */}
      <g transform="translate(385, 35)">
        <path d="M0 10 L30 10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="30,5 40,10 30,15" fill="#3b6ea5" />
      </g>

      {/* Electric signal */}
      <g transform="translate(435, 20)">
        <path d="M0 25 L10 15 L20 35 L30 20 L40 25" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <text x="20" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="9">電気信号</text>
      </g>
    </svg>
  )
}

function Lesson6Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="プログラムとは何か - 手順のレシピ"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Recipe/Program list */}
      <g transform="translate(250, 10)">
        <rect x="0" y="0" width="80" height="55" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="10" y1="0" x2="10" y2="55" stroke="#3b6ea5" strokeWidth="1" />
        <text x="48" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">1. 読む</text>
        <text x="48" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="8">2. 判断</text>
        <text x="48" y="46" textAnchor="middle" fill="#3b6ea5" fontSize="8">3. 動く</text>
      </g>

      {/* Arrow */}
      <g transform="translate(340, 30)">
        <path d="M0 10 L25 10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="25,5 35,10 25,15" fill="#3b6ea5" />
      </g>

      {/* If-then diamond */}
      <g transform="translate(385, 15)">
        <polygon points="30,0 55,25 30,50 5,25" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <text x="30" y="22" textAnchor="middle" fill="#3b6ea5" fontSize="8">もし</text>
        <text x="30" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="8">〜なら</text>
        <text x="30" y="68" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">判断</text>
      </g>
    </svg>
  )
}

function Lesson7Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="電圧とは何か - 電気を押す力"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Battery */}
      <g transform="translate(250, 15)">
        <rect x="0" y="10" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <rect x="50" y="20" width="6" height="15" fill="#3b6ea5" />
        <text x="15" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="10">＋</text>
        <text x="40" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="10">−</text>
        <text x="28" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="9">電池</text>
      </g>

      {/* Arrow with "push" */}
      <g transform="translate(320, 25)">
        <path d="M0 20 L50 20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="50,15 60,20 50,25" fill="#3b6ea5" />
        <text x="30" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">押す</text>
      </g>

      {/* V symbol */}
      <g transform="translate(395, 15)">
        <text x="0" y="35" fill="#3b6ea5" fontSize="24" fontWeight="600">V</text>
        <text x="30" y="35" fill="#4a4a4a" fontSize="12">電圧</text>
      </g>
    </svg>
  )
}

function Lesson8Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="電流とは何か - 流れる量"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Pipe with flow arrows */}
      <g transform="translate(230, 15)">
        <rect x="0" y="15" width="100" height="30" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        {/* Flow arrows */}
        <line x1="20" y1="30" x2="40" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="40,25 50,30 40,35" fill="#3b6ea5" />
        <line x1="55" y1="30" x2="75" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="75,25 85,30 75,35" fill="#3b6ea5" />
        <text x="50" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">流れる量</text>
      </g>

      {/* I symbol */}
      <g transform="translate(360, 15)">
        <text x="0" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">I</text>
        <text x="25" y="40" fill="#4a4a4a" fontSize="12">電流</text>
      </g>
    </svg>
  )
}

function Lesson9Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="抵抗とは何か - 流れにくさ"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Resistor symbol */}
      <g transform="translate(230, 25)">
        <line x1="0" y1="25" x2="20" y2="25" stroke="#3b6ea5" strokeWidth="2" />
        <path d="M20 25 L25 15 L35 35 L45 15 L55 35 L65 15 L75 35 L80 25" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="80" y1="25" x2="100" y2="25" stroke="#3b6ea5" strokeWidth="2" />
        <text x="50" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">流れにくさ</text>
      </g>

      {/* R symbol with Ω */}
      <g transform="translate(360, 15)">
        <text x="0" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">R</text>
        <text x="25" y="40" fill="#4a4a4a" fontSize="12">抵抗</text>
        <text x="60" y="40" fill="#3b6ea5" fontSize="16">Ω</text>
      </g>
    </svg>
  )
}

function Lesson10Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="オームの法則 - V=IR"
    >
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* V = I × R formula */}
      <g transform="translate(250, 15)">
        <text x="0" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">V</text>
        <text x="30" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">=</text>
        <text x="60" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">I</text>
        <text x="85" y="40" fill="#3b6ea5" fontSize="20">×</text>
        <text x="110" y="40" fill="#3b6ea5" fontSize="24" fontWeight="600">R</text>
      </g>

      {/* Label */}
      <g transform="translate(390, 25)">
        <text x="0" y="25" fill="#4a4a4a" fontSize="12">オームの法則</text>
      </g>
    </svg>
  )
}

function SoonIllustration() {
  return (
    <svg
      viewBox="0 0 680 60"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="準備中"
    >
      <line x1="0" y1="30" x2="680" y2="30" stroke="#e0e0e0" strokeWidth="1" />

      <g transform="translate(310, 10)">
        <rect x="0" y="5" width="60" height="30" rx="4" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <text x="30" y="25" textAnchor="middle" fill="#e0e0e0" fontSize="10">準備中</text>
      </g>
    </svg>
  )
}
