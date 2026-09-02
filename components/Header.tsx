import Link from 'next/link'

export default function Header() {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--color-border)',
        padding: 'var(--spacing-sm) var(--spacing-lg)',
      }}
    >
      <nav
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 600,
            fontSize: '1.125rem',
            color: 'var(--color-text)',
          }}
        >
          勉強教科書
        </Link>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          <Link href="/electronics">電子工作</Link>
          <Link href="/raspi">ラズパイ</Link>
          <Link href="/robot">ロボット</Link>
          <Link href="/space">宇宙</Link>
          <Link href="/ask">質問</Link>
        </div>
      </nav>
    </header>
  )
}
