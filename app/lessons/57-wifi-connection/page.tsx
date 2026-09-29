import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson57Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={57} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Wi-Fi接続の仕組みと、IoT機器をネットワークにつなぐときの注意点は何でしょうか。</p>
        </div>
        <h1>第57回: Wi-Fi接続の仕組み</h1>
        <section>
          <h2>概念: Wi-Fiは無線でネットワークにつなぐ技術</h2>
          <p>
            <Link href="/lessons/49-m5stack-wifi">第49回</Link>でM5StackのWi-Fi接続を学びました。
            ここでは、Wi-Fiの仕組みをもう少し詳しく見てみましょう。
            Wi-Fiは無線LAN規格の一つで、2.4GHz帯と5GHz帯の電波を使います。
            IoT機器の多くは2.4GHz帯のみ対応なので、注意が必要です。
          </p>
          <div className="analogy">
            <span className="analogy-term">Wi-Fi</span>
            <span className="analogy-equals">=</span>
            <span>無線でルーターに接続し、インターネットにつながる</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Wi-Fi接続の構成</text>
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="70" height="40" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="9">IoT機器</text>
              </g>
              <g transform="translate(95, 35)">
                <path d="M0 20 Q30 0 60 20" fill="none" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" />
                <text x="30" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">2.4GHz</text>
              </g>
              <g transform="translate(160, 25)">
                <rect x="0" y="0" width="70" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="9">ルーター</text>
                <text x="35" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">SSID/PW</text>
              </g>
              <g transform="translate(235, 40)">
                <line x1="0" y1="10" x2="40" y2="10" stroke="#4a4a4a" strokeWidth="2" />
              </g>
              <g transform="translate(280, 20)">
                <ellipse cx="40" cy="35" rx="40" ry="25" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="38" textAnchor="middle" fill="#f39c12" fontSize="9">インターネット</text>
              </g>
              <g transform="translate(40, 95)">
                <rect x="0" y="0" width="280" height="35" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <text x="140" y="14" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">注意点</text>
                <text x="140" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="8">多くのIoT機器は2.4GHz帯のみ対応(5GHz非対応)</text>
              </g>
            </g>
          </svg>
          <figcaption>IoT機器はルーター経由でインターネットにつながります。</figcaption>
        </figure>
        <section>
          <h2>IPアドレスとDHCP</h2>
          <p>Wi-Fiに接続すると、ルーターからIPアドレスが自動で割り当てられます(DHCP)。このIPアドレスを使って、他の機器やインターネットと通信します。固定IPアドレスを設定することもできますが、通常はDHCPで十分です。</p>
        </section>
        <section>
          <h2>セキュリティの基本</h2>
          <p>Wi-Fiにはパスワード(WPA2/WPA3)が設定されています。IoT機器のプログラムにパスワードを書く必要がありますが、ソースコードをGitHubなどに公開する際は、パスワードを含めないよう注意が必要です。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>お客様の環境でWi-Fiを使う場合、「2.4GHz帯に接続できますか」「SSIDとパスワードを教えていただけますか」と確認しましょう。工場などでは、セキュリティの関係でゲストWi-Fiしか使えないこともあります。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>インターネット経由でデータを送る「HTTPリクエスト」とは何でしょうか。次の第58回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Wi-Fiは2.4GHz帯と5GHz帯があり、IoT機器は2.4GHz帯が多いです。</li>
            <li>DHCPでIPアドレスが自動的に割り当てられます。</li>
            <li>パスワードの取り扱いに注意が必要です。</li>
          </ol>
        </div>
        <AskBox lessonId="57-wifi-connection" />

        <LessonNavigation currentLessonNumber={57} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
