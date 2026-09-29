import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson59Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={59} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>IoTでよく使われる「MQTT」とは何で、HTTPとどう違うのでしょうか。</p>
        </div>
        <h1>第59回: MQTTプロトコル</h1>
        <section>
          <h2>概念: MQTTは「軽量でリアルタイム」なIoT向け通信</h2>
          <p>MQTT(Message Queuing Telemetry Transport)は、IoT向けに設計された軽量な通信プロトコルです。HTTPより通信量が少なく、常時接続でリアルタイムにメッセージを送受信できます。「Publish(発行)」でデータを送り、「Subscribe(購読)」でデータを受け取ります。</p>
          <div className="analogy">
            <span className="analogy-term">MQTT</span>
            <span className="analogy-equals">=</span>
            <span>IoT向けの軽量・リアルタイム通信プロトコル</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">MQTTの仕組み(Pub/Sub)</text>
              <g transform="translate(20, 35)">
                <rect x="0" y="0" width="70" height="35" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="22" textAnchor="middle" fill="#3b6ea5" fontSize="8">センサー(Pub)</text>
              </g>
              <g transform="translate(95, 45)">
                <line x1="0" y1="5" x2="50" y2="5" stroke="#27ae60" strokeWidth="2" />
                <polygon points="45,0 55,5 45,10" fill="#27ae60" />
              </g>
              <g transform="translate(150, 20)">
                <rect x="0" y="0" width="70" height="60" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="35" y="25" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">Broker</text>
                <text x="35" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">トピック管理</text>
              </g>
              <g transform="translate(225, 30)">
                <line x1="0" y1="5" x2="50" y2="5" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="45,0 55,5 45,10" fill="#3b6ea5" />
              </g>
              <g transform="translate(225, 60)">
                <line x1="0" y1="5" x2="50" y2="5" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="45,0 55,5 45,10" fill="#3b6ea5" />
              </g>
              <g transform="translate(280, 20)">
                <rect x="0" y="0" width="70" height="30" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="8">ダッシュボード</text>
              </g>
              <g transform="translate(280, 55)">
                <rect x="0" y="0" width="70" height="30" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="8">スマホアプリ</text>
              </g>
              <g transform="translate(40, 100)">
                <rect x="0" y="0" width="280" height="40" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#4a4a4a" fontSize="8">トピック例: sensors/room1/temperature</text>
                <text x="140" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">Subscribeした全員にPublishが届く</text>
              </g>
            </g>
          </svg>
          <figcaption>Brokerが中継し、Subscribeした全員にメッセージが届きます。</figcaption>
        </figure>
        <section>
          <h2>HTTPとMQTTの使い分け</h2>
          <p>HTTPは「1回送って1回受け取る」方式で、たまにデータを送るのに向きます。MQTTは常時接続で、リアルタイムに双方向通信ができます。センサーデータを頻繁に送るならMQTT、1日1回程度ならHTTPで十分です。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「リアルタイムで値を見たい」というお客様には、MQTTを提案しましょう。「HTTPより通信量が少なく、常時接続でリアルタイムに更新されます」と説明できます。AWSのIoT CoreやAzureのIoT Hubは、MQTTをサポートしています。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Webサービスとデータをやり取りする「REST API」とは何でしょうか。次の第60回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>MQTTはIoT向けの軽量プロトコルで、Publish/Subscribeモデルです。</li>
            <li>Brokerがトピックを管理し、Subscribeした全員にメッセージを配信します。</li>
            <li>リアルタイム性が必要ならMQTT、たまに送るならHTTPを選びます。</li>
          </ol>
        </div>
        <AskBox lessonId="59-mqtt-protocol" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
