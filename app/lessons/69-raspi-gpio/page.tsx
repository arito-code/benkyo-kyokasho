import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson69Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={69} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Raspberry PiでLEDやセンサーを制御する「GPIO」は、どう使うのでしょうか。</p>
        </div>
        <h1>第69回: Raspberry PiのGPIO</h1>
        <section>
          <h2>概念: GPIOは「外の世界とつなぐピン」</h2>
          <p>Raspberry Piの縁には40本のピンがまとまった「40ピンヘッダ」があります。このヘッダにはGPIO（汎用入出力）ピンのほか、3.3V電源、5V電源、GND（グラウンド）も含まれています。GPIO(General Purpose Input/Output)ピンを使うと、<Link href="/lessons/04-io">入力と出力</Link>としてLEDを光らせたり、センサーの値を読んだりできます。M5Stackと同じようにハードウェア制御ができますが、プログラミング言語としてPythonがよく使われます。</p>
          <div className="analogy">
            <span className="analogy-term">40ピンヘッダ</span>
            <span className="analogy-equals">=</span>
            <span>GPIOピン + 電源(3.3V/5V) + GND を含む接続端子</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">GPIO 40ピンヘッダ</text>
              <g transform="translate(100, 25)">
                <rect x="0" y="0" width="160" height="80" rx="5" fill="#27ae60" stroke="#1e8449" strokeWidth="2" />
                <g transform="translate(10, 10)">
                  {[...Array(20)].map((_, i) => (
                    <g key={`pin-${i}`}>
                      <circle cx={i * 7} cy="0" r="3" fill="#f39c12" />
                      <circle cx={i * 7} cy="12" r="3" fill="#f39c12" />
                    </g>
                  ))}
                </g>
                <text x="80" y="50" textAnchor="middle" fill="white" fontSize="8">40 pin GPIO</text>
                <text x="80" y="65" textAnchor="middle" fill="white" fontSize="7">3.3V/5V/GND/GPIO</text>
              </g>
              <g transform="translate(40, 115)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="8">Pythonで制御: import RPi.GPIO / gpiozero ライブラリ</text>
              </g>
            </g>
          </svg>
          <figcaption>40ピンヘッダには、GPIOのほか電源(3.3V/5V)やGNDも含まれています。</figcaption>
        </figure>
        <section>
          <h2>PythonでのGPIO制御</h2>
          <p>Pythonの「gpiozero」ライブラリを使うと、簡単にGPIOを制御できます。LED(17).on()でLEDを点灯、Button(4).is_pressed でボタンの状態を読めます。M5StackのArduinoコードより、直感的に書けることが多いです。</p>
        </section>
        <section>
          <h2>注意点: 3.3Vロジック</h2>
          <p>Raspberry PiのGPIOは3.3Vロジックで、5V信号を直接入力すると壊れます。5Vセンサーを使うときはレベルシフターを挟むか、3.3V対応センサーを選びましょう。また、GPIO1本から流せる電流は16mA程度なので、大きな負荷は<Link href="/lessons/22-transistor">トランジスタ</Link>経由で駆動します。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「Raspberry PiでもM5Stackと同じようにLEDやセンサーを制御できます。Pythonで書けるので、Web技術者にも馴染みやすいです」と説明できます。ただし、リアルタイム性が必要な用途(モーター制御など)はM5Stackの方が向いています。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Raspberry Piにカメラをつなぐには、どうすればよいでしょうか。次の第70回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>40ピンヘッダにはGPIO、電源(3.3V/5V)、GNDが含まれています。</li>
            <li>Pythonのgpiozeroライブラリで簡単にプログラミングできます。</li>
            <li>3.3Vロジックなので、5Vセンサーには注意が必要です。</li>
          </ol>
        </div>
        <AskBox lessonId="69-raspi-gpio" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
