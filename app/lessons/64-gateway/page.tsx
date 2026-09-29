import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson64Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={64} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>多くのIoT機器をまとめてインターネットにつなぐ「ゲートウェイ」とは何でしょうか。</p>
        </div>
        <h1>第64回: ゲートウェイとは何か</h1>
        <section>
          <h2>概念: ゲートウェイは「玄関口」</h2>
          <p>ゲートウェイは、複数のIoT機器をまとめてインターネットにつなぐ中継役です。センサーノードはゲートウェイにデータを送り、ゲートウェイがまとめてクラウドに送信します。個々のセンサーがWi-Fiを持つ必要がなくなり、省電力で運用できます。</p>
          <div className="analogy">
            <span className="analogy-term">ゲートウェイ</span>
            <span className="analogy-equals">=</span>
            <span>複数のIoT機器をまとめてクラウドにつなぐ「玄関口」</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ゲートウェイの役割</text>
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="60" height="30" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="30" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="7">センサー1</text>
              </g>
              <g transform="translate(20, 65)">
                <rect x="0" y="0" width="60" height="30" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="30" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="7">センサー2</text>
              </g>
              <g transform="translate(20, 100)">
                <rect x="0" y="0" width="60" height="30" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="30" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="7">センサー3</text>
              </g>
              <g transform="translate(85, 45)"><line x1="0" y1="0" x2="40" y2="15" stroke="#4a4a4a" strokeWidth="1" /></g>
              <g transform="translate(85, 80)"><line x1="0" y1="0" x2="40" y2="0" stroke="#4a4a4a" strokeWidth="1" /></g>
              <g transform="translate(85, 115)"><line x1="0" y1="0" x2="40" y2="-15" stroke="#4a4a4a" strokeWidth="1" /></g>
              <g transform="translate(130, 55)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="22" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">ゲートウェイ</text>
                <text x="40" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">データ集約</text>
              </g>
              <g transform="translate(215, 75)">
                <line x1="0" y1="5" x2="50" y2="5" stroke="#27ae60" strokeWidth="2" />
                <polygon points="45,0 55,5 45,10" fill="#27ae60" />
                <text x="25" y="20" textAnchor="middle" fill="#27ae60" fontSize="7">Wi-Fi/LTE</text>
              </g>
              <g transform="translate(270, 55)">
                <ellipse cx="45" cy="30" rx="45" ry="25" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="45" y="33" textAnchor="middle" fill="#27ae60" fontSize="9">クラウド</text>
              </g>
            </g>
          </svg>
          <figcaption>センサーノードはゲートウェイにデータを送り、ゲートウェイがクラウドに転送します。</figcaption>
        </figure>
        <section>
          <h2>ゲートウェイを使うメリット</h2>
          <p>個々のセンサーにWi-Fiが不要になり、省電力な無線(BLE、LoRa、Zigbeeなど)を使えます。データの前処理(平均化、異常値除去)をゲートウェイで行うこともできます。Raspberry Piなどをゲートウェイとして使うことが多いです。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「センサーを10個以上設置したい」というお客様には、ゲートウェイ構成を提案できます。「各センサーは省電力な無線でゲートウェイに送り、ゲートウェイがまとめてクラウドに送ります。電池交換の手間が減ります」と説明できます。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Wi-Fi、BLE、LoRaなど、さまざまな通信プロトコルがありますが、どう使い分ければよいでしょうか。次の第65回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ゲートウェイは複数のセンサーをまとめてクラウドにつなぐ中継役です。</li>
            <li>センサーは省電力無線(BLE等)、ゲートウェイがWi-Fi/LTEを使います。</li>
            <li>Raspberry Piなどをゲートウェイとして使うことが多いです。</li>
          </ol>
        </div>
        <AskBox lessonId="64-gateway" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
