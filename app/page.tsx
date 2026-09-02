import Link from 'next/link'
import Header from '@/components/Header'
import CourseRoadmap from '@/components/CourseRoadmap'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h1>技術営業のための100回講座</h1>
          <p style={{ fontSize: '1.125rem', lineHeight: 1.9 }}>
            現場の言葉を技術へ翻訳できる人になる。
          </p>
        </section>

        <section className="goal-box">
          <h2>最終ゴール</h2>
          <p>
            この講座を終えると、以下の5つの力が身につきます。
          </p>
          <ul className="goal-list">
            <li><strong>測る</strong> — センサーで世界のデータを取得する</li>
            <li><strong>判断する</strong> — プログラムとAIで状況を分析する</li>
            <li><strong>動かす</strong> — モーターやリレーで物理世界を制御する</li>
            <li><strong>送る</strong> — 通信でデータをクラウドや他の機器に届ける</li>
            <li><strong>組み合わせる</strong> — 技術を統合してソリューションを作る</li>
          </ul>
        </section>

        <section style={{ marginTop: 'var(--spacing-xl)' }}>
          <h2>学習ロードマップ</h2>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            全11フェーズ、100回の授業で技術営業に必要な知識を身につけます。
          </p>
          <CourseRoadmap />
        </section>

        <section style={{ marginTop: 'var(--spacing-xl)' }}>
          <h2>その他</h2>
          <nav style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
            <Link href="/glossary">用語集</Link>
            <Link href="/ask">質問する</Link>
          </nav>
        </section>
      </main>
    </>
  )
}
