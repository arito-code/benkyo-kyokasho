import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import Formula from '@/components/Formula'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson15Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={15} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>LEDを光らせるのに「抵抗が必要」と習いました。実際に抵抗の値を計算するには、どうすればよいでしょうか?</p>
        </div>

        <h1>第15回: LEDと抵抗</h1>

        <section>
          <h2>LEDには「順方向電圧」がある</h2>
          <p>
            <Link href="/glossary/led" className="glossary-link">LED</Link>（発光ダイオード）は、
            電流が流れると光る部品です。
            しかしLEDには特徴的な性質があります。
            それは「順方向電圧（Vf）」です。
            LEDを光らせるには、この電圧を超える必要があり、かつこの電圧がLED自体で消費されます。
          </p>
          <p>
            赤色LEDの順方向電圧は約2Vです。
            つまり、5Vの電源を使う場合、LEDで2V消費され、残りの3Vがどこかにかかります。
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>を入れないと、
            残りの3Vで大きな<Link href="/glossary/current" className="glossary-link">電流</Link>が流れてLEDが壊れます。
            抵抗を入れて、この「余った電圧」を受け止め、電流を制限するのです。
          </p>

          <div className="analogy">
            <span className="analogy-term">順方向電圧（Vf）</span>
            <span className="analogy-equals">=</span>
            <span>LEDが消費する電圧（赤色LEDは約2V）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* LED circuit with voltage distribution */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">LEDと抵抗の電圧分配</text>
              
              {/* Battery 5V */}
              <rect x="10" y="50" width="40" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="30" y="70" textAnchor="middle" fill="#3b6ea5" fontSize="10">＋</text>
              <text x="30" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="10">−</text>
              <text x="30" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">5V</text>
              
              {/* Wire from + */}
              <line x1="50" y1="65" x2="90" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor */}
              <path d="M90 65 L95 55 L105 75 L115 55 L125 75 L135 55 L140 65" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="115" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="9">抵抗</text>
              
              {/* Voltage across resistor */}
              <rect x="90" y="80" width="50" height="18" fill="#3b6ea5" opacity="0.1" stroke="#3b6ea5" strokeWidth="1" />
              <text x="115" y="93" textAnchor="middle" fill="#3b6ea5" fontSize="9">3V</text>
              
              {/* Wire to LED */}
              <line x1="140" y1="65" x2="180" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED */}
              <path d="M190 80 L220 80 L205 55 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="185" y1="85" x2="225" y2="85" stroke="#3b6ea5" strokeWidth="2" />
              <text x="205" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED</text>
              {/* Light rays */}
              <line x1="190" y1="45" x2="182" y2="37" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="205" y1="40" x2="205" y2="30" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="220" y1="45" x2="228" y2="37" stroke="#3b6ea5" strokeWidth="1.5" />
              
              {/* Voltage across LED (Vf) */}
              <rect x="185" y="90" width="40" height="18" fill="#c0392b" opacity="0.1" stroke="#c0392b" strokeWidth="1" />
              <text x="205" y="103" textAnchor="middle" fill="#c0392b" fontSize="9">2V (Vf)</text>
              
              {/* Wire back to - */}
              <line x1="205" y1="85" x2="205" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="130" x2="205" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="100" x2="30" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrow */}
              <polygon points="70,61 80,65 70,69" fill="#3b6ea5" />
              <text x="75" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">20mA</text>
              
              {/* Equation */}
              <g transform="translate(250, 50)">
                <text x="0" y="15" fill="#3b6ea5" fontSize="10">電源 = 抵抗 + LED</text>
                <text x="0" y="35" fill="#3b6ea5" fontSize="10" fontWeight="500">5V = 3V + 2V</text>
                <text x="0" y="60" fill="#4a4a4a" fontSize="9">Vf（順方向電圧）は</text>
                <text x="0" y="75" fill="#4a4a4a" fontSize="9">必ず考慮する!</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: LEDの順方向電圧（Vf）</text>
          </svg>
          <figcaption>5Vの電源でLEDを光らせると、LEDで2V、抵抗で残りの3Vを消費します。</figcaption>
        </figure>

        <section>
          <h2>抵抗値の計算方法</h2>
          <p>
            LEDを安全に光らせる抵抗値を、<Link href="/glossary/ohms-law" className="glossary-link">オームの法則</Link>で計算します。
            手順は以下の通りです。
          </p>
          <ol>
            <li>電源電圧からLEDのVfを引いて、抵抗にかかる電圧を求める</li>
            <li>LEDに流したい電流を決める（一般的に20mA = 0.02A）</li>
            <li>オームの法則 R = V ÷ I で抵抗値を計算する</li>
          </ol>
          <p>
            たとえば、5Vの電源で赤色LED（Vf = 2V）を20mAで光らせたい場合、
            抵抗にかかる電圧は 5V − 2V = 3V です。
            必要な抵抗は R = 3V ÷ 0.02A = 150Ω となります。
            実際には150Ωがなければ、150Ωに近い220Ωや330Ωを使います（電流は少し減りますが安全です）。
          </p>

          <Formula expression="R = \frac{V_{電源} - V_f}{I_{LED}}" />
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Calculation example */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">抵抗値の計算例</text>
              
              {/* Given values */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="140" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">条件</text>
                <text x="10" y="38" fill="#4a4a4a" fontSize="10">電源電圧: 5V</text>
                <text x="10" y="53" fill="#4a4a4a" fontSize="10">LED Vf: 2V（赤色）</text>
                <text x="10" y="68" fill="#4a4a4a" fontSize="10">目標電流: 20mA</text>
              </g>
              
              {/* Calculation steps */}
              <g transform="translate(180, 30)">
                <rect x="0" y="0" width="160" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="80" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">計算</text>
                <text x="10" y="38" fill="#4a4a4a" fontSize="10">抵抗の電圧 = 5V − 2V = 3V</text>
                <text x="10" y="55" fill="#4a4a4a" fontSize="10">R = 3V ÷ 0.02A</text>
                <text x="10" y="70" fill="#3b6ea5" fontSize="11" fontWeight="500">= 150Ω</text>
              </g>
              
              {/* Common LED Vf values */}
              <g transform="translate(20, 115)">
                <text x="0" y="15" fill="#3b6ea5" fontSize="10" fontWeight="500">LEDの色と順方向電圧（Vf）の目安</text>
                <line x1="0" y1="22" x2="300" y2="22" stroke="#e0e0e0" strokeWidth="1" />
                
                <rect x="0" y="30" width="60" height="20" fill="#ff4444" opacity="0.3" rx="2" />
                <text x="30" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="9">赤 1.8〜2.2V</text>
                
                <rect x="70" y="30" width="60" height="20" fill="#ffaa00" opacity="0.3" rx="2" />
                <text x="100" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="9">橙 2.0〜2.2V</text>
                
                <rect x="140" y="30" width="60" height="20" fill="#44ff44" opacity="0.3" rx="2" />
                <text x="170" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="9">緑 2.0〜3.5V</text>
                
                <rect x="210" y="30" width="60" height="20" fill="#4444ff" opacity="0.3" rx="2" />
                <text x="240" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="9">青 3.0〜3.5V</text>
                
                <rect x="280" y="30" width="60" height="20" fill="#ffffff" stroke="#999" strokeWidth="1" rx="2" />
                <text x="310" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="9">白 3.0〜3.5V</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 抵抗値の計算</text>
          </svg>
          <figcaption>LEDの色によってVfが異なります。青や白のLEDはVfが高いため、低い電圧の電源では光らないことがあります。</figcaption>
        </figure>

        <section>
          <h2>抵抗がないとどうなるか</h2>
          <p>
            LEDに抵抗をつけずに電源を直接つなぐとどうなるでしょうか。
            LEDは内部抵抗が非常に小さいため、大量の電流が流れようとします。
            その結果、LEDが発熱して壊れたり、最悪の場合は発火することもあります。
          </p>
          <p>
            抵抗は「電流の制限役」です。
            ちょうど蛇口を絞って水量を調整するように、抵抗で電流を適切な量に抑えます。
            LEDのデータシートには「最大電流」が記載されています。
            一般的なLEDは20mAが上限ですが、明るさと寿命のバランスを考えて10〜15mAで使うこともあります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Safe vs dangerous */}
            <g transform="translate(30, 20)">
              {/* Safe circuit */}
              <g transform="translate(0, 0)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="600">✓ 抵抗あり（安全）</text>
                
                <rect x="0" y="20" width="30" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="15" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
                
                <line x1="30" y1="35" x2="50" y2="35" stroke="#3b6ea5" strokeWidth="2" />
                
                <path d="M50 35 L55 28 L63 42 L71 28 L79 42 L85 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                <line x1="85" y1="35" x2="100" y2="35" stroke="#3b6ea5" strokeWidth="2" />
                
                <path d="M105 45 L120 45 L112 28 Z" fill="none" stroke="#27ae60" strokeWidth="2" />
                <line x1="100" y1="48" x2="125" y2="48" stroke="#27ae60" strokeWidth="2" />
                
                <line x1="112" y1="52" x2="112" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="70" x2="112" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="50" x2="15" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="70" y="95" textAnchor="middle" fill="#27ae60" fontSize="9">20mA → LEDが安全に光る</text>
              </g>
              
              {/* Dangerous circuit */}
              <g transform="translate(200, 0)">
                <text x="60" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="600">✕ 抵抗なし（危険）</text>
                
                <rect x="0" y="20" width="30" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="15" y="38" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
                
                <line x1="30" y1="35" x2="70" y2="35" stroke="#3b6ea5" strokeWidth="2" />
                
                <path d="M75 45 L90 45 L82 28 Z" fill="none" stroke="#c0392b" strokeWidth="2" />
                <line x1="70" y1="48" x2="95" y2="48" stroke="#c0392b" strokeWidth="2" />
                
                {/* X marks */}
                <line x1="72" y1="25" x2="92" y2="55" stroke="#c0392b" strokeWidth="2" />
                <line x1="92" y1="25" x2="72" y2="55" stroke="#c0392b" strokeWidth="2" />
                
                <line x1="82" y1="52" x2="82" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="70" x2="82" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="50" x2="15" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="60" y="95" textAnchor="middle" fill="#c0392b" fontSize="9">大電流 → LEDが壊れる!</text>
              </g>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 抵抗の有無による違い</text>
          </svg>
          <figcaption>抵抗なしでLEDに電源をつなぐと、過大な電流でLEDが壊れます。必ず抵抗を入れましょう。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「LEDを使いたい」という要望があったとき、「何色のLEDですか? 電源は何Vですか?」と聞いて、
            適切な抵抗値をその場で計算できると信頼が増します。
            青色LEDはVfが高い（約3V）ので、3.3Vの電源では使いにくい、といった判断もできます。
          </p>
          <p>
            よく使う組み合わせとして、5V電源で赤色LED（Vf≈2V）を20mAで光らせる場合、
            R = (5−2) ÷ 0.02 = 150Ω。手持ちに150Ωがなければ220Ωや330Ωを使っても問題ありません。
            抵抗が大きいと電流が減って暗くなりますが、安全側に倒れます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>回路のオン・オフを切り替える「スイッチ」や「ボタン」は、どのような仕組みでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>LEDには順方向電圧（Vf）があります。赤色LEDは約2V、青や白は約3Vです。</li>
            <li>抵抗値は R = (電源電圧 − Vf) ÷ 電流 で計算します。</li>
            <li>抵抗を入れないとLEDは壊れます。必ず電流制限用の抵抗を使います。</li>
          </ol>
        </div>

        <AskBox lessonId="15-led-resistor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
