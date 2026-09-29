import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson54Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={54} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackが動かない、思った通りに動かないとき、どうやって問題を見つけて解決すればよいでしょうか。</p>
        </div>

        <h1>第54回: M5Stackのトラブル対処</h1>

        <section>
          <h2>概念: トラブルシューティングは「切り分け」が基本</h2>
          <p>
            うまく動かないとき、「どこに問題があるか」を絞り込むことが大切です。
            ハードウェアの問題か、ソフトウェアの問題か。
            センサーの問題か、通信の問題か。
            問題の範囲を狭めていくことを「切り分け」と呼びます。
          </p>
          <p>
            M5Stackでよくあるトラブルと、その対処法を知っておくと、
            素早く解決できるようになります。
          </p>

          <div className="analogy">
            <span className="analogy-term">トラブルシューティング</span>
            <span className="analogy-equals">=</span>
            <span>問題の場所を絞り込んで、一つずつ確認する</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">よくあるトラブルと対処法</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="150" height="50" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="75" y="18" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">書き込めない</text>
                <text x="75" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">→ ポート選択、ケーブル、</text>
                <text x="75" y="46" textAnchor="middle" fill="#4a4a4a" fontSize="7">　 ドライバを確認</text>
              </g>
              
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="150" height="50" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="75" y="18" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">画面が映らない</text>
                <text x="75" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">→ M5.begin()があるか、</text>
                <text x="75" y="46" textAnchor="middle" fill="#4a4a4a" fontSize="7">　 バッテリー残量を確認</text>
              </g>
              
              <g transform="translate(20, 85)">
                <rect x="0" y="0" width="150" height="50" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">センサー値が変</text>
                <text x="75" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">→ 接続、アドレス、</text>
                <text x="75" y="46" textAnchor="middle" fill="#4a4a4a" fontSize="7">　 ライブラリ互換性を確認</text>
              </g>
              
              <g transform="translate(180, 85)">
                <rect x="0" y="0" width="150" height="50" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="75" y="18" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">Wi-Fiつながらない</text>
                <text x="75" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">→ SSID/PW確認、電波強度、</text>
                <text x="75" y="46" textAnchor="middle" fill="#4a4a4a" fontSize="7">　 2.4GHz帯か確認</text>
              </g>
              
              <g transform="translate(40, 150)">
                <rect x="0" y="0" width="260" height="30" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="130" y="19" textAnchor="middle" fill="#4a4a4a" fontSize="9">シリアルモニターでデバッグメッセージを確認するのが基本</text>
              </g>
            </g>
          </svg>
          <figcaption>よくあるトラブルパターンを知っておくと、素早く対処できます。</figcaption>
        </figure>

        <section>
          <h2>デバッグの基本: シリアルモニター</h2>
          <p>
            Arduino IDEの「シリアルモニター」は、M5Stackからのメッセージを表示できます。
            Serial.println()でメッセージを出力し、
            「ここまで来た」「この値はいくつ」を確認します。
          </p>
          <p>
            ボーレートを合わせることを忘れないでください。
            プログラムでSerial.begin(115200)と書いたら、
            シリアルモニターも115200に設定します。
          </p>
        </section>

        <section>
          <h2>I2Cスキャナーを使う</h2>
          <p>
            <Link href="/lessons/48-i2c-basics">I2Cセンサー</Link>が認識されないとき、
            「I2Cスキャナー」というプログラムが便利です。
            接続されているI2Cデバイスのアドレスを一覧表示してくれます。
            センサーのアドレスが分かれば、接続自体は成功しているとわかります。
          </p>
        </section>

        <section>
          <h2>Phase 5のまとめ</h2>
          <p>
            Phase 5では、M5Stackを使った開発の基本を学びました。
            <Link href="/lessons/44-m5stack-intro">M5Stackとは何か</Link>から始まり、
            画面表示、ボタン、Grove、I2C、Wi-Fi、電源、ライブラリ、
            そしてプロジェクトの進め方とトラブル対処まで、
            一通りの知識が身につきました。
          </p>
          <p>
            次のPhase 6では、IoT（Internet of Things）の通信技術を学びます。
            センサーデータをクラウドに送り、遠隔監視するための知識を深めましょう。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様のところでトラブルが起きたとき、
            冷静に切り分けができると信頼につながります。
            「まずセンサー単体で動くか確認しましょう」
            「次にWi-Fi接続を確認しましょう」
            と順を追って確認する姿勢が大切です。
          </p>
          <p>
            「よくあるトラブルと対処法」のリストを作っておくと、
            現場で慌てずに対応できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 5「M5Stack・小さなコンピュータ」は以上です。Phase 6では、データを送るための「通信」の仕組みを学びます。シリアル通信とは何でしょうか。次の第55回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>トラブルシューティングは「切り分け」で問題箇所を絞り込みます。</li>
            <li>シリアルモニターでデバッグメッセージを確認するのが基本です。</li>
            <li>I2Cスキャナーでセンサーの接続確認ができます。</li>
          </ol>
        </div>

        <AskBox lessonId="54-m5stack-troubleshoot" />

        <LessonNavigation currentLessonNumber={54} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
