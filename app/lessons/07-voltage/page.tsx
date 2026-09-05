import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson07Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={7} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電気で動く部品には「電圧」が必要ですが、電圧とは何でしょうか?</p>
        </div>

        <h1>第7回: 電圧とは何か</h1>

        <section>
          <h2>電圧は「押す力」</h2>
          <p>
            <Link href="/glossary/voltage" className="glossary-link">電圧</Link>は、
            電気を流そうとする「押し」の力です。
            水道にたとえると、タンクの高さや水圧のようなものです。
            タンクが高いほど水が強く流れるように、
            電圧が高いほど電気を強く押し出します。
          </p>
          <p>
            電池やコンセントには電圧があり、＋側が「高い」、−側が「低い」状態になっています。
            この高低差があるから、電気が＋から−に向かって流れます。
            電圧がなければ、電気は流れません。
            電圧は電気を動かす「原動力」です。
          </p>

          <div className="analogy">
            <span className="analogy-term">電圧</span>
            <span className="analogy-equals">=</span>
            <span>電気を押す力（タンクの高さ）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Water tank analogy */}
            <g transform="translate(50, 20)">
              {/* Tank */}
              <rect x="0" y="0" width="60" height="80" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="5" y="10" width="50" height="65" fill="#3b6ea5" opacity="0.2" />
              <text x="30" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">水</text>

              {/* Pipe going down */}
              <rect x="25" y="80" width="10" height="50" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Arrow showing flow */}
              <line x1="30" y1="95" x2="30" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="25,120 30,130 35,120" fill="#3b6ea5" />
              
              {/* Height indicator */}
              <line x1="70" y1="10" x2="70" y2="80" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="65" y1="10" x2="75" y2="10" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="65" y1="80" x2="75" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <text x="85" y="50" textAnchor="start" fill="#3b6ea5" fontSize="9">高さ</text>
              <text x="85" y="62" textAnchor="start" fill="#3b6ea5" fontSize="9">=水圧</text>

              <text x="30" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="10">水道のたとえ</text>
            </g>

            {/* Equals sign */}
            <g transform="translate(170, 70)">
              <line x1="0" y1="0" x2="25" y2="0" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="0" y1="10" x2="25" y2="10" stroke="#3b6ea5" strokeWidth="3" />
            </g>

            {/* Battery and circuit */}
            <g transform="translate(220, 20)">
              {/* Battery */}
              <rect x="25" y="10" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="75" y="18" width="6" height="19" fill="#3b6ea5" />
              <text x="50" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="10">電池</text>
              <text x="35" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">＋</text>
              <text x="65" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">−</text>

              {/* Wire going down */}
              <line x1="50" y1="45" x2="50" y2="80" stroke="#3b6ea5" strokeWidth="2" />

              {/* LED/bulb */}
              <circle cx="50" cy="95" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M40 90 L50 100 L60 90" fill="none" stroke="#3b6ea5" strokeWidth="2" />

              {/* Wire back up */}
              <line x1="50" y1="110" x2="50" y2="130" stroke="#3b6ea5" strokeWidth="2" />

              {/* Voltage indicator */}
              <line x1="90" y1="10" x2="90" y2="45" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
              <line x1="85" y1="10" x2="95" y2="10" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="85" y1="45" x2="95" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <text x="105" y="25" textAnchor="start" fill="#3b6ea5" fontSize="9">電圧</text>
              <text x="105" y="37" textAnchor="start" fill="#3b6ea5" fontSize="9">=押す力</text>

              <text x="50" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="10">電気回路</text>
            </g>

            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 電圧は水圧のようなもの</text>
          </svg>
          <figcaption>水道の水圧が高いほど水が強く流れるように、電圧が高いほど電気を押す力が強くなります。</figcaption>
        </figure>

        <section>
          <h2>電流と抵抗</h2>
          <p>
            電圧と一緒に覚えておきたいのが、
            <Link href="/glossary/current" className="glossary-link">電流</Link>と
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>です。
            電流は「実際に流れる電気の量」、
            抵抗は「電気の流れにくさ」です。
          </p>
          <p>
            電圧が高いほど電気を強く押すので、同じ抵抗なら電流が多く流れます。
            逆に、抵抗が大きいと電流は流れにくくなります。
            水道でいえば、水圧（電圧）が同じでも、
            パイプが細い（抵抗が大きい）と水（電流）は少ししか流れません。
          </p>

          <div className="analogy">
            <span className="analogy-term">電流</span>
            <span className="analogy-equals">=</span>
            <span>実際に流れる電気の量</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">抵抗</span>
            <span className="analogy-equals">=</span>
            <span>電気の流れにくさ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Low resistance - more current */}
            <g transform="translate(30, 30)">
              <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗が小さい</text>
              
              {/* Wide pipe */}
              <rect x="20" y="20" width="100" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
              
              {/* Many arrows (lots of current) */}
              <line x1="40" y1="40" x2="60" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="60,35 70,40 60,45" fill="#3b6ea5" />
              <line x1="70" y1="30" x2="90" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="90,25 100,30 90,35" fill="#3b6ea5" />
              <line x1="70" y1="50" x2="90" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="90,45 100,50 90,55" fill="#3b6ea5" />

              <text x="70" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="9">電流が多い</text>
            </g>

            {/* High resistance - less current */}
            <g transform="translate(200, 30)">
              <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗が大きい</text>
              
              {/* Narrow pipe */}
              <rect x="20" y="30" width="100" height="20" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
              
              {/* Few arrows (less current) */}
              <line x1="50" y1="40" x2="80" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="80,35 90,40 80,45" fill="#3b6ea5" />

              <text x="70" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="9">電流が少ない</text>
            </g>

            {/* Formula hint */}
            <g transform="translate(100, 120)">
              <rect x="0" y="0" width="200" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
              <text x="100" y="22" textAnchor="middle" fill="#3b6ea5" fontSize="11">同じ電圧でも、抵抗で電流が変わる</text>
            </g>

            <text x="200" y="170" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 抵抗が大きいと電流は流れにくい</text>
          </svg>
          <figcaption>同じ電圧でも、抵抗が大きいと電流は少なくなります。</figcaption>
        </figure>

        <section>
          <h2>なぜ電圧が大切か</h2>
          <p>
            センサーやLED、マイコンなど、電気で動く部品には
            「動作電圧」があります。
            例えば、マイコンの多くは3.3Vや5Vで動きます。
            電圧が低すぎると動かず、高すぎると壊れてしまいます。
          </p>
          <p>
            回路を作るときは、部品に合った電圧を供給することが重要です。
            乾電池1本は1.5V、USB電源は5V、家庭のコンセントは100Vです。
            目的に合わせて、正しい電圧の電源を選ぶ必要があります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            {/* Dry cell */}
            <g transform="translate(30, 30)">
              <rect x="10" y="10" width="40" height="60" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="22" y="0" width="16" height="12" fill="#3b6ea5" />
              <text x="30" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">乾電池</text>
              <text x="30" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">1.5V</text>
            </g>

            {/* USB */}
            <g transform="translate(120, 30)">
              <rect x="5" y="20" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="15" y="30" width="30" height="15" fill="#3b6ea5" opacity="0.3" />
              <text x="30" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="10">USB</text>
              <text x="30" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">5V</text>
            </g>

            {/* Car battery */}
            <g transform="translate(210, 30)">
              <rect x="0" y="15" width="60" height="45" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="10" y="5" width="10" height="12" fill="#3b6ea5" />
              <rect x="40" y="5" width="10" height="12" fill="#3b6ea5" />
              <text x="30" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="10">車のバッテリー</text>
              <text x="30" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">12V</text>
            </g>

            {/* Outlet */}
            <g transform="translate(310, 30)">
              <rect x="5" y="10" width="50" height="55" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="20" y1="25" x2="20" y2="45" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="40" y1="25" x2="40" y2="45" stroke="#3b6ea5" strokeWidth="3" />
              <text x="30" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="10">コンセント</text>
              <text x="30" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">100V</text>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: さまざまな電源と電圧</text>
          </svg>
          <figcaption>電源の種類によって電圧が異なります。部品に合った電圧を選びます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にシステムを提案するとき、「電源は何を使うか」は重要なポイントです。
            屋外で使うなら電池、屋内で電源が取れるならACアダプタ、
            車載ならシガーソケット（12V）など、使う場所で電源が変わります。
          </p>
          <p>
            「どこで使うか」「どのくらいの時間動かすか」を聞くと、
            電源の選び方が見えてきます。
            マイコンやセンサーの動作電圧に合わせた電源を選ぶことで、
            安定したシステムを提案できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電圧・電流・抵抗の関係を、式で表すとどうなるでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>電圧は、電気を流そうとする「押し」の力です。</li>
            <li>電流は「流れる量」、抵抗は「流れにくさ」です。</li>
            <li>部品には「動作電圧」があり、正しい電圧を供給することが大切です。</li>
          </ol>
        </div>

        <AskBox lessonId="07-voltage" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
