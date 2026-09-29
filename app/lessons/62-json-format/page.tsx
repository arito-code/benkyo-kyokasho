import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson62Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={62} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>APIでやり取りするデータの標準形式「JSON」とは何でしょうか。</p>
        </div>
        <h1>第62回: JSONデータ形式</h1>
        <section>
          <h2>概念: JSONは「人にも機械にも読みやすい」データ形式</h2>
          <p>JSON(JavaScript Object Notation)は、データを文字列で表現する形式です。「キー: 値」のペアで構成され、人間が読んでも意味が分かり、プログラムでも簡単に処理できます。REST APIでのデータ送受信に広く使われています。</p>
          <div className="analogy">
            <span className="analogy-term">JSON</span>
            <span className="analogy-equals">=</span>
            <span>人にも機械にも読みやすい「データの書き方」</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">JSONの例</text>
              <g transform="translate(40, 25)">
                <rect x="0" y="0" width="280" height="110" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="15" y="20" fill="#4a4a4a" fontSize="9" fontFamily="monospace">{"{"}</text>
                <text x="25" y="38" fill="#c0392b" fontSize="9" fontFamily="monospace">"temperature"</text>
                <text x="110" y="38" fill="#4a4a4a" fontSize="9" fontFamily="monospace">: 25.5,</text>
                <text x="25" y="56" fill="#c0392b" fontSize="9" fontFamily="monospace">"humidity"</text>
                <text x="95" y="56" fill="#4a4a4a" fontSize="9" fontFamily="monospace">: 58,</text>
                <text x="25" y="74" fill="#c0392b" fontSize="9" fontFamily="monospace">"location"</text>
                <text x="90" y="74" fill="#4a4a4a" fontSize="9" fontFamily="monospace">: "room1",</text>
                <text x="25" y="92" fill="#c0392b" fontSize="9" fontFamily="monospace">"timestamp"</text>
                <text x="100" y="92" fill="#4a4a4a" fontSize="9" fontFamily="monospace">: "2024-01-15T10:30:00"</text>
                <text x="15" y="108" fill="#4a4a4a" fontSize="9" fontFamily="monospace">{"}"}</text>
              </g>
              <text x="180" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="8">"キー": 値 の形式で、データをまとめる</text>
            </g>
          </svg>
          <figcaption>キーと値のペアで、データを構造化して表現します。</figcaption>
        </figure>
        <section>
          <h2>M5StackでJSONを扱う</h2>
          <p>ArduinoJsonライブラリを使うと、JSONの作成と解析が簡単にできます。センサーデータをJSON形式にまとめてPOSTしたり、サーバーからのJSONレスポンスを解析したりできます。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「データはJSON形式で送ります。業界標準なので、さまざまなシステムと連携できます」と説明できます。JSONは多くのプログラミング言語でサポートされているため、クラウド側での処理も容易です。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>IoT機器をインターネットにつなぐとき、セキュリティで気をつけることは何でしょうか。次の第63回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>JSONは「キー: 値」形式のデータ表現方法です。</li>
            <li>人間にも機械にも読みやすく、APIの標準形式です。</li>
            <li>ArduinoJsonライブラリでM5Stackでも簡単に扱えます。</li>
          </ol>
        </div>
        <AskBox lessonId="62-json-format" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
