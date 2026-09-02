'use client'

import { useState } from 'react'

interface PracticeToggleProps {
  children: React.ReactNode
}

export default function PracticeToggle({ children }: PracticeToggleProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <details
      className="practice-section"
      open={isOpen}
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary>【実践したい人はココ↓】</summary>
      {children}
    </details>
  )
}
