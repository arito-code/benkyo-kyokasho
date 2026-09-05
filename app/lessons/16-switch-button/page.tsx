import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson16Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={16} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>回路のオン・オフを切り替える「スイッチ」や「ボタン」は、どのような仕組みでしょうか?</p>
        </div>

        <h1>第16回: スイッチとボタン</h1>

        <section>
          <h2>スイッチは回路を「つなぐ・切る」</h2>
          <p>
            <Link href="/glossary/switch" className="glossary-link">スイッチ</Link>は、
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>を「つなぐ」「切る」を切り替える部品です。
            スイッチがオン（閉じる）のとき、回路がつながって<Link href="/glossary/current" className="glossary-link">電流</Link>が流れます。
            スイッチがオフ（開く）のとき、回路が切れて電流は流れません。
          </p>
          <p>
            家庭の照明スイッチを思い浮かべてください。
            スイッチを入れると電気がつき、切ると消えます。
            これは、スイッチが回路を物理的に「つなぐ」「切る」しているからです。
            電子回路でも同じ原理で、スイッチはLEDを点けたり、モーターを動かしたりするのに使います。
          </p>

          <div className="analogy">
            <span className="analogy-term">スイッチON</span>
            <span className="analogy-equals">=</span>
            <span>回路が閉じる（電流が流れる）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">スイッチOFF</span>
            <span className="analogy-equals">=</span>
            <span>回路が開く（電流が流れない）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Switch OFF */}
            <g transform="translate(20, 30)">
              <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">スイッチOFF（開回路）</text>
              
              {/* Battery */}
              <rect x="10" y="25" width="35" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="27" y="43" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Wire */}
              <line x1="45" y1="40" x2="70" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Open switch */}
              <circle cx="73" cy="40" r="3" fill="#3b6ea5" />
              <line x1="73" y1="37" x2="100" y2="20" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="103" cy="40" r="3" fill="#3b6ea5" />
              
              {/* Wire to LED */}
              <line x1="106" y1="40" x2="125" y2="40" stroke="#999" strokeWidth="2" strokeDasharray="4,2" />
              
              {/* LED (not lit) */}
              <path d="M130 50 L150 50 L140 30 Z" fill="none" stroke="#999" strokeWidth="2" />
              <line x1="125" y1="55" x2="155" y2="55" stroke="#999" strokeWidth="2" />
              
              {/* Return wire */}
              <line x1="140" y1="60" x2="140" y2="80" stroke="#999" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="27" y1="80" x2="140" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="55" x2="27" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="80" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="9">電流が流れない → LEDは消灯</text>
            </g>

            {/* Switch ON */}
            <g transform="translate(210, 30)">
              <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">スイッチON（閉回路）</text>
              
              {/* Battery */}
              <rect x="10" y="25" width="35" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="27" y="43" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Wire */}
              <line x1="45" y1="40" x2="70" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Closed switch */}
              <circle cx="73" cy="40" r="3" fill="#3b6ea5" />
              <line x1="75" y1="40" x2="101" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="103" cy="40" r="3" fill="#3b6ea5" />
              
              {/* Wire to LED */}
              <line x1="106" y1="40" x2="125" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED (lit) */}
              <path d="M130 50 L150 50 L140 30 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="125" y1="55" x2="155" y2="55" stroke="#3b6ea5" strokeWidth="2" />
              {/* Light rays */}
              <line x1="130" y1="25" x2="122" y2="17" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="140" y1="22" x2="140" y2="12" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="150" y1="25" x2="158" y2="17" stroke="#3b6ea5" strokeWidth="1.5" />
              
              {/* Return wire */}
              <line x1="140" y1="60" x2="140" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="80" x2="140" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="27" y1="55" x2="27" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Current arrow */}
              <polygon points="90,36 100,40 90,44" fill="#3b6ea5" />
              
              <text x="80" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="9">電流が流れる → LEDが点灯</text>
            </g>

            <text x="200" y="170" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: スイッチのオン・オフ</text>
          </svg>
          <figcaption>スイッチをオンにすると回路が閉じて電流が流れ、LEDが光ります。</figcaption>
        </figure>

        <section>
          <h2>スイッチの種類</h2>
          <p>
            スイッチには大きく分けて2つの種類があります。
            「モーメンタリ」は押している間だけオンになり、離すとオフに戻ります。
            キーボードのキーやドアのインターホンがこのタイプです。
            「オルタネイト」は押すたびにオン・オフが切り替わります。
            家庭の照明スイッチがこのタイプです。
          </p>
          <p>
            電子工作でよく使うのは「タクトスイッチ」というモーメンタリ型の小さなボタンです。
            ブレッドボードに差し込んで使えるので、試作に便利です。
            マイコンの<Link href="/glossary/input" className="glossary-link">入力</Link>として使い、
            「ボタンが押されたらLEDを点ける」といったプログラムを作れます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Momentary vs Alternate */}
            <g transform="translate(30, 30)">
              {/* Momentary */}
              <g transform="translate(0, 0)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">モーメンタリ（押しボタン）</text>
                
                {/* Button off */}
                <g transform="translate(10, 20)">
                  <rect x="0" y="0" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                  <rect x="10" y="5" width="30" height="15" rx="2" fill="#3b6ea5" opacity="0.2" />
                  <text x="25" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">離す</text>
                </g>
                
                <text x="95" y="40" fill="#3b6ea5" fontSize="12">→</text>
                
                {/* Button on (pressed) */}
                <g transform="translate(110, 20)">
                  <rect x="0" y="5" width="50" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                  <rect x="10" y="10" width="30" height="15" rx="2" fill="#3b6ea5" />
                  <text x="25" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">押す</text>
                </g>
                
                <text x="70" y="90" textAnchor="middle" fill="#4a4a4a" fontSize="9">押している間だけON</text>
                <text x="70" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="8">例: タクトスイッチ、キーボード</text>
              </g>

              {/* Alternate */}
              <g transform="translate(200, 0)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">オルタネイト（切替スイッチ）</text>
                
                {/* Toggle off */}
                <g transform="translate(10, 20)">
                  <rect x="0" y="0" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                  <line x1="25" y1="5" x2="25" y2="20" stroke="#3b6ea5" strokeWidth="3" />
                  <line x1="20" y1="5" x2="25" y2="5" stroke="#3b6ea5" strokeWidth="3" />
                  <text x="25" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">OFF</text>
                </g>
                
                <text x="95" y="40" fill="#3b6ea5" fontSize="12">→</text>
                
                {/* Toggle on */}
                <g transform="translate(110, 20)">
                  <rect x="0" y="0" width="50" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                  <line x1="25" y1="15" x2="25" y2="30" stroke="#3b6ea5" strokeWidth="3" />
                  <line x1="25" y1="30" x2="30" y2="30" stroke="#3b6ea5" strokeWidth="3" />
                  <text x="25" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">ON</text>
                </g>
                
                <text x="70" y="90" textAnchor="middle" fill="#4a4a4a" fontSize="9">押すたびに切り替わる</text>
                <text x="70" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="8">例: 照明スイッチ、電源スイッチ</text>
              </g>
            </g>

            <text x="200" y="170" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: スイッチの種類</text>
          </svg>
          <figcaption>用途に応じてモーメンタリとオルタネイトを使い分けます。</figcaption>
        </figure>

        <section>
          <h2>マイコンへの入力として使う</h2>
          <p>
            スイッチやボタンは、マイコンへの<Link href="/glossary/input" className="glossary-link">入力</Link>としてよく使います。
            ボタンを押したかどうかをマイコンが読み取り、プログラムで処理します。
            「ボタンを押したらLEDを点ける」「ボタンを離したらモーターを止める」といった動作を実現できます。
          </p>
          <p>
            マイコンへの接続では、「プルアップ」または「プルダウン」という抵抗が必要になることがあります。
            これは、ボタンが押されていないときの電圧を安定させるためです。
            詳しくは後のレッスンで学びますが、まずは「スイッチは回路を開閉する部品」と覚えておきましょう。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Microcontroller input */}
            <g transform="translate(50, 20)">
              <text x="150" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">マイコンへの入力</text>
              
              {/* 5V line */}
              <line x1="0" y1="30" x2="300" y2="30" stroke="#c0392b" strokeWidth="2" />
              <text x="-15" y="35" textAnchor="end" fill="#c0392b" fontSize="9">5V</text>
              
              {/* Button */}
              <line x1="80" y1="30" x2="80" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="80" cy="53" r="3" fill="#3b6ea5" />
              <line x1="80" y1="56" x2="100" y2="70" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="80" cy="77" r="3" fill="#3b6ea5" />
              <line x1="80" y1="80" x2="80" y2="100" stroke="#3b6ea5" strokeWidth="2" />
              <text x="60" y="70" textAnchor="end" fill="#3b6ea5" fontSize="9">ボタン</text>
              
              {/* Microcontroller */}
              <rect x="140" y="40" width="80" height="60" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="180" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="10">マイコン</text>
              <text x="180" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="8">GPIO入力</text>
              
              {/* Connection to microcontroller */}
              <line x1="80" y1="65" x2="140" y2="65" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* GND line */}
              <line x1="0" y1="120" x2="300" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              <text x="-15" y="125" textAnchor="end" fill="#3b6ea5" fontSize="9">GND</text>
              
              {/* Button to GND */}
              <line x1="80" y1="100" x2="80" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Microcontroller GND */}
              <line x1="180" y1="100" x2="180" y2="120" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Labels */}
              <text x="240" y="60" fill="#4a4a4a" fontSize="9">ボタンOFF: 入力 HIGH</text>
              <text x="240" y="75" fill="#4a4a4a" fontSize="9">ボタンON: 入力 LOW</text>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: ボタンをマイコンの入力に接続</text>
          </svg>
          <figcaption>ボタンの状態をマイコンが読み取り、プログラムで処理します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「ボタンを押したら動く」というのは、最もわかりやすいユーザーインターフェースです。
            お客様に「操作方法は?」と聞かれたとき、
            「ボタンを押すと起動します」「緊急停止ボタンで止まります」と説明できます。
          </p>
          <p>
            システム提案では、「どのような操作が必要か」を確認します。
            「電源スイッチ」「リセットボタン」「緊急停止」など、用途に応じて適切なスイッチを選びます。
            モーメンタリかオルタネイトかも、用途によって使い分けます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>はんだ付けなしで回路を試せる「ブレッドボード」は、どのような仕組みでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>スイッチは回路を「つなぐ」「切る」を切り替える部品です。</li>
            <li>モーメンタリは押している間だけオン、オルタネイトは押すたびに切り替わります。</li>
            <li>タクトスイッチは電子工作でよく使う小さな押しボタンです。</li>
          </ol>
        </div>

        <AskBox lessonId="16-switch-button" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
