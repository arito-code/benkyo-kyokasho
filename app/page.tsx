import Link from 'next/link'
import Header from '@/components/Header'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1>勉強教科書へようこそ</h1>
        <p>
          このサイトは、理系の基礎を日本語で学ぶための教科書です。
          各単元では「今日の問い」から始まり、概念を理解し、実践的な応用まで進みます。
        </p>

        <section style={{ marginTop: 'var(--spacing-xl)' }}>
          <h2>学習コース</h2>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              marginTop: 'var(--spacing-md)',
            }}
          >
            <Link
              href="/electronics"
              style={{
                display: 'block',
                padding: 'var(--spacing-md)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            >
              <strong>電子工作</strong>
              <p style={{ marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                LEDを光らせることから始めて、電気回路の基礎を学びます。
              </p>
            </Link>
            <Link
              href="/raspi"
              style={{
                display: 'block',
                padding: 'var(--spacing-md)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            >
              <strong>ラズパイ</strong>
              <p style={{ marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                Raspberry Piを使ったプログラミングとハードウェア制御を学びます。
              </p>
            </Link>
            <Link
              href="/robot"
              style={{
                display: 'block',
                padding: 'var(--spacing-md)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            >
              <strong>ロボット</strong>
              <p style={{ marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                ロボット工学の基礎と自動化について学びます。
              </p>
            </Link>
            <Link
              href="/space"
              style={{
                display: 'block',
                padding: 'var(--spacing-md)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
              }}
            >
              <strong>宇宙</strong>
              <p style={{ marginBottom: 0, color: 'var(--color-text-secondary)' }}>
                宇宙科学と天文学の基礎を学びます。
              </p>
            </Link>
          </nav>
        </section>

        <section style={{ marginTop: 'var(--spacing-xl)' }}>
          <h2>質問がありますか?</h2>
          <p>
            <Link href="/ask">質問ページ</Link>で、学習内容について質問できます。
          </p>
        </section>
      </main>
    </>
  )
}
