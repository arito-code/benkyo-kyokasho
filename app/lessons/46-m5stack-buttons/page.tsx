import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson46Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={46} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackの3つのボタンを使って、ユーザーからの入力を受け取るには、どうすればよいでしょうか。</p>
        </div>

        <h1>第46回: M5Stackのボタン</h1>

        <section>
          <h2>概念: ボタンは「ユーザーの意思」を受け取る入力</h2>
          <p>
            M5Stack Basicには、画面の下にA・B・Cの3つのボタンがあります。
            <Link href="/lessons/16-switch-button">第16回</Link>で学んだスイッチと同じく、
            押されたかどうかをプログラムで読み取れます。
            ボタンを押すと「メニュー切り替え」「設定変更」「データ送信」などの操作ができます。
          </p>
          <p>
            プログラムでは「M5.BtnA.wasPressed()」のような関数で、
            ボタンが押されたかどうかを確認します。
            <Link href="/lessons/29-debounce">第29回</Link>で学んだデバウンス処理は、
            M5Stackのライブラリ内で自動的に行われるので、自分で実装する必要はありません。
          </p>

          <div className="analogy">
            <span className="analogy-term">ボタン入力</span>
            <span className="analogy-equals">=</span>
            <span>ユーザーの「次へ」「決定」「キャンセル」を受け取る</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">M5Stackのボタン</text>
              
              <g transform="translate(100, 25)">
                <rect x="0" y="0" width="140" height="80" rx="8" fill="#1a1a1a" stroke="#4a4a4a" strokeWidth="2" />
                <rect x="10" y="10" width="120" height="45" rx="3" fill="#3b6ea5" />
                <text x="70" y="38" textAnchor="middle" fill="white" fontSize="10">画面</text>
                
                <g transform="translate(10, 60)">
                  <rect x="0" y="0" width="35" height="15" rx="3" fill="#c0392b" />
                  <rect x="42" y="0" width="35" height="15" rx="3" fill="#27ae60" />
                  <rect x="84" y="0" width="35" height="15" rx="3" fill="#3b6ea5" />
                  <text x="17" y="11" textAnchor="middle" fill="white" fontSize="8">A</text>
                  <text x="59" y="11" textAnchor="middle" fill="white" fontSize="8">B</text>
                  <text x="101" y="11" textAnchor="middle" fill="white" fontSize="8">C</text>
                </g>
              </g>
              
              <g transform="translate(20, 115)">
                <text x="70" y="10" textAnchor="middle" fill="#c0392b" fontSize="8">左:戻る</text>
                <text x="170" y="10" textAnchor="middle" fill="#27ae60" fontSize="8">中央:決定</text>
                <text x="270" y="10" textAnchor="middle" fill="#3b6ea5" fontSize="8">右:次へ</text>
              </g>
            </g>
          </svg>
          <figcaption>3つのボタンに役割を割り当てて操作を受け付けます。</figcaption>
        </figure>

        <section>
          <h2>ボタン読み取りの関数</h2>
          <p>
            ボタンの状態を読み取る関数には、いくつかの種類があります。
            「wasPressed()」は「さっき押された」かどうかを返します。
            一度trueを返すとリセットされるので、1回の押下を1回だけ検出できます。
          </p>
          <p>
            「isPressed()」は「今押されている」かどうかを返します。
            長押し検出などに使えますが、連続してtrueが返るので注意が必要です。
            「wasReleased()」は「さっき離された」かどうかを返します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ボタン関数の種類</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="110" height="80" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="55" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">wasPressed()</text>
                <text x="55" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">押された瞬間を検出</text>
                <text x="55" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">1回押すと1回だけtrue</text>
                <text x="55" y="70" textAnchor="middle" fill="#27ae60" fontSize="7">おすすめ</text>
              </g>
              
              <g transform="translate(145, 25)">
                <rect x="0" y="0" width="110" height="80" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="55" y="20" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">isPressed()</text>
                <text x="55" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">今押されているか</text>
                <text x="55" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">押している間ずっとtrue</text>
                <text x="55" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="7">長押し検出向け</text>
              </g>
              
              <g transform="translate(270, 25)">
                <rect x="0" y="0" width="90" height="80" rx="5" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">wasReleased()</text>
                <text x="45" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">離された瞬間</text>
                <text x="45" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">を検出</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じて適切な関数を選びます。通常はwasPressed()が便利です。</figcaption>
        </figure>

        <section>
          <h2>M5.update()を忘れずに</h2>
          <p>
            ボタンの状態を読み取る前に、必ず「M5.update()」を呼び出す必要があります。
            この関数がボタンの状態を更新するので、これを忘れるとボタンが反応しません。
            loop()関数の最初に書いておくのが定番です。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            デモ機を作るとき、ボタンで画面を切り替えられると、
            お客様に操作してもらいながら説明できます。
            「Aボタンで温度表示、Bボタンで湿度表示、Cボタンでグラフ表示」
            のように使い分けると分かりやすくなります。
          </p>
          <p>
            設定値の変更にも使えます。
            「しきい値を変えたいときはBボタンで+、Aボタンで−」
            のような操作を提供できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackにセンサーをつなぐとき、「Groveコネクタ」という端子が便利です。Groveコネクタとは何でしょうか。次の第47回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>M5Stackには A・B・C の3つのボタンがあります。</li>
            <li>wasPressed()で「押された瞬間」を検出するのが基本です。</li>
            <li>ボタンを読む前にM5.update()を呼ぶ必要があります。</li>
          </ol>
        </div>

        <AskBox lessonId="46-m5stack-buttons" />

        <LessonNavigation currentLessonNumber={46} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
