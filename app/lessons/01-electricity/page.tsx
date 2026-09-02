import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import Formula from '@/components/Formula'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson01Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={1} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電気はどうやって流れるのでしょうか?</p>
        </div>

        <h1>第1回: 電気とは何か</h1>

        <section>
          <h2>電圧・電流・抵抗</h2>
          <p>
            電気を理解するために、まず3つの基本的な概念を学びます。
            これらは水の流れにたとえると理解しやすくなります。
          </p>

          <div className="analogy">
            <span className="analogy-term">
              <Link href="/glossary/voltage" className="glossary-link">電圧</Link>
            </span>
            <span className="analogy-equals">=</span>
            <span>押し（水を押す力のようなもの）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">
              <Link href="/glossary/current" className="glossary-link">電流</Link>
            </span>
            <span className="analogy-equals">=</span>
            <span>流れる量（水の量のようなもの）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">
              <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>
            </span>
            <span className="analogy-equals">=</span>
            <span>流れにくさ（パイプの細さのようなもの）</span>
          </div>

          <p style={{ marginTop: 'var(--spacing-md)' }}>
            電圧は「押し」です。電池の＋側と−側で電圧の高さが違い、
            ＋側の方が高くなっています。この押しによって電流が流れます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="80" width="80" height="40" fill="none" stroke="#3b6ea5" strokeWidth="2"/>
            <line x1="90" y1="70" x2="90" y2="80" stroke="#3b6ea5" strokeWidth="2"/>
            <text x="90" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="14">＋</text>
            <line x1="90" y1="120" x2="90" y2="130" stroke="#3b6ea5" strokeWidth="2"/>
            <text x="90" y="145" textAnchor="middle" fill="#3b6ea5" fontSize="14">−</text>
            <text x="90" y="105" textAnchor="middle" fill="#1a1a1a" fontSize="12">電池</text>
            
            <line x1="130" y1="100" x2="200" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
            <polygon points="195,95 205,100 195,105" fill="#3b6ea5"/>
            
            <text x="165" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="12">電流の向き</text>
            
            <rect x="220" y="80" width="60" height="40" fill="none" stroke="#3b6ea5" strokeWidth="2"/>
            <text x="250" y="105" textAnchor="middle" fill="#1a1a1a" fontSize="12">抵抗</text>
            
            <line x1="280" y1="100" x2="350" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
            
            <text x="200" y="180" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 電池から電流が流れる様子</text>
          </svg>
          <figcaption>電池の＋側から電流が流れ出し、抵抗を通って−側に戻ります。</figcaption>
        </figure>

        <section>
          <h2>オームの法則</h2>
          <p>
            電圧、電流、抵抗の関係は「オームの法則」で表されます。
          </p>
          <Formula expression="V = I \times R" />
          <p>
            ここで、Vは電圧（ボルト）、Iは電流（アンペア）、Rは抵抗（オーム）です。
            この式から、電圧が高いほど電流が多く流れ、抵抗が大きいほど電流が少なくなることがわかります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="100" r="60" fill="none" stroke="#3b6ea5" strokeWidth="2"/>
            
            <line x1="200" y1="40" x2="200" y2="160" stroke="#e0e0e0" strokeWidth="1"/>
            <line x1="140" y1="100" x2="260" y2="100" stroke="#e0e0e0" strokeWidth="1"/>
            
            <text x="200" y="70" textAnchor="middle" fill="#3b6ea5" fontSize="16" fontWeight="bold">V</text>
            <text x="165" y="130" textAnchor="middle" fill="#3b6ea5" fontSize="16" fontWeight="bold">I</text>
            <text x="235" y="130" textAnchor="middle" fill="#3b6ea5" fontSize="16" fontWeight="bold">R</text>
            
            <line x1="180" y1="100" x2="220" y2="100" stroke="#1a1a1a" strokeWidth="2"/>
            
            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: オームの法則の関係図（V = I × R）</text>
          </svg>
          <figcaption>Vを求めるときはI×R、Iを求めるときはV÷R、Rを求めるときはV÷Iです。</figcaption>
        </figure>

        <section>
          <h2>電圧の高低</h2>
          <p>
            電圧は「押し」であり、＋側が高く−側が低くなっています。
            水が高いところから低いところに流れるように、
            電流も電圧の高い＋側から低い−側に向かって流れます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="100" height="120" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2"/>
            <text x="80" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="14" fontWeight="bold">＋側</text>
            <text x="80" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="12">電圧が高い</text>
            
            <rect x="270" y="80" width="100" height="80" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2"/>
            <text x="320" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="14" fontWeight="bold">−側</text>
            <text x="320" y="135" textAnchor="middle" fill="#3b6ea5" fontSize="12">電圧が低い</text>
            
            <path d="M 130 100 Q 200 60 270 120" fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5,5"/>
            <polygon points="265,115 275,125 260,122" fill="#3b6ea5"/>
            <text x="200" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="12">電流が流れる</text>
            
            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 電圧の高低と電流の流れ</text>
          </svg>
          <figcaption>電流は電圧の高い＋側から低い−側へ流れます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            実際にLEDと抵抗を使って回路を作ると、オームの法則を体験できます。
            例えば、3Vの電池と330Ωの抵抗を使うと、約9mAの電流が流れます。
          </p>
          <Formula expression="I = \frac{V}{R} = \frac{3}{330} \approx 0.009 \text{A} = 9 \text{mA}" />
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>機械とは何でしょうか? 電気と機械はどう違うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>電圧は「押し」、電流は「流れる量」、抵抗は「流れにくさ」です。</li>
            <li>＋側は電圧が高く、−側は電圧が低いです。</li>
            <li>オームの法則: V = I × R</li>
          </ol>
        </div>

        <AskBox lessonId="01-electricity" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
