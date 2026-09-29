import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson60Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={60} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Webサービスとデータをやり取りする「REST API」とは何でしょうか。</p>
        </div>
        <h1>第60回: REST APIの基本</h1>
        <section>
          <h2>概念: APIは「プログラム同士の会話方法」</h2>
          <p>API(Application Programming Interface)は、プログラムが他のサービスとデータをやり取りするための約束事です。REST(Representational State Transfer)APIは、<Link href="/lessons/58-http-request">HTTP</Link>を使った標準的なAPI設計スタイルです。多くのクラウドサービスがREST APIを提供しています。</p>
          <div className="analogy">
            <span className="analogy-term">REST API</span>
            <span className="analogy-equals">=</span>
            <span>HTTPを使ったWebサービスとの標準的な会話方法</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">REST APIの基本操作</text>
              <g transform="translate(30, 25)">
                <rect x="0" y="0" width="70" height="30" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9">GET</text>
              </g>
              <text x="130" y="45" fill="#4a4a4a" fontSize="8">データを取得する</text>
              <g transform="translate(30, 60)">
                <rect x="0" y="0" width="70" height="30" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="9">POST</text>
              </g>
              <text x="130" y="80" fill="#4a4a4a" fontSize="8">新しいデータを作成する</text>
              <g transform="translate(200, 25)">
                <rect x="0" y="0" width="70" height="30" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#f39c12" fontSize="9">PUT</text>
              </g>
              <text x="300" y="45" fill="#4a4a4a" fontSize="8">データを更新する</text>
              <g transform="translate(200, 60)">
                <rect x="0" y="0" width="70" height="30" rx="3" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#c0392b" fontSize="9">DELETE</text>
              </g>
              <text x="300" y="80" fill="#4a4a4a" fontSize="8">データを削除する</text>
              <g transform="translate(40, 100)">
                <rect x="0" y="0" width="280" height="25" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="140" y="16" textAnchor="middle" fill="#4a4a4a" fontSize="8">例: GET /api/sensors/1 → センサー1のデータを取得</text>
              </g>
            </g>
          </svg>
          <figcaption>HTTPメソッドを使い分けて、データを操作します。</figcaption>
        </figure>
        <section>
          <h2>IoTでのREST API活用</h2>
          <p>センサーデータをクラウドに送るときはPOSTを使います。過去のデータを取得するときはGETを使います。AmbientやThingSpeakなどのIoTプラットフォームはREST APIを提供しており、HTTPClientライブラリで簡単に利用できます。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「クラウドサービスと連携したい」というお客様には、「REST APIを使えば、HTTPでデータのやり取りができます。多くのクラウドがREST APIを提供しています」と説明できます。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>データをクラウドに保存して分析する「クラウドサービス」には、どのようなものがあるでしょうか。次の第61回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>REST APIは、HTTPを使ったWebサービスとの標準的な通信方法です。</li>
            <li>GET(取得)、POST(作成)、PUT(更新)、DELETE(削除)を使い分けます。</li>
            <li>多くのIoTプラットフォームがREST APIを提供しています。</li>
          </ol>
        </div>
        <AskBox lessonId="60-rest-api" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
