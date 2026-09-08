import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson30Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={30} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Phase 3の最後として、ここまで学んだ部品と知識を組み合わせて、「測る→判断→動かす」の一連の流れを実践しましょう。</p>
        </div>

        <h1>第30回: 入出力を組み合わせる</h1>

        <section>
          <h2>自動化の基本パターン: 測る→判断→動かす</h2>
          <p>
            Phase 3で学んできた部品と知識を組み合わせると、「自動化」ができます。
            自動化の基本パターンは「測る→判断→動かす」です。
            <Link href="/glossary/sensor" className="glossary-link">センサー</Link>で状況を測り、
            マイコンで条件を判断し、
            <Link href="/glossary/actuator" className="glossary-link">アクチュエータ</Link>（モーター、リレー、LEDなど）で動作します。
          </p>
          <p>
            たとえば「温度が30℃を超えたらファンを回す」という仕組みは、
            温度センサー（測る）→ マイコン（30℃以上か判断）→ リレーでファンをON（動かす）
            という流れです。
            お客様の「困りごと」を聞いて、この流れで解決できないか考えるのが技術提案の第一歩です。
          </p>

          <div className="analogy">
            <span className="analogy-term">自動化</span>
            <span className="analogy-equals">=</span>
            <span>測る → 判断 → 動かす の繰り返し</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">自動化の基本パターン</text>
              
              {/* Measure */}
              <g transform="translate(0, 35)">
                <rect x="0" y="0" width="80" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="500">測る</text>
                <text x="40" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">センサー</text>
                <text x="40" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度・光・距離...</text>
              </g>
              
              {/* Arrow */}
              <g transform="translate(85, 55)">
                <line x1="0" y1="10" x2="30" y2="10" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="30,5 40,10 30,15" fill="#3b6ea5" />
              </g>
              
              {/* Judge */}
              <g transform="translate(130, 35)">
                <rect x="0" y="0" width="80" height="60" rx="5" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#f39c12" fontSize="11" fontWeight="500">判断</text>
                <text x="40" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">マイコン</text>
                <text x="40" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">条件分岐・計算</text>
              </g>
              
              {/* Arrow */}
              <g transform="translate(215, 55)">
                <line x1="0" y1="10" x2="30" y2="10" stroke="#f39c12" strokeWidth="2" />
                <polygon points="30,5 40,10 30,15" fill="#f39c12" />
              </g>
              
              {/* Move */}
              <g transform="translate(260, 35)">
                <rect x="0" y="0" width="80" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#27ae60" fontSize="11" fontWeight="500">動かす</text>
                <text x="40" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">アクチュエータ</text>
                <text x="40" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">モーター・リレー...</text>
              </g>
              
              {/* Feedback loop */}
              <g transform="translate(40, 100)">
                <path d="M0 0 L0 20 L260 20 L260 0" fill="none" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="4,2" />
                <polygon points="0,-5 0,5 -8,0" fill="#3b6ea5" />
                <text x="130" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">繰り返し（ループ）</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 自動化の基本パターン</text>
          </svg>
          <figcaption>センサーで測り、マイコンで判断し、アクチュエータで動かす流れが自動化の基本です。</figcaption>
        </figure>

        <section>
          <h2>例1: 温度監視システム</h2>
          <p>
            工場で「機械の温度が上がりすぎたらアラームを鳴らしたい」という要望があったとします。
            温度センサー（アナログ出力）→ <Link href="/glossary/adc" className="glossary-link">ADC</Link>でデジタル化 → マイコンで判定 → ブザーとLEDで警告
            という流れで実現できます。
          </p>
          <p>
            この構成では、Phase 3で学んだ知識がすべて活きます。
            センサーのアナログ出力をADCで読み取り、しきい値と比較します。
            LEDは<Link href="/glossary/transistor" className="glossary-link">トランジスタ</Link>か
            <Link href="/glossary/mosfet" className="glossary-link">MOSFET</Link>で駆動し、
            ブザーも同様に制御します。必要に応じて<Link href="/glossary/relay" className="glossary-link">リレー</Link>で
            外部機器に通報することもできます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">例1: 温度監視システム</text>
              
              {/* Temperature sensor */}
              <g transform="translate(0, 30)">
                <rect x="0" y="10" width="60" height="45" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="8">温度</text>
                <text x="30" y="42" textAnchor="middle" fill="#3b6ea5" fontSize="8">センサー</text>
                <text x="30" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="7">アナログ</text>
              </g>
              
              {/* Arrow */}
              <line x1="60" y1="42" x2="85" y2="42" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="80,38 90,42 80,46" fill="#3b6ea5" />
              
              {/* MCU */}
              <g transform="translate(90, 25)">
                <rect x="0" y="0" width="80" height="60" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">マイコン</text>
                <line x1="5" y1="25" x2="75" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="40" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">ADCで読み取り</text>
                <text x="40" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">30℃超えたら警告</text>
              </g>
              
              {/* Outputs */}
              <g transform="translate(185, 20)">
                {/* Arrow to LED */}
                <line x1="0" y1="15" x2="30" y2="15" stroke="#27ae60" strokeWidth="2" />
                <polygon points="25,11 35,15 25,19" fill="#27ae60" />
                
                {/* LED */}
                <rect x="35" y="5" width="50" height="25" rx="2" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" />
                <text x="60" y="20" textAnchor="middle" fill="#c0392b" fontSize="8">警告LED</text>
                
                {/* Arrow to Buzzer */}
                <line x1="0" y1="50" x2="30" y2="50" stroke="#27ae60" strokeWidth="2" />
                <polygon points="25,46 35,50 25,54" fill="#27ae60" />
                
                {/* Buzzer */}
                <rect x="35" y="40" width="50" height="25" rx="2" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" />
                <text x="60" y="55" textAnchor="middle" fill="#f39c12" fontSize="8">ブザー</text>
              </g>
              
              {/* Relay option */}
              <g transform="translate(260, 50)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#27ae60" strokeWidth="1" strokeDasharray="3,2" />
                <rect x="20" y="-12" width="50" height="25" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="45" y="3" textAnchor="middle" fill="#3b6ea5" fontSize="7">リレー</text>
                <text x="45" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="6">外部通報など</text>
              </g>
              
              {/* Parts used */}
              <g transform="translate(20, 115)">
                <rect x="0" y="0" width="300" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">使う知識</text>
                <text x="150" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="8">ADC、トランジスタ/MOSFET、プルアップ、必要ならリレー</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 温度監視システムの構成</text>
          </svg>
          <figcaption>温度を測り、しきい値を超えたらLEDとブザーで警告する構成です。</figcaption>
        </figure>

        <section>
          <h2>例2: 明るさで照明を制御</h2>
          <p>
            「暗くなったら自動で照明をつけたい」という要望には、
            光センサー → マイコン → リレーで照明ON という流れで対応できます。
            光センサーの出力をADCで読み、一定の暗さを下回ったらリレーを動作させます。
          </p>
          <p>
            このシステムでは<Link href="/glossary/pwm" className="glossary-link">PWM</Link>を使って、
            明るさに応じて照明の光量を調整することもできます。
            「暗いほど明るく、明るいほど暗く」という連続制御で、より快適な照明環境を作れます。
            PWMでMOSFETを制御し、照明の電力を調整します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">例2: 明るさで照明を制御</text>
              
              {/* Simple on/off */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">パターンA: ON/OFF制御</text>
                
                <rect x="0" y="15" width="45" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <text x="22" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="7">光センサー</text>
                
                <line x1="45" y1="30" x2="55" y2="30" stroke="#3b6ea5" strokeWidth="1" />
                <polygon points="52,27 58,30 52,33" fill="#3b6ea5" />
                
                <rect x="58" y="15" width="35" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <text x="75" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="7">MCU</text>
                
                <line x1="93" y1="30" x2="103" y2="30" stroke="#3b6ea5" strokeWidth="1" />
                <polygon points="100,27 106,30 100,33" fill="#3b6ea5" />
                
                <rect x="106" y="15" width="35" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <text x="123" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="7">リレー</text>
                
                <line x1="141" y1="30" x2="151" y2="30" stroke="#3b6ea5" strokeWidth="1" />
                
                <circle cx="160" cy="30" r="8" fill="#fff9e6" stroke="#f39c12" strokeWidth="1" />
                <text x="160" y="33" textAnchor="middle" fill="#f39c12" fontSize="8">💡</text>
              </g>
              
              {/* PWM control */}
              <g transform="translate(180, 30)">
                <text x="80" y="0" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">パターンB: PWM調光</text>
                
                <rect x="0" y="15" width="45" height="30" rx="2" fill="none" stroke="#27ae60" strokeWidth="1" />
                <text x="22" y="33" textAnchor="middle" fill="#27ae60" fontSize="7">光センサー</text>
                
                <line x1="45" y1="30" x2="55" y2="30" stroke="#27ae60" strokeWidth="1" />
                <polygon points="52,27 58,30 52,33" fill="#27ae60" />
                
                <rect x="58" y="15" width="35" height="30" rx="2" fill="none" stroke="#27ae60" strokeWidth="1" />
                <text x="75" y="28" textAnchor="middle" fill="#27ae60" fontSize="6">MCU</text>
                <text x="75" y="38" textAnchor="middle" fill="#27ae60" fontSize="6">PWM</text>
                
                <line x1="93" y1="30" x2="103" y2="30" stroke="#27ae60" strokeWidth="1" />
                <polygon points="100,27 106,30 100,33" fill="#27ae60" />
                
                <rect x="106" y="15" width="40" height="30" rx="2" fill="none" stroke="#27ae60" strokeWidth="1" />
                <text x="126" y="33" textAnchor="middle" fill="#27ae60" fontSize="6">MOSFET</text>
                
                <line x1="146" y1="30" x2="156" y2="30" stroke="#27ae60" strokeWidth="1" />
                
                <circle cx="165" cy="30" r="8" fill="#fff9e6" stroke="#f39c12" strokeWidth="2" />
                <text x="165" y="33" textAnchor="middle" fill="#f39c12" fontSize="8">💡</text>
                <text x="165" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">明るさ可変</text>
              </g>
              
              {/* Note */}
              <g transform="translate(50, 90)">
                <text x="120" y="0" textAnchor="middle" fill="#4a4a4a" fontSize="8">ON/OFFだけならリレー、連続調光ならPWM+MOSFET</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 明るさ制御の2つのパターン</text>
          </svg>
          <figcaption>単純なON/OFFか、PWMによる連続調光かで、使う部品が変わります。</figcaption>
        </figure>

        <section>
          <h2>提案のコツ: お客様の「困りごと」を聞く</h2>
          <p>
            技術提案の第一歩は、お客様の「困りごと」をしっかり聞くことです。
            「温度が気になる」「暗いと作業しにくい」「機械の異常に気づきにくい」といった声を聞いたら、
            「測る→判断→動かす」のフレームワークで解決策を考えます。
          </p>
          <p>
            「何を測りたいか」→ 適切なセンサーを選ぶ。
            「どう判断するか」→ しきい値や条件を決める。
            「何を動かすか」→ 表示、警告、制御の方法を選ぶ。
            Phase 3で学んだ部品の知識があれば、具体的な構成を提案できます。
            Phase 4以降では、より多くのセンサーや通信技術を学び、提案の幅を広げていきます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">提案のフレームワーク</text>
              
              {/* Listen */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="90" height="50" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">聞く</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">お客様の困りごと</text>
                <text x="45" y="47" textAnchor="middle" fill="#4a4a4a" fontSize="7">「〜が大変」「〜したい」</text>
              </g>
              
              {/* Arrow */}
              <line x1="95" y1="55" x2="115" y2="55" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="110,51 120,55 110,59" fill="#3b6ea5" />
              
              {/* Think */}
              <g transform="translate(125, 30)">
                <rect x="0" y="0" width="90" height="50" rx="5" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">考える</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">測る→判断→動かす</text>
                <text x="45" y="47" textAnchor="middle" fill="#4a4a4a" fontSize="7">で解決できないか?</text>
              </g>
              
              {/* Arrow */}
              <line x1="220" y1="55" x2="240" y2="55" stroke="#f39c12" strokeWidth="2" />
              <polygon points="235,51 245,55 235,59" fill="#f39c12" />
              
              {/* Propose */}
              <g transform="translate(250, 30)">
                <rect x="0" y="0" width="90" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">提案する</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">具体的な構成と部品</text>
                <text x="45" y="47" textAnchor="middle" fill="#4a4a4a" fontSize="7">「こうすれば解決できます」</text>
              </g>
              
              {/* Phase 3 knowledge */}
              <g transform="translate(30, 100)">
                <rect x="0" y="0" width="280" height="35" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">Phase 3の知識を活用</text>
                <text x="140" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="8">ADC、PWM、トランジスタ、MOSFET、リレー、デバウンス...</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図4: お客様の困りごとから提案へ</text>
          </svg>
          <figcaption>困りごとを聞き、「測る→判断→動かす」で考え、具体的な構成を提案します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            Phase 3で学んだ知識を組み合わせれば、多くの自動化ニーズに対応できます。
            「温度が上がりすぎる」→ 温度センサー + ファン制御。
            「人が来たら知らせたい」→ 人感センサー + ブザー + LED。
            「手動で操作するのが面倒」→ センサー + 自動制御。
          </p>
          <p>
            大切なのは、いきなり複雑なシステムを提案しないことです。
            まずは「測る」「判断」「動かす」のどの部分が重要かを見極め、
            シンプルな構成から始めることをお勧めします。
            動くものを見せてから、必要に応じて機能を追加していくのが成功のコツです。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 3「部品と入力・出力」は以上です。Phase 4では、より多くのセンサーを学び、「世界を測る」力を身につけます。温度、距離、振動、傾き...様々なセンサーの原理と使い方を学んでいきましょう。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>自動化の基本パターンは「測る（センサー）→ 判断（マイコン）→ 動かす（アクチュエータ）」です。</li>
            <li>お客様の困りごとを聞き、このフレームワークで解決策を考えます。</li>
            <li>Phase 3の知識（ADC、PWM、トランジスタ、MOSFET、リレー、デバウンス）を組み合わせて提案します。</li>
          </ol>
        </div>

        <AskBox lessonId="30-combine-io" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
