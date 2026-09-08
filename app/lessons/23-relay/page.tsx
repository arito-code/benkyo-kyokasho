import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson23Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={23} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>トランジスタは電気信号で電流を制御しました。では、電磁石でスイッチを動かす「リレー」は、どのような場面で使うのでしょうか?</p>
        </div>

        <h1>第23回: リレーとは何か</h1>

        <section>
          <h2>リレーは「電磁石で動くスイッチ」</h2>
          <p>
            <Link href="/glossary/relay" className="glossary-link">リレー</Link>は、
            電磁石の力で接点（スイッチ）を動かす部品です。
            コイルに電流を流すと電磁石になり、その力で金属の接点を引き寄せてスイッチがオンになります。
            電流を止めると磁力がなくなり、バネの力で接点が離れてスイッチがオフになります。
          </p>
          <p>
            リレーの最大の特徴は、コイル側（制御回路）と接点側（負荷回路）が電気的に完全に分離されていることです。
            これを「絶縁」といいます。
            5Vのマイコンで100Vのヒーターを制御するような場面でも、リレーを使えば安全に操作できます。
            高電圧・大電流の機器を低電圧の制御信号で安全に操作できるのがリレーの強みです。
          </p>

          <div className="analogy">
            <span className="analogy-term">リレー</span>
            <span className="analogy-equals">=</span>
            <span>電磁石で離れた場所のスイッチを押す仕組み</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">リレーの動作原理</text>
              
              {/* OFF state */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">OFF（コイルに電流なし）</text>
                
                {/* Coil side */}
                <rect x="10" y="25" width="50" height="60" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="35" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">コイル側</text>
                
                {/* Coil */}
                <path d="M25 55 C20 50 20 60 25 55 C30 50 30 60 25 55 M25 60 C20 55 20 65 25 60 C30 55 30 65 25 60 M25 65 C20 60 20 70 25 65 C30 60 30 70 25 65" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="65" fill="#4a4a4a" fontSize="7">コイル</text>
                
                {/* Contact side */}
                <rect x="75" y="25" width="65" height="60" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="107" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">接点側</text>
                
                {/* Open contact */}
                <circle cx="85" cy="60" r="3" fill="#3b6ea5" />
                <line x1="85" y1="57" x2="105" y2="50" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="115" cy="60" r="3" fill="#3b6ea5" />
                <text x="107" y="78" textAnchor="middle" fill="#c0392b" fontSize="7">開いている</text>
                
                {/* Isolation symbol */}
                <line x1="68" y1="35" x2="68" y2="80" stroke="#e67e22" strokeWidth="2" strokeDasharray="4,2" />
                <text x="68" y="95" textAnchor="middle" fill="#e67e22" fontSize="7">絶縁</text>
              </g>
              
              {/* ON state */}
              <g transform="translate(190, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">ON（コイルに電流を流す）</text>
                
                {/* Coil side */}
                <rect x="10" y="25" width="50" height="60" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="35" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">コイル側</text>
                
                {/* Coil with current */}
                <path d="M25 55 C20 50 20 60 25 55 C30 50 30 60 25 55 M25 60 C20 55 20 65 25 60 C30 55 30 65 25 60 M25 65 C20 60 20 70 25 65 C30 60 30 70 25 65" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="65" fill="#27ae60" fontSize="7">電磁石!</text>
                
                {/* Contact side */}
                <rect x="75" y="25" width="65" height="60" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="107" y="40" textAnchor="middle" fill="#3b6ea5" fontSize="8">接点側</text>
                
                {/* Closed contact */}
                <circle cx="85" cy="60" r="3" fill="#27ae60" />
                <line x1="88" y1="60" x2="112" y2="60" stroke="#27ae60" strokeWidth="2" />
                <circle cx="115" cy="60" r="3" fill="#27ae60" />
                <text x="107" y="78" textAnchor="middle" fill="#27ae60" fontSize="7">閉じている</text>
                
                {/* Isolation symbol */}
                <line x1="68" y1="35" x2="68" y2="80" stroke="#e67e22" strokeWidth="2" strokeDasharray="4,2" />
                <text x="68" y="95" textAnchor="middle" fill="#e67e22" fontSize="7">絶縁</text>
              </g>
              
              {/* Explanation */}
              <g transform="translate(50, 145)">
                <rect x="0" y="0" width="240" height="25" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="120" y="17" textAnchor="middle" fill="#856404" fontSize="9">コイル側と接点側は電気的に完全に分離（絶縁）されている</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: リレーの動作原理</text>
          </svg>
          <figcaption>コイルに電流を流すと電磁石になり、接点が閉じます。コイル側と接点側は絶縁されています。</figcaption>
        </figure>

        <section>
          <h2>リレーの用途: 高電圧・大電流の制御</h2>
          <p>
            リレーが活躍するのは、低電圧のマイコンで高電圧の機器を制御する場面です。
            たとえば、5Vのマイコンで100Vのヒーター、照明、ファンなどを制御できます。
            コイル側に5V、接点側に100Vという具合に、まったく異なる電圧を安全に扱えます。
          </p>
          <p>
            工場や建物の設備では、リレーは非常によく使われています。
            「マイコンからの信号」→「リレー」→「モーターやヒーター」という流れで、
            自動化システムが構築されています。
            リレーは「カチッ」という音がするので、動作しているかどうかが音でわかるのも現場では便利です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">リレーで100V機器を制御</text>
              
              {/* Microcontroller */}
              <g transform="translate(0, 35)">
                <rect x="0" y="0" width="50" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="25" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">マイコン</text>
                <text x="25" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">5V</text>
                <line x1="50" y1="20" x2="70" y2="20" stroke="#3b6ea5" strokeWidth="2" />
              </g>
              
              {/* Transistor for relay drive */}
              <g transform="translate(70, 35)">
                <circle cx="20" cy="20" r="12" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <text x="20" y="23" textAnchor="middle" fill="#3b6ea5" fontSize="7">Tr</text>
                <line x1="32" y1="12" x2="32" y2="28" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="32" y1="12" x2="50" y2="12" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="32" y1="28" x2="50" y2="28" stroke="#3b6ea5" strokeWidth="1.5" />
              </g>
              
              {/* Relay */}
              <g transform="translate(120, 20)">
                <rect x="0" y="0" width="80" height="70" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">リレー</text>
                
                {/* Coil */}
                <rect x="10" y="25" width="25" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" />
                <text x="22" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="7">コイル</text>
                <text x="22" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="6">5V</text>
                
                {/* Contact */}
                <rect x="45" y="25" width="25" height="35" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" />
                <text x="57" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="7">接点</text>
                <text x="57" y="55" textAnchor="middle" fill="#c0392b" fontSize="6">100V</text>
                
                {/* Isolation line */}
                <line x1="40" y1="25" x2="40" y2="60" stroke="#e67e22" strokeWidth="1" strokeDasharray="2,2" />
              </g>
              
              {/* 100V side */}
              <g transform="translate(210, 20)">
                {/* AC power */}
                <text x="0" y="10" fill="#c0392b" fontSize="8">AC100V</text>
                <line x1="0" y1="15" x2="0" y2="40" stroke="#c0392b" strokeWidth="2" />
                
                {/* Load */}
                <rect x="-20" y="45" width="50" height="30" rx="3" fill="none" stroke="#c0392b" strokeWidth="2" />
                <text x="5" y="63" textAnchor="middle" fill="#c0392b" fontSize="8">ヒーター</text>
                
                <line x1="0" y1="75" x2="0" y2="95" stroke="#c0392b" strokeWidth="2" />
                
                {/* Neutral */}
                <text x="0" y="105" textAnchor="middle" fill="#c0392b" fontSize="8">N</text>
              </g>
              
              {/* Flow arrows */}
              <g transform="translate(50, 110)">
                <text x="0" y="0" fill="#3b6ea5" fontSize="9">マイコン</text>
                <line x1="40" y1="-5" x2="60" y2="-5" stroke="#3b6ea5" strokeWidth="1" />
                <polygon points="55,-8 65,-5 55,-2" fill="#3b6ea5" />
                <text x="70" y="0" fill="#3b6ea5" fontSize="9">リレー</text>
                <line x1="100" y1="-5" x2="120" y2="-5" stroke="#c0392b" strokeWidth="1" />
                <polygon points="115,-8 125,-5 115,-2" fill="#c0392b" />
                <text x="130" y="0" fill="#c0392b" fontSize="9">100V負荷</text>
              </g>
              
              {/* Safety note */}
              <g transform="translate(240, 50)">
                <rect x="0" y="0" width="95" height="55" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="47" y="15" textAnchor="middle" fill="#856404" fontSize="8" fontWeight="500">安全のポイント</text>
                <text x="5" y="30" fill="#856404" fontSize="7">・絶縁で感電防止</text>
                <text x="5" y="42" fill="#856404" fontSize="7">・低電圧で高電圧制御</text>
                <text x="5" y="54" fill="#856404" fontSize="7">・マイコンを保護</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: リレーで100V機器を制御する回路</text>
          </svg>
          <figcaption>5Vのマイコンでも、リレーを使えば100Vのヒーターなどを安全に制御できます。</figcaption>
        </figure>

        <section>
          <h2>リレーの選び方</h2>
          <p>
            リレーを選ぶときは、「コイル電圧」と「接点定格」を確認します。
            コイル電圧は、リレーを動作させるのに必要な電圧です。
            5V、12V、24Vなどがあり、使用する制御電源に合わせて選びます。
          </p>
          <p>
            接点定格は、接点に流せる最大電圧と電流です。
            「AC250V 10A」と書いてあれば、交流250Vで10Aまでの負荷を制御できます。
            負荷の消費電力から必要な電流を計算し、余裕を持った定格のリレーを選びましょう。
            また、リレーのコイルは電流を消費するため、マイコンで直接駆動できない場合はトランジスタを介して駆動します。
            トランジスタでコイルを駆動する場合は、コイルと並列にフライバックダイオード（還流ダイオード）を入れます。
            コイルは電流を切ったとき逆起電力を発生するため、このダイオードで吸収しないとトランジスタが壊れることがあります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">リレーの仕様を読む</text>
              
              {/* Relay specs */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="140" height="80" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">リレーの仕様例</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="40" fill="#4a4a4a" fontSize="9">コイル電圧: 5V DC</text>
                <text x="10" y="55" fill="#4a4a4a" fontSize="9">コイル電流: 約70mA</text>
                <text x="10" y="70" fill="#4a4a4a" fontSize="9">接点定格: AC250V 10A</text>
              </g>
              
              {/* Meaning */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="150" height="80" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">意味</text>
                <line x1="10" y1="25" x2="140" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="40" fill="#4a4a4a" fontSize="9">→ 5Vでコイルを駆動</text>
                <text x="10" y="55" fill="#4a4a4a" fontSize="9">→ トランジスタ駆動が必要</text>
                <text x="10" y="70" fill="#4a4a4a" fontSize="9">→ 100V/10Aまで制御可能</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: リレーの仕様の読み方</text>
          </svg>
          <figcaption>コイル電圧とコイル電流、接点定格を確認してリレーを選びます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「100Vの機器を自動で制御したい」という要望に対して、
            「リレーを使えば、マイコンから安全に制御できます」と提案できます。
            絶縁されているため感電のリスクが低く、現場での安全性が確保できることを説明しましょう。
          </p>
          <p>
            また、「カチッという音がするので、動作確認が簡単です」という実務的なメリットも伝えられます。
            無音で動作する半導体リレー（SSR）もありますが、機械式リレーは音で確認できる安心感があります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>リレーは絶縁が必要な場面で活躍しました。では、トランジスタより効率がよく大電流を扱える「MOSFET」は、どのような仕組みでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>リレーは電磁石でスイッチを動かす部品で、コイル側と接点側が電気的に絶縁されています。</li>
            <li>低電圧のマイコンで高電圧の機器（100Vなど）を安全に制御できます。</li>
            <li>リレーを選ぶときは、コイル電圧と接点定格（電圧・電流）を確認します。</li>
          </ol>
        </div>

        <AskBox lessonId="23-relay" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
