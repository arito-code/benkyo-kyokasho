import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson45Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={45} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackの画面にセンサーの値や文字を表示するには、どうすればよいでしょうか。</p>
        </div>

        <h1>第45回: M5Stackの画面表示</h1>

        <section>
          <h2>概念: ディスプレイは「見える化」の窓</h2>
          <p>
            M5Stackには2インチのカラー液晶画面があります。
            センサーの値、グラフ、アイコン、日本語の文字など、
            さまざまな情報を表示できます。
            画面があることで、パソコンをつながなくても結果が見えるのが大きなメリットです。
          </p>
          <p>
            プログラムでは「M5.Lcd」という命令群を使って画面を制御します。
            文字を書く、線を引く、四角や丸を描く、色を変えるなど、
            基本的な描画機能がそろっています。
          </p>

          <div className="analogy">
            <span className="analogy-term">M5.Lcd</span>
            <span className="analogy-equals">=</span>
            <span>画面に文字や図形を描くための命令群</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">画面表示の基本</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="140" height="100" rx="5" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                <rect x="10" y="10" width="120" height="80" rx="3" fill="#3b6ea5" />
                <text x="70" y="35" textAnchor="middle" fill="white" fontSize="10">温度: 25.3℃</text>
                <text x="70" y="55" textAnchor="middle" fill="white" fontSize="10">湿度: 58%</text>
                <rect x="20" y="62" width="100" height="15" fill="#27ae60" rx="2" />
                <text x="70" y="73" textAnchor="middle" fill="white" fontSize="8">快適</text>
              </g>
              
              <g transform="translate(200, 30)">
                <text x="0" y="0" fill="#4a4a4a" fontSize="9">主な描画命令:</text>
                <text x="0" y="20" fill="#3b6ea5" fontSize="8">M5.Lcd.print("文字")</text>
                <text x="0" y="38" fill="#3b6ea5" fontSize="8">M5.Lcd.drawLine(...)</text>
                <text x="0" y="56" fill="#3b6ea5" fontSize="8">M5.Lcd.fillRect(...)</text>
                <text x="0" y="74" fill="#3b6ea5" fontSize="8">M5.Lcd.setTextColor(...)</text>
                <text x="0" y="92" fill="#3b6ea5" fontSize="8">M5.Lcd.clear()</text>
              </g>
              
              <g transform="translate(40, 145)">
                <rect x="0" y="0" width="260" height="25" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="130" y="16" textAnchor="middle" fill="#27ae60" fontSize="9">センサー値を画面に表示 → 見える化が簡単</text>
              </g>
            </g>
          </svg>
          <figcaption>画面があると、センサーの値がすぐに確認できます。</figcaption>
        </figure>

        <section>
          <h2>座標と色</h2>
          <p>
            画面の位置は、左上を原点(0,0)として、横方向がX、縦方向がYで指定します。
            M5Stack Basicの画面は320×240ピクセルです。
            文字を表示する位置や、図形を描く位置を座標で指定します。
          </p>
          <p>
            色はRGB値（赤・緑・青の組み合わせ）で指定するか、
            TFT_WHITE、TFT_RED、TFT_BLUEなどの定義済み色名を使います。
            背景色と文字色を適切に選ぶと、見やすい画面が作れます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">座標系と色</text>
              
              <g transform="translate(30, 25)">
                <rect x="0" y="0" width="120" height="90" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="2" />
                <circle cx="5" cy="5" r="3" fill="#c0392b" />
                <text x="15" y="8" fill="#c0392b" fontSize="7">(0,0)</text>
                <line x1="5" y1="10" x2="5" y2="85" stroke="#4a4a4a" strokeWidth="1" markerEnd="url(#arrow)" />
                <line x1="10" y1="5" x2="115" y2="5" stroke="#4a4a4a" strokeWidth="1" />
                <text x="60" y="15" textAnchor="middle" fill="#4a4a4a" fontSize="8">X →</text>
                <text x="15" y="50" fill="#4a4a4a" fontSize="8" transform="rotate(-90, 15, 50)">Y ↓</text>
                <circle cx="80" cy="60" r="3" fill="#3b6ea5" />
                <text x="90" y="63" fill="#3b6ea5" fontSize="7">(80,60)</text>
              </g>
              
              <g transform="translate(200, 25)">
                <text x="0" y="10" fill="#4a4a4a" fontSize="9">定義済みの色:</text>
                <rect x="0" y="20" width="15" height="12" fill="white" stroke="#4a4a4a" strokeWidth="1" />
                <text x="20" y="30" fill="#4a4a4a" fontSize="8">TFT_WHITE</text>
                <rect x="0" y="37" width="15" height="12" fill="black" />
                <text x="20" y="47" fill="#4a4a4a" fontSize="8">TFT_BLACK</text>
                <rect x="0" y="54" width="15" height="12" fill="#ff0000" />
                <text x="20" y="64" fill="#4a4a4a" fontSize="8">TFT_RED</text>
                <rect x="0" y="71" width="15" height="12" fill="#00ff00" />
                <text x="20" y="81" fill="#4a4a4a" fontSize="8">TFT_GREEN</text>
              </g>
            </g>
          </svg>
          <figcaption>左上が原点、色は定義済み名かRGB値で指定します。</figcaption>
        </figure>

        <section>
          <h2>更新とちらつき対策</h2>
          <p>
            センサーの値を繰り返し表示するとき、毎回画面全体を消すと「ちらつき」が起きます。
            必要な部分だけを上書きするか、
            「スプライト」という仮想画面に描いてから一度に転送すると、
            滑らかな表示ができます。
          </p>
          <p>
            表示の更新頻度も考慮が必要です。
            センサーは100ミリ秒ごとに読めても、画面更新は500ミリ秒に1回で十分なことが多いです。
            人間の目が追えない速さで更新しても意味がありません。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様への説明では、「画面付きなので、その場で値が見えます」
            と伝えるだけで、M5Stackの価値が伝わります。
            パソコンに接続しなくても動作確認できるのは大きなメリットです。
          </p>
          <p>
            デモのときは、大きな文字で見やすく、
            色で状態が分かるように（正常は緑、異常は赤など）
            画面をデザインすると効果的です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackのボタンを使って、画面の表示を切り替えたり、設定を変えたりするには、どうすればよいでしょうか。次の第46回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>M5.Lcd命令で画面に文字や図形を描画できます。</li>
            <li>座標は左上が原点(0,0)、色は定義済み名かRGB値で指定します。</li>
            <li>ちらつき対策には、部分更新かスプライトを使います。</li>
          </ol>
        </div>

        <AskBox lessonId="45-m5stack-display" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
