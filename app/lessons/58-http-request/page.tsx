import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson58Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={58} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Webの世界で使われる「HTTPリクエスト」とは何で、IoTでどう使うのでしょうか。</p>
        </div>
        <h1>第58回: HTTPリクエスト</h1>
        <section>
          <h2>概念: HTTPは「Webの言葉」</h2>
          <p>HTTP(HyperText Transfer Protocol)は、Webブラウザとサーバーがやり取りするときに使うプロトコルです。IoT機器もHTTPを使ってクラウドにデータを送ったり、サーバーから情報を取得したりできます。「GET」はデータを取得する、「POST」はデータを送信するリクエストです。</p>
          <div className="analogy">
            <span className="analogy-term">HTTP</span>
            <span className="analogy-equals">=</span>
            <span>Webサーバーと会話するための「共通言語」</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">HTTPリクエストの流れ</text>
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="80" height="40" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="9">M5Stack</text>
              </g>
              <g transform="translate(110, 35)">
                <line x1="0" y1="10" x2="80" y2="10" stroke="#27ae60" strokeWidth="2" />
                <polygon points="75,5 85,10 75,15" fill="#27ae60" />
                <text x="40" y="0" textAnchor="middle" fill="#27ae60" fontSize="8">POST(送信)</text>
              </g>
              <g transform="translate(110, 55)">
                <line x1="80" y1="10" x2="0" y2="10" stroke="#f39c12" strokeWidth="2" />
                <polygon points="5,5 -5,10 5,15" fill="#f39c12" />
                <text x="40" y="25" textAnchor="middle" fill="#f39c12" fontSize="8">レスポンス</text>
              </g>
              <g transform="translate(200, 25)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="20" textAnchor="middle" fill="#27ae60" fontSize="9">クラウド</text>
                <text x="40" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">サーバー</text>
              </g>
              <g transform="translate(40, 95)">
                <rect x="0" y="0" width="280" height="30" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="140" y="19" textAnchor="middle" fill="#4a4a4a" fontSize="8">GET=取得, POST=送信, PUT=更新, DELETE=削除</text>
              </g>
            </g>
          </svg>
          <figcaption>IoT機器からクラウドへHTTPでデータを送信できます。</figcaption>
        </figure>
        <section>
          <h2>M5StackでHTTPを使う</h2>
          <p>M5StackではHTTPClientライブラリを使います。http.begin(URL)でURLを指定し、http.POST(データ)でデータを送信します。レスポンスコード200が返れば成功です。401や403はアクセス拒否、500はサーバーエラーを意味します。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>クラウドへのデータ送信はHTTPが基本です。「HTTPでクラウドにセンサーデータを送り、ダッシュボードで確認できます」と説明できます。ただし、HTTPは毎回接続を張り直すので、頻繁な送信には向きません。リアルタイム性が必要ならMQTTを検討します。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>リアルタイムなデータ送信に向いた「MQTT」とは何でしょうか。次の第59回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>HTTPはWebの通信プロトコルで、GET/POST/PUT/DELETEがあります。</li>
            <li>POSTでセンサーデータをクラウドに送信できます。</li>
            <li>レスポンスコード200が成功、4xxや5xxはエラーです。</li>
          </ol>
        </div>
        <AskBox lessonId="58-http-request" />

        <LessonNavigation currentLessonNumber={58} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
