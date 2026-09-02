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
          技術営業100回講座
        </Link>
        <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
          <Link href="/glossary">用語集</Link>
          <Link href="/ask">質問</Link>
        </div>
      </nav>
    </header>
  )
}
