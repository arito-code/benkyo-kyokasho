export default function GlossaryIllustration() {
  return (
    <svg
      viewBox="0 0 680 100"
      xmlns="http://www.w3.org/2000/svg"
      className="page-illustration"
      aria-label="用語集"
    >
      {/* Background notebook lines */}
      <line x1="0" y1="35" x2="680" y2="35" stroke="#e0e0e0" strokeWidth="1" />
      <line x1="0" y1="70" x2="680" y2="70" stroke="#e0e0e0" strokeWidth="1" />

      {/* Open book / notebook */}
      <g transform="translate(280, 15)">
        {/* Left page */}
        <path d="M60 5 L10 10 L10 60 L60 55 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        {/* Right page */}
        <path d="M60 5 L110 10 L110 60 L60 55 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
        {/* Spine */}
        <line x1="60" y1="5" x2="60" y2="55" stroke="#3b6ea5" strokeWidth="2" />
        
        {/* Text lines on left page */}
        <line x1="18" y1="20" x2="52" y2="18" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="30" x2="52" y2="28" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
        <line x1="18" y1="40" x2="52" y2="38" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
        
        {/* Text lines on right page */}
        <line x1="68" y1="18" x2="102" y2="20" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
        <line x1="68" y1="28" x2="102" y2="30" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
        <line x1="68" y1="38" x2="102" y2="40" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />

        {/* ABC letters floating */}
        <text x="25" y="25" fill="#3b6ea5" fontSize="10" fontWeight="600">あ</text>
        <text x="80" y="35" fill="#3b6ea5" fontSize="10" fontWeight="600">A</text>
      </g>
    </svg>
  )
}
