'use client'

import { useState } from 'react'

interface AskBoxProps {
  lessonId?: string
  compact?: boolean
}

export default function AskBox({ lessonId, compact = false }: AskBoxProps) {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [source, setSource] = useState<'model' | 'lesson' | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)
    setError('')
    setAnswer('')
    setSource(null)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, lessonId }),
      })

      const data = await res.json()

      if (res.ok) {
        setAnswer(data.answer)
        setSource(data.source)
      } else {
        setError(data.error || 'エラーが発生しました。')
      }
    } catch {
      setError('ネットワークエラーが発生しました。')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={`ask-box ${compact ? 'ask-box-compact' : ''}`}>
      <div className="ask-box-header">
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="#3b6ea5"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9 9a3 3 0 1 1 4 2.83V14" />
          <circle cx="12" cy="18" r="0.5" fill="#3b6ea5" />
        </svg>
        <span>質問する</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={lessonId ? 'この授業について質問...' : '学習内容について質問...'}
            rows={compact ? 2 : 3}
            disabled={isLoading}
            className="ask-textarea"
          />
        </div>
        <button
          type="submit"
          className="primary ask-button"
          disabled={isLoading || !question.trim()}
        >
          {isLoading ? '考え中...' : '聞く'}
        </button>
      </form>

      {error && (
        <div className="ask-error">
          {error}
        </div>
      )}

      {answer && (
        <div className="ask-answer">
          <div className="ask-answer-header">
            <span>回答</span>
            {source && (
              <span className="ask-source">
                {source === 'model' ? 'AIによる回答' : '教材から抜粋'}
              </span>
            )}
          </div>
          <p style={{ marginBottom: 0, whiteSpace: 'pre-wrap' }}>{answer}</p>
        </div>
      )}
    </div>
  )
}
