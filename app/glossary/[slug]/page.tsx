import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import { getGlossaryTerm, getAllGlossaryTerms } from '@/lib/glossary'
import { getLessonByNumber } from '@/lib/course'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const terms = getAllGlossaryTerms()
  return terms.map((term) => ({ slug: term.slug }))
}

export default async function GlossaryTermPage({ params }: Props) {
  const { slug } = await params
  const term = getGlossaryTerm(slug)

  if (!term) {
    notFound()
  }

  const relatedTerms = term.relatedTerms
    .map((t) => getAllGlossaryTerms().find((g) => g.term === t))
    .filter(Boolean)

  const lessons = term.lessonNumbers
    .map((num) => getLessonByNumber(num))
    .filter(Boolean)

  return (
    <>
      <Header />
      <main>
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/glossary">← 用語集に戻る</Link>
        </div>

        <h1>
          {term.term}
          {term.reading && (
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                marginLeft: 'var(--spacing-sm)',
                color: 'var(--color-text-secondary)',
              }}
            >
              ({term.reading})
            </span>
          )}
        </h1>

        <section className="term-section">
          <h2>ひとことで言うと</h2>
          <p className="term-oneliner">{term.oneLiner}</p>
        </section>

        <section className="term-section">
          <h2>やさしい説明</h2>
          <p>{term.explanation}</p>
        </section>

        <section className="term-section">
          <h2>例えば</h2>
          <p>{term.example}</p>
        </section>

        <section className="term-section">
          <h2>何に使う?</h2>
          <p>{term.useCase}</p>
        </section>

        {relatedTerms.length > 0 && (
          <section className="term-section">
            <h2>関連する言葉</h2>
            <div style={{ display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
              {relatedTerms.map((related) => (
                <Link
                  key={related!.slug}
                  href={`/glossary/${related!.slug}`}
                  className="related-term-link"
                >
                  {related!.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {lessons.length > 0 && (
          <section className="term-section">
            <h2>この言葉が登場する授業</h2>
            <ul className="lesson-links">
              {lessons.map((lesson) => (
                <li key={lesson!.number}>
                  {lesson!.ready ? (
                    <Link href={`/lessons/${lesson!.slug}`}>
                      第{lesson!.number}回 {lesson!.title}
                    </Link>
                  ) : (
                    <span style={{ color: 'var(--color-text-secondary)' }}>
                      第{lesson!.number}回 {lesson!.title || '(準備中)'}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </>
  )
}
