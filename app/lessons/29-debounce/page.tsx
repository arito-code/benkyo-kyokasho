import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson29Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={29} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>プルアップ・プルダウンで入力を安定させました。しかしスイッチを押す瞬間、「チャタリング」という現象が起きます。どうすれば対策できるでしょうか?</p>
        </div>

        <h1>第29回: デバウンス</h1>

        <section>
          <h2>チャタリングとは</h2>
          <p>
            <Link href="/glossary/chattering" className="glossary-link">チャタリング</Link>は、
            機械式スイッチを押したり離したりするときに、接点がバタバタとオン・オフを繰り返す現象です。
            スイッチの金属部品が物理的に跳ね返り（バウンス）するために起こります。
            このバタつきは数ミリ秒〜数十ミリ秒続きます。
          </p>
          <p>
            マイコンはとても速く動作するため、このバタつきをすべて検出してしまいます。
            「1回押しただけなのに、カウンターが3増えた」というのは典型的なチャタリングの症状です。
            <Link href="/glossary/debounce" className="glossary-link">デバウンス</Link>
            （バウンスを取り除く）処理で、この問題を解決します。
          </p>

          <div className="analogy">
            <span className="analogy-term">チャタリング</span>
            <span className="analogy-equals">=</span>
            <span>スイッチの金属がバタバタ跳ねる現象</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">チャタリング（接点のバタつき）</text>
              
              {/* Timeline */}
              <g transform="translate(20, 30)">
                {/* What user thinks */}
                <text x="0" y="0" fill="#3b6ea5" fontSize="9" fontWeight="500">人間の認識: 1回押した</text>
                <rect x="0" y="10" width="280" height="25" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="2" />
                <rect x="80" y="12" width="60" height="21" fill="#27ae60" opacity="0.3" rx="2" />
                <text x="110" y="27" textAnchor="middle" fill="#27ae60" fontSize="8">押している</text>
              </g>
              
              {/* What MCU sees */}
              <g transform="translate(20, 80)">
                <text x="0" y="0" fill="#c0392b" fontSize="9" fontWeight="500">マイコンの検出: 複数回のON/OFF</text>
                <rect x="0" y="10" width="280" height="40" fill="#f8f9fa" stroke="#c0392b" strokeWidth="1" rx="2" />
                
                {/* Bouncing signal */}
                <path d="M10 40 L10 40 L80 40 L80 20 L85 40 L90 20 L95 40 L100 20 L105 20 L140 20 L140 40 L145 20 L150 40 L155 20 L160 40 L165 40 L270 40" fill="none" stroke="#c0392b" strokeWidth="2" />
                
                {/* Labels */}
                <text x="50" y="38" fill="#4a4a4a" fontSize="7">HIGH</text>
                <text x="90" y="55" fill="#c0392b" fontSize="7">バタバタ</text>
                <text x="155" y="55" fill="#c0392b" fontSize="7">バタバタ</text>
                
                {/* Time markers */}
                <line x1="80" y1="50" x2="80" y2="60" stroke="#4a4a4a" strokeWidth="1" />
                <line x1="160" y1="50" x2="160" y2="60" stroke="#4a4a4a" strokeWidth="1" />
                <text x="120" y="68" textAnchor="middle" fill="#4a4a4a" fontSize="7">数ミリ秒〜数十ミリ秒</text>
              </g>
              
              {/* Result */}
              <g transform="translate(70, 145)">
                <rect x="0" y="0" width="200" height="20" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="100" y="14" textAnchor="middle" fill="#856404" fontSize="9">→ 1回押しただけで、何回も検出してしまう!</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: チャタリングによる誤検出</text>
          </svg>
          <figcaption>スイッチを1回押しただけでも、マイコンは複数回のON/OFFを検出します。</figcaption>
        </figure>

        <section>
          <h2>ソフトウェアでのデバウンス</h2>
          <p>
            最も一般的なデバウンス方法は、ソフトウェアで「少し待つ」ことです。
            スイッチの状態が変化したら、10〜50ミリ秒待ってからもう一度読み取ります。
            チャタリングが収まった後の安定した状態を取得できます。
          </p>
          <p>
            もう一つの方法は、「一定時間同じ状態が続いたら確定」とする方法です。
            たとえば、20ミリ秒間ずっとLOWなら「押された」と判定します。
            チャタリング中は状態が安定しないため、確定しません。
            どちらの方法も、チャタリングの時間（通常10〜20ms）より長い待ち時間を設定します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ソフトウェアデバウンス</text>
              
              {/* Method 1: Wait and read */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="150" height="90" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">方法1: 待ってから読む</text>
                <line x1="10" y1="25" x2="140" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                
                {/* Flow */}
                <text x="15" y="42" fill="#4a4a4a" fontSize="8">1. 状態変化を検出</text>
                <text x="15" y="57" fill="#4a4a4a" fontSize="8">2. 20ms待つ</text>
                <text x="15" y="72" fill="#4a4a4a" fontSize="8">3. もう一度読む</text>
                <text x="15" y="87" fill="#27ae60" fontSize="8">→ 安定した状態を取得</text>
              </g>
              
              {/* Method 2: Stable count */}
              <g transform="translate(170, 30)">
                <rect x="0" y="0" width="160" height="90" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="80" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">方法2: 連続カウント</text>
                <line x1="10" y1="25" x2="150" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                
                {/* Flow */}
                <text x="15" y="42" fill="#4a4a4a" fontSize="8">1. 1ms毎に状態を読む</text>
                <text x="15" y="57" fill="#4a4a4a" fontSize="8">2. 同じ状態が続いたらカウント</text>
                <text x="15" y="72" fill="#4a4a4a" fontSize="8">3. 20回連続なら確定</text>
                <text x="15" y="87" fill="#27ae60" fontSize="8">→ 安定状態のみ検出</text>
              </g>
              
              {/* Code example */}
              <g transform="translate(30, 135)">
                <rect x="0" y="0" width="280" height="25" fill="#1a1a1a" rx="3" />
                <text x="10" y="16" fill="#27ae60" fontSize="8" fontFamily="monospace">if (digitalRead(BUTTON) != lastState) delay(20);</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: ソフトウェアによるデバウンス方法</text>
          </svg>
          <figcaption>チャタリングより長い時間を待つか、安定を確認してから状態を確定します。</figcaption>
        </figure>

        <section>
          <h2>ハードウェアでのデバウンス</h2>
          <p>
            ハードウェアでデバウンスする方法もあります。
            最も簡単なのは、スイッチと並列に<Link href="/glossary/capacitor" className="glossary-link">コンデンサ</Link>を入れる方法です。
            コンデンサが電圧の急激な変化を吸収し、バタつきを滑らかにします。
            0.1μF程度のセラミックコンデンサがよく使われます。
          </p>
          <p>
            ハードウェアデバウンスの利点は、ソフトウェアの負担が減ることです。
            リアルタイム性が求められる場面や、割り込み処理でスイッチを読む場合に有効です。
            ただし、部品が増えるため、用途に応じてソフトウェアかハードウェアかを選びます。
            多くの場合は、ソフトウェアデバウンスで十分です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ハードウェアデバウンス（コンデンサ）</text>
              
              {/* Circuit */}
              <g transform="translate(50, 30)">
                {/* VCC */}
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="8">VCC</text>
                <line x1="70" y1="5" x2="70" y2="15" stroke="#c0392b" strokeWidth="2" />
                
                {/* Pull-up resistor */}
                <path d="M70 15 L70 20 L65 23 L75 29 L65 35 L75 41 L70 45 L70 50" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="35" fill="#3b6ea5" fontSize="7">10kΩ</text>
                
                {/* Junction */}
                <circle cx="70" cy="50" r="2" fill="#3b6ea5" />
                
                {/* To MCU */}
                <line x1="72" y1="50" x2="130" y2="50" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="130" y="35" width="35" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="147" y="53" textAnchor="middle" fill="#3b6ea5" fontSize="7">MCU</text>
                
                {/* Switch */}
                <line x1="70" y1="52" x2="70" y2="65" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="70" cy="70" r="3" fill="#3b6ea5" />
                <line x1="70" y1="73" x2="85" y2="85" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="70" cy="95" r="3" fill="#3b6ea5" />
                
                {/* Capacitor (parallel to switch) */}
                <line x1="40" y1="70" x2="40" y2="50" stroke="#27ae60" strokeWidth="2" />
                <line x1="40" y1="50" x2="68" y2="50" stroke="#27ae60" strokeWidth="2" />
                <line x1="35" y1="75" x2="45" y2="75" stroke="#27ae60" strokeWidth="2" />
                <line x1="35" y1="80" x2="45" y2="80" stroke="#27ae60" strokeWidth="2" />
                <line x1="40" y1="80" x2="40" y2="95" stroke="#27ae60" strokeWidth="2" />
                <line x1="40" y1="95" x2="67" y2="95" stroke="#27ae60" strokeWidth="2" />
                <text x="25" y="80" fill="#27ae60" fontSize="7">0.1μF</text>
                
                {/* GND */}
                <line x1="70" y1="98" x2="70" y2="105" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="60" y1="105" x2="80" y2="105" stroke="#3b6ea5" strokeWidth="2" />
              </g>
              
              {/* Explanation */}
              <g transform="translate(200, 40)">
                <rect x="0" y="0" width="130" height="60" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="65" y="18" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">コンデンサの効果</text>
                <line x1="10" y1="25" x2="120" y2="25" stroke="#27ae60" strokeWidth="1" />
                <text x="10" y="40" fill="#4a4a4a" fontSize="8">・急激な電圧変化を吸収</text>
                <text x="10" y="55" fill="#4a4a4a" fontSize="8">・バタつきを滑らかに</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: コンデンサによるハードウェアデバウンス</text>
          </svg>
          <figcaption>コンデンサが電圧の急変を吸収し、チャタリングを軽減します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「ボタンを1回押しただけなのに何度も反応する」というトラブルに対して、
            「チャタリングが原因です。デバウンス処理を追加しましょう」と提案できます。
            ソフトウェアなら20ms程度の遅延を入れるだけで解決することが多いです。
          </p>
          <p>
            また、信頼性が求められる用途では
            「ハードウェアとソフトウェアの両方でデバウンスすると、より確実です」
            とアドバイスできます。
            非常停止ボタンなど安全に関わる入力では、二重の対策が必要になることもあります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 3の最後として、ここまで学んだ部品と知識を組み合わせて、「測る→判断→動かす」の一連の流れを実践しましょう。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>チャタリングは、スイッチの接点がバタバタ跳ねてオン・オフを繰り返す現象です。</li>
            <li>ソフトウェアデバウンスは、20ms程度待ってから読み取るか、連続して同じ状態を確認します。</li>
            <li>ハードウェアデバウンスは、コンデンサ（0.1μF程度）を並列に入れて急変を吸収します。</li>
          </ol>
        </div>

        <AskBox lessonId="29-debounce" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
