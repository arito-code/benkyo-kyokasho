import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import Formula from '@/components/Formula'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson10Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={10} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電圧・電流・抵抗の関係を、式で表すとどうなるでしょうか?</p>
        </div>

        <h1>第10回: オームの法則</h1>

        <section>
          <h2>3つの関係を1つの式に</h2>
          <p>
            ここまで、<Link href="/glossary/voltage" className="glossary-link">電圧</Link>（押す力）、
            <Link href="/glossary/current" className="glossary-link">電流</Link>（流れる量）、
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>（流れにくさ）を学んできました。
            この3つには、とてもシンプルな関係があります。
            それが<Link href="/glossary/ohms-law" className="glossary-link">オームの法則</Link>です。
          </p>

          <Formula expression="V = I \times R" />

          <p>
            V は電圧（ボルト）、I は電流（アンペア）、R は抵抗（オーム）です。
            この式は「電圧 = 電流 × 抵抗」を意味します。
            電圧を高くすると電流が増え、抵抗を大きくすると電流が減る、という関係がこの1つの式で表せます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Ohm's law triangle */}
            <g transform="translate(130, 20)">
              {/* Triangle */}
              <polygon points="70,0 0,120 140,120" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Horizontal line dividing V from I*R */}
              <line x1="35" y1="60" x2="105" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* V at top */}
              <text x="70" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="24" fontWeight="600">V</text>
              
              {/* I and R at bottom */}
              <text x="45" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="24" fontWeight="600">I</text>
              <text x="70" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="16">×</text>
              <text x="95" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="24" fontWeight="600">R</text>
            </g>

            {/* Explanations */}
            <g transform="translate(30, 150)">
              <text x="0" y="15" fill="#3b6ea5" fontSize="11">V: 電圧（ボルト）</text>
              <text x="120" y="15" fill="#3b6ea5" fontSize="11">I: 電流（アンペア）</text>
              <text x="250" y="15" fill="#3b6ea5" fontSize="11">R: 抵抗（オーム）</text>
            </g>

            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: オームの法則の三角形</text>
          </svg>
          <figcaption>求めたい値を隠すと、残りの計算式がわかります。Vを隠すとI×R、Iを隠すとV÷R、Rを隠すとV÷Iです。</figcaption>
        </figure>

        <section>
          <h2>3つの式を使い分ける</h2>
          <p>
            オームの法則は、知りたいものによって式を変形して使います。
            電圧を求めたいとき、電流を求めたいとき、抵抗を求めたいとき、それぞれ違う式になります。
          </p>

          <div style={{ textAlign: 'center', padding: 'var(--spacing-md) 0' }}>
            <p style={{ marginBottom: 'var(--spacing-xs)' }}>電圧を求める:</p>
            <Formula expression="V = I \times R" />
            <p style={{ marginBottom: 'var(--spacing-xs)', marginTop: 'var(--spacing-md)' }}>電流を求める:</p>
            <Formula expression="I = \frac{V}{R}" />
            <p style={{ marginBottom: 'var(--spacing-xs)', marginTop: 'var(--spacing-md)' }}>抵抗を求める:</p>
            <Formula expression="R = \frac{V}{I}" />
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Example 1: Finding current */}
            <g transform="translate(30, 20)">
              <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">例1: 電流を求める</text>
              
              {/* Battery 3V */}
              <rect x="10" y="25" width="30" height="20" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="8">3V</text>
              
              {/* Wire */}
              <line x1="40" y1="35" x2="55" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor */}
              <path d="M55 35 L58 28 L64 42 L70 28 L76 42 L79 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="67" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="8">330Ω</text>
              
              {/* Wire back */}
              <line x1="79" y1="35" x2="95" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="95" y1="35" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="65" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="45" x2="25" y2="65" stroke="#3b6ea5" strokeWidth="2" />

              <text x="50" y="82" textAnchor="middle" fill="#4a4a4a" fontSize="9">I = 3V ÷ 330Ω</text>
              <text x="50" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">≈ 9mA</text>
            </g>

            {/* Example 2: Finding resistance */}
            <g transform="translate(150, 20)">
              <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">例2: 抵抗を求める</text>
              
              {/* Battery 5V */}
              <rect x="10" y="25" width="30" height="20" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Wire */}
              <line x1="40" y1="35" x2="55" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor with ? */}
              <path d="M55 35 L58 28 L64 42 L70 28 L76 42 L79 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="67" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="10">?Ω</text>
              
              {/* Wire back */}
              <line x1="79" y1="35" x2="95" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="95" y1="35" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="65" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="45" x2="25" y2="65" stroke="#3b6ea5" strokeWidth="2" />

              {/* Current indicator */}
              <text x="85" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="8">20mA</text>

              <text x="50" y="82" textAnchor="middle" fill="#4a4a4a" fontSize="9">R = 5V ÷ 0.02A</text>
              <text x="50" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">= 250Ω</text>
            </g>

            {/* Example 3: Finding voltage */}
            <g transform="translate(270, 20)">
              <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">例3: 電圧を求める</text>
              
              {/* Battery ?V */}
              <rect x="10" y="25" width="30" height="20" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="10">?V</text>
              
              {/* Wire */}
              <line x1="40" y1="35" x2="55" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor */}
              <path d="M55 35 L58 28 L64 42 L70 28 L76 42 L79 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="67" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="8">100Ω</text>
              
              {/* Wire back */}
              <line x1="79" y1="35" x2="95" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="95" y1="35" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="65" x2="95" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="45" x2="25" y2="65" stroke="#3b6ea5" strokeWidth="2" />

              {/* Current indicator */}
              <text x="85" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="8">50mA</text>

              <text x="50" y="82" textAnchor="middle" fill="#4a4a4a" fontSize="9">V = 0.05A × 100Ω</text>
              <text x="50" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">= 5V</text>
            </g>

            {/* Note about mA to A conversion */}
            <g transform="translate(80, 115)">
              <rect x="0" y="0" width="240" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
              <text x="120" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="10">計算するときは mA を A に変換</text>
              <text x="120" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="9">20mA = 0.02A, 50mA = 0.05A</text>
            </g>

            <text x="200" y="170" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: オームの法則の計算例</text>
          </svg>
          <figcaption>電圧・電流・抵抗のうち2つがわかれば、残り1つを計算できます。</figcaption>
        </figure>

        <section>
          <h2>水道のたとえでまとめる</h2>
          <p>
            Phase 2で学んだ電圧・電流・抵抗の関係を、水道のたとえでまとめます。
            電圧はタンクの水圧（押す力）、電流は流れる水の量、抵抗はパイプの細さ（流れにくさ）です。
          </p>
          <p>
            水圧（電圧）が高いほど水（電流）は多く流れます。
            パイプが細い（抵抗が大きい）ほど水（電流）は流れにくくなります。
            このシンプルな関係がオームの法則であり、回路設計の基本です。
          </p>

          <div className="analogy">
            <span className="analogy-term">電圧</span>
            <span className="analogy-equals">=</span>
            <span>押し（タンクの水圧）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">電流</span>
            <span className="analogy-equals">=</span>
            <span>流れる量（水の量）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">抵抗</span>
            <span className="analogy-equals">=</span>
            <span>流れにくさ（パイプの細さ）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Water system analogy */}
            <g transform="translate(50, 20)">
              {/* Tank */}
              <rect x="0" y="0" width="60" height="80" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="5" y="10" width="50" height="65" fill="#3b6ea5" opacity="0.2" />
              <text x="30" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">水</text>

              {/* Height indicator = Voltage */}
              <line x1="70" y1="10" x2="70" y2="75" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="65" y1="10" x2="75" y2="10" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="65" y1="75" x2="75" y2="75" stroke="#3b6ea5" strokeWidth="2" />
              <text x="90" y="35" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="500">電圧</text>
              <text x="90" y="50" textAnchor="start" fill="#4a4a4a" fontSize="9">(押す力)</text>

              {/* Pipe with narrow section = Resistance */}
              <rect x="25" y="80" width="10" height="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="27" y="100" width="6" height="30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="55" y="120" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="500">抵抗</text>
              <text x="55" y="135" textAnchor="start" fill="#4a4a4a" fontSize="9">(細いパイプ)</text>

              {/* Water flow arrows = Current */}
              <line x1="30" y1="140" x2="30" y2="160" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="25,155 30,165 35,155" fill="#3b6ea5" />
              <text x="55" y="160" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="500">電流</text>
              <text x="55" y="175" textAnchor="start" fill="#4a4a4a" fontSize="9">(流れる量)</text>
            </g>

            {/* Equals */}
            <g transform="translate(170, 80)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="0" y1="10" x2="25" y2="10" stroke="#3b6ea5" strokeWidth="3" />
            </g>

            {/* Electric circuit equivalent */}
            <g transform="translate(220, 20)">
              {/* Battery = Voltage */}
              <rect x="30" y="0" width="40" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9">電池</text>
              <text x="50" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">V (電圧)</text>

              {/* Wire down */}
              <line x1="50" y1="30" x2="50" y2="70" stroke="#3b6ea5" strokeWidth="2" />

              {/* Resistor = Resistance */}
              <path d="M50 70 L55 60 L65 80 L75 60 L85 80 L90 70" fill="none" stroke="#3b6ea5" strokeWidth="2" transform="rotate(90, 70, 70)" />
              <text x="100" y="85" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="500">R (抵抗)</text>

              {/* Wire with current arrows */}
              <line x1="50" y1="90" x2="50" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="45,115 50,125 55,115" fill="#3b6ea5" />
              <text x="65" y="125" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="500">I (電流)</text>

              {/* Wire back */}
              <line x1="50" y1="130" x2="100" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="100" y1="15" x2="100" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="70" y1="15" x2="100" y2="15" stroke="#3b6ea5" strokeWidth="2" />
            </g>

            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 水道と電気回路のたとえ</text>
          </svg>
          <figcaption>水道のたとえで考えると、電圧・電流・抵抗の関係がわかりやすくなります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            オームの法則は、回路設計の基本です。
            たとえば、LEDを5Vで光らせたいとき、20mA流すには何Ωの抵抗が必要か?
            という計算ができるようになります。
          </p>
          <Formula expression="R = \frac{5\text{V}}{0.02\text{A}} = 250\Omega" />
          <p>
            お客様に「なぜこの抵抗値なのか」を説明できると、
            技術的な信頼感が増します。
            計算自体はシンプルなので、ぜひ覚えておきましょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電圧・電流・抵抗の関係がわかったところで、実際の回路ではどのように配線するのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>オームの法則: V = I × R（電圧 = 電流 × 抵抗）</li>
            <li>電流を求めるときは I = V ÷ R、抵抗を求めるときは R = V ÷ I</li>
            <li>水道のたとえ: 電圧=押し、電流=流れる量、抵抗=流れにくさ</li>
          </ol>
        </div>

        <AskBox lessonId="10-ohms-law" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
