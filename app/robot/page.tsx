import Header from '@/components/Header'
import Link from 'next/link'

export default function RobotPage() {
  return (
    <>
      <Header />
      <main>
        <h1>ロボット</h1>
        <p>
          ロボット工学の基礎と自動化について学びます。
        </p>

        <div
          style={{
            backgroundColor: 'var(--color-surface)',
            padding: 'var(--spacing-lg)',
            borderRadius: '8px',
            marginTop: 'var(--spacing-lg)',
            textAlign: 'center',
          }}
        >
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 0 }}>
            このコースは準備中です。
          </p>
        </div>

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
