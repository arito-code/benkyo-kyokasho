import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson55Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={55} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 6: 通信・IoT</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>機器同士がデータをやり取りする「シリアル通信」とは、どのような仕組みでしょうか。</p>
        </div>

        <h1>第55回: シリアル通信とは何か</h1>

        <section>
          <h2>概念: シリアル通信は「1本の線でデータを順番に送る」方式</h2>
          <p>
            シリアル通信とは、データを1ビットずつ順番に送る通信方式です。
            並列（パラレル）通信が複数の線で同時にビットを送るのに対し、
            シリアル通信は線の本数が少なくて済みます。
            配線がシンプルになるため、現在の電子機器のほとんどでシリアル通信が使われています。
          </p>
          <p>
            M5Stackでの「Serial.println()」も、シリアル通信でPCにデータを送っています。
            USB接続でArduino IDEのシリアルモニターに表示される仕組みです。
          </p>

          <div className="analogy">
            <span className="analogy-term">シリアル通信</span>
            <span className="analogy-equals">=</span>
            <span>1本の線でデータを1ビットずつ順番に送る方式</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">シリアル通信のイメージ</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="9">送信側</text>
              </g>
              
              <g transform="translate(110, 45)">
                <line x1="0" y1="10" x2="120" y2="10" stroke="#3b6ea5" strokeWidth="3" />
                <text x="60" y="0" textAnchor="middle" fill="#4a4a4a" fontSize="8">1ビットずつ順番に</text>
                <g transform="translate(10, 5)">
                  <rect x="0" y="0" width="10" height="10" fill="#27ae60" />
                  <rect x="15" y="0" width="10" height="10" fill="#27ae60" />
                  <rect x="30" y="0" width="10" height="10" fill="#c0392b" />
                  <rect x="45" y="0" width="10" height="10" fill="#27ae60" />
                  <rect x="60" y="0" width="10" height="10" fill="#c0392b" />
                  <rect x="75" y="0" width="10" height="10" fill="#c0392b" />
                  <rect x="90" y="0" width="10" height="10" fill="#27ae60" />
                </g>
                <text x="60" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">1 1 0 1 0 0 1 ...</text>
              </g>
              
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="30" textAnchor="middle" fill="#27ae60" fontSize="9">受信側</text>
              </g>
              
              <g transform="translate(40, 100)">
                <rect x="0" y="0" width="260" height="40" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="130" y="16" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">メリット</text>
                <text x="130" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">配線が少ない / 長距離通信に向く / 広く普及</text>
              </g>
            </g>
          </svg>
          <figcaption>データは1ビットずつ順番に送られ、受信側で復元されます。</figcaption>
        </figure>

        <section>
          <h2>ボーレート(通信速度)</h2>
          <p>
            シリアル通信では「ボーレート」という通信速度を合わせる必要があります。
            9600bps、115200bpsなどの数字で表し、
            1秒間に何ビット送れるかを示します。
            送信側と受信側でボーレートが合っていないと、文字化けします。
          </p>
          <p>
            M5StackやArduinoでは、Serial.begin(115200)のように指定します。
            シリアルモニターも同じボーレートに設定することを忘れないでください。
          </p>
        </section>

        <section>
          <h2>シリアル通信の種類</h2>
          <p>
            シリアル通信にはいくつかの規格があります。
            UART、<Link href="/lessons/48-i2c-basics">I2C</Link>、SPIなどです。
            それぞれ配線の本数、速度、接続できるデバイス数などが異なります。
            次の第56回で、これらの違いを詳しく学びます。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「機器間の通信をどうするか」を説明するとき、
            「シリアル通信」という用語が出てきます。
            「1本の線で順番にデータを送る方式で、
            配線がシンプルになるメリットがあります」と説明できます。
          </p>
          <p>
            シリアルモニターでのデバッグは開発の基本です。
            「開発中はシリアル通信でPCにデータを送って動作確認できます」
            と伝えると、開発のイメージが湧きやすくなります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>UART、I2C、SPIという3つのシリアル通信規格は、それぞれどのような特徴があるのでしょうか。次の第56回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>シリアル通信は、データを1ビットずつ順番に送る方式です。</li>
            <li>ボーレート(通信速度)を送信側と受信側で合わせる必要があります。</li>
            <li>UART、I2C、SPIなど、複数の規格があります。</li>
          </ol>
        </div>

        <AskBox lessonId="55-serial-communication" />

        <LessonNavigation currentLessonNumber={55} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
