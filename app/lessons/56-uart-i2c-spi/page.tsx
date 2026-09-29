import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson56Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={56} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>UART、I2C、SPIという3つのシリアル通信規格は、それぞれどのような特徴があるのでしょうか。</p>
        </div>
        <h1>第56回: UART・I2C・SPIの違い</h1>
        <section>
          <h2>概念: 用途に応じた3つの通信方式</h2>
          <p>
            <Link href="/lessons/55-serial-communication">前回</Link>学んだシリアル通信には、
            主にUART、<Link href="/lessons/48-i2c-basics">I2C</Link>、SPIの3種類があります。
            それぞれ配線数、速度、接続できるデバイス数が異なり、用途に応じて使い分けます。
          </p>
          <div className="analogy">
            <span className="analogy-term">3つの規格</span>
            <span className="analogy-equals">=</span>
            <span>速度・配線数・用途で使い分ける通信方式</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">UART・I2C・SPIの比較</text>
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="100" height="120" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">UART</text>
                <text x="50" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">配線: TX, RX (2本)</text>
                <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 中程度</text>
                <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="7">接続: 1対1</text>
                <text x="50" y="90" textAnchor="middle" fill="#27ae60" fontSize="7">用途: PCとの通信</text>
                <text x="50" y="105" textAnchor="middle" fill="#27ae60" fontSize="7">GPSモジュール等</text>
              </g>
              <g transform="translate(135, 25)">
                <rect x="0" y="0" width="100" height="120" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">I2C</text>
                <text x="50" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">配線: SDA, SCL (2本)</text>
                <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 低〜中</text>
                <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="7">接続: 多数可能</text>
                <text x="50" y="90" textAnchor="middle" fill="#27ae60" fontSize="7">用途: センサー接続</text>
                <text x="50" y="105" textAnchor="middle" fill="#27ae60" fontSize="7">Grove対応多い</text>
              </g>
              <g transform="translate(250, 25)">
                <rect x="0" y="0" width="100" height="120" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">SPI</text>
                <text x="50" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">配線: 4本以上</text>
                <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 高速</text>
                <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="7">接続: CS線で選択</text>
                <text x="50" y="90" textAnchor="middle" fill="#27ae60" fontSize="7">用途: 高速データ</text>
                <text x="50" y="105" textAnchor="middle" fill="#27ae60" fontSize="7">SD カード、液晶等</text>
              </g>
            </g>
          </svg>
          <figcaption>それぞれ配線数と速度のトレードオフがあります。</figcaption>
        </figure>
        <section>
          <h2>選び方のポイント</h2>
          <p>センサーを1〜2個つなぐなら、配線が少ないI2Cが便利です。高速なデータ転送が必要なら、SPIを選びます。PCとの通信やGPSモジュールにはUARTがよく使われます。M5StackではI2Cが標準的なセンサー接続方式です。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>お客様にセンサーの接続方法を説明するとき、「I2Cなら2本の線で複数のセンサーをつなげます」と言えます。高速なカメラ画像転送などでは「SPIで高速に送れます」と説明できます。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>機器をインターネットにつなぐWi-Fi接続は、どのような仕組みで動くのでしょうか。次の第57回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>UARTは1対1の通信、PCやGPSモジュールとの接続に使います。</li>
            <li>I2Cは2本の線で複数のセンサーを接続できます。</li>
            <li>SPIは高速通信が必要なときに使います。</li>
          </ol>
        </div>
        <AskBox lessonId="56-uart-i2c-spi" />

        <LessonNavigation currentLessonNumber={56} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
