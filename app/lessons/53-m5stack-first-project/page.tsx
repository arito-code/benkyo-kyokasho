import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson53Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={53} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackでセンサーを読み取り、画面に表示するプロジェクトを作るには、どのような手順で進めればよいでしょうか。</p>
        </div>

        <h1>第53回: M5Stackで最初のプロジェクト</h1>

        <section>
          <h2>概念: プロジェクトは「小さく始めて段階的に」</h2>
          <p>
            最初から完璧なものを作ろうとすると、どこかで詰まったときに原因が分からなくなります。
            小さな部分から動作確認しながら進めるのがコツです。
            「センサーを読む」→「画面に表示」→「ボタンで操作」→「Wi-Fiで送信」
            のように、一つずつ機能を追加していきます。
          </p>
          <p>
            Phase 5で学んだことを組み合わせて、
            「環境モニター」を作る流れを見てみましょう。
          </p>

          <div className="analogy">
            <span className="analogy-term">プロジェクト開発</span>
            <span className="analogy-equals">=</span>
            <span>小さく始めて、動作確認しながら育てる</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">プロジェクト開発の流れ</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="70" height="45" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8" fontWeight="500">Step 1</text>
                <text x="35" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">センサー接続</text>
                <text x="35" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="6">値をシリアルで確認</text>
              </g>
              
              <g transform="translate(75, 45)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="15,-4 25,0 15,4" fill="#4a4a4a" />
              </g>
              
              <g transform="translate(100, 30)">
                <rect x="0" y="0" width="70" height="45" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="18" textAnchor="middle" fill="#27ae60" fontSize="8" fontWeight="500">Step 2</text>
                <text x="35" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">画面に表示</text>
                <text x="35" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="6">見やすくレイアウト</text>
              </g>
              
              <g transform="translate(155, 45)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="15,-4 25,0 15,4" fill="#4a4a4a" />
              </g>
              
              <g transform="translate(180, 30)">
                <rect x="0" y="0" width="70" height="45" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="35" y="18" textAnchor="middle" fill="#f39c12" fontSize="8" fontWeight="500">Step 3</text>
                <text x="35" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">ボタン操作</text>
                <text x="35" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="6">画面切替など</text>
              </g>
              
              <g transform="translate(235, 45)">
                <line x1="0" y1="0" x2="20" y2="0" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="15,-4 25,0 15,4" fill="#4a4a4a" />
              </g>
              
              <g transform="translate(260, 30)">
                <rect x="0" y="0" width="70" height="45" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="35" y="18" textAnchor="middle" fill="#c0392b" fontSize="8" fontWeight="500">Step 4</text>
                <text x="35" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">Wi-Fi送信</text>
                <text x="35" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="6">クラウド連携</text>
              </g>
              
              <g transform="translate(20, 95)">
                <rect x="0" y="0" width="310" height="80" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="155" y="18" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">環境モニターの例</text>
                <text x="10" y="38" fill="#4a4a4a" fontSize="8">1. ENV Unitをつないで温度・湿度を読み取る</text>
                <text x="10" y="52" fill="#4a4a4a" fontSize="8">2. 画面に数値を大きく表示</text>
                <text x="10" y="66" fill="#4a4a4a" fontSize="8">3. Aボタンで単位切替、Bボタンでグラフ表示</text>
                <text x="10" y="80" fill="#4a4a4a" fontSize="8">4. Wi-Fi経由でAmbientにデータ送信</text>
              </g>
            </g>
          </svg>
          <figcaption>一つずつ機能を追加し、動作確認しながら進めます。</figcaption>
        </figure>

        <section>
          <h2>トラブルを減らすコツ</h2>
          <p>
            各ステップで動作確認をする習慣をつけましょう。
            シリアルモニターにデバッグ用のメッセージを出力すると、
            どこまで動いているかが分かります。
          </p>
          <p>
            うまくいかないときは、最後に追加した部分を疑います。
            「さっきまで動いていたのに、この機能を追加したら動かなくなった」
            なら、その追加部分に問題がある可能性が高いです。
          </p>
        </section>

        <section>
          <h2>サンプルコードを活用する</h2>
          <p>
            <Link href="/lessons/52-m5stack-libraries">ライブラリ</Link>には、
            たいていサンプルコードが付いています。
            Arduino IDEの「ファイル」→「スケッチ例」から開けます。
            まずサンプルを動かして、それを改造するのが効率的です。
          </p>
          <p>
            インターネット上にも多くの作例があります。
            GitHubやQiitaなどで「M5Stack + やりたいこと」で検索すると、
            参考になるコードが見つかることが多いです。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に試作を見せるとき、
            「まずシンプルな機能で動くものを作り、
            そこから機能を追加していく進め方がおすすめです」
            と説明できます。
          </p>
          <p>
            「1週間後にセンサー読み取りのデモ、
            2週間後にクラウド連携までできたものをお見せします」
            のように、段階的なマイルストーンを設定すると、
            お客様も進捗が分かりやすくなります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackが動かない、思った通りに動かないときは、どうやって問題を見つけて解決すればよいでしょうか。次の第54回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>プロジェクトは小さく始めて、一つずつ機能を追加します。</li>
            <li>各ステップで動作確認し、問題があれば早めに気づきます。</li>
            <li>サンプルコードを動かしてから改造するのが効率的です。</li>
          </ol>
        </div>

        <AskBox lessonId="53-m5stack-first-project" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
