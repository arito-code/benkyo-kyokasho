'use client'

import { useEffect, useRef } from 'react'
import katex from 'katex'

interface FormulaProps {
  expression: string
  displayMode?: boolean
}

export default function Formula({ expression, displayMode = true }: FormulaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      katex.render(expression, containerRef.current, {
        throwOnError: false,
        displayMode,
      })
    }
  }, [expression, displayMode])

  return (
    <div
      ref={containerRef}
      className={displayMode ? 'katex-display' : undefined}
      style={
        displayMode
          ? {
              textAlign: 'center',
              padding: 'var(--spacing-sm) 0',
            }
          : undefined
      }
    />
  )
}
