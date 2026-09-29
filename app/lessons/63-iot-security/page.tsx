import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson63Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={63} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>IoT機器をインターネットにつなぐとき、セキュリティで気をつけることは何でしょうか。</p>
        </div>
        <h1>第63回: IoTセキュリティの基本</h1>
        <section>
          <h2>概念: IoTはセキュリティが重要</h2>
          <p>IoT機器はインターネットにつながるため、セキュリティ対策が必須です。攻撃されると、データを盗まれたり、機器を乗っ取られたりする可能性があります。「通信の暗号化」「認証」「アクセス制限」の3つが基本です。</p>
          <div className="analogy">
            <span className="analogy-term">IoTセキュリティ</span>
            <span className="analogy-equals">=</span>
            <span>暗号化・認証・アクセス制限で機器とデータを守る</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">IoTセキュリティの3本柱</text>
              <g transform="translate(30, 30)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">暗号化</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">HTTPS/TLS</text>
              </g>
              <g transform="translate(145, 30)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">認証</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">API Key / 証明書</text>
              </g>
              <g transform="translate(260, 30)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">アクセス制限</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">最小権限の原則</text>
              </g>
              <g transform="translate(40, 95)">
                <rect x="0" y="0" width="280" height="35" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <text x="140" y="14" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">よくある失敗</text>
                <text x="140" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="8">パスワードをコードに直書き → GitHubで公開してしまう</text>
              </g>
            </g>
          </svg>
          <figcaption>暗号化・認証・アクセス制限の3つを意識しましょう。</figcaption>
        </figure>
        <section>
          <h2>具体的な対策</h2>
          <p>HTTPではなくHTTPS(暗号化通信)を使う、APIキーやパスワードはコードに直書きせず環境変数や設定ファイルで管理する、不要なポートは開けない、ファームウェアを最新に保つ、といった対策が基本です。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>お客様に「セキュリティは大丈夫ですか」と聞かれたら、「通信はHTTPSで暗号化し、APIキーで認証します。本番環境では証明書による認証も検討できます」と説明できます。セキュリティを意識している姿勢が信頼につながります。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>多くのIoT機器をまとめてインターネットにつなぐ「ゲートウェイ」とは何でしょうか。次の第64回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>IoTセキュリティは暗号化・認証・アクセス制限の3本柱です。</li>
            <li>HTTPSで通信を暗号化し、APIキーや証明書で認証します。</li>
            <li>パスワードやAPIキーをコードに直書きしないようにしましょう。</li>
          </ol>
        </div>
        <AskBox lessonId="63-iot-security" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
