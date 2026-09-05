import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson12Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={12} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>部品を複数つなぐとき、「直列」と「並列」という2つの方法があります。何が違うのでしょうか?</p>
        </div>

        <h1>第12回: 直列と並列</h1>

        <section>
          <h2>直列は「一列」、並列は「枝分かれ」</h2>
          <p>
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>に部品を複数つなぐとき、
            大きく分けて2つの方法があります。
            <Link href="/glossary/series" className="glossary-link">直列</Link>は部品を一列に並べてつなぐ方法、
            <Link href="/glossary/parallel" className="glossary-link">並列</Link>は枝分かれさせてつなぐ方法です。
            つなぎ方によって、電圧と電流の分配が大きく変わります。
          </p>
          <p>
            水道のたとえで考えると、直列は1本のパイプに水車を2つ連続で設置するイメージです。
            水圧（<Link href="/glossary/voltage" className="glossary-link">電圧</Link>）は2つの水車で分け合います。
            並列は、パイプを2本に分けてそれぞれに水車を置くイメージです。
            どちらの水車にも同じ水圧がかかりますが、水量（<Link href="/glossary/current" className="glossary-link">電流</Link>）が分かれます。
          </p>

          <div className="analogy">
            <span className="analogy-term">直列</span>
            <span className="analogy-equals">=</span>
            <span>一列につなぐ（電流が同じ、電圧が分かれる）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">並列</span>
            <span className="analogy-equals">=</span>
            <span>枝分かれしてつなぐ（電圧が同じ、電流が分かれる）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            {/* Series circuit */}
            <g transform="translate(20, 20)">
              <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">直列回路</text>
              
              {/* Battery */}
              <rect x="60" y="20" width="40" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="80" y="36" textAnchor="middle" fill="#3b6ea5" fontSize="8">3V</text>
              
              {/* Wire to LED 1 */}
              <line x1="100" y1="32" x2="130" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="32" x2="130" y2="55" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED 1 */}
              <path d="M120 65 L140 65 L130 50 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="115" y1="70" x2="145" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <text x="130" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="8">1.5V</text>
              
              {/* Wire to LED 2 */}
              <line x1="130" y1="75" x2="130" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED 2 */}
              <path d="M120 110 L140 110 L130 95 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="115" y1="115" x2="145" y2="115" stroke="#3b6ea5" strokeWidth="2" />
              <text x="130" y="130" textAnchor="middle" fill="#4a4a4a" fontSize="8">1.5V</text>
              
              {/* Wire back */}
              <line x1="130" y1="120" x2="130" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="145" x2="130" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="32" x2="30" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="32" x2="60" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrow */}
              <polygon points="115,28 125,32 115,36" fill="#3b6ea5" />
              
              {/* Label */}
              <text x="80" y="170" textAnchor="middle" fill="#3b6ea5" fontSize="10">電流は同じ</text>
              <text x="80" y="185" textAnchor="middle" fill="#3b6ea5" fontSize="10">電圧は分かれる</text>
            </g>

            {/* Parallel circuit */}
            <g transform="translate(200, 20)">
              <text x="90" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">並列回路</text>
              
              {/* Battery */}
              <rect x="70" y="20" width="40" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="90" y="36" textAnchor="middle" fill="#3b6ea5" fontSize="8">3V</text>
              
              {/* Wire split */}
              <line x1="110" y1="32" x2="130" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="32" x2="130" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="50" x2="90" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="50" x2="170" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED 1 (left) */}
              <line x1="90" y1="50" x2="90" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M80 75 L100 75 L90 60 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="75" y1="80" x2="105" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <text x="90" y="98" textAnchor="middle" fill="#4a4a4a" fontSize="8">3V</text>
              <line x1="90" y1="85" x2="90" y2="115" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED 2 (right) */}
              <line x1="170" y1="50" x2="170" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M160 75 L180 75 L170 60 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="155" y1="80" x2="185" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <text x="170" y="98" textAnchor="middle" fill="#4a4a4a" fontSize="8">3V</text>
              <line x1="170" y1="85" x2="170" y2="115" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Wire merge */}
              <line x1="90" y1="115" x2="130" y2="115" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="115" x2="170" y2="115" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="130" y1="115" x2="130" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="145" x2="130" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="32" x2="30" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="32" x2="70" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrows */}
              <polygon points="145,28 155,32 145,36" fill="#3b6ea5" />
              
              {/* Label */}
              <text x="100" y="170" textAnchor="middle" fill="#3b6ea5" fontSize="10">電圧は同じ</text>
              <text x="100" y="185" textAnchor="middle" fill="#3b6ea5" fontSize="10">電流は分かれる</text>
            </g>

            <text x="200" y="215" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 直列回路と並列回路</text>
          </svg>
          <figcaption>直列では電圧が部品で分かれ、並列では各部品に同じ電圧がかかります。</figcaption>
        </figure>

        <section>
          <h2>直列回路の特徴</h2>
          <p>
            直列回路では、すべての部品に同じ電流が流れます。
            電流は枝分かれしないので、どの部品を通っても同じ量です。
            一方、電圧は各部品で分け合います。たとえば3Vの電池にLEDを2つ直列につなぐと、各LEDには約1.5Vずつかかります。
          </p>
          <p>
            直列回路の特徴は、「1つ切れると全部消える」ことです。
            昔のクリスマスツリーの電飾は直列で、1つの電球が切れると全部消えました。
            部品が多くなるほど、必要な電圧が高くなります。
            LEDを10個直列につなぐには、少なくとも20V程度の電源が必要になります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Series voltage distribution */}
            <g transform="translate(50, 20)">
              <text x="150" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">直列回路の電圧分配</text>
              
              {/* Voltage bar */}
              <rect x="0" y="30" width="300" height="30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="-25" y="50" textAnchor="end" fill="#3b6ea5" fontSize="10">6V</text>
              
              {/* Divisions */}
              <line x1="100" y1="30" x2="100" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="200" y1="30" x2="200" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Labels */}
              <rect x="0" y="30" width="100" height="30" fill="#3b6ea5" opacity="0.2" />
              <text x="50" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">LED1: 2V</text>
              
              <rect x="100" y="30" width="100" height="30" fill="#3b6ea5" opacity="0.1" />
              <text x="150" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">LED2: 2V</text>
              
              <rect x="200" y="30" width="100" height="30" fill="#3b6ea5" opacity="0.15" />
              <text x="250" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">抵抗: 2V</text>
              
              {/* Formula */}
              <text x="150" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="11">2V + 2V + 2V = 6V（電源電圧）</text>
              
              {/* Current note */}
              <text x="150" y="115" textAnchor="middle" fill="#4a4a4a" fontSize="10">電流はどの部品も同じ値</text>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 直列回路では電圧の合計が電源電圧に等しい</text>
          </svg>
          <figcaption>直列回路では各部品にかかる電圧の合計が、電源の電圧と等しくなります。</figcaption>
        </figure>

        <section>
          <h2>並列回路の特徴</h2>
          <p>
            並列回路では、すべての部品に同じ電圧がかかります。
            電源が3Vなら、どの枝のLEDにも3Vがかかります。
            一方、電流は各枝で分かれます。電源から出た電流が、枝分かれして各部品に流れます。
          </p>
          <p>
            並列回路の特徴は、「1つ切れても他は点く」ことです。
            家庭のコンセントは並列で、1つの家電を消しても他の家電は動きます。
            部品を増やすと、電源からの総電流が増えます。
            LEDを10個並列につなぐと、電流は10倍必要になるので、電源の容量に注意が必要です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Parallel current distribution */}
            <g transform="translate(50, 20)">
              <text x="150" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">並列回路の電流分配</text>
              
              {/* Main current bar */}
              <rect x="0" y="30" width="50" height="20" fill="#3b6ea5" opacity="0.3" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="44" textAnchor="middle" fill="#3b6ea5" fontSize="9">60mA</text>
              
              {/* Arrow split */}
              <line x1="50" y1="40" x2="80" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="80" y1="40" x2="80" y2="25" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="80" y1="40" x2="80" y2="55" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="80" y1="40" x2="80" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Branch 1 */}
              <line x1="80" y1="25" x2="150" y2="25" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="150" y="15" width="80" height="20" fill="#3b6ea5" opacity="0.2" stroke="#3b6ea5" strokeWidth="1" />
              <text x="190" y="29" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED1: 20mA</text>
              
              {/* Branch 2 */}
              <line x1="80" y1="55" x2="150" y2="55" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="150" y="45" width="80" height="20" fill="#3b6ea5" opacity="0.2" stroke="#3b6ea5" strokeWidth="1" />
              <text x="190" y="59" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED2: 20mA</text>
              
              {/* Branch 3 */}
              <line x1="80" y1="70" x2="150" y2="85" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="150" y="75" width="80" height="20" fill="#3b6ea5" opacity="0.2" stroke="#3b6ea5" strokeWidth="1" />
              <text x="190" y="89" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED3: 20mA</text>
              
              {/* Merge */}
              <line x1="230" y1="25" x2="260" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="230" y1="55" x2="260" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="230" y1="85" x2="260" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="260" y1="40" x2="300" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Formula */}
              <text x="150" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="11">20mA + 20mA + 20mA = 60mA（総電流）</text>
              
              {/* Voltage note */}
              <text x="150" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="10">電圧はどの枝も同じ値</text>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 並列回路では電流の合計が電源から流れる電流に等しい</text>
          </svg>
          <figcaption>並列回路では各枝に流れる電流の合計が、電源から流れる総電流と等しくなります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            直列と並列の使い分けは、電子機器の設計で常に登場します。
            たとえば、表示パネルのLEDを「1つ切れても他は点く」ようにしたいなら並列、
            高い電圧の電源を使って多数のLEDを少ない電流で光らせたいなら直列を選びます。
          </p>
          <p>
            お客様から「LEDを10個並べたい」という要望があったとき、
            「電源は何ボルトですか?」「1個切れたとき他はどうなればいいですか?」
            と聞いて、直列・並列・その組み合わせを提案できると、信頼を得られます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>回路に電気を供給する「電源」には、どのような種類があるのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>直列回路では、電流が同じで、電圧が各部品で分かれます。</li>
            <li>並列回路では、電圧が同じで、電流が各枝で分かれます。</li>
            <li>直列は1つ切れると全部止まり、並列は1つ切れても他は動きます。</li>
          </ol>
        </div>

        <AskBox lessonId="12-series-parallel" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
