import Link from 'next/link'
import Header from '@/components/Header'
import AskIllustration from '@/components/illustrations/AskIllustration'
import AskBox from '@/components/AskBox'

export default function AskPage() {
  return (
    <>
      <Header />
      <main>
        <AskIllustration />

        <h1>質問する</h1>
        <p>
          学習内容についてわからないことがあれば、下のフォームから質問できます。
          回答は第1回の本文を根拠にしています。
        </p>

        <AskBox />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
