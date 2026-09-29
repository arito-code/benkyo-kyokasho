import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson52Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={52} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーや通信の複雑なコードを自分で書かなくても使えるようにしてくれる「ライブラリ」とは何でしょうか。</p>
        </div>

        <h1>第52回: M5Stackのライブラリ</h1>

        <section>
          <h2>概念: ライブラリは「便利な道具箱」</h2>
          <p>
            ライブラリとは、よく使う機能をまとめた「プログラムの部品集」です。
            たとえば、<Link href="/lessons/48-i2c-basics">I2C通信</Link>の詳細や、
            特定のセンサーの制御方法をすべて自分で書くのは大変です。
            ライブラリを使えば、簡単な関数を呼ぶだけでこれらの機能が使えます。
          </p>
          <p>
            M5Stackには公式のライブラリがあり、
            画面表示、ボタン、Wi-Fiなどの機能が整理されています。
            さらに、センサーメーカーやコミュニティが作成したライブラリも多数あります。
          </p>

          <div className="analogy">
            <span className="analogy-term">ライブラリ</span>
            <span className="analogy-equals">=</span>
            <span>複雑な処理をまとめた「便利な道具箱」</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ライブラリのイメージ</text>
              
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="130" height="100" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="65" y="20" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">ライブラリなし</text>
                <text x="65" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">I2Cの初期化コード...</text>
                <text x="65" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">レジスタ設定...</text>
                <text x="65" y="64" textAnchor="middle" fill="#4a4a4a" fontSize="7">データ読み取り...</text>
                <text x="65" y="76" textAnchor="middle" fill="#4a4a4a" fontSize="7">計算式...</text>
                <text x="65" y="92" textAnchor="middle" fill="#c0392b" fontSize="8">数十行のコード</text>
              </g>
              
              <g transform="translate(190, 30)">
                <rect x="0" y="0" width="130" height="100" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="65" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">ライブラリあり</text>
                <text x="65" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="monospace">bme.begin();</text>
                <text x="65" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8" fontFamily="monospace">temp = bme.readTemp();</text>
                <text x="65" y="92" textAnchor="middle" fill="#27ae60" fontSize="8">たった2行!</text>
              </g>
            </g>
          </svg>
          <figcaption>ライブラリを使うと、複雑な処理が簡単な関数呼び出しになります。</figcaption>
        </figure>

        <section>
          <h2>よく使うライブラリ</h2>
          <p>
            M5Stack開発でよく使うライブラリには以下のようなものがあります。
            「M5Stack.h」は公式ライブラリで、画面・ボタン・スピーカーの制御ができます。
            「WiFi.h」はWi-Fi接続、「HTTPClient.h」はHTTP通信用です。
          </p>
          <p>
            センサー用には「Adafruit_BME280」（温度・湿度・気圧）、
            「MPU6050」（加速度・ジャイロ）などがあります。
            Arduino IDEの「ライブラリマネージャ」から簡単にインストールできます。
          </p>
        </section>

        <section>
          <h2>ライブラリの探し方と選び方</h2>
          <p>
            Arduino IDEの「スケッチ」→「ライブラリをインクルード」→「ライブラリを管理」
            から、キーワードで検索できます。
            GitHubで「Arduino + センサー名」で検索するのも有効です。
          </p>
          <p>
            ライブラリを選ぶときは、更新日が新しいか、
            スター数やダウンロード数が多いか、
            サンプルコードが付いているかを確認しましょう。
            メンテナンスされていない古いライブラリは、
            新しい環境で動かないことがあります。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「開発期間を短くしたい」と言われたら、
            「豊富なライブラリがあるので、ゼロから作る必要はありません」
            と説明できます。
          </p>
          <p>
            ただし、ライブラリの品質はさまざまです。
            「このセンサーはメーカー公式のライブラリがあるので安心です」
            「こちらは非公式ですが、多くの人が使っています」
            のように、信頼性も説明できると良いでしょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>学んだことを活かして、M5Stackで実際にプロジェクトを作るには、どのような手順で進めればよいでしょうか。次の第53回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ライブラリは複雑な処理をまとめた「便利な道具箱」です。</li>
            <li>Arduino IDEのライブラリマネージャから簡単にインストールできます。</li>
            <li>更新日、人気度、サンプルコードの有無を確認して選びましょう。</li>
          </ol>
        </div>

        <AskBox lessonId="52-m5stack-libraries" />

        <LessonNavigation currentLessonNumber={52} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
