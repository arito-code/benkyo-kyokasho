import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson50Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={50} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーの値を見やすくグラフや数値で表示する「ダッシュボード」は、どうやって作れるでしょうか。</p>
        </div>

        <h1>第50回: 簡易ダッシュボード</h1>

        <section>
          <h2>概念: ダッシュボードは「状況を一目で把握する」画面</h2>
          <p>
            ダッシュボードとは、複数のセンサー値やグラフを1つの画面にまとめて表示するものです。
            車のダッシュボード（計器盤）のように、
            重要な情報を一目で確認できます。
            IoTシステムでは、センサーデータをダッシュボードで監視するのが一般的です。
          </p>
          <p>
            M5Stackの画面に簡易ダッシュボードを作ることもできますし、
            クラウドサービスを使ってスマートフォンやPCで見ることもできます。
            用途に応じて選びましょう。
          </p>

          <div className="analogy">
            <span className="analogy-term">ダッシュボード</span>
            <span className="analogy-equals">=</span>
            <span>複数の情報を一画面にまとめた「見える化」画面</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ダッシュボードの例</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="300" height="150" rx="5" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                
                <rect x="10" y="10" width="90" height="50" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="55" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="8">温度</text>
                <text x="55" y="48" textAnchor="middle" fill="#c0392b" fontSize="14" fontWeight="600">26.5℃</text>
                
                <rect x="105" y="10" width="90" height="50" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" />
                <text x="150" y="28" textAnchor="middle" fill="#27ae60" fontSize="8">湿度</text>
                <text x="150" y="48" textAnchor="middle" fill="#27ae60" fontSize="14" fontWeight="600">58%</text>
                
                <rect x="200" y="10" width="90" height="50" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" />
                <text x="245" y="28" textAnchor="middle" fill="#f39c12" fontSize="8">気圧</text>
                <text x="245" y="48" textAnchor="middle" fill="#f39c12" fontSize="14" fontWeight="600">1013hPa</text>
                
                <rect x="10" y="70" width="280" height="70" rx="3" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" />
                <text x="20" y="85" fill="#4a4a4a" fontSize="8">温度推移</text>
                <polyline points="20,120 50,115 80,118 110,112 140,108 170,110 200,105 230,100 260,103" fill="none" stroke="#c0392b" strokeWidth="2" />
                <line x1="20" y1="130" x2="270" y2="130" stroke="#e0e0e0" strokeWidth="1" />
              </g>
            </g>
          </svg>
          <figcaption>数値表示とグラフを組み合わせて、状況を把握しやすくします。</figcaption>
        </figure>

        <section>
          <h2>M5Stack画面でのダッシュボード</h2>
          <p>
            M5Stackの画面は320×240ピクセルで、複数の情報を表示できます。
            画面を分割して、上に数値、下にグラフを表示するレイアウトが定番です。
            <Link href="/lessons/45-m5stack-display">第45回</Link>で学んだ描画命令を組み合わせて作ります。
          </p>
          <p>
            ただし、画面が小さいので、表示できる情報量には限りがあります。
            重要な情報に絞り、見やすいサイズで表示することが大切です。
          </p>
        </section>

        <section>
          <h2>クラウドダッシュボード</h2>
          <p>
            より多くの情報を見たい場合は、クラウドのダッシュボードサービスが便利です。
            Ambient、Blynk、ThingSpeak、Grafanaなど、
            さまざまなサービスがあります。
            M5StackからHTTPでデータを送ると、
            PCやスマートフォンのブラウザで見られるダッシュボードが自動で作れます。
          </p>
          <p>
            クラウドダッシュボードなら、過去のデータをさかのぼったり、
            複数の場所のデータを並べて比較したりできます。
            遠隔地からの監視にも対応できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ダッシュボードの選択</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="150" height="80" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="75" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">M5Stack画面</text>
                <text x="75" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">・現場ですぐ見える</text>
                <text x="75" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">・ネット不要</text>
                <text x="75" y="70" textAnchor="middle" fill="#c0392b" fontSize="7">・画面サイズに制限</text>
              </g>
              
              <g transform="translate(190, 25)">
                <rect x="0" y="0" width="150" height="80" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="75" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">クラウド</text>
                <text x="75" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">・大画面で見やすい</text>
                <text x="75" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">・履歴・遠隔OK</text>
                <text x="75" y="70" textAnchor="middle" fill="#c0392b" fontSize="7">・ネット必須</text>
              </g>
            </g>
          </svg>
          <figcaption>現場確認はM5Stack画面、詳細分析はクラウドと使い分けます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にデモを見せるとき、ダッシュボードがあると説得力が増します。
            「センサーの値がリアルタイムで見えます」と実際に動いている画面を見せると、
            システムの価値が伝わりやすくなります。
          </p>
          <p>
            「現場ではM5Stackの画面で確認し、
            事務所ではPCでクラウドダッシュボードを見る」
            という二段構えの提案もできます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackをバッテリーで動かすとき、電源管理はどうすればよいでしょうか。次の第51回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ダッシュボードは複数の情報を一画面にまとめた「見える化」画面です。</li>
            <li>M5Stack画面は現場確認向け、クラウドは詳細分析・遠隔監視向けです。</li>
            <li>重要な情報に絞り、見やすいレイアウトを心がけましょう。</li>
          </ol>
        </div>

        <AskBox lessonId="50-simple-dashboard" />

        <LessonNavigation currentLessonNumber={50} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
