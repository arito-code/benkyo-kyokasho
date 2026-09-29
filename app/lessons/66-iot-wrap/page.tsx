import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson66Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={66} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Phase 6で学んだ通信・IoTの知識を、どのように整理して覚えればよいでしょうか。</p>
        </div>
        <h1>第66回: IoTまとめと次へ</h1>
        <section>
          <h2>Phase 6のまとめ</h2>
          <p>Phase 6では、IoTシステムの通信技術を学びました。シリアル通信(<Link href="/lessons/55-serial-communication">UART</Link>/<Link href="/lessons/56-uart-i2c-spi">I2C/SPI</Link>)から始まり、<Link href="/lessons/57-wifi-connection">Wi-Fi</Link>でインターネットにつなぎ、<Link href="/lessons/58-http-request">HTTP</Link>や<Link href="/lessons/59-mqtt-protocol">MQTT</Link>でクラウドとやり取りする方法を学びました。</p>
          <p><Link href="/lessons/60-rest-api">REST API</Link>と<Link href="/lessons/62-json-format">JSON</Link>はデータ交換の標準形式、<Link href="/lessons/61-cloud-basics">クラウドサービス</Link>でデータを保存・分析、<Link href="/lessons/63-iot-security">セキュリティ</Link>で安全に運用、<Link href="/lessons/64-gateway">ゲートウェイ</Link>で多数のセンサーを管理、<Link href="/lessons/65-protocol-choice">プロトコル選び</Link>で最適な構成を設計する知識が身につきました。</p>
          <div className="analogy">
            <span className="analogy-term">IoTシステム</span>
            <span className="analogy-equals">=</span>
            <span>センサー → 通信 → クラウド → 見える化・分析</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 20)">
              <text x="190" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">IoTシステムの全体像</text>
              <g transform="translate(10, 30)">
                <rect x="0" y="0" width="70" height="35" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="8">センサー</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="6">Phase 4</text>
              </g>
              <g transform="translate(85, 40)"><line x1="0" y1="5" x2="20" y2="5" stroke="#4a4a4a" strokeWidth="2" /><polygon points="15,0 25,5 15,10" fill="#4a4a4a" /></g>
              <g transform="translate(110, 30)">
                <rect x="0" y="0" width="70" height="35" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#27ae60" fontSize="8">M5Stack</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="6">Phase 5</text>
              </g>
              <g transform="translate(185, 40)"><line x1="0" y1="5" x2="20" y2="5" stroke="#4a4a4a" strokeWidth="2" /><polygon points="15,0 25,5 15,10" fill="#4a4a4a" /></g>
              <g transform="translate(210, 30)">
                <rect x="0" y="0" width="70" height="35" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#f39c12" fontSize="8">通信</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="6">Phase 6</text>
              </g>
              <g transform="translate(285, 40)"><line x1="0" y1="5" x2="20" y2="5" stroke="#4a4a4a" strokeWidth="2" /><polygon points="15,0 25,5 15,10" fill="#4a4a4a" /></g>
              <g transform="translate(310, 25)">
                <ellipse cx="35" cy="25" rx="35" ry="22" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="35" y="28" textAnchor="middle" fill="#c0392b" fontSize="8">クラウド</text>
              </g>
              <g transform="translate(40, 85)">
                <rect x="0" y="0" width="300" height="45" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">次のPhase 7では</text>
                <text x="150" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="8">Raspberry Piとカメラを使った画像処理を学びます</text>
                <text x="150" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">より高度な処理が可能な「小さなPC」の世界へ</text>
              </g>
            </g>
          </svg>
          <figcaption>センサーから通信、クラウドまでの流れを理解しました。</figcaption>
        </figure>
        <section>
          <h2>次のステップへ</h2>
          <p>Phase 7では、Raspberry Piを学びます。M5Stackより高性能で、カメラを使った画像処理やAIの推論も可能です。IoTの「データを送る」から「画像を扱う」「AIで判断する」へとステップアップしていきましょう。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>お客様に全体像を説明するとき、「センサーで測定し、M5Stackで処理、Wi-FiやMQTTでクラウドに送り、ダッシュボードで見える化します」と一連の流れを説明できます。Phase 4〜6の知識が統合されて、IoTシステム全体を提案できるようになりました。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 6「通信・IoT」は以上です。Phase 7では、Linuxが動く高性能なコンピュータ「Raspberry Pi」を学びます。Raspberry Piとは何でしょうか。次の第67回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>IoTは「センサー→通信→クラウド→見える化」の流れです。</li>
            <li>HTTPはたまに送る用、MQTTはリアルタイム用、JSONはデータ形式です。</li>
            <li>セキュリティ(暗号化・認証)とプロトコル選び(距離・電力)を忘れずに。</li>
          </ol>
        </div>
        <AskBox lessonId="66-iot-wrap" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
