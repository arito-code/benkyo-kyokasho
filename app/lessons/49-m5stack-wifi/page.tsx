import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson49Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={49} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5StackをWi-Fiに接続して、インターネット経由でデータを送るには、どうすればよいでしょうか。</p>
        </div>

        <h1>第49回: M5StackのWi-Fi</h1>

        <section>
          <h2>概念: Wi-Fiでインターネットに接続する</h2>
          <p>
            M5Stackには、Wi-Fiモジュールが内蔵されています。
            家庭やオフィスのWi-Fiルーターに接続すれば、
            インターネットを通じてクラウドにデータを送ったり、
            遠隔地から状態を確認したりできます。
          </p>
          <p>
            Wi-Fiに接続するには、SSID（ネットワーク名）とパスワードが必要です。
            プログラムにこれらを書いて、WiFi.begin()関数を呼ぶと接続が始まります。
            接続が完了すると、IPアドレスが割り当てられ、通信が可能になります。
          </p>

          <div className="analogy">
            <span className="analogy-term">Wi-Fi接続</span>
            <span className="analogy-equals">=</span>
            <span>M5Stackをインターネットの世界につなげる</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Wi-Fi接続の流れ</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="70" height="50" rx="5" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                <text x="35" y="30" textAnchor="middle" fill="white" fontSize="9">M5Stack</text>
              </g>
              
              <g transform="translate(95, 40)">
                <path d="M0 20 Q20 0 40 20" fill="none" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" />
                <path d="M5 20 Q20 5 35 20" fill="none" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" />
                <text x="20" y="35" textAnchor="middle" fill="#3b6ea5" fontSize="8">Wi-Fi</text>
              </g>
              
              <g transform="translate(140, 25)">
                <rect x="0" y="0" width="60" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="8">ルーター</text>
                <text x="30" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="7">SSID/PW</text>
              </g>
              
              <g transform="translate(205, 45)">
                <line x1="0" y1="10" x2="40" y2="10" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="35,5 45,10 35,15" fill="#4a4a4a" />
              </g>
              
              <g transform="translate(250, 15)">
                <ellipse cx="45" cy="40" rx="45" ry="30" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="45" y="38" textAnchor="middle" fill="#27ae60" fontSize="9">インターネット</text>
                <text x="45" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">クラウド</text>
              </g>
              
              <g transform="translate(20, 100)">
                <rect x="0" y="0" width="300" height="60" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="10" y="18" fill="#4a4a4a" fontSize="9" fontWeight="500">接続コード例:</text>
                <text x="10" y="35" fill="#3b6ea5" fontSize="8" fontFamily="monospace">WiFi.begin("SSID", "password");</text>
                <text x="10" y="50" fill="#3b6ea5" fontSize="8" fontFamily="monospace">while(WiFi.status() != WL_CONNECTED) delay(500);</text>
              </g>
            </g>
          </svg>
          <figcaption>SSIDとパスワードを指定してWi-Fiルーターに接続します。</figcaption>
        </figure>

        <section>
          <h2>接続状態の確認</h2>
          <p>
            Wi-Fi接続には数秒かかることがあります。
            WiFi.status()で接続状態を確認し、
            WL_CONNECTEDになるまで待ちます。
            接続できたら、WiFi.localIP()でIPアドレスを取得できます。
          </p>
          <p>
            接続に失敗することもあります。
            SSIDやパスワードの間違い、電波が弱い、
            ルーターの設定でMACアドレス制限がかかっている、などが原因です。
            接続状態を画面に表示すると、トラブルシューティングしやすくなります。
          </p>
        </section>

        <section>
          <h2>電力消費に注意</h2>
          <p>
            Wi-Fiは電力を消費します。
            バッテリー駆動の場合、常時Wi-Fi接続していると電池の減りが早くなります。
            必要なときだけ接続して、データを送ったら切断する、という使い方も検討しましょう。
          </p>
          <p>
            M5StackにはDeep Sleepモードがあり、
            一定時間ごとに起きてデータを送り、また眠る、という省電力運用ができます。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「センサーデータをクラウドに送りたい」と言われたら、
            M5StackのWi-Fi機能を提案できます。
            「Wi-Fi内蔵なので、追加部品なしでインターネットにつながります」
            と説明できます。
          </p>
          <p>
            ただし、「お客様の環境のWi-Fiに接続できるか」を事前に確認しましょう。
            工場などではセキュリティの関係でWi-Fi接続が制限されていることがあります。
            その場合は、有線LANやLTE通信モジュールなど、別の方法を検討します。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Wi-Fiでクラウドにつながったら、センサーの値を見やすく表示する「ダッシュボード」を作りたくなります。簡易ダッシュボードはどうやって作るのでしょうか。次の第50回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>WiFi.begin(SSID, password)でWi-Fiに接続します。</li>
            <li>接続状態はWiFi.status()で確認し、WL_CONNECTEDになるまで待ちます。</li>
            <li>Wi-Fiは電力を消費するので、バッテリー運用では省電力を考慮します。</li>
          </ol>
        </div>

        <AskBox lessonId="49-m5stack-wifi" />

        <LessonNavigation currentLessonNumber={49} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
