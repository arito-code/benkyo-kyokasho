import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson08Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={8} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電圧で「押されて」流れる電気は、どのくらい流れているのでしょうか?</p>
        </div>

        <h1>第8回: 電流とは何か</h1>

        <section>
          <h2>電流は「流れる量」</h2>
          <p>
            <Link href="/glossary/current" className="glossary-link">電流</Link>は、
            回路の中を実際に流れる電気の量です。
            前回、<Link href="/glossary/voltage" className="glossary-link">電圧</Link>は電気を「押す力」だと学びました。
            電流は、その押しによって「どれだけの電気が流れているか」を表します。
          </p>
          <p>
            水道にたとえると、電圧はタンクの水圧でした。
            電流は、パイプの中を実際に流れている水の量にあたります。
            蛇口をひねったとき、勢いよく出る水の量が多ければ「流量が多い」と言います。
            電気でも同じように、流れる量が多ければ「電流が大きい」と言います。
          </p>

          <div className="analogy">
            <span className="analogy-term">電流</span>
            <span className="analogy-equals">=</span>
            <span>流れる量（パイプを流れる水の量）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Water tank with pipe showing flow amount */}
            <g transform="translate(30, 20)">
              {/* Tank */}
              <rect x="0" y="0" width="60" height="70" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="5" y="10" width="50" height="55" fill="#3b6ea5" opacity="0.2" />
              <text x="30" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="10">水</text>

              {/* Pipe going out */}
              <rect x="60" y="50" width="80" height="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Water flowing arrows */}
              <line x1="80" y1="56" x2="100" y2="56" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="100,52 110,56 100,60" fill="#3b6ea5" />
              <line x1="115" y1="56" x2="130" y2="56" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="130,52 140,56 130,60" fill="#3b6ea5" />

              <text x="90" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="10">流れる量</text>
              <text x="70" y="145" textAnchor="middle" fill="#4a4a4a" fontSize="10">水道のたとえ</text>
            </g>

            {/* Equals sign */}
            <g transform="translate(175, 65)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="0" y1="10" x2="25" y2="10" stroke="#3b6ea5" strokeWidth="3" />
            </g>

            {/* Circuit with current flow */}
            <g transform="translate(220, 20)">
              {/* Battery */}
              <rect x="30" y="0" width="40" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9">電池</text>

              {/* Wire down from battery */}
              <line x1="50" y1="30" x2="50" y2="50" stroke="#3b6ea5" strokeWidth="2" />

              {/* Wire right */}
              <line x1="50" y1="50" x2="120" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrows on wire */}
              <polygon points="70,46 80,50 70,54" fill="#3b6ea5" />
              <polygon points="95,46 105,50 95,54" fill="#3b6ea5" />

              {/* LED */}
              <circle cx="120" cy="70" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M113 67 L120 77 L127 67" fill="none" stroke="#3b6ea5" strokeWidth="2" />

              {/* Wire left from LED */}
              <line x1="120" y1="82" x2="120" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="50" y1="100" x2="120" y2="100" stroke="#3b6ea5" strokeWidth="2" />

              {/* Wire up to battery */}
              <line x1="50" y1="100" x2="50" y2="30" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="0" />

              <text x="75" y="35" textAnchor="middle" fill="#3b6ea5" fontSize="10">電流</text>
              <text x="85" y="145" textAnchor="middle" fill="#4a4a4a" fontSize="10">電気回路</text>
            </g>

            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 電流は流れる量を表す</text>
          </svg>
          <figcaption>水道で蛇口から流れる水の量に相当するのが、回路を流れる電流です。</figcaption>
        </figure>

        <section>
          <h2>電流の単位「アンペア」</h2>
          <p>
            電流の大きさは<Link href="/glossary/ampere" className="glossary-link">アンペア</Link>（A）という単位で表します。
            1アンペアはかなり大きな電流です。
            電子工作で扱う小さな部品では、ミリアンペア（mA）をよく使います。
            1アンペア = 1000ミリアンペア です。
          </p>
          <p>
            たとえば、LEDを光らせるには10〜20mA程度の電流で十分です。
            スマートフォンの充電には1〜2A程度の電流が流れます。
            家庭のエアコンは10A以上の電流を使います。
            このように、用途によって必要な電流の大きさは様々です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            {/* LED */}
            <g transform="translate(30, 30)">
              <path d="M15 30 L35 30 L25 10 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="12" y1="35" x2="38" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="16" y1="40" x2="34" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="10" y1="5" x2="5" y2="0" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <line x1="25" y1="0" x2="25" y2="-5" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <line x1="40" y1="5" x2="45" y2="0" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <text x="25" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED</text>
              <text x="25" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">10〜20mA</text>
            </g>

            {/* Smartphone */}
            <g transform="translate(120, 25)">
              <rect x="5" y="0" width="40" height="70" rx="4" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="10" y="8" width="30" height="45" fill="#3b6ea5" opacity="0.1" />
              <circle cx="25" cy="62" r="4" fill="none" stroke="#3b6ea5" strokeWidth="1" />
              <text x="25" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="9">スマホ充電</text>
              <text x="25" y="105" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">1〜2A</text>
            </g>

            {/* Air conditioner */}
            <g transform="translate(220, 25)">
              <rect x="0" y="10" width="80" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="10" y1="35" x2="70" y2="35" stroke="#3b6ea5" strokeWidth="1" />
              <line x1="10" y1="40" x2="70" y2="40" stroke="#3b6ea5" strokeWidth="1" />
              <path d="M35 50 Q40 60 45 50" fill="none" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <path d="M45 50 Q50 60 55 50" fill="none" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <text x="40" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="9">エアコン</text>
              <text x="40" y="105" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">10A以上</text>
            </g>

            {/* Electric car */}
            <g transform="translate(320, 25)">
              <rect x="0" y="25" width="60" height="25" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="15" cy="50" r="8" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="45" cy="50" r="8" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="5" y="15" width="45" height="15" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="30" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="9">電気自動車</text>
              <text x="30" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">100A以上</text>
            </g>

            <text x="200" y="130" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: さまざまな機器の電流</text>
          </svg>
          <figcaption>使う機器によって、必要な電流の大きさは大きく異なります。</figcaption>
        </figure>

        <section>
          <h2>電流が大きいとどうなるか</h2>
          <p>
            電圧が同じ場合、電流が大きいほど働く力が強くなり、消費も大きくなります。
            LEDは電流が多いほど明るく光ります。
            モーターは電流が多いほど強く回ります。
            しかし、部品には「流せる電流の限界」があります。
          </p>
          <p>
            限界を超えた電流を流すと、部品は熱くなり、壊れてしまいます。
            これを防ぐために、次回学ぶ「抵抗」を使って電流を調整します。
            部品を安全に使うには、適切な電流を流すことが大切です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Low current - dim LED */}
            <g transform="translate(50, 20)">
              <text x="40" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">電流が小さい</text>
              
              <path d="M30 40 L50 40 L40 20 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="45" x2="53" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="31" y1="50" x2="49" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="40" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">暗い</text>

              <line x1="40" y1="85" x2="40" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="35,95 40,105 45,95" fill="#3b6ea5" />
              <text x="60" y="100" textAnchor="start" fill="#3b6ea5" fontSize="9">少ない</text>
            </g>

            {/* Medium current - bright LED */}
            <g transform="translate(160, 20)">
              <text x="40" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">適切な電流</text>
              
              <path d="M30 40 L50 40 L40 20 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="45" x2="53" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="31" y1="50" x2="49" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Light rays */}
              <line x1="25" y1="25" x2="15" y2="15" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="40" y1="15" x2="40" y2="5" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="55" y1="25" x2="65" y2="15" stroke="#3b6ea5" strokeWidth="1.5" />
              
              <text x="40" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">明るい</text>

              <line x1="40" y1="85" x2="40" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="35,95 40,105 45,95" fill="#3b6ea5" />
              <line x1="30" y1="92" x2="30" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="25,95 30,105 35,95" fill="#3b6ea5" />
              <text x="60" y="100" textAnchor="start" fill="#3b6ea5" fontSize="9">適量</text>
            </g>

            {/* Too much current - broken LED */}
            <g transform="translate(280, 20)">
              <text x="40" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="600">電流が大きすぎる</text>
              
              <path d="M30 40 L50 40 L40 20 Z" fill="none" stroke="#c0392b" strokeWidth="2" />
              <line x1="27" y1="45" x2="53" y2="45" stroke="#c0392b" strokeWidth="2" />
              <line x1="31" y1="50" x2="49" y2="50" stroke="#c0392b" strokeWidth="2" />
              
              {/* X mark */}
              <line x1="30" y1="20" x2="50" y2="50" stroke="#c0392b" strokeWidth="2" />
              <line x1="50" y1="20" x2="30" y2="50" stroke="#c0392b" strokeWidth="2" />
              
              <text x="40" y="75" textAnchor="middle" fill="#c0392b" fontSize="9">壊れる</text>

              <line x1="40" y1="85" x2="40" y2="100" stroke="#c0392b" strokeWidth="2" />
              <polygon points="35,95 40,105 45,95" fill="#c0392b" />
              <line x1="30" y1="87" x2="30" y2="100" stroke="#c0392b" strokeWidth="2" />
              <polygon points="25,95 30,105 35,95" fill="#c0392b" />
              <line x1="50" y1="87" x2="50" y2="100" stroke="#c0392b" strokeWidth="2" />
              <polygon points="45,95 50,105 55,95" fill="#c0392b" />
              <text x="70" y="100" textAnchor="start" fill="#c0392b" fontSize="9">多すぎ</text>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 電流と部品の状態</text>
          </svg>
          <figcaption>電流が少なすぎると暗く、多すぎると壊れます。適切な電流を流すことが大切です。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にシステムを提案するとき、「どのくらいの電流が必要か」は重要なポイントです。
            センサーやマイコンは数十mA、モーターやヒーターは数Aなど、
            使う部品によって必要な電流が異なります。
          </p>
          <p>
            電源を選ぶとき、接続するすべての部品の電流を合計して、
            余裕を持った電源を選ぶことが大切です。
            「この部品は何mA使いますか?」と聞けるようになると、
            電源選びが楽になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電流を調整するにはどうすればよいでしょうか?「抵抗」とは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>電流は、回路を流れる電気の量です。</li>
            <li>電流の単位はアンペア（A）です。小さな電流はミリアンペア（mA）で表します。</li>
            <li>部品には流せる電流の限界があり、超えると壊れます。</li>
          </ol>
        </div>

        <AskBox lessonId="08-current" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
