import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson44Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={44} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーで測った値を画面に表示したり、インターネットに送ったりするには、どんな機器が必要でしょうか。「M5Stack」とは何でしょうか。</p>
        </div>

        <h1>第44回: M5Stackとは何か</h1>

        <section>
          <h2>概念: M5Stackは「オールインワン」の小さなコンピュータ</h2>
          <p>
            M5Stackは、手のひらサイズの小さなコンピュータです。
            <Link href="/lessons/03-computer">第3回</Link>で学んだマイコン（ESP32）を内蔵し、
            画面、ボタン、スピーカー、バッテリー、Wi-Fi、Bluetoothが最初からそろっています。
            ブレッドボードで配線しなくても、箱から出してすぐに使えるのが特徴です。
          </p>
          <p>
            センサーをつないで値を画面に表示したり、
            Wi-Fiでクラウドにデータを送ったりすることが簡単にできます。
            プロトタイプ（試作品）を素早く作るのに最適で、
            技術営業のデモンストレーションにも活躍します。
          </p>

          <div className="analogy">
            <span className="analogy-term">M5Stack</span>
            <span className="analogy-equals">=</span>
            <span>画面・ボタン・Wi-Fi付きの小さなコンピュータ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">M5Stackの構成</text>
              
              <g transform="translate(120, 25)">
                <rect x="0" y="0" width="100" height="110" rx="8" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                <rect x="10" y="10" width="80" height="60" rx="3" fill="#3b6ea5" />
                <text x="50" y="35" textAnchor="middle" fill="white" fontSize="9">画面</text>
                <text x="50" y="50" textAnchor="middle" fill="white" fontSize="8">2インチ液晶</text>
                
                <g transform="translate(10, 80)">
                  <rect x="0" y="0" width="22" height="20" rx="3" fill="#c0392b" />
                  <rect x="28" y="0" width="22" height="20" rx="3" fill="#27ae60" />
                  <rect x="56" y="0" width="22" height="20" rx="3" fill="#3b6ea5" />
                  <text x="11" y="14" textAnchor="middle" fill="white" fontSize="7">A</text>
                  <text x="39" y="14" textAnchor="middle" fill="white" fontSize="7">B</text>
                  <text x="67" y="14" textAnchor="middle" fill="white" fontSize="7">C</text>
                </g>
              </g>
              
              <g transform="translate(20, 50)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="9">内蔵機能:</text>
                <text x="0" y="18" fill="#3b6ea5" fontSize="8">✓ ESP32マイコン</text>
                <text x="0" y="33" fill="#3b6ea5" fontSize="8">✓ Wi-Fi / Bluetooth</text>
                <text x="0" y="48" fill="#3b6ea5" fontSize="8">✓ スピーカー</text>
                <text x="0" y="63" fill="#3b6ea5" fontSize="8">✓ バッテリー</text>
                <text x="0" y="78" fill="#3b6ea5" fontSize="8">✓ Groveコネクタ</text>
              </g>
              
              <g transform="translate(250, 50)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="9">メリット:</text>
                <text x="0" y="18" fill="#27ae60" fontSize="8">・配線不要で動く</text>
                <text x="0" y="33" fill="#27ae60" fontSize="8">・画面で結果が見える</text>
                <text x="0" y="48" fill="#27ae60" fontSize="8">・Wi-Fi内蔵</text>
                <text x="0" y="63" fill="#27ae60" fontSize="8">・デモに最適</text>
              </g>
              
              <g transform="translate(40, 150)">
                <rect x="0" y="0" width="260" height="30" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="130" y="19" textAnchor="middle" fill="#27ae60" fontSize="9">すぐに動く試作品が作れる = プロトタイピング向き</text>
              </g>
            </g>
          </svg>
          <figcaption>M5Stackは画面・ボタン・通信機能が一体になっています。</figcaption>
        </figure>

        <section>
          <h2>M5Stackのラインナップ</h2>
          <p>
            M5Stackにはいくつかの種類があります。
            「M5Stack Basic」は標準モデルで、2インチ画面と3つのボタンを持ちます。
            「M5Stack Core2」はタッチパネル対応で、より高機能です。
          </p>
          <p>
            小型の「M5StickC」は、1インチ画面で持ち運びに便利です。
            画面のない「ATOM」シリーズは、最小サイズで組み込み用途向けです。
            用途に応じて選べるのがM5Stackシリーズの強みです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">M5Stackシリーズ</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="75" height="70" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="37" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">Basic/Core2</text>
                <text x="37" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">2インチ画面</text>
                <text x="37" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">標準サイズ</text>
              </g>
              
              <g transform="translate(115, 25)">
                <rect x="0" y="0" width="75" height="70" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="37" y="25" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">StickC</text>
                <text x="37" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">1インチ画面</text>
                <text x="37" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">コンパクト</text>
              </g>
              
              <g transform="translate(210, 25)">
                <rect x="0" y="0" width="75" height="70" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="37" y="25" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">ATOM</text>
                <text x="37" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">画面なし</text>
                <text x="37" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">最小サイズ</text>
              </g>
              
              <g transform="translate(305, 25)">
                <rect x="0" y="0" width="55" height="70" rx="5" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="2" />
                <text x="27" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">他</text>
                <text x="27" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="7">Paper</text>
                <text x="27" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">Dial等</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じて最適なサイズ・機能を選べます。</figcaption>
        </figure>

        <section>
          <h2>開発環境</h2>
          <p>
            M5Stackのプログラムは、Arduino IDEやPlatformIOで書けます。
            C/C++ベースのArduino言語を使うのが一般的です。
            UIFlowというビジュアルプログラミング環境もあり、
            ブロックを並べるだけでプログラムが作れます。
          </p>
          <p>
            豊富なサンプルコードとライブラリが用意されているので、
            初めての人でも始めやすいのがM5Stackの良いところです。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「センサーの試作をしたい」と言われたら、
            M5Stackをおすすめできます。
            「ブレッドボードで配線しなくても、すぐに画面付きのデモが作れます」
            と説明できます。
          </p>
          <p>
            展示会のデモや、社内での概念実証（PoC）に最適です。
            「まずM5Stackで動くものを見せて、本番は別のハードで」
            という段階的な進め方も提案できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackの画面に文字や数値を表示するには、どうすればよいでしょうか。次の第45回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>M5Stackは画面・ボタン・Wi-Fi内蔵の小さなコンピュータです。</li>
            <li>プロトタイプ作りやデモに最適で、すぐに動くものが作れます。</li>
            <li>Basic、StickC、ATOMなど、用途に応じたサイズがあります。</li>
          </ol>
        </div>

        <AskBox lessonId="44-m5stack-intro" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
