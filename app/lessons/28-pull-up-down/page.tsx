import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson28Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={28} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>出力の制御を学びました。入力側に戻って、スイッチやボタンを安定して読み取るための「プルアップ」と「プルダウン」について学びましょう。</p>
        </div>

        <h1>第28回: プルアップとプルダウン</h1>

        <section>
          <h2>「浮いた」入力は不安定</h2>
          <p>
            マイコンの入力ピンにスイッチをつなぐとき、スイッチが押されていない状態で何が起きるでしょうか。
            スイッチが開いていると、入力ピンはどこにもつながっていない「浮いた」状態になります。
            浮いた入力ピンは、周囲のノイズを拾って勝手にHIGHになったりLOWになったりします。
            これでは、スイッチを押していないのに押されたと誤認してしまいます。
          </p>
          <p>
            この問題を解決するのが「プルアップ抵抗」と「プルダウン抵抗」です。
            <Link href="/glossary/pull-up" className="glossary-link">プルアップ</Link>は入力を電源電圧側に、
            <Link href="/glossary/pull-down" className="glossary-link">プルダウン</Link>はGND側に引っ張る抵抗です。
            これにより、スイッチが開いているときの入力状態が安定します。
          </p>

          <div className="analogy">
            <span className="analogy-term">浮いた入力</span>
            <span className="analogy-equals">=</span>
            <span>風でゆらゆら揺れるフラフラ状態</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">浮いた入力の問題</text>
              
              {/* Without resistor */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">抵抗なし（危険）</text>
                
                {/* VCC */}
                <text x="70" y="25" textAnchor="middle" fill="#c0392b" fontSize="8">VCC</text>
                <line x1="70" y1="30" x2="70" y2="45" stroke="#c0392b" strokeWidth="2" />
                
                {/* Switch (open) */}
                <circle cx="70" cy="50" r="3" fill="#3b6ea5" />
                <line x1="70" y1="53" x2="85" y2="65" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="70" cy="75" r="3" fill="#3b6ea5" />
                
                {/* To MCU */}
                <line x1="73" y1="75" x2="110" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="110" y="60" width="30" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="125" y="78" textAnchor="middle" fill="#3b6ea5" fontSize="7">MCU</text>
                
                {/* Floating symbol */}
                <text x="90" y="60" fill="#c0392b" fontSize="8">?</text>
                <path d="M85 85 Q90 80 95 85 Q100 90 105 85" fill="none" stroke="#c0392b" strokeWidth="1" />
                
                <text x="70" y="115" textAnchor="middle" fill="#c0392b" fontSize="8">スイッチOFF時</text>
                <text x="70" y="128" textAnchor="middle" fill="#c0392b" fontSize="8">入力が浮く→不安定</text>
              </g>
              
              {/* Noise illustration */}
              <g transform="translate(180, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">ノイズを拾ってしまう</text>
                
                {/* Signal graph */}
                <rect x="20" y="20" width="100" height="60" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="2" />
                
                {/* Noisy signal */}
                <path d="M25 50 L35 40 L40 55 L50 35 L55 60 L65 45 L75 55 L85 40 L95 50 L105 45 L115 50" fill="none" stroke="#c0392b" strokeWidth="2" />
                
                {/* Labels */}
                <text x="15" y="30" fill="#4a4a4a" fontSize="7">HIGH</text>
                <text x="15" y="75" fill="#4a4a4a" fontSize="7">LOW</text>
                
                <text x="70" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="8">押してないのに</text>
                <text x="70" y="113" textAnchor="middle" fill="#4a4a4a" fontSize="8">HIGH/LOWが乱れる</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 浮いた入力はノイズを拾って不安定</text>
          </svg>
          <figcaption>スイッチが開いていると入力が浮き、ノイズでHIGH/LOWが乱れます。</figcaption>
        </figure>

        <section>
          <h2>プルアップ抵抗</h2>
          <p>
            プルアップ抵抗は、入力ピンと電源（VCC）の間に入れる抵抗です。
            スイッチが開いているとき、抵抗を通じて入力ピンは電源電圧（HIGH）に引き上げられます。
            スイッチを押すと、入力ピンがGNDにつながってLOWになります。
            つまり、「押していない→HIGH」「押している→LOW」という動作になります。
          </p>
          <p>
            抵抗値は一般的に10kΩを使います。
            抵抗が大きすぎると引っ張る力が弱くなり、小さすぎるとスイッチを押したときに無駄な電流が流れます。
            10kΩは、ノイズ耐性と消費電力のバランスが良い値です。
            多くのマイコンには内蔵プルアップ抵抗があり、ソフトウェアで有効にできます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">プルアップ抵抗</text>
              
              {/* Switch open */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">スイッチOFF → HIGH</text>
                
                {/* VCC */}
                <text x="70" y="20" textAnchor="middle" fill="#c0392b" fontSize="8">VCC</text>
                <line x1="70" y1="25" x2="70" y2="35" stroke="#c0392b" strokeWidth="2" />
                
                {/* Pull-up resistor */}
                <path d="M70 35 L70 40 L65 43 L75 49 L65 55 L75 61 L70 65 L70 70" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="55" fill="#3b6ea5" fontSize="7">10kΩ</text>
                
                {/* Junction */}
                <circle cx="70" cy="70" r="2" fill="#3b6ea5" />
                <line x1="70" y1="70" x2="70" y2="85" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* To MCU */}
                <line x1="70" y1="70" x2="120" y2="70" stroke="#27ae60" strokeWidth="2" />
                <rect x="120" y="55" width="30" height="30" rx="2" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="135" y="73" textAnchor="middle" fill="#27ae60" fontSize="7">MCU</text>
                <text x="135" y="98" textAnchor="middle" fill="#27ae60" fontSize="8">HIGH!</text>
                
                {/* Switch (open) */}
                <circle cx="70" cy="90" r="3" fill="#3b6ea5" />
                <line x1="70" y1="93" x2="85" y2="105" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="70" cy="115" r="3" fill="#3b6ea5" />
                
                {/* GND */}
                <line x1="70" y1="118" x2="70" y2="130" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="60" y1="130" x2="80" y2="130" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="142" textAnchor="middle" fill="#3b6ea5" fontSize="8">GND</text>
              </g>
              
              {/* Switch closed */}
              <g transform="translate(180, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">スイッチON → LOW</text>
                
                {/* VCC */}
                <text x="70" y="20" textAnchor="middle" fill="#c0392b" fontSize="8">VCC</text>
                <line x1="70" y1="25" x2="70" y2="35" stroke="#c0392b" strokeWidth="2" />
                
                {/* Pull-up resistor */}
                <path d="M70 35 L70 40 L65 43 L75 49 L65 55 L75 61 L70 65 L70 70" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="55" fill="#3b6ea5" fontSize="7">10kΩ</text>
                
                {/* Junction */}
                <circle cx="70" cy="70" r="2" fill="#3b6ea5" />
                <line x1="70" y1="70" x2="70" y2="85" stroke="#27ae60" strokeWidth="2" />
                
                {/* To MCU */}
                <line x1="70" y1="70" x2="120" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="120" y="55" width="30" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="135" y="73" textAnchor="middle" fill="#3b6ea5" fontSize="7">MCU</text>
                <text x="135" y="98" textAnchor="middle" fill="#3b6ea5" fontSize="8">LOW!</text>
                
                {/* Switch (closed) */}
                <circle cx="70" cy="90" r="3" fill="#27ae60" />
                <line x1="70" y1="93" x2="70" y2="112" stroke="#27ae60" strokeWidth="2" />
                <circle cx="70" cy="115" r="3" fill="#27ae60" />
                
                {/* Current path */}
                <polygon points="66,100 70,110 74,100" fill="#27ae60" />
                
                {/* GND */}
                <line x1="70" y1="118" x2="70" y2="130" stroke="#27ae60" strokeWidth="2" />
                <line x1="60" y1="130" x2="80" y2="130" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="142" textAnchor="middle" fill="#3b6ea5" fontSize="8">GND</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: プルアップ抵抗の動作</text>
          </svg>
          <figcaption>プルアップではスイッチOFFでHIGH、ONでLOWになります。</figcaption>
        </figure>

        <section>
          <h2>プルダウン抵抗</h2>
          <p>
            プルダウン抵抗は、入力ピンとGNDの間に入れる抵抗です。
            スイッチが開いているとき、抵抗を通じて入力ピンは0V（LOW）に引き下げられます。
            スイッチを押すと、入力ピンがVCCにつながってHIGHになります。
            つまり、「押していない→LOW」「押している→HIGH」という動作になります。
          </p>
          <p>
            こちらも抵抗値は10kΩが一般的です。
            プルアップとプルダウンのどちらを使うかは、回路設計やソフトウェアの都合で決めます。
            「押したらHIGH」のほうが直感的なので、プルダウンを好む人もいます。
            一方、内蔵プルアップを使える場合は、外付け部品を減らせるプルアップが便利です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">プルアップとプルダウンの比較</text>
              
              {/* Pull-up */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="130" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="65" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">プルアップ</text>
                <line x1="10" y1="25" x2="120" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="42" fill="#4a4a4a" fontSize="9">スイッチOFF → HIGH</text>
                <text x="10" y="57" fill="#4a4a4a" fontSize="9">スイッチON → LOW</text>
                <text x="10" y="70" fill="#27ae60" fontSize="8">内蔵プルアップで部品削減</text>
              </g>
              
              {/* Pull-down */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="130" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="65" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">プルダウン</text>
                <line x1="10" y1="25" x2="120" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="42" fill="#4a4a4a" fontSize="9">スイッチOFF → LOW</text>
                <text x="10" y="57" fill="#4a4a4a" fontSize="9">スイッチON → HIGH</text>
                <text x="10" y="70" fill="#27ae60" fontSize="8">押す→HIGHで直感的</text>
              </g>
              
              {/* Common note */}
              <g transform="translate(70, 105)">
                <text x="100" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9">どちらも一般的に10kΩを使用</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: プルアップとプルダウンの違い</text>
          </svg>
          <figcaption>プルアップは押すとLOW、プルダウンは押すとHIGHになります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「スイッチの入力が不安定」というトラブルに対して、
            「プルアップまたはプルダウン抵抗は入っていますか?」と確認できます。
            入力が浮いている状態は、初心者がよく遭遇するトラブルの一つです。
          </p>
          <p>
            また、「マイコンの内蔵プルアップを使えば、外付け抵抗を省略できます」
            という提案もできます。部品点数を減らすことは、コストダウンと信頼性向上につながります。
            ただし、内蔵プルアップは抵抗値が固定なので、特別な要件がある場合は外付けが必要です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>プルアップ・プルダウンで入力を安定させました。しかしスイッチを押す瞬間、「チャタリング」という現象が起きます。どうすれば対策できるでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>浮いた入力はノイズを拾って不安定になるため、プルアップまたはプルダウン抵抗が必要です。</li>
            <li>プルアップは入力をVCC側に、プルダウンはGND側に引っ張ります。一般的に10kΩを使います。</li>
            <li>マイコンの内蔵プルアップを使うと、外付け部品を減らせます。</li>
          </ol>
        </div>

        <AskBox lessonId="28-pull-up-down" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
