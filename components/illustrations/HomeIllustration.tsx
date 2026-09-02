export default function HomeIllustration() {
  return (
    <svg
      viewBox="0 0 680 120"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="測る・判断する・動かす・送る・組み合わせる"
    >
      {/* Background notebook lines */}
      <line x1="0" y1="40" x2="680" y2="40" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="80" x2="680" y2="80" stroke="#e0e0e0" strokeWidth="1" />

      {/* 測る - Sensor/Thermometer */}
      <g transform="translate(40, 30)">
        <rect x="10" y="10" width="8" height="50" rx="4" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="14" cy="55" r="8" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <rect x="12" y="25" width="4" height="25" fill="#3b6ea5" />
        <text x="14" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">測る</text>
      </g>

      {/* 判断する - Brain/Decision */}
      <g transform="translate(160, 30)">
        <circle cx="20" cy="30" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <path d="M12 25 Q20 35 28 25" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
        <path d="M12 35 Q20 25 28 35" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
        <text x="20" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">判断する</text>
      </g>

      {/* 動かす - Motor/Gear */}
      <g transform="translate(290, 30)">
        <circle cx="20" cy="30" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="20" cy="30" r="5" fill="#3b6ea5" />
        <line x1="20" y1="15" x2="20" y2="8" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="32" y1="22" x2="38" y2="18" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="32" y1="38" x2="38" y2="42" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="20" y1="45" x2="20" y2="52" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="8" y1="38" x2="2" y2="42" stroke="#3b6ea5" strokeWidth="3" />
        <line x1="8" y1="22" x2="2" y2="18" stroke="#3b6ea5" strokeWidth="3" />
        <text x="20" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">動かす</text>
      </g>

      {/* 送る - Signal/Wave */}
      <g transform="translate(420, 30)">
        <rect x="5" y="20" width="12" height="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <line x1="11" y1="10" x2="11" y2="20" stroke="#3b6ea5" strokeWidth="2" />
        <path d="M22 30 Q28 20 34 30 Q40 40 46 30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <text x="25" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">送る</text>
      </g>

      {/* 組み合わせる - Puzzle/Connect */}
      <g transform="translate(540, 30)">
        <rect x="5" y="15" width="20" height="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <rect x="25" y="25" width="20" height="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        <circle cx="25" cy="25" r="5" fill="#3b6ea5" />
        <text x="25" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">組み合わせる</text>
      </g>
    </svg>
  )
}
