import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson09Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={9} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電流を調整するにはどうすればよいでしょうか?「抵抗」とは何でしょうか?</p>
        </div>

        <h1>第9回: 抵抗とは何か</h1>

        <section>
          <h2>抵抗は「流れにくさ」</h2>
          <p>
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>は、
            電気の流れを妨げる性質です。
            水道にたとえると、パイプの細さに相当します。
            パイプが細いほど水が流れにくいように、抵抗が大きいほど電流は流れにくくなります。
          </p>
          <p>
            前回、<Link href="/glossary/current" className="glossary-link">電流</Link>が大きすぎると部品が壊れることを学びました。
            抵抗を使うと、電流の量を調整できます。
            <Link href="/glossary/voltage" className="glossary-link">電圧</Link>（押す力）が同じでも、
            抵抗が大きいほど電流は少なくなります。
          </p>

          <div className="analogy">
            <span className="analogy-term">抵抗</span>
            <span className="analogy-equals">=</span>
            <span>流れにくさ（パイプの細さ）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Wide pipe - low resistance */}
            <g transform="translate(30, 30)">
              <text x="65" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗が小さい</text>
              
              {/* Wide pipe */}
              <rect x="10" y="20" width="110" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
              
              {/* Many flow arrows */}
              <line x1="30" y1="35" x2="50" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="50,31 60,35 50,39" fill="#3b6ea5" />
              <line x1="65" y1="40" x2="85" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="85,36 95,40 85,44" fill="#3b6ea5" />
              <line x1="30" y1="50" x2="50" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="50,46 60,50 50,54" fill="#3b6ea5" />
              <line x1="65" y1="45" x2="85" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="85,41 95,45 85,49" fill="#3b6ea5" />

              <text x="65" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="10">電流が多い</text>
            </g>

            {/* Narrow pipe - high resistance */}
            <g transform="translate(200, 30)">
              <text x="65" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗が大きい</text>
              
              {/* Narrow pipe */}
              <rect x="10" y="32" width="110" height="16" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
              
              {/* Few flow arrows */}
              <line x1="40" y1="40" x2="70" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="70,36 80,40 70,44" fill="#3b6ea5" />

              <text x="65" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="10">電流が少ない</text>
            </g>

            {/* Same pressure indicator */}
            <g transform="translate(100, 120)">
              <rect x="0" y="0" width="200" height="30" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
              <text x="100" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="11">同じ電圧（押す力）でも、抵抗で電流が変わる</text>
            </g>

            <text x="200" y="185" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 抵抗と電流の関係</text>
          </svg>
          <figcaption>パイプが細いほど水が流れにくいように、抵抗が大きいほど電流は少なくなります。</figcaption>
        </figure>

        <section>
          <h2>抵抗の単位「オーム」</h2>
          <p>
            抵抗の大きさは<Link href="/glossary/ohm" className="glossary-link">オーム</Link>（Ω）という単位で表します。
            Ωは「オメガ」というギリシャ文字です。
            数字が大きいほど、電流が流れにくくなります。
          </p>
          <p>
            電子工作でよく使う抵抗は、数百Ωから数キロオーム（kΩ）程度です。
            1kΩ = 1000Ω です。
            たとえば、LEDに使う抵抗は330Ωや470Ωがよく使われます。
            この抵抗値によって、LEDに流れる電流が決まります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            {/* Resistor symbol and physical appearance */}
            <g transform="translate(50, 30)">
              {/* Schematic symbol */}
              <line x1="0" y1="30" x2="20" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M20 30 L25 20 L35 40 L45 20 L55 40 L65 20 L75 40 L80 30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="80" y1="30" x2="100" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <text x="50" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="9">回路図記号</text>
            </g>

            {/* Physical resistor */}
            <g transform="translate(200, 20)">
              <line x1="0" y1="40" x2="25" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="25" y="25" width="60" height="30" rx="3" fill="#f5deb3" stroke="#3b6ea5" strokeWidth="2" />
              {/* Color bands */}
              <rect x="35" y="25" width="6" height="30" fill="#d35400" />
              <rect x="45" y="25" width="6" height="30" fill="#d35400" />
              <rect x="55" y="25" width="6" height="30" fill="#8b4513" />
              <rect x="70" y="25" width="4" height="30" fill="#c4a44a" />
              <line x1="85" y1="40" x2="110" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <text x="55" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">実物（カラーコード）</text>
              <text x="55" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">330Ω</text>
            </g>

            {/* Common values */}
            <g transform="translate(50, 100)">
              <text x="0" y="15" textAnchor="start" fill="#3b6ea5" fontSize="10" fontWeight="600">よく使う値:</text>
              <text x="80" y="15" textAnchor="start" fill="#4a4a4a" fontSize="10">100Ω, 330Ω, 1kΩ, 10kΩ</text>
            </g>

            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 抵抗器の記号と実物</text>
          </svg>
          <figcaption>抵抗器は回路図ではギザギザの記号で表し、実物は色の帯で値を示します。</figcaption>
        </figure>

        <section>
          <h2>抵抗でLEDを守る</h2>
          <p>
            LEDは流せる電流に限界があります。
            電池に直接つなぐと、電流が大きすぎてLEDが壊れてしまいます。
            抵抗を使って電流を制限すると、LEDを安全に光らせることができます。
          </p>
          <p>
            たとえば、3Vの電池に300Ωの抵抗だけをつなぐと、
            3V ÷ 300Ω = 10mA の電流が流れます。
            LEDを入れる場合はLED自体の電圧降下も考慮しますが、
            まずはこの「抵抗で電流を制限する」考え方が大切です。
            抵抗は部品を守る「ブレーキ」の役割をします。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Without resistor - broken */}
            <g transform="translate(30, 20)">
              <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="600">抵抗なし</text>
              
              {/* Battery */}
              <rect x="10" y="20" width="35" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="45" y="27" width="4" height="11" fill="#3b6ea5" />
              
              {/* Wire */}
              <line x1="49" y1="32" x2="80" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED with X */}
              <path d="M85 45 L100 45 L92.5 25 Z" fill="none" stroke="#c0392b" strokeWidth="2" />
              <line x1="80" y1="50" x2="105" y2="50" stroke="#c0392b" strokeWidth="2" />
              <line x1="82" y1="25" x2="103" y2="55" stroke="#c0392b" strokeWidth="2" />
              <line x1="103" y1="25" x2="82" y2="55" stroke="#c0392b" strokeWidth="2" />
              
              {/* Wire back */}
              <line x1="80" y1="55" x2="80" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="70" x2="80" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="45" x2="27" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="70" y="95" textAnchor="middle" fill="#c0392b" fontSize="10">電流が多すぎて壊れる</text>
            </g>

            {/* With resistor - safe */}
            <g transform="translate(210, 20)">
              <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗あり</text>
              
              {/* Battery */}
              <rect x="10" y="20" width="35" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="45" y="27" width="4" height="11" fill="#3b6ea5" />
              
              {/* Wire to resistor */}
              <line x1="49" y1="32" x2="60" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor */}
              <path d="M60 32 L65 22 L75 42 L85 22 L95 42 L100 32" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Wire to LED */}
              <line x1="100" y1="32" x2="115" y2="32" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED with light */}
              <path d="M120 45 L135 45 L127.5 25 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="115" y1="50" x2="140" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              {/* Light rays */}
              <line x1="115" y1="25" x2="105" y2="15" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="127.5" y1="20" x2="127.5" y2="10" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="140" y1="25" x2="150" y2="15" stroke="#3b6ea5" strokeWidth="1.5" />
              
              {/* Wire back */}
              <line x1="115" y1="55" x2="115" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="70" x2="115" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="45" x2="27" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="80" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="10">適切な電流で安全に光る</text>
            </g>

            {/* Explanation */}
            <g transform="translate(50, 120)">
              <rect x="0" y="0" width="300" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
              <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="10">抵抗は電流を制限する「ブレーキ」</text>
              <text x="150" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="9">部品を守るために必要です</text>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 抵抗でLEDを守る</text>
          </svg>
          <figcaption>抵抗を入れることで電流を制限し、LEDを安全に使えます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にセンサーやLEDを使ったシステムを提案するとき、
            「抵抗」は基本の部品として必ず登場します。
            LEDを1個光らせるだけでも抵抗が必要です。
          </p>
          <p>
            回路図を見たとき、ギザギザの記号があれば「これは抵抗だな、電流を調整しているんだな」
            とわかるようになります。
            次回はこの電圧・電流・抵抗の関係を式で表す「オームの法則」を学びます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電圧・電流・抵抗の関係を、式で表すとどうなるでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>抵抗は、電気の流れにくさです。パイプの細さにたとえられます。</li>
            <li>抵抗の単位はオーム（Ω）です。数字が大きいほど流れにくくなります。</li>
            <li>抵抗を使うと電流を制限でき、部品を守ることができます。</li>
          </ol>
        </div>

        <AskBox lessonId="09-resistance" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
