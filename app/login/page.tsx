import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 'var(--spacing-lg)',
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>勉強教科書</h1>
        <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--color-text-secondary)' }}>
          ログインして学習を始めましょう。
        </p>
        <LoginForm />
      </div>
    </main>
  )
}
