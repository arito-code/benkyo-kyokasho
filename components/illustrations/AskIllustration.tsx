export default function AskIllustration() {
  return (
    <svg
      viewBox="0 0 680 80"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="質問する"
    >
      {/* Background notebook lines */}
      <line x1="0" y1="30" x2="680" y2="30" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="60" x2="680" y2="60" stroke="#e0e0e0" strokeWidth="1" />

      {/* Question mark and speech bubble */}
      <g transform="translate(290, 10)">
        {/* Speech bubble */}
        <path
          d="M10 5 L90 5 Q100 5 100 15 L100 40 Q100 50 90 50 L60 50 L50 60 L50 50 L10 50 Q0 50 0 40 L0 15 Q0 5 10 5"
          fill="none"
          stroke="#3b6ea5"
          strokeWidth="2"
        />
        {/* Question mark */}
        <text x="50" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="24" fontWeight="600">?</text>
      </g>
    </svg>
  )
}
