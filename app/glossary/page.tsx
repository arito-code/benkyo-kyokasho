import Link from 'next/link'
import Header from '@/components/Header'
import { getAllGlossaryTerms } from '@/lib/glossary'

export default function GlossaryPage() {
  const terms = getAllGlossaryTerms()

  return (
    <>
      <Header />
      <main>
        <h1>用語集</h1>
        <p>
          この講座で使う技術用語をまとめています。
          わからない言葉があれば、ここで確認できます。
        </p>

        <div className="glossary-grid">
          {terms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="glossary-card"
            >
              <h2 className="glossary-term">{term.term}</h2>
              {term.reading && (
                <span className="glossary-reading">{term.reading}</span>
              )}
              <p className="glossary-oneliner">{term.oneLiner}</p>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 'var(--spacing-xl)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
