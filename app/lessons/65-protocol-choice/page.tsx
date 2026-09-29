import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson65Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={65} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Wi-Fi、BLE、LoRaなど、さまざまな通信プロトコルがありますが、どう使い分ければよいでしょうか。</p>
        </div>
        <h1>第65回: 通信プロトコルの選び方</h1>
        <section>
          <h2>概念: 距離・速度・電力のトレードオフ</h2>
          <p>通信プロトコルにはそれぞれ特徴があり、距離、速度、消費電力のバランスが異なります。用途に応じて最適なプロトコルを選ぶことが大切です。「近距離・高速」ならWi-Fi、「省電力・短距離」ならBLE、「長距離・省電力」ならLoRaが向いています。</p>
          <div className="analogy">
            <span className="analogy-term">プロトコル選び</span>
            <span className="analogy-equals">=</span>
            <span>距離・速度・電力のバランスで決める</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(10, 20)">
              <text x="190" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">通信プロトコルの比較</text>
              <g transform="translate(15, 25)">
                <rect x="0" y="0" width="85" height="55" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="42" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">Wi-Fi</text>
                <text x="42" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="7">距離: 〜100m</text>
                <text x="42" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 高速</text>
                <text x="42" y="54" textAnchor="middle" fill="#c0392b" fontSize="7">電力: 大</text>
              </g>
              <g transform="translate(110, 25)">
                <rect x="0" y="0" width="85" height="55" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="42" y="15" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">BLE</text>
                <text x="42" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="7">距離: 〜30m</text>
                <text x="42" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 中程度</text>
                <text x="42" y="54" textAnchor="middle" fill="#27ae60" fontSize="7">電力: 小</text>
              </g>
              <g transform="translate(205, 25)">
                <rect x="0" y="0" width="85" height="55" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="42" y="15" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">LoRa</text>
                <text x="42" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="7">距離: 数km</text>
                <text x="42" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 低速</text>
                <text x="42" y="54" textAnchor="middle" fill="#27ae60" fontSize="7">電力: 小</text>
              </g>
              <g transform="translate(300, 25)">
                <rect x="0" y="0" width="85" height="55" rx="3" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="42" y="15" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">LTE/5G</text>
                <text x="42" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="7">距離: 広域</text>
                <text x="42" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">速度: 高速</text>
                <text x="42" y="54" textAnchor="middle" fill="#c0392b" fontSize="7">電力: 大/費用</text>
              </g>
              <g transform="translate(40, 95)">
                <rect x="0" y="0" width="300" height="45" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">選び方の目安</text>
                <text x="150" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="8">屋内・電源あり→Wi-Fi / 電池駆動→BLE</text>
                <text x="150" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">屋外・長距離→LoRa / どこでも→LTE</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じて最適なプロトコルを選びます。</figcaption>
        </figure>
        <section>
          <h2>よくある組み合わせ</h2>
          <p>屋内のセンサーネットワークは、センサー→BLE→<Link href="/lessons/64-gateway">ゲートウェイ</Link>→Wi-Fi→クラウドという構成がよく使われます。農場など広い場所ではLoRaが活躍します。移動するデバイス(車両など)にはLTEが向いています。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「どの通信方式がよいですか」と聞かれたら、設置場所(屋内/屋外)、電源の有無(コンセント/電池)、通信距離を確認しましょう。「オフィス内で電源が取れるならWi-Fiが簡単です。電池駆動ならBLEでゲートウェイにつなぐ構成がおすすめです」と説明できます。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 6の最後に、IoTの全体像をまとめましょう。次の第66回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Wi-Fiは高速だが電力大、BLEは省電力だが短距離、LoRaは長距離省電力だが低速です。</li>
            <li>電源が取れる場所はWi-Fi、電池駆動はBLE、広域はLoRa/LTEが向きます。</li>
            <li>設置環境と電源状況を確認して選びます。</li>
          </ol>
        </div>
        <AskBox lessonId="65-protocol-choice" />

        <LessonNavigation currentLessonNumber={65} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
