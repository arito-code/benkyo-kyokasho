import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson67Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={67} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackより高性能な「Raspberry Pi」とは、どのようなコンピュータでしょうか。</p>
        </div>
        <h1>第67回: Raspberry Piとは何か</h1>
        <section>
          <h2>概念: Raspberry Piは「カード大の小さなPC」</h2>
          <p>Raspberry Pi(ラズベリーパイ、通称ラズパイ)は、クレジットカードサイズの小型コンピュータです。<Link href="/lessons/44-m5stack-intro">M5Stack</Link>がマイコンベースなのに対し、Raspberry PiはLinux OSが動く本格的なPCです。画像処理、AI推論、サーバー運用など、M5Stackでは難しい重い処理もこなせます。</p>
          <div className="analogy">
            <span className="analogy-term">Raspberry Pi</span>
            <span className="analogy-equals">=</span>
            <span>Linux OSが動く「カードサイズのPC」</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Raspberry Piの特徴</text>
              <g transform="translate(30, 30)">
                <rect x="0" y="0" width="130" height="100" rx="5" fill="#27ae60" stroke="#1e8449" strokeWidth="2" />
                <rect x="10" y="10" width="110" height="60" fill="#1a1a1a" rx="3" />
                <text x="65" y="35" textAnchor="middle" fill="white" fontSize="8">Linux OS</text>
                <text x="65" y="50" textAnchor="middle" fill="#ccc" fontSize="7">Python, Node.js...</text>
                <rect x="115" y="75" width="15" height="10" fill="#f39c12" rx="1" />
                <text x="8" y="85" fill="white" fontSize="6">USB</text>
                <circle cx="25" cy="85" r="4" fill="#3b6ea5" />
                <circle cx="40" cy="85" r="4" fill="#3b6ea5" />
                <text x="55" y="88" fill="white" fontSize="6">GPIO</text>
                <text x="65" y="115" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">Raspberry Pi</text>
              </g>
              <g transform="translate(200, 35)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="9">M5Stackとの違い:</text>
                <text x="0" y="18" fill="#27ae60" fontSize="8">✓ Linux OSが動く</text>
                <text x="0" y="33" fill="#27ae60" fontSize="8">✓ Python/Node.jsで開発</text>
                <text x="0" y="48" fill="#27ae60" fontSize="8">✓ 画像処理・AI可能</text>
                <text x="0" y="63" fill="#27ae60" fontSize="8">✓ USB/HDMI/カメラ端子</text>
                <text x="0" y="83" fill="#c0392b" fontSize="8">△ 消費電力が大きい</text>
                <text x="0" y="98" fill="#c0392b" fontSize="8">△ リアルタイム制御は苦手</text>
              </g>
            </g>
          </svg>
          <figcaption>Raspberry PiはLinuxが動く高性能な小型コンピュータです。</figcaption>
        </figure>
        <section>
          <h2>Raspberry Piのラインナップ</h2>
          <p>Raspberry Pi 4/5が主力モデルで、RAM 2GB〜8GBを選べます。画像処理やAIには4GB以上がおすすめです。小型のPi Zero 2 Wは省電力で組み込み向け、Picoはマイコンボードで用途が異なります。</p>
        </section>
        <section>
          <h2>M5StackとRaspberry Piの使い分け</h2>
          <p>シンプルなセンサー監視やデモにはM5Stack、カメラ画像処理やAI推論にはRaspberry Pi、というのが基本的な使い分けです。Raspberry Piを<Link href="/lessons/64-gateway">ゲートウェイ</Link>として、M5Stackやセンサーをつなぐ構成もよく使われます。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「カメラ画像を使いたい」「AIで異常検知したい」というお客様には、Raspberry Piを提案できます。「LinuxのPCなので、Pythonで柔軟に開発でき、ライブラリも豊富です」と説明できます。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Raspberry PiにLinux OSをインストールし、リモートでアクセスするには、どうすればよいでしょうか。次の第68回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Raspberry PiはLinux OSが動く、カードサイズの小型PCです。</li>
            <li>画像処理やAI推論など、M5Stackでは難しい処理もできます。</li>
            <li>シンプルな監視はM5Stack、高度な処理はRaspberry Piと使い分けます。</li>
          </ol>
        </div>
        <AskBox lessonId="67-raspi-intro" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
