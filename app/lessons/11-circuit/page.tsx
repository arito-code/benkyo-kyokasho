import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson11Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={11} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電圧・電流・抵抗の関係がわかったところで、実際の回路ではどのように配線するのでしょうか?</p>
        </div>

        <h1>第11回: 回路とは何か</h1>

        <section>
          <h2>回路は「閉じた輪」</h2>
          <p>
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>とは、
            電気が流れるための道すじです。
            電池の＋極から出た電気は、導線や部品を通って−極に戻ります。
            この道すじが途切れずにつながっていることが、電気が流れるための絶対条件です。
            輪のように閉じた道を作ることから、「回路」と呼ばれます。
          </p>
          <p>
            前回まで、<Link href="/glossary/voltage" className="glossary-link">電圧</Link>（押す力）、
            <Link href="/glossary/current" className="glossary-link">電流</Link>（流れる量）、
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>（流れにくさ）を学びました。
            <Link href="/glossary/ohms-law" className="glossary-link">オームの法則</Link>でこれらの関係を計算できます。
            しかし、どれだけ計算しても、回路が閉じていなければ電流は1ミリアンペアも流れません。
            回路は電気を扱う上での最も基本的な概念です。
          </p>

          <div className="analogy">
            <span className="analogy-term">回路</span>
            <span className="analogy-equals">=</span>
            <span>電気が流れる閉じた輪</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Closed circuit (working) */}
            <g transform="translate(30, 20)">
              <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">閉じた回路（電流が流れる）</text>
              
              {/* Battery */}
              <rect x="50" y="25" width="40" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="90" y="32" width="5" height="11" fill="#3b6ea5" />
              <text x="60" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">＋</text>
              <text x="80" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">−</text>
              
              {/* Wire from + to LED */}
              <line x1="95" y1="37" x2="120" y2="37" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="120" y1="37" x2="120" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED */}
              <path d="M110 90 L130 90 L120 70 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="105" y1="95" x2="135" y2="95" stroke="#3b6ea5" strokeWidth="2" />
              {/* Light rays */}
              <line x1="108" y1="70" x2="100" y2="62" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="120" y1="65" x2="120" y2="55" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="132" y1="70" x2="140" y2="62" stroke="#3b6ea5" strokeWidth="1.5" />
              
              {/* Wire from LED to - */}
              <line x1="120" y1="100" x2="120" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="120" x2="120" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="37" x2="20" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="37" x2="50" y2="37" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrows */}
              <polygon points="105,33 115,37 105,41" fill="#3b6ea5" />
              <polygon points="60,124 50,120 60,116" fill="#3b6ea5" />
              
              <text x="70" y="145" textAnchor="middle" fill="#3b6ea5" fontSize="10">✓ 光る</text>
            </g>

            {/* Open circuit (not working) */}
            <g transform="translate(210, 20)">
              <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="11" fontWeight="600">開いた回路（電流が流れない）</text>
              
              {/* Battery */}
              <rect x="50" y="25" width="40" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="90" y="32" width="5" height="11" fill="#3b6ea5" />
              <text x="60" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">＋</text>
              <text x="80" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">−</text>
              
              {/* Wire from + (broken) */}
              <line x1="95" y1="37" x2="120" y2="37" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="120" y1="37" x2="120" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Gap */}
              <text x="130" y="70" fill="#c0392b" fontSize="12" fontWeight="600">✕</text>
              
              {/* LED (not lit) */}
              <path d="M110 90 L130 90 L120 70 Z" fill="none" stroke="#999" strokeWidth="2" />
              <line x1="105" y1="95" x2="135" y2="95" stroke="#999" strokeWidth="2" />
              
              {/* Wire from LED to - */}
              <line x1="120" y1="100" x2="120" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="120" x2="120" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="37" x2="20" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="37" x2="50" y2="37" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="70" y="145" textAnchor="middle" fill="#c0392b" fontSize="10">✕ 光らない</text>
            </g>

            <text x="200" y="185" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 閉回路と開回路</text>
          </svg>
          <figcaption>左の回路は輪が閉じているので電流が流れてLEDが光ります。右の回路は途中で切れているので電流が流れません。</figcaption>
        </figure>

        <section>
          <h2>水道のたとえで考える</h2>
          <p>
            回路を水道にたとえると、電池はポンプ、導線はパイプ、LEDなどの部品は水車のような役割です。
            ポンプから押し出された水は、パイプを通って水車を回し、またポンプに戻ってきます。
            この循環ができなければ、水は流れません。
            もしパイプのどこかに穴が空いていたり、つながっていなかったりすると、水圧がかかっても水は循環しません。
          </p>
          <p>
            電気も同じです。電池の＋極から押し出された電流は、導線を通って部品を動かし、−極に戻ります。
            この「戻る道」がないと、電流は流れ始めることすらできません。
            電圧（押す力）がどれだけ高くても、回路が開いていれば電流はゼロです。
            これが「回路」という概念の核心です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Water circulation analogy */}
            <g transform="translate(50, 20)">
              {/* Pump (Battery) */}
              <rect x="120" y="0" width="60" height="40" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="150" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="10">ポンプ</text>
              <text x="150" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="9">(電池)</text>
              
              {/* Pipe right */}
              <line x1="180" y1="20" x2="250" y2="20" stroke="#3b6ea5" strokeWidth="3" />
              
              {/* Water wheel (LED) */}
              <circle cx="250" cy="80" r="25" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="235" y1="65" x2="265" y2="95" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="265" y1="65" x2="235" y2="95" stroke="#3b6ea5" strokeWidth="2" />
              <text x="250" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="9">(部品)</text>
              
              {/* Pipe down and back */}
              <line x1="250" y1="20" x2="250" y2="55" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="250" y1="105" x2="250" y2="140" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="50" y1="140" x2="250" y2="140" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="50" y1="20" x2="50" y2="140" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="50" y1="20" x2="120" y2="20" stroke="#3b6ea5" strokeWidth="3" />
              
              {/* Flow arrows */}
              <polygon points="210,16 220,20 210,24" fill="#3b6ea5" />
              <polygon points="100,144 90,140 100,136" fill="#3b6ea5" />
              <polygon points="46,100 50,90 54,100" fill="#3b6ea5" />
              
              {/* Water droplets to show flow */}
              <circle cx="230" cy="20" r="3" fill="#3b6ea5" opacity="0.5" />
              <circle cx="80" cy="140" r="3" fill="#3b6ea5" opacity="0.5" />
            </g>

            <text x="200" y="185" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 水の循環と回路</text>
          </svg>
          <figcaption>ポンプから出た水は、パイプを通って水車を回し、またポンプに戻ります。この循環が回路です。</figcaption>
        </figure>

        <section>
          <h2>回路図の読み方</h2>
          <p>
            回路を図で表したものを「回路図」と呼びます。
            回路図では、電池、抵抗、LED、スイッチなどを記号で表し、線でつないで描きます。
            実際の部品の形ではなく、電気的なつながりを示すことが目的です。
            どの部品がどこにつながっているかが一目でわかるため、回路を設計したり説明したりするときに使います。
          </p>
          <p>
            回路図を読むときは、電池の＋極から出発して、どの経路を通って−極に戻るかをたどります。
            途中で枝分かれがあったり、スイッチで切り替わったりすることもありますが、
            最終的に−極に戻れる道があれば、電流が流れる可能性があります。
            逆に、どこかで行き止まりになっていれば、その先には電流は流れません。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Simple circuit diagram with symbols */}
            <g transform="translate(80, 20)">
              <text x="120" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">回路図の例</text>
              
              {/* Battery symbol */}
              <line x1="100" y1="25" x2="100" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="90" y1="30" x2="110" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="95" y1="40" x2="105" y2="40" stroke="#3b6ea5" strokeWidth="1.5" />
              <text x="120" y="40" fill="#3b6ea5" fontSize="9">電池</text>
              
              {/* Wire from battery */}
              <line x1="100" y1="45" x2="100" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor symbol */}
              <path d="M100 70 L105 60 L115 80 L125 60 L135 80 L145 60 L150 70" fill="none" stroke="#3b6ea5" strokeWidth="2" transform="rotate(90, 100, 100)" />
              <text x="130" y="105" fill="#3b6ea5" fontSize="9">抵抗</text>
              
              {/* Wire to LED */}
              <line x1="100" y1="130" x2="100" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED symbol */}
              <polygon points="85,145 115,145 100,165" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="85" y1="165" x2="115" y2="165" stroke="#3b6ea5" strokeWidth="2" />
              {/* Arrows for light */}
              <line x1="120" y1="150" x2="130" y2="140" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="127" y1="143" x2="130" y2="140" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="130" y1="140" x2="127" y2="140" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="125" y1="158" x2="135" y2="148" stroke="#3b6ea5" strokeWidth="1.5" />
              <text x="145" y="160" fill="#3b6ea5" fontSize="9">LED</text>
              
              {/* Wire back to battery */}
              <line x1="100" y1="165" x2="100" y2="175" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="175" x2="100" y2="175" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="25" x2="30" y2="175" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="25" x2="100" y2="25" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current flow label */}
              <polygon points="65,21 75,25 65,29" fill="#3b6ea5" />
              <text x="70" y="15" textAnchor="middle" fill="#4a4a4a" fontSize="8">電流の向き</text>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 回路図の記号</text>
          </svg>
          <figcaption>回路図では部品を記号で表します。電池の＋極から−極へ向かう経路をたどると、電流の流れがわかります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に回路を説明するとき、「回路が閉じているから電流が流れる」という基本は欠かせません。
            たとえば、センサーが動かないというトラブルがあったとき、「配線が途中で外れていませんか?」と確認するのは、回路の基本を理解しているからできることです。
          </p>
          <p>
            また、回路図を読めると、お客様からいただいた図面を見て「ここに抵抗が必要ですね」「この配線は並列になっていますね」といった具体的な会話ができます。
            次回から、直列と並列、電源の種類など、回路をさらに詳しく見ていきます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>部品を複数つなぐとき、「直列」と「並列」という2つの方法があります。何が違うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>回路は、電気が流れるための「閉じた輪」です。輪が切れると電流は流れません。</li>
            <li>電池の＋極から出た電流は、部品を通って−極に戻ります。この経路が回路です。</li>
            <li>回路図は、部品を記号で表して電気的なつながりを示す図です。</li>
          </ol>
        </div>

        <AskBox lessonId="11-circuit" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
