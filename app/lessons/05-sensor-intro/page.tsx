import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson05Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={5} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーは、どんな種類があって、何を測れるのでしょうか?</p>
        </div>

        <h1>第5回: センサーとは何か</h1>

        <section>
          <h2>センサーは「感じる器官」</h2>
          <p>
            <Link href="/glossary/sensor" className="glossary-link">センサー</Link>は、
            温度・光・距離などの<Link href="/glossary/physical-quantity" className="glossary-link">物理量</Link>を
            <Link href="/glossary/electrical-signal" className="glossary-link">電気信号</Link>に変える部品です。
            人間にとっての「目」「耳」「肌」のように、
            コンピュータに外の世界を知らせる役割を果たします。
          </p>
          <p>
            前回学んだ「入力」の代表例がセンサーです。
            センサーが物理量を電気信号に変えることで、
            コンピュータは「今、温度は何度か」「光は明るいか暗いか」
            といった情報を受け取ることができます。
            センサーがなければ、コンピュータは外の世界を知ることができません。
          </p>

          <div className="analogy">
            <span className="analogy-term">センサー</span>
            <span className="analogy-equals">=</span>
            <span>人間の五感（目・耳・肌など）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Physical quantity (left) */}
            <g transform="translate(30, 50)">
              <circle cx="40" cy="40" r="35" fill="none" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" />
              <text x="40" y="35" textAnchor="middle" fill="#3b6ea5" fontSize="10">温度</text>
              <text x="40" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="10">光</text>
              <text x="40" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="10">距離</text>
              <text x="40" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="9">物理量</text>
            </g>

            {/* Arrow */}
            <g transform="translate(110, 85)">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="40,-5 50,0 40,5" fill="#3b6ea5" />
            </g>

            {/* Sensor (middle) */}
            <g transform="translate(165, 50)">
              <rect x="0" y="10" width="70" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="5" />
              <circle cx="35" cy="35" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="35" cy="35" r="5" fill="#3b6ea5" />
              <text x="35" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">センサー</text>
              <text x="35" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="9">変換する</text>
            </g>

            {/* Arrow */}
            <g transform="translate(245, 85)">
              <line x1="0" y1="0" x2="40" y2="0" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="40,-5 50,0 40,5" fill="#3b6ea5" />
            </g>

            {/* Electric signal (right) */}
            <g transform="translate(300, 50)">
              <rect x="0" y="10" width="70" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <path d="M15 35 L25 25 L35 45 L45 30 L55 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="35" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">電気信号</text>
              <text x="35" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="9">コンピュータへ</text>
            </g>

            <text x="200" y="165" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: センサーは物理量を電気信号に変える</text>
          </svg>
          <figcaption>センサーは、目に見えない物理量を、コンピュータが読める電気信号に変換します。</figcaption>
        </figure>

        <section>
          <h2>センサーの種類</h2>
          <p>
            センサーには、測りたいものに応じてさまざまな種類があります。
            温度を測るなら温度センサー、光を測るなら光センサー、
            距離を測るなら距離センサーを使います。
            「何を知りたいか」によって、使うセンサーが決まります。
          </p>
          <ul style={{ marginLeft: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <li><strong>温度センサー</strong>：温度（℃）を測る。エアコン、冷蔵庫、工場の温度監視に使う</li>
            <li><strong>光センサー</strong>：明るさを測る。自動ライト、スマホの画面調整に使う</li>
            <li><strong>距離センサー</strong>：物までの距離を測る。自動ドア、駐車センサーに使う</li>
            <li><strong>ボタン・スイッチ</strong>：押されたか離されたかを知る。人の操作を入力する</li>
            <li><strong>加速度センサー</strong>：動きや傾きを測る。スマホの画面回転、歩数計に使う</li>
          </ul>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Temperature sensor */}
            <g transform="translate(40, 20)">
              <rect x="15" y="0" width="20" height="50" rx="10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="45" r="12" fill="#3b6ea5" opacity="0.3" />
              <line x1="25" y1="15" x2="25" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">温度</text>
            </g>

            {/* Light sensor */}
            <g transform="translate(110, 20)">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="25" r="10" fill="#3b6ea5" opacity="0.2" />
              <line x1="25" y1="0" x2="25" y2="-8" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="0" y1="25" x2="-8" y2="25" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="50" y1="25" x2="58" y2="25" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="10" y1="10" x2="4" y2="4" stroke="#3b6ea5" strokeWidth="1.5" />
              <line x1="40" y1="10" x2="46" y2="4" stroke="#3b6ea5" strokeWidth="1.5" />
              <text x="25" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">光</text>
            </g>

            {/* Distance sensor */}
            <g transform="translate(180, 20)">
              <rect x="5" y="10" width="40" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="17" cy="25" r="6" fill="#3b6ea5" opacity="0.3" />
              <circle cx="33" cy="25" r="6" fill="#3b6ea5" opacity="0.3" />
              <path d="M50 25 L70 15 M50 25 L70 35" fill="none" stroke="#3b6ea5" strokeWidth="1.5" strokeDasharray="3,2" />
              <text x="25" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">距離</text>
            </g>

            {/* Button */}
            <g transform="translate(260, 20)">
              <rect x="5" y="15" width="40" height="25" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <rect x="15" y="5" width="20" height="15" rx="2" fill="#3b6ea5" opacity="0.3" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">ボタン</text>
            </g>

            {/* Accelerometer */}
            <g transform="translate(330, 20)">
              <rect x="5" y="10" width="40" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="27" x2="25" y2="15" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="27" x2="35" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="27" x2="15" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="27" r="3" fill="#3b6ea5" />
              <text x="25" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="9">加速度</text>
            </g>

            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: さまざまなセンサー</text>
          </svg>
          <figcaption>目的に応じて、適切なセンサーを選びます。</figcaption>
        </figure>

        <section>
          <h2>センサーと入力</h2>
          <p>
            第4回で学んだ「入力→処理→出力」の流れを思い出してください。
            センサーは、この「入力」の部分を担当します。
            センサーが測った値をコンピュータが受け取り、
            プログラムで処理して、出力（LEDを点ける、モーターを回すなど）を決めます。
          </p>
          <p>
            例えば、温度センサーで「30度以上」を検知したら、
            エアコンをつけるという動作ができます。
            センサーがなければ、コンピュータは「今何度か」を知ることができず、
            判断を下すことができません。
            センサーは、自動化の「目」として欠かせない存在です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Sensor */}
            <g transform="translate(30, 60)">
              <rect x="0" y="0" width="70" height="45" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <circle cx="35" cy="22" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="35" cy="22" r="4" fill="#3b6ea5" />
              <text x="35" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">センサー</text>
              <text x="35" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">温度を測る</text>
            </g>

            {/* Arrow */}
            <g transform="translate(105, 80)">
              <line x1="0" y1="0" x2="30" y2="0" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="30,-5 40,0 30,5" fill="#3b6ea5" />
              <text x="20" y="-8" textAnchor="middle" fill="#3b6ea5" fontSize="8">入力</text>
            </g>

            {/* Computer/Process */}
            <g transform="translate(150, 55)">
              <rect x="0" y="0" width="90" height="55" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <text x="45" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">コンピュータ</text>
              <text x="45" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">30度以上なら...</text>
              <text x="45" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">判断する</text>
            </g>

            {/* Arrow */}
            <g transform="translate(245, 80)">
              <line x1="0" y1="0" x2="30" y2="0" stroke="#3b6ea5" strokeWidth="2" />
              <polygon points="30,-5 40,0 30,5" fill="#3b6ea5" />
              <text x="20" y="-8" textAnchor="middle" fill="#3b6ea5" fontSize="8">出力</text>
            </g>

            {/* Output (Air conditioner) */}
            <g transform="translate(290, 55)">
              <rect x="0" y="0" width="80" height="55" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
              <rect x="10" y="10" width="60" height="25" fill="none" stroke="#3b6ea5" strokeWidth="1.5" rx="2" />
              <line x1="15" y1="40" x2="25" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="35" y1="40" x2="45" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="55" y1="40" x2="65" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <text x="40" y="70" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">エアコン</text>
              <text x="40" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="8">冷房をつける</text>
            </g>

            <text x="200" y="160" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: センサー→処理→出力の例</text>
          </svg>
          <figcaption>センサーで測った温度をもとに、コンピュータがエアコンを制御します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様の要望を聞くとき、「何を測りたいか」を明確にすることが大切です。
            「温度を監視したい」なら温度センサー、
            「人が来たことを知りたい」なら人感センサーや距離センサー、
            「明るさに応じて動かしたい」なら光センサーを提案します。
          </p>
          <p>
            「測る」→「判断する」→「動かす」という流れを意識すると、
            どのセンサーが必要かが見えてきます。
            センサーは「入力」の起点なので、
            まず「何を入力にするか」を決めることが、
            システム設計の第一歩になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>コンピュータは、センサーの値をどうやって処理して判断するのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>センサーは、物理量（温度・光・距離など）を電気信号に変える部品です。</li>
            <li>目的に応じて、温度センサー・光センサー・距離センサーなどを選びます。</li>
            <li>センサーは「入力」の役割を担い、コンピュータに外の世界を知らせます。</li>
          </ol>
        </div>

        <AskBox lessonId="05-sensor-intro" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
