import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson22Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={22} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>ダイオードは電流を一方向に流すだけでした。では、小さな電流で大きな電流を制御できる「トランジスタ」は、どのような仕組みでしょうか?</p>
        </div>

        <h1>第22回: トランジスタとは何か</h1>

        <section>
          <h2>トランジスタは「電気的なスイッチ」</h2>
          <p>
            <Link href="/glossary/transistor" className="glossary-link">トランジスタ</Link>は、
            小さな電流で大きな電流をオン・オフできる部品です。
            水道の蛇口にたとえると、小さな力で蛇口を回すだけで、大量の水を出したり止めたりできるのと同じです。
            機械式のスイッチと違い、電気信号だけで制御できるため、マイコンからの出力で直接操作できます。
          </p>
          <p>
            トランジスタには「ベース（B）」「コレクタ（C）」「エミッタ（E）」という3本の足があります。
            NPNトランジスタの場合、ベースに小さな電流を流すと、コレクタからエミッタへ大きな電流が流れます。
            ベースへの電流を止めると、コレクタ-エミッタ間の電流も止まります。
            つまり、ベースが「蛇口のハンドル」、コレクタ-エミッタ間が「水の通り道」のような関係です。
          </p>

          <div className="analogy">
            <span className="analogy-term">トランジスタ</span>
            <span className="analogy-equals">=</span>
            <span>小さな信号で大きな電流を制御する蛇口</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">トランジスタの基本動作（NPN）</text>
              
              {/* OFF state */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">OFF（ベース電流なし）</text>
                
                {/* VCC */}
                <line x1="70" y1="20" x2="70" y2="35" stroke="#c0392b" strokeWidth="2" />
                <text x="70" y="15" textAnchor="middle" fill="#c0392b" fontSize="8">VCC</text>
                
                {/* Load (lamp) */}
                <circle cx="70" cy="45" r="10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="48" textAnchor="middle" fill="#3b6ea5" fontSize="8">💡</text>
                <text x="95" y="48" fill="#4a4a4a" fontSize="8">負荷</text>
                
                {/* Collector */}
                <line x1="70" y1="55" x2="70" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <text x="80" y="65" fill="#3b6ea5" fontSize="8">C</text>
                
                {/* Transistor body */}
                <circle cx="70" cy="85" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Base */}
                <line x1="40" y1="85" x2="52" y2="85" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="88" fill="#3b6ea5" fontSize="8">B</text>
                
                {/* Internal lines */}
                <line x1="52" y1="70" x2="52" y2="100" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="75" x2="70" y2="67" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="95" x2="70" y2="103" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="66,100 70,103 66,106" fill="#3b6ea5" />
                
                {/* Emitter */}
                <line x1="70" y1="103" x2="70" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <text x="80" y="115" fill="#3b6ea5" fontSize="8">E</text>
                
                {/* GND */}
                <line x1="60" y1="120" x2="80" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="63" y1="125" x2="77" y2="125" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="66" y1="130" x2="74" y2="130" stroke="#3b6ea5" strokeWidth="1" />
                
                {/* X mark showing no current */}
                <line x1="65" y1="58" x2="75" y2="68" stroke="#c0392b" strokeWidth="2" />
                <line x1="75" y1="58" x2="65" y2="68" stroke="#c0392b" strokeWidth="2" />
                
                <text x="70" y="145" textAnchor="middle" fill="#c0392b" fontSize="9">電流流れない</text>
              </g>
              
              {/* ON state */}
              <g transform="translate(190, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">ON（ベースに電流を流す）</text>
                
                {/* VCC */}
                <line x1="70" y1="20" x2="70" y2="35" stroke="#27ae60" strokeWidth="2" />
                <text x="70" y="15" textAnchor="middle" fill="#27ae60" fontSize="8">VCC</text>
                
                {/* Load (lamp lit) */}
                <circle cx="70" cy="45" r="10" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="70" y="48" textAnchor="middle" fill="#f39c12" fontSize="8">💡</text>
                <text x="95" y="48" fill="#4a4a4a" fontSize="8">負荷</text>
                
                {/* Current arrow on collector side */}
                <polygon points="66,55 70,65 74,55" fill="#27ae60" />
                
                {/* Collector */}
                <line x1="70" y1="55" x2="70" y2="70" stroke="#27ae60" strokeWidth="2" />
                <text x="80" y="65" fill="#3b6ea5" fontSize="8">C</text>
                
                {/* Transistor body */}
                <circle cx="70" cy="85" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Base with current */}
                <line x1="20" y1="85" x2="52" y2="85" stroke="#27ae60" strokeWidth="2" />
                <polygon points="40,81 50,85 40,89" fill="#27ae60" />
                <text x="15" y="88" fill="#3b6ea5" fontSize="8">B</text>
                <text x="15" y="100" fill="#27ae60" fontSize="7">小電流</text>
                
                {/* Internal lines */}
                <line x1="52" y1="70" x2="52" y2="100" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="75" x2="70" y2="67" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="95" x2="70" y2="103" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="66,100 70,103 66,106" fill="#3b6ea5" />
                
                {/* Emitter */}
                <line x1="70" y1="103" x2="70" y2="120" stroke="#27ae60" strokeWidth="2" />
                <text x="80" y="115" fill="#3b6ea5" fontSize="8">E</text>
                
                {/* GND */}
                <line x1="60" y1="120" x2="80" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="63" y1="125" x2="77" y2="125" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="66" y1="130" x2="74" y2="130" stroke="#3b6ea5" strokeWidth="1" />
                
                <text x="70" y="145" textAnchor="middle" fill="#27ae60" fontSize="9">大電流が流れる!</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: NPNトランジスタのON/OFF動作</text>
          </svg>
          <figcaption>ベースに小さな電流を流すと、コレクタ-エミッタ間に大きな電流が流れます。</figcaption>
        </figure>

        <section>
          <h2>マイコンでモーターを動かす</h2>
          <p>
            マイコンのGPIOピンは、通常10〜20mA程度しか電流を流せません。
            しかし、小型のモーターでも数百mAの電流が必要です。
            マイコンに直接モーターをつなぐと、電流不足で動かないか、最悪の場合マイコンが壊れます。
          </p>
          <p>
            ここでトランジスタの出番です。
            マイコンのGPIO出力をトランジスタのベースに接続し、モーターをコレクタ側に接続します。
            マイコンからベースへ数mAの電流を流すだけで、モーターに数百mAを流すことができます。
            マイコンは「スイッチを入れる信号」を出すだけで、実際の大電流はトランジスタが担います。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">マイコンでモーターを制御</text>
              
              {/* Microcontroller */}
              <g transform="translate(20, 30)">
                <rect x="0" y="20" width="60" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="9">マイコン</text>
                <text x="30" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">GPIO出力</text>
                
                {/* GPIO pin */}
                <line x1="60" y1="45" x2="90" y2="45" stroke="#3b6ea5" strokeWidth="2" />
                <text x="75" y="40" fill="#4a4a4a" fontSize="7">数mA</text>
              </g>
              
              {/* Base resistor */}
              <g transform="translate(110, 45)">
                <path d="M0 0 L5 -7 L15 7 L25 -7 L35 7 L40 0" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="20" y="18" textAnchor="middle" fill="#4a4a4a" fontSize="8">1kΩ</text>
              </g>
              
              {/* Transistor */}
              <g transform="translate(170, 25)">
                {/* Circle */}
                <circle cx="30" cy="35" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Base */}
                <line x1="-20" y1="35" x2="12" y2="35" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Internal structure */}
                <line x1="12" y1="20" x2="12" y2="50" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="25" x2="30" y2="17" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="45" x2="30" y2="53" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="26,50 30,53 26,56" fill="#3b6ea5" />
                
                {/* Labels */}
                <text x="35" y="15" fill="#3b6ea5" fontSize="8">C</text>
                <text x="-5" y="32" fill="#3b6ea5" fontSize="8">B</text>
                <text x="35" y="60" fill="#3b6ea5" fontSize="8">E</text>
              </g>
              
              {/* Motor and power supply */}
              <g transform="translate(200, 25)">
                {/* VCC line */}
                <line x1="0" y1="-10" x2="0" y2="0" stroke="#c0392b" strokeWidth="2" />
                <text x="0" y="-15" textAnchor="middle" fill="#c0392b" fontSize="8">5V〜12V</text>
                
                {/* Motor */}
                <circle cx="0" cy="15" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="0" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">M</text>
                <text x="20" y="18" fill="#4a4a4a" fontSize="8">モーター</text>
                <text x="20" y="28" fill="#27ae60" fontSize="7">数百mA</text>
                
                {/* Connection to collector */}
                <line x1="0" y1="27" x2="0" y2="42" stroke="#3b6ea5" strokeWidth="2" />
              </g>
              
              {/* GND */}
              <g transform="translate(200, 105)">
                <line x1="-10" y1="0" x2="10" y2="0" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="-7" y1="5" x2="7" y2="5" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="-4" y1="10" x2="4" y2="10" stroke="#3b6ea5" strokeWidth="1" />
              </g>
              
              {/* Explanation box */}
              <g transform="translate(260, 40)">
                <rect x="0" y="0" width="80" height="55" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="40" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">ポイント</text>
                <text x="5" y="30" fill="#4a4a4a" fontSize="8">マイコン: 数mA</text>
                <text x="5" y="42" fill="#4a4a4a" fontSize="8">モーター: 数百mA</text>
                <text x="5" y="52" fill="#27ae60" fontSize="8">→ トランジスタで増幅</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: トランジスタでモーターを制御</text>
          </svg>
          <figcaption>ベース抵抗を入れて、マイコンのGPIO出力をトランジスタのベースに接続します。</figcaption>
        </figure>

        <section>
          <h2>ベース抵抗が必要</h2>
          <p>
            トランジスタのベースに直接電圧をかけると、大きな電流が流れてしまいます。
            ベース-エミッタ間はダイオードのような特性を持ち、電圧が約0.6〜0.7Vを超えると急に電流が流れ始めます。
            マイコンのGPIOを守るためにも、ベース電流を制限する抵抗を入れる必要があります。
          </p>
          <p>
            典型的な値は1kΩ〜10kΩです。
            たとえば、5VのGPIO出力に1kΩを入れると、ベース電流は約4mA程度になります。
            この小さな電流で、数百mAのコレクタ電流を制御できます。
            トランジスタの「電流増幅率（hFE）」という値が、この増幅の度合いを表します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ベース抵抗の計算</text>
              
              {/* Calculation */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="140" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">条件</text>
                <text x="10" y="35" fill="#4a4a4a" fontSize="9">GPIO電圧: 5V</text>
                <text x="10" y="50" fill="#4a4a4a" fontSize="9">ベース-エミッタ間電圧: 0.7V</text>
                <text x="10" y="65" fill="#4a4a4a" fontSize="9">ベース抵抗: 1kΩ</text>
              </g>
              
              {/* Result */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="150" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">計算</text>
                <text x="10" y="35" fill="#4a4a4a" fontSize="9">ベース電流 = (5V - 0.7V) / 1kΩ</text>
                <text x="10" y="50" fill="#3b6ea5" fontSize="10" fontWeight="500">= 4.3mA</text>
                <text x="10" y="65" fill="#4a4a4a" fontSize="9">→ マイコンで十分供給可能</text>
              </g>
              
              {/* Note */}
              <g transform="translate(50, 105)">
                <text x="120" y="0" textAnchor="middle" fill="#4a4a4a" fontSize="9">hFE（電流増幅率）が100なら、コレクタには4.3mA×100=430mAまで流せる</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: ベース抵抗とベース電流の計算</text>
          </svg>
          <figcaption>ベース抵抗でベース電流を制限し、マイコンのGPIOを保護します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「マイコンでモーターを動かしたいのですが」という要望に対して、
            「マイコンの出力だけでは電流が足りないので、トランジスタをスイッチとして使います」と提案できます。
            これにより、マイコンの小さな信号で大きな負荷を安全に制御できることを説明できます。
          </p>
          <p>
            また、「なぜ抵抗が必要なのですか?」と聞かれたときに、
            「ベース電流を制限してマイコンを守るためです」と答えられます。
            回路の意味を説明できると、お客様の信頼につながります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>トランジスタは電気信号で電流を制御しました。では、電磁石でスイッチを動かす「リレー」は、どのような場面で使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>トランジスタは、小さなベース電流で大きなコレクタ-エミッタ電流を制御するスイッチです。</li>
            <li>マイコンでモーターなど大電流負荷を動かすとき、トランジスタを間に入れて増幅します。</li>
            <li>ベースには必ず抵抗を入れて、電流を制限します（1kΩ〜10kΩ程度）。</li>
          </ol>
        </div>

        <AskBox lessonId="22-transistor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
