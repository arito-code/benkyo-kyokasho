import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson03Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={3} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電気や機械を「考えて動かす」のは誰でしょうか?</p>
        </div>

        <h1>第3回: コンピュータとは何か</h1>

        <section>
          <h2>コンピュータの役割</h2>
          <p>
            <Link href="/glossary/computer" className="glossary-link">コンピュータ</Link>は、
            計算と判断をする機械です。
            電気が「運ぶ」役割、機械が「動かす」役割なら、
            コンピュータは「考える」役割を担っています。
          </p>
          <p>
            コンピュータは、与えられた情報をもとに計算し、
            「こうなったら、こうする」という判断を行います。
            この「考える」能力があるからこそ、
            電気や機械を状況に応じて制御できるのです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Electricity */}
            <rect x="30" y="70" width="70" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="65" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="11">電気</text>
            <text x="65" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="9">運ぶ</text>
            
            {/* Machine */}
            <rect x="165" y="70" width="70" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="200" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="11">機械</text>
            <text x="200" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="9">動かす</text>
            
            {/* Computer */}
            <rect x="300" y="70" width="70" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="335" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="11">コンピュータ</text>
            <text x="335" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="9">考える</text>
            
            {/* Arrows connecting */}
            <path d="M100 90 L165 90" fill="none" stroke="#3b6ea5" strokeWidth="1.5" strokeDasharray="4,2" />
            <path d="M235 90 L300 90" fill="none" stroke="#3b6ea5" strokeWidth="1.5" strokeDasharray="4,2" />
            
            {/* Computer controls both */}
            <path d="M335 70 L335 40 L65 40 L65 70" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
            <polygon points="65,70 60,60 70,60" fill="#3b6ea5" />
            <path d="M335 70 L335 40 L200 40 L200 70" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
            <polygon points="200,70 195,60 205,60" fill="#3b6ea5" />
            
            <text x="200" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="10">制御する</text>
            
            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: コンピュータは電気と機械を制御する</text>
          </svg>
          <figcaption>コンピュータは「考える」ことで、電気と機械を制御します。</figcaption>
        </figure>

        <section>
          <h2>プログラムとは</h2>
          <p>
            コンピュータは、<Link href="/glossary/program" className="glossary-link">プログラム</Link>という
            「指示書」に従って動きます。
            プログラムには「もし〜なら〜する」「〜を繰り返す」といった
            手順が書かれています。
          </p>
          <p>
            例えば、エアコンには「室温が28度を超えたら冷房をつける」
            というプログラムが入っています。
            センサーで温度を測り、プログラムで判断し、
            モーターでファンを回す。
            この一連の流れをコンピュータが制御しています。
          </p>

          <div className="analogy">
            <span className="analogy-term">プログラム</span>
            <span className="analogy-equals">=</span>
            <span>コンピュータへの指示書</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Program flow */}
            <rect x="50" y="30" width="120" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="110" y="52" textAnchor="middle" fill="#3b6ea5" fontSize="10">もし 温度 &gt; 28度</text>
            
            {/* Arrow down */}
            <line x1="110" y1="65" x2="110" y2="85" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="105,85 110,95 115,85" fill="#3b6ea5" />
            
            {/* Diamond decision */}
            <polygon points="110,100 150,130 110,160 70,130" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
            <text x="110" y="135" textAnchor="middle" fill="#3b6ea5" fontSize="10">判断</text>
            
            {/* Yes branch */}
            <line x1="150" y1="130" x2="200" y2="130" stroke="#3b6ea5" strokeWidth="2" />
            <text x="175" y="125" textAnchor="middle" fill="#3b6ea5" fontSize="9">はい</text>
            
            <rect x="200" y="115" width="100" height="30" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="250" y="135" textAnchor="middle" fill="#3b6ea5" fontSize="10">冷房をつける</text>
            
            {/* No branch */}
            <line x1="110" y1="160" x2="110" y2="180" stroke="#3b6ea5" strokeWidth="2" />
            <text x="120" y="175" textAnchor="start" fill="#3b6ea5" fontSize="9">いいえ</text>
            
            <text x="110" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="9">何もしない</text>
            
            <text x="300" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: プログラムの流れ</text>
          </svg>
          <figcaption>プログラムは「条件→判断→動作」の流れで書かれています。</figcaption>
        </figure>

        <section>
          <h2>マイコン：小さなコンピュータ</h2>
          <p>
            <Link href="/glossary/microcontroller" className="glossary-link">マイコン</Link>（マイクロコントローラ）は、
            1つの小さなチップに入ったコンピュータです。
            パソコンほど複雑ではありませんが、
            センサーの値を読み取り、モーターを動かすといった
            制御には十分な能力を持っています。
          </p>
          <p>
            Arduino、ESP32、M5Stackなどは、
            マイコンを使った製品です。
            家電、車、ロボット、IoT機器など、
            身の回りのほとんどの電子機器にマイコンが入っています。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Microcontroller chip */}
            <rect x="150" y="40" width="100" height="60" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            
            {/* Pins on sides */}
            <line x1="150" y1="55" x2="135" y2="55" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="150" y1="70" x2="135" y2="70" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="150" y1="85" x2="135" y2="85" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="250" y1="55" x2="265" y2="55" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="250" y1="70" x2="265" y2="70" stroke="#3b6ea5" strokeWidth="2" />
            <line x1="250" y1="85" x2="265" y2="85" stroke="#3b6ea5" strokeWidth="2" />
            
            {/* Label */}
            <text x="200" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">マイコン</text>
            
            {/* Input label */}
            <text x="110" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">入力</text>
            
            {/* Output label */}
            <text x="290" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">出力</text>
            
            {/* Examples */}
            <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">センサー</text>
            <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">ボタン</text>
            <text x="50" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="8">通信</text>
            
            <text x="350" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">LED</text>
            <text x="350" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">モーター</text>
            <text x="350" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="8">画面</text>
            
            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: マイコンは入力を受けて出力を制御する</text>
          </svg>
          <figcaption>マイコンは小さいながらも、入力と出力を制御できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「この装置を自動で動かしたい」という要望には、
            コンピュータ（マイコン）が必要です。
            単に電気を流したり、機械を動かしたりするだけでなく、
            「状況に応じて判断する」機能が求められるからです。
          </p>
          <p>
            例えば「製品が来たら検査して、不良品だけ除く」という要望なら、
            センサーで製品を見て、マイコンで良否を判断し、
            モーターで不良品を弾く、という構成になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>コンピュータは、どうやって外の世界を知るのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>コンピュータは「計算と判断をする機械」です。</li>
            <li>プログラムは、コンピュータへの指示書です。</li>
            <li>マイコンは小さなコンピュータで、センサーやモーターを制御できます。</li>
          </ol>
        </div>

        <AskBox lessonId="03-computer" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
