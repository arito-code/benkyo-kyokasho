'use client'

import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'エラーが発生しました。')
        return
      }

      window.location.assign(data.redirect || '/')
    } catch {
      setError('ネットワークエラーが発生しました。')
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
        {isLoading ? '確認中...' : '入る'}
      </button>
      {error && (
        <p
          style={{
            marginTop: 'var(--spacing-sm)',
            color: '#c53030',
          }}
        >
          {error}
        </p>
      )}
    </form>
  )
}
