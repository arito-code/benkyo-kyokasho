import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson47Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={47} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackにセンサーを簡単につなぐ「Groveコネクタ」とは何でしょうか。</p>
        </div>

        <h1>第47回: Groveコネクタ</h1>

        <section>
          <h2>概念: Groveは「配線いらず」のコネクタ規格</h2>
          <p>
            <Link href="/lessons/17-breadboard">ブレッドボード</Link>でセンサーをつなぐには、
            ジャンパワイヤーで1本ずつ配線する必要がありました。
            Groveコネクタは、4本の線（電源・GND・信号2本）を1つのコネクタにまとめた規格です。
            ケーブルを差し込むだけでセンサーがつながるので、配線ミスがなくなります。
          </p>
          <p>
            M5StackにはGroveコネクタが付いていて、
            Grove対応のセンサーを差すだけですぐに使えます。
            温度センサー、距離センサー、光センサーなど、
            多くのセンサーがGrove対応で販売されています。
          </p>

          <div className="analogy">
            <span className="analogy-term">Groveコネクタ</span>
            <span className="analogy-equals">=</span>
            <span>差すだけでつながる標準化されたセンサー端子</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Groveコネクタの構造</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="2" />
                <rect x="70" y="15" width="25" height="20" rx="2" fill="white" stroke="#4a4a4a" strokeWidth="1" />
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="9">センサー</text>
                
                <line x1="95" y1="20" x2="140" y2="20" stroke="#c0392b" strokeWidth="2" />
                <line x1="95" y1="25" x2="140" y2="25" stroke="#1a1a1a" strokeWidth="2" />
                <line x1="95" y1="30" x2="140" y2="30" stroke="#f39c12" strokeWidth="2" />
                <line x1="95" y1="35" x2="140" y2="35" stroke="#4a4a4a" strokeWidth="2" />
              </g>
              
              <g transform="translate(170, 30)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                <rect x="5" y="15" width="25" height="20" rx="2" fill="white" stroke="#4a4a4a" strokeWidth="1" />
                <text x="50" y="35" textAnchor="middle" fill="white" fontSize="9">M5Stack</text>
              </g>
              
              <g transform="translate(20, 95)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="9">4本の線の役割:</text>
                <rect x="0" y="10" width="12" height="12" fill="#c0392b" />
                <text x="18" y="20" fill="#4a4a4a" fontSize="8">VCC (電源 3.3V/5V)</text>
                <rect x="0" y="27" width="12" height="12" fill="#1a1a1a" />
                <text x="18" y="37" fill="#4a4a4a" fontSize="8">GND (グラウンド)</text>
                <rect x="150" y="10" width="12" height="12" fill="#f39c12" />
                <text x="168" y="20" fill="#4a4a4a" fontSize="8">信号1 (SCL/TX/デジタル)</text>
                <rect x="150" y="27" width="12" height="12" fill="white" stroke="#4a4a4a" strokeWidth="1" />
                <text x="168" y="37" fill="#4a4a4a" fontSize="8">信号2 (SDA/RX/アナログ)</text>
              </g>
              
              <g transform="translate(40, 145)">
                <rect x="0" y="0" width="260" height="25" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="130" y="16" textAnchor="middle" fill="#27ae60" fontSize="9">差し込むだけでセンサーが使える → 配線ミスゼロ</text>
              </g>
            </g>
          </svg>
          <figcaption>4本の線が1つのコネクタにまとまっています。</figcaption>
        </figure>

        <section>
          <h2>Groveコネクタの種類</h2>
          <p>
            Groveコネクタには、用途に応じた種類があります。
            「Groveデジタル」はオン・オフの信号用、
            「Groveアナログ」は連続値のセンサー用、
            「Grove I2C」はI2C通信用です。
          </p>
          <p>
            M5StackのGroveポートはI2C対応が多いですが、
            追加のユニット（HAT、Unit）を使うと、
            さまざまな種類のGroveセンサーが接続できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Groveの種類</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">デジタル</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">ON/OFF信号</text>
                <text x="50" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">ボタン、PIRなど</text>
              </g>
              
              <g transform="translate(135, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">アナログ</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">連続値（分解能は機種依存）</text>
                <text x="50" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">光、音、可変抵抗</text>
              </g>
              
              <g transform="translate(250, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">I2C</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">デジタル通信</text>
                <text x="50" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度、加速度など</text>
              </g>
            </g>
          </svg>
          <figcaption>センサーの種類に応じてGroveの種類が異なります。</figcaption>
        </figure>

        <section>
          <h2>M5Stack用のユニット</h2>
          <p>
            M5Stack社は「Unit」と呼ばれるGrove対応のセンサーモジュールを多数販売しています。
            ENV Unit（温度・湿度・気圧）、ToF Unit（距離）、PIR Unit（人感）など、
            Phase 4で学んだセンサーのほとんどがUnitとして用意されています。
          </p>
          <p>
            Unitを使えば、はんだ付けも配線もなしに、
            センサーをM5Stackに接続できます。
            プロトタイプを素早く作るのに最適です。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「試作を素早く作りたい」と言われたら、
            M5StackとGrove Unitの組み合わせを提案できます。
            「配線なしでセンサーがつながるので、すぐに動くものが作れます」
            と説明できます。
          </p>
          <p>
            センサーを交換したいときも、Groveなら差し替えるだけです。
            「まずこのセンサーで試して、合わなければ別のセンサーに交換しましょう」
            という柔軟な進め方ができます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>GroveのI2Cタイプでよく使われる「I2C通信」とは、どのような仕組みでしょうか。次の第48回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Groveコネクタは電源・GND・信号を1つにまとめた規格です。</li>
            <li>差し込むだけでセンサーがつながり、配線ミスがなくなります。</li>
            <li>M5Stack用のUnitを使えば、はんだ付け不要で試作できます。</li>
          </ol>
        </div>

        <AskBox lessonId="47-grove-connector" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
