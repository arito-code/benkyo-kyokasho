import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson06Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={6} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>コンピュータは、センサーの値をどうやって処理して判断するのでしょうか?</p>
        </div>

        <h1>第6回: プログラムとは何か</h1>

        <section>
          <h2>プログラムは「手順のレシピ」</h2>
          <p>
            <Link href="/glossary/program" className="glossary-link">プログラム</Link>は、
            コンピュータに「何を、どの順番でするか」を伝える指示の集まりです。
            料理のレシピのように、「まずこれをして、次にこれをして」と、
            手順が順番に書かれています。
            コンピュータは、この指示書どおりに動きます。
          </p>
          <p>
            前回学んだ「入力→処理→出力」の流れで、
            「<Link href="/glossary/processing" className="glossary-link">処理</Link>」の部分を担当するのがプログラムです。
            センサーから入力を受け取ったコンピュータは、
            プログラムに書かれた手順に従って判断し、
            出力（LEDを点ける、モーターを回すなど）を決めます。
          </p>

          <div className="analogy">
            <span className="analogy-term">プログラム</span>
            <span className="analogy-equals">=</span>
            <span>手順が書かれたレシピ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Recipe book */}
            <g transform="translate(50, 30)">
              <rect x="0" y="0" width="80" height="100" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <line x1="15" y1="0" x2="15" y2="100" stroke="#3b6ea5" strokeWidth="1" />
              <text x="50" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="9">1. 材料を用意</text>
              <text x="50" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="9">2. 切る</text>
              <text x="50" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="9">3. 焼く</text>
              <text x="50" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="9">4. 盛り付け</text>
              <text x="40" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="10">料理のレシピ</text>
            </g>

            {/* Equals sign */}
            <g transform="translate(160, 70)">
              <line x1="0" y1="0" x2="30" y2="0" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="0" y1="10" x2="30" y2="10" stroke="#3b6ea5" strokeWidth="3" />
            </g>

            {/* Program */}
            <g transform="translate(220, 30)">
              <rect x="0" y="0" width="130" height="100" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <text x="65" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="9">1. センサーを読む</text>
              <text x="65" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="9">2. 値を比べる</text>
              <text x="65" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="9">3. もし30度以上なら...</text>
              <text x="65" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="9">4. LEDを点ける</text>
              <text x="65" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="10">コンピュータのプログラム</text>
            </g>

            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: プログラムは手順を書いたレシピ</text>
          </svg>
          <figcaption>レシピが料理人に手順を伝えるように、プログラムはコンピュータに手順を伝えます。</figcaption>
        </figure>

        <section>
          <h2>「もし〜なら」の判断</h2>
          <p>
            プログラムの大切な機能の一つが「条件分岐」です。
            「もし〜なら〜する、そうでなければ〜する」という判断ができます。
            これによって、センサーの値に応じて違う動作をさせることができます。
          </p>
          <p>
            例えば、温度センサーで「30度以上ならエアコンをつける」
            「30度未満なら何もしない」という判断ができます。
            この「もし〜なら」という仕組みがあるから、
            コンピュータは状況に応じて自動で動作を変えられるのです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            {/* Start */}
            <g transform="translate(140, 10)">
              <ellipse cx="60" cy="15" rx="50" ry="15" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
              <text x="60" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10">センサーを読む</text>
            </g>

            {/* Arrow down */}
            <line x1="200" y1="25" x2="200" y2="50" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="195,50 200,60 205,50" fill="#3b6ea5" />

            {/* Diamond decision */}
            <polygon points="200,65 260,105 200,145 140,105" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
            <text x="200" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="9">温度 ≧ 30度?</text>
            <text x="200" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="9">（判断）</text>

            {/* Yes branch (right) */}
            <line x1="260" y1="105" x2="310" y2="105" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="310,100 320,105 310,110" fill="#3b6ea5" />
            <text x="285" y="98" textAnchor="middle" fill="#3b6ea5" fontSize="9">はい</text>

            {/* Yes action */}
            <rect x="325" y="85" width="60" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="355" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="9">エアコン</text>
            <text x="355" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="9">をつける</text>

            {/* No branch (left) */}
            <line x1="140" y1="105" x2="90" y2="105" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="90,100 80,105 90,110" fill="#3b6ea5" />
            <text x="115" y="98" textAnchor="middle" fill="#3b6ea5" fontSize="9">いいえ</text>

            {/* No action */}
            <rect x="15" y="85" width="60" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="45" y="100" textAnchor="middle" fill="#3b6ea5" fontSize="9">何も</text>
            <text x="45" y="115" textAnchor="middle" fill="#3b6ea5" fontSize="9">しない</text>

            {/* Merge arrows */}
            <line x1="45" y1="125" x2="45" y2="165" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="355" y1="125" x2="355" y2="165" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="45" y1="165" x2="355" y2="165" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="200" y1="165" x2="200" y2="180" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="195,180 200,190 205,180" fill="#3b6ea5" />

            {/* Loop back text */}
            <text x="200" y="205" textAnchor="middle" fill="#4a4a4a" fontSize="9">繰り返し...</text>

            <text x="200" y="220" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 「もし〜なら」の条件分岐</text>
          </svg>
          <figcaption>条件によって、実行する処理が分かれます。</figcaption>
        </figure>

        <section>
          <h2>「繰り返し」の処理</h2>
          <p>
            プログラムのもう一つの大切な機能が「繰り返し」です。
            同じ処理を何度も実行できます。
            センサーの値を「1秒ごとに読み取る」「10回測定する」
            といった動作は、繰り返しの仕組みで実現します。
          </p>
          <p>
            多くのシステムでは、「センサーを読む→判断する→出力する」
            という一連の処理を、繰り返し実行しています。
            エアコンが常に温度を監視しているのも、
            この繰り返しの仕組みのおかげです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Loop illustration */}
            <g transform="translate(80, 20)">
              {/* Input */}
              <rect x="0" y="40" width="60" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <text x="30" y="62" textAnchor="middle" fill="#3b6ea5" fontSize="9">センサー</text>
              <text x="30" y="90" textAnchor="middle" fill="#4a4a4a" fontSize="8">入力</text>

              {/* Arrow */}
              <line x1="60" y1="57" x2="85" y2="57" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="85,52 95,57 85,62" fill="#3b6ea5" />

              {/* Process */}
              <rect x="100" y="40" width="60" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <text x="130" y="62" textAnchor="middle" fill="#3b6ea5" fontSize="9">判断</text>
              <text x="130" y="90" textAnchor="middle" fill="#4a4a4a" fontSize="8">処理</text>

              {/* Arrow */}
              <line x1="160" y1="57" x2="185" y2="57" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="185,52 195,57 185,62" fill="#3b6ea5" />

              {/* Output */}
              <rect x="200" y="40" width="60" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <text x="230" y="62" textAnchor="middle" fill="#3b6ea5" fontSize="9">LED</text>
              <text x="230" y="90" textAnchor="middle" fill="#4a4a4a" fontSize="8">出力</text>

              {/* Loop arrow */}
              <path d="M230 75 L230 110 L30 110 L30 75" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="25,75 30,65 35,75" fill="#3b6ea5" />
              <text x="130" y="125" textAnchor="middle" fill="#3b6ea5" fontSize="9">繰り返し</text>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 「繰り返し」で常に監視する</text>
          </svg>
          <figcaption>センサー→判断→出力の流れを繰り返すことで、常に状態を監視できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様の要望を聞くとき、「どんな条件で、何をしたいか」を明確にすることが大切です。
            「温度が高くなったら通知してほしい」という要望なら、
            「温度が○○度以上になったら、メールを送る」というプログラムの流れが見えてきます。
          </p>
          <p>
            プログラムは社内のエンジニアが書きますが、
            「条件」と「動作」を明確にしておくと、
            エンジニアへの依頼がスムーズになります。
            「こうなったら、こうする」という形で整理してみてください。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電気で動く部品には「電圧」が必要ですが、電圧とは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>プログラムは、コンピュータへの「順番が決まった指示書」です。</li>
            <li>「もし〜なら」という条件分岐で、状況に応じた判断ができます。</li>
            <li>「繰り返し」で、センサーの値を常に監視し続けることができます。</li>
          </ol>
        </div>

        <AskBox lessonId="06-program" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
