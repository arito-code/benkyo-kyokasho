import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson76Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={76} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 7: Raspberry Pi+カメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Raspberry PiとM5Stack、どちらを選べばいいですか？</p>
        </div>

        <h1>第76回: Raspberry Pi vs M5Stack</h1>

        <section>
          <h2>概念: 適材適所の選択</h2>
          <p>
            Raspberry PiとM5Stackはどちらも人気のあるデバイスですが、
            得意分野が異なります。案件の要件に応じて適切に選択することが重要です。
            「どちらが良いか」ではなく「何に向いているか」で考えます。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：Raspberry Piは「ノートパソコン」、
            M5Stackは「スマートウォッチ」のようなものです。
            どちらも便利ですが、文書作成にはパソコン、運動記録には
            スマートウォッチが向いているように、用途で選びます。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 240" className="lesson-svg">
            <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">Raspberry Pi vs M5Stack 比較</text>

            <rect x="30" y="35" width="150" height="190" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="105" y="55" textAnchor="middle" fontSize="11" fontWeight="bold">Raspberry Pi</text>

            <rect x="220" y="35" width="150" height="190" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="5"/>
            <text x="295" y="55" textAnchor="middle" fontSize="11" fontWeight="bold">M5Stack</text>

            <text x="105" y="75" textAnchor="middle" fontSize="9">🖥️ Linux OS</text>
            <text x="105" y="90" textAnchor="middle" fontSize="9">💪 高処理能力</text>
            <text x="105" y="105" textAnchor="middle" fontSize="9">📷 カメラ向き</text>
            <text x="105" y="120" textAnchor="middle" fontSize="9">🔌 常時電源必要</text>
            <text x="105" y="135" textAnchor="middle" fontSize="9">⏱️ 起動に時間</text>
            <text x="105" y="150" textAnchor="middle" fontSize="9">📦 ケース別売り</text>
            <text x="105" y="175" textAnchor="middle" fontSize="8" fill="#2e7d32">向いている用途:</text>
            <text x="105" y="190" textAnchor="middle" fontSize="8">画像処理・AI推論</text>
            <text x="105" y="203" textAnchor="middle" fontSize="8">サーバー・ゲートウェイ</text>
            <text x="105" y="216" textAnchor="middle" fontSize="8">複雑なプログラム</text>

            <text x="295" y="75" textAnchor="middle" fontSize="9">⚡ リアルタイムOS</text>
            <text x="295" y="90" textAnchor="middle" fontSize="9">🔋 省電力</text>
            <text x="295" y="105" textAnchor="middle" fontSize="9">📡 センサー向き</text>
            <text x="295" y="120" textAnchor="middle" fontSize="9">🔋 バッテリー可</text>
            <text x="295" y="135" textAnchor="middle" fontSize="9">⚡ 瞬時起動</text>
            <text x="295" y="150" textAnchor="middle" fontSize="9">📦 ケース一体型</text>
            <text x="295" y="175" textAnchor="middle" fontSize="8" fill="#ef6c00">向いている用途:</text>
            <text x="295" y="190" textAnchor="middle" fontSize="8">センサー収集</text>
            <text x="295" y="203" textAnchor="middle" fontSize="8">携帯・移動利用</text>
            <text x="295" y="216" textAnchor="middle" fontSize="8">シンプルな制御</text>
          </svg>
          <figcaption>図: Raspberry PiとM5Stackの特徴比較</figcaption>
        </figure>

        <section>
          <h2>選択の基準</h2>

          <h3>Raspberry Piを選ぶ場面</h3>
          <ul>
            <li><strong>画像処理</strong>: カメラ映像の解析、AI推論</li>
            <li><strong>データ集約</strong>: 複数センサーのゲートウェイ</li>
            <li><strong>複雑な処理</strong>: データベース、Web画面、Python/Node.js</li>
            <li><strong>開発環境</strong>: 普通のパソコンのように使いたい</li>
          </ul>

          <h3>M5Stackを選ぶ場面</h3>
          <ul>
            <li><strong>センサー収集</strong>: 温度・湿度・振動などの計測</li>
            <li><strong>携帯利用</strong>: バッテリー駆動で持ち運び</li>
            <li><strong>即時起動</strong>: 電源ONですぐ動作開始</li>
            <li><strong>量産向け</strong>: 同じ機能を多数設置</li>
          </ul>
        </section>

        <section>
          <h2>組み合わせて使う</h2>
          <p>
            実際のIoTシステムでは、両方を組み合わせることも多いです。
          </p>
          <ul>
            <li>M5Stackでセンサーデータを収集</li>
            <li>Raspberry Piでデータを集約・処理</li>
            <li>Raspberry Piからクラウドへ送信</li>
          </ul>
          <p>
            このように、それぞれの強みを活かした構成が効果的です。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「どちらを買えばいいですか」という質問に対して、
            要件を聞いた上で適切に提案できます。「画像認識をしたいならRaspberry Pi、
            温度センサーを10箇所に設置するならM5Stackがコスト的にも有利です」
            といった具体的なアドバイスが可能になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Raspberry Piで学んだことを、実務にどう活かせばいいですか？</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Raspberry Piは画像処理・複雑な処理向き。M5Stackはセンサー・携帯向き</li>
            <li>どちらが良いかではなく、何に向いているかで選ぶ</li>
            <li>組み合わせて使うことで、それぞれの強みを活かせる</li>
          </ol>
        </div>

        <AskBox lessonId="76-raspi-vs-m5" />

        <LessonNavigation currentLessonNumber={76} />
      </main>
    </>
  )
}
