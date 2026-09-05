import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson13Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={13} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>回路に電気を供給する「電源」には、どのような種類があるのでしょうか?</p>
        </div>

        <h1>第13回: 電源の種類</h1>

        <section>
          <h2>電源は回路の「動力」</h2>
          <p>
            <Link href="/glossary/power-source" className="glossary-link">電源</Link>は、
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>に電気を供給する部品です。
            電池、USBポート、ACアダプター、コンセントなど、さまざまな種類があります。
            どの電源も、<Link href="/glossary/voltage" className="glossary-link">電圧</Link>（押す力）を生み出して
            <Link href="/glossary/current" className="glossary-link">電流</Link>を流す役割は同じです。
          </p>
          <p>
            電源には大きく分けて「直流（DC）」と「交流（AC）」があります。
            直流は電池のように、常に同じ方向に電流が流れます。
            交流は家庭のコンセントのように、電流の向きが1秒間に何十回も入れ替わります。
            電子工作やセンサー回路では、主に直流を使います。
          </p>

          <div className="analogy">
            <span className="analogy-term">直流（DC）</span>
            <span className="analogy-equals">=</span>
            <span>一定方向に流れる（電池、USB）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">交流（AC）</span>
            <span className="analogy-equals">=</span>
            <span>向きが変わる（コンセント）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* DC waveform */}
            <g transform="translate(30, 30)">
              <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">直流（DC）</text>
              
              {/* Axis */}
              <line x1="0" y1="50" x2="140" y2="50" stroke="#999" strokeWidth="1" />
              <line x1="10" y1="20" x2="10" y2="80" stroke="#999" strokeWidth="1" />
              <text x="5" y="25" fill="#999" fontSize="8">V</text>
              <text x="145" y="53" fill="#999" fontSize="8">t</text>
              
              {/* DC line */}
              <line x1="10" y1="30" x2="130" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Label */}
              <text x="70" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="9">電圧が一定</text>
            </g>

            {/* AC waveform */}
            <g transform="translate(220, 30)">
              <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">交流（AC）</text>
              
              {/* Axis */}
              <line x1="0" y1="50" x2="140" y2="50" stroke="#999" strokeWidth="1" />
              <line x1="10" y1="20" x2="10" y2="80" stroke="#999" strokeWidth="1" />
              <text x="5" y="25" fill="#999" fontSize="8">V</text>
              <text x="145" y="53" fill="#999" fontSize="8">t</text>
              
              {/* AC sine wave */}
              <path d="M10 50 Q30 20 50 50 Q70 80 90 50 Q110 20 130 50" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Label */}
              <text x="70" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="9">電圧が周期的に変化</text>
            </g>

            {/* Examples */}
            <g transform="translate(50, 130)">
              <text x="30" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9">電池、USB、</text>
              <text x="30" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="9">ACアダプター出力</text>
            </g>
            <g transform="translate(240, 130)">
              <text x="50" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9">家庭のコンセント</text>
              <text x="50" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="9">(100V/50-60Hz)</text>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 直流と交流の違い</text>
          </svg>
          <figcaption>直流は電圧が一定ですが、交流は電圧が周期的にプラスとマイナスを行き来します。</figcaption>
        </figure>

        <section>
          <h2>よく使う電源の種類</h2>
          <p>
            電子工作でよく使う電源を紹介します。
            乾電池は最も手軽で、単3電池1本で1.5V、2本直列で3V、4本で6Vが得られます。
            USB電源は5Vで、パソコンやスマホの充電器から取れるため便利です。
            ACアダプターは、コンセントの交流100Vを直流に変換して出力します。出力電圧は製品によって異なり、3.3V、5V、9V、12Vなどがあります。
          </p>
          <p>
            電源を選ぶときは、使う部品が必要とする電圧と電流を確認します。
            Arduino（マイコンボード）は5Vまたは3.3V、Raspberry Piは5Vで動きます。
            LEDは電圧よりも電流が重要で、適切な<Link href="/glossary/resistance" className="glossary-link">抵抗</Link>を使って電流を制限します。
            部品の「定格電圧」を超えないように注意が必要です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Battery */}
            <g transform="translate(30, 30)">
              <rect x="20" y="10" width="60" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="80" y="20" width="8" height="15" fill="#3b6ea5" />
              <text x="50" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="10">単3</text>
              <text x="50" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">乾電池</text>
              <text x="50" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">1.5V / 本</text>
              <text x="50" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="8">手軽、持ち運び可</text>
            </g>

            {/* USB */}
            <g transform="translate(140, 30)">
              <rect x="20" y="10" width="55" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="30" y="15" width="15" height="15" fill="#3b6ea5" opacity="0.3" />
              <text x="47" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">USB電源</text>
              <text x="47" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">5V</text>
              <text x="47" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="8">PC/充電器から</text>
            </g>

            {/* AC Adapter */}
            <g transform="translate(250, 25)">
              <rect x="10" y="10" width="55" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="65" y1="30" x2="90" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="95" cy="30" r="6" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="95" cy="30" r="2" fill="#3b6ea5" />
              <text x="52" y="70" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">ACアダプター</text>
              <text x="52" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="9">3.3V〜24V</text>
              <text x="52" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="8">安定した電源</text>
            </g>

            {/* Voltage comparison */}
            <g transform="translate(30, 120)">
              <text x="0" y="15" fill="#3b6ea5" fontSize="10" fontWeight="500">よく使う電圧</text>
              <line x1="0" y1="25" x2="340" y2="25" stroke="#e0e0e0" strokeWidth="1" />
              
              <text x="0" y="45" fill="#3b6ea5" fontSize="9">1.5V</text>
              <text x="50" y="45" fill="#4a4a4a" fontSize="8">乾電池1本</text>
              
              <text x="0" y="60" fill="#3b6ea5" fontSize="9">3.3V</text>
              <text x="50" y="60" fill="#4a4a4a" fontSize="8">ESP32、センサー</text>
              
              <text x="150" y="45" fill="#3b6ea5" fontSize="9">5V</text>
              <text x="180" y="45" fill="#4a4a4a" fontSize="8">USB、Arduino、Raspberry Pi</text>
              
              <text x="150" y="60" fill="#3b6ea5" fontSize="9">12V</text>
              <text x="180" y="60" fill="#4a4a4a" fontSize="8">モーター、LED照明</text>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 電源の種類と電圧</text>
          </svg>
          <figcaption>用途に合わせて電源を選びます。USB電源の5Vは、多くのマイコンボードでそのまま使えて便利です。</figcaption>
        </figure>

        <section>
          <h2>電源の「容量」とは</h2>
          <p>
            電源には「どれだけの電流を供給できるか」という容量があります。
            これを「定格電流」や「出力容量」と呼びます。
            たとえば「5V 2A」と書いてあるUSB充電器は、5Vの電圧で最大2A（2000mA）の電流を供給できます。
          </p>
          <p>
            回路が必要とする電流よりも、電源の容量が大きければ問題ありません。
            逆に、容量より多くの電流を取ろうとすると、電圧が下がったり、電源が熱くなったりします。
            LEDを10個並列につなぐと、各LEDに20mA流れるとして合計200mA必要です。
            電源の容量は余裕を持って選びます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            {/* Capacity illustration */}
            <g transform="translate(50, 20)">
              <text x="150" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">電源容量と回路の消費電流</text>
              
              {/* Power source capacity bar */}
              <rect x="0" y="30" width="250" height="30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="-10" y="50" textAnchor="end" fill="#3b6ea5" fontSize="9">電源</text>
              <rect x="0" y="30" width="250" height="30" fill="#3b6ea5" opacity="0.1" />
              <text x="125" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">容量: 500mA</text>
              
              {/* Circuit consumption bar - OK case */}
              <rect x="0" y="70" width="150" height="25" fill="#27ae60" opacity="0.3" stroke="#27ae60" strokeWidth="2" />
              <text x="-10" y="87" textAnchor="end" fill="#27ae60" fontSize="9">使用</text>
              <text x="75" y="87" textAnchor="middle" fill="#27ae60" fontSize="10">300mA ✓ OK</text>
              
              {/* NG case */}
              <rect x="0" y="105" width="300" height="25" fill="#c0392b" opacity="0.3" stroke="#c0392b" strokeWidth="2" />
              <text x="-10" y="122" textAnchor="end" fill="#c0392b" fontSize="9">使用</text>
              <text x="150" y="122" textAnchor="middle" fill="#c0392b" fontSize="10">600mA ✕ 容量オーバー</text>
            </g>

            <text x="200" y="145" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 電源容量は余裕を持って選ぶ</text>
          </svg>
          <figcaption>回路が使う電流よりも、電源の容量が大きいことを確認します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にシステムを提案するとき、電源の選定は重要な要素です。
            「USB給電で動きますか?」「何ボルトの電源が必要ですか?」という質問に答えられると、
            具体的な構成を提案できます。
          </p>
          <p>
            たとえば、センサーとマイコンを使ったシステムなら「USBの5Vで十分です」、
            大きなモーターを動かすなら「12Vの電源が別途必要です」といった説明ができます。
            電源の種類と容量を理解していると、実現可能な提案ができるようになります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>回路図でよく見る「GND」とは何でしょうか? なぜすべての回路に登場するのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>電源には直流（DC）と交流（AC）があり、電子工作では主に直流を使います。</li>
            <li>乾電池は1.5V、USB電源は5V、ACアダプターは様々な電圧があります。</li>
            <li>電源には容量があり、回路が必要とする電流よりも大きい容量を選びます。</li>
          </ol>
        </div>

        <AskBox lessonId="13-power-sources" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
