import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson02Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={2} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>機械と電気は、何が違うのでしょうか?</p>
        </div>

        <h1>第2回: 機械とは何か</h1>

        <section>
          <h2>機械の役割</h2>
          <p>
            <Link href="/glossary/machine" className="glossary-link">機械</Link>は、
            力を伝えて物を動かす仕組みです。
            電気が「情報やエネルギーを運ぶ」役割なのに対し、
            機械は「物理的な仕事をする」役割を担っています。
          </p>
          <p>
            例えば、自動車のエンジンはガソリンを燃やして力を生み出し、
            タイヤを回して車を走らせます。
            エレベーターはモーターの力でカゴを上下に動かします。
            これらはすべて「力を使って物を動かす」という機械の仕事です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Energy source */}
            <rect x="30" y="60" width="60" height="40" fill="none" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="60" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11">エネルギー</text>
            
            {/* Arrow */}
            <line x1="100" y1="80" x2="140" y2="80" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="140,75 150,80 140,85" fill="#3b6ea5" />
            
            {/* Machine */}
            <rect x="160" y="50" width="80" height="60" fill="none" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <circle cx="200" cy="80" r="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
            <circle cx="200" cy="80" r="5" fill="#3b6ea5" />
            <text x="200" y="125" textAnchor="middle" fill="#3b6ea5" fontSize="11">機械</text>
            
            {/* Arrow */}
            <line x1="250" y1="80" x2="290" y2="80" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="290,75 300,80 290,85" fill="#3b6ea5" />
            
            {/* Work */}
            <rect x="310" y="60" width="60" height="40" fill="none" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="340" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="11">仕事</text>
            
            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 機械はエネルギーを仕事に変える</text>
          </svg>
          <figcaption>機械は、エネルギーを受け取って物理的な仕事をします。</figcaption>
        </figure>

        <section>
          <h2>電気と機械の違い</h2>
          <p>
            電気は目に見えない「流れ」です。
            導線の中を電流が流れ、情報やエネルギーを運びます。
            一方、機械は目に見える「動き」です。
            ギアが回り、レバーが上下し、物が移動します。
          </p>

          <div className="analogy">
            <span className="analogy-term">電気</span>
            <span className="analogy-equals">=</span>
            <span>情報・エネルギーを運ぶ（見えない流れ）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">機械</span>
            <span className="analogy-equals">=</span>
            <span>力を伝えて動かす（見える動き）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Electricity side */}
            <rect x="30" y="30" width="150" height="100" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
            <text x="105" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">電気の世界</text>
            <text x="105" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="10">・情報を運ぶ</text>
            <text x="105" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="10">・エネルギーを運ぶ</text>
            <text x="105" y="110" textAnchor="middle" fill="#4a4a4a" fontSize="10">・見えない</text>
            
            {/* Machine side */}
            <rect x="220" y="30" width="150" height="100" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
            <text x="295" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">機械の世界</text>
            <text x="295" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="10">・力を伝える</text>
            <text x="295" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="10">・物を動かす</text>
            <text x="295" y="110" textAnchor="middle" fill="#4a4a4a" fontSize="10">・見える</text>
            
            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 電気と機械、それぞれの役割</text>
          </svg>
          <figcaption>電気と機械は、それぞれ異なる役割を持っています。</figcaption>
        </figure>

        <section>
          <h2>モーター：電気と機械をつなぐ</h2>
          <p>
            モーターは、電気を回転の力に変える部品です。
            電気の世界と機械の世界をつなぐ「橋渡し役」といえます。
            電気を流すとモーターが回り、その回転をギアやベルトで伝えて、
            さまざまな機械を動かすことができます。
          </p>
          <p>
            扇風機、洗濯機、電気自動車、ロボットなど、
            私たちの身の回りにあるほとんどの動く電気製品には、
            モーターが入っています。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Battery */}
            <rect x="40" y="60" width="50" height="30" fill="none" stroke="#3b6ea5" strokeWidth="2" rx="2" />
            <rect x="90" y="70" width="5" height="10" fill="#3b6ea5" />
            <text x="65" y="105" textAnchor="middle" fill="#3b6ea5" fontSize="10">電気</text>
            
            {/* Wire */}
            <line x1="95" y1="75" x2="130" y2="75" stroke="#3b6ea5" strokeWidth="2" />
            
            {/* Motor */}
            <circle cx="170" cy="75" r="30" fill="none" stroke="#3b6ea5" strokeWidth="2" />
            <circle cx="170" cy="75" r="8" fill="#3b6ea5" />
            <line x1="170" y1="75" x2="195" y2="60" stroke="#3b6ea5" strokeWidth="2" />
            <text x="170" y="120" textAnchor="middle" fill="#3b6ea5" fontSize="10">モーター</text>
            
            {/* Arrow */}
            <line x1="210" y1="75" x2="250" y2="75" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="250,70 260,75 250,80" fill="#3b6ea5" />
            
            {/* Gear */}
            <circle cx="300" cy="75" r="25" fill="none" stroke="#3b6ea5" strokeWidth="2" />
            <circle cx="300" cy="75" r="8" fill="#3b6ea5" />
            <line x1="300" y1="50" x2="300" y2="42" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="320" y1="60" x2="326" y2="54" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="325" y1="75" x2="333" y2="75" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="320" y1="90" x2="326" y2="96" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="300" y1="100" x2="300" y2="108" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="280" y1="90" x2="274" y2="96" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="275" y1="75" x2="267" y2="75" stroke="#3b6ea5" strokeWidth="4" />
            <line x1="280" y1="60" x2="274" y2="54" stroke="#3b6ea5" strokeWidth="4" />
            <text x="300" y="125" textAnchor="middle" fill="#3b6ea5" fontSize="10">機械</text>
            
            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: モーターは電気を回転力に変える</text>
          </svg>
          <figcaption>モーターは電気と機械をつなぐ橋渡し役です。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様が「この工程を自動化したい」と言ったとき、
            電気だけでは解決できない場面があります。
            「物を動かす」必要があれば、そこには機械（モーターやアクチュエーター）が必要です。
          </p>
          <p>
            例えば「ベルトコンベアで製品を運びたい」という要望には、
            モーターという「電気→機械」の変換部品と、
            ベルトやローラーという機械部品が必要になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>では、電気や機械を「考えて動かす」のは誰でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>機械は「力を伝えて物を動かす」仕組みです。</li>
            <li>電気は情報やエネルギーを運び、機械は物理的な仕事をします。</li>
            <li>モーターは電気を回転力に変える、電気と機械の橋渡し役です。</li>
          </ol>
        </div>

        <AskBox lessonId="02-machine" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
