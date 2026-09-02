'use client'

import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    try {
      const res = await fetch('/api/auth/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('認証リンクをメールで送信しました。メールをご確認ください。')
      } else {
        setMessage(data.error || 'エラーが発生しました。')
      }
    } catch {
      setMessage('ネットワークエラーが発生しました。')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 'var(--spacing-sm)' }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="メールアドレス"
          required
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className="primary"
        disabled={isLoading}
        style={{ width: '100%' }}
      >
        {isLoading ? '送信中...' : 'ログインリンクを送信'}
      </button>
      {message && (
        <p
          style={{
            marginTop: 'var(--spacing-sm)',
            color: message.includes('エラー')
              ? '#c53030'
              : 'var(--color-accent)',
          }}
        >
          {message}
        </p>
      )}
    </form>
  )
}
