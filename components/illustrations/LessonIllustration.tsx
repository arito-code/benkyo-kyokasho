interface LessonIllustrationProps {
  lessonNumber: number
  ready?: boolean
}

export default function LessonIllustration({ lessonNumber, ready = true }: LessonIllustrationProps) {
  if (!ready) {
    return <SoonIllustration />
  }

  if (lessonNumber === 1) {
    return <Lesson1Illustration />
  }

  return <SoonIllustration />
}

function Lesson1Illustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="電気とは何か - 電池と押し"
    >
      {/* Background notebook lines */}
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Battery */}
      <g transform="translate(250, 15)">
        {/* Battery body */}
        <rect x="0" y="10" width="60" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        {/* Battery terminal */}
        <rect x="60" y="22" width="8" height="16" fill="#3b6ea5" />
        
        {/* + symbol */}
        <line x1="15" y1="30" x2="25" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="20" y1="25" x2="20" y2="35" stroke="#3b6ea5" strokeWidth="2" />
        
        {/* - symbol */}
        <line x1="40" y1="30" x2="50" y2="30" stroke="#3b6ea5" strokeWidth="2" />
        
        {/* Labels */}
        <text x="20" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10">＋</text>
        <text x="45" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10">−</text>
      </g>

      {/* Arrow showing "push" */}
      <g transform="translate(340, 15)">
        <path d="M0 30 L40 30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <polygon points="40,25 50,30 40,35" fill="#3b6ea5" />
        <text x="25" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">押し</text>
      </g>

      {/* Voltage indicator */}
      <g transform="translate(410, 15)">
        <text x="0" y="35" fill="#3b6ea5" fontSize="14" fontWeight="600">V</text>
        <text x="20" y="35" fill="#4a4a4a" fontSize="11">電圧</text>
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
      {/* Background notebook lines */}
      <line x1="0" y1="30" x2="680" y2="30" stroke="#e0e0e0" strokeWidth="1" />

      {/* Simple placeholder mark */}
      <g transform="translate(310, 10)">
        <rect x="0" y="5" width="60" height="30" rx="4" fill="none" stroke="#e0e0e0" strokeWidth="2" />
        <text x="30" y="25" textAnchor="middle" fill="#e0e0e0" fontSize="10">準備中</text>
      </g>
    </svg>
  )
}
