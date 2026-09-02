'use client'

import { useState } from 'react'

export default function AskBox() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!question.trim()) return

    setIsLoading(true)
    setError('')
    setAnswer('')

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })

      const data = await res.json()

      if (res.ok) {
        setAnswer(data.answer)
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
    <div style={{ marginTop: 'var(--spacing-lg)' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="質問を入力してください..."
            rows={4}
            disabled={isLoading}
            style={{ resize: 'vertical' }}
          />
        </div>
        <button
          type="submit"
          className="primary"
          disabled={isLoading || !question.trim()}
        >
          {isLoading ? '送信中...' : '質問する'}
        </button>
      </form>

      {error && (
        <div
          style={{
            marginTop: 'var(--spacing-md)',
            padding: 'var(--spacing-sm)',
            backgroundColor: '#fee',
            borderRadius: '4px',
            color: '#c53030',
          }}
        >
          {error}
        </div>
      )}

      {answer && (
        <div
          style={{
            marginTop: 'var(--spacing-md)',
            padding: 'var(--spacing-md)',
            backgroundColor: 'var(--color-surface)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--color-accent)',
          }}
        >
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>回答</h3>
          <p style={{ marginBottom: 0, whiteSpace: 'pre-wrap' }}>{answer}</p>
        </div>
      )}
    </div>
  )
}
