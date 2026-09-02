import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson04Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={4} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 1: ものづくりの世界を知る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>コンピュータは、どうやって外の世界を知るのでしょうか?</p>
        </div>

        <h1>第4回: 入力と出力</h1>

        <section>
          <h2>入力と出力の役割</h2>
          <p>
            <Link href="/glossary/input" className="glossary-link">入力</Link>は、
            外から情報を受け取ることです。
            <Link href="/glossary/output" className="glossary-link">出力</Link>は、
            外に向けて動作することです。
          </p>
          <p>
            コンピュータは、入力で外の世界を知り、
            処理（計算・判断）をして、
            出力で外の世界に働きかけます。
            この「入力→処理→出力」の流れが、
            あらゆるシステムの基本です。
          </p>

          <div className="analogy">
            <span className="analogy-term">入力</span>
            <span className="analogy-equals">=</span>
            <span>外から情報を受け取る（目・耳）</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">出力</span>
            <span className="analogy-equals">=</span>
            <span>外に向けて動作する（手・口）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Input */}
            <rect x="30" y="50" width="80" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="70" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">入力</text>
            <text x="70" y="115" textAnchor="middle" fill="#4a4a4a" fontSize="9">情報を受け取る</text>
            
            {/* Arrow */}
            <line x1="110" y1="75" x2="145" y2="75" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="145,70 155,75 145,80" fill="#3b6ea5" />
            
            {/* Process */}
            <rect x="160" y="50" width="80" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="200" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">処理</text>
            <text x="200" y="115" textAnchor="middle" fill="#4a4a4a" fontSize="9">計算・判断する</text>
            
            {/* Arrow */}
            <line x1="240" y1="75" x2="275" y2="75" stroke="#3b6ea5" strokeWidth="2" />
            <polygon points="275,70 285,75 275,80" fill="#3b6ea5" />
            
            {/* Output */}
            <rect x="290" y="50" width="80" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" rx="3" />
            <text x="330" y="80" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">出力</text>
            <text x="330" y="115" textAnchor="middle" fill="#4a4a4a" fontSize="9">外に働きかける</text>
            
            <text x="200" y="145" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 入力→処理→出力の流れ</text>
          </svg>
          <figcaption>システムは、入力を受けて処理し、出力を返します。</figcaption>
        </figure>

        <section>
          <h2>入力の例</h2>
          <p>
            入力の代表例は、センサーとボタンです。
            センサーは温度・光・音・距離などを測り、
            その情報をコンピュータに伝えます。
            ボタンは人間の操作を伝えます。
          </p>
          <ul style={{ marginLeft: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <li>温度センサー：気温を測る</li>
            <li>光センサー：明るさを測る</li>
            <li>距離センサー：物までの距離を測る</li>
            <li>ボタン・スイッチ：人の操作を伝える</li>
            <li>カメラ：画像を取り込む</li>
          </ul>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            {/* Sensor icons */}
            <g transform="translate(50, 30)">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="25" r="8" fill="#3b6ea5" opacity="0.3" />
              <circle cx="25" cy="25" r="3" fill="#3b6ea5" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">センサー</text>
            </g>
            
            <g transform="translate(130, 30)">
              <rect x="10" y="10" width="30" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="25" r="8" fill="#3b6ea5" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">ボタン</text>
            </g>
            
            <g transform="translate(210, 30)">
              <rect x="5" y="10" width="40" height="30" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="25" r="5" fill="#3b6ea5" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">カメラ</text>
            </g>
            
            <g transform="translate(290, 30)">
              <rect x="10" y="5" width="30" height="45" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="12" x2="25" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="40" r="5" fill="#3b6ea5" />
              <text x="25" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="9">温度計</text>
            </g>
            
            <text x="200" y="120" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 入力の例</text>
          </svg>
          <figcaption>センサーやボタンが、外の世界の情報をコンピュータに伝えます。</figcaption>
        </figure>

        <section>
          <h2>出力の例</h2>
          <p>
            出力の代表例は、LEDとモーターです。
            LEDは光で人に情報を伝え、
            モーターは回転で物を動かします。
            画面表示やスピーカーも出力の一種です。
          </p>
          <ul style={{ marginLeft: 'var(--spacing-md)', marginBottom: 'var(--spacing-md)' }}>
            <li>LED：光で状態を知らせる</li>
            <li>モーター：物を動かす</li>
            <li>ディスプレイ：文字や画像を表示する</li>
            <li>スピーカー：音を出す</li>
            <li>リレー：他の電気機器をオン・オフする</li>
          </ul>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            {/* Output icons */}
            <g transform="translate(50, 25)">
              <path d="M15 30 L35 30 L25 10 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="13" y1="35" x2="37" y2="35" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="10" y1="5" x2="5" y2="0" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <line x1="25" y1="2" x2="25" y2="-5" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <line x1="40" y1="5" x2="45" y2="0" stroke="#3b6ea5" strokeWidth="1.5" opacity="0.6" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">LED</text>
            </g>
            
            <g transform="translate(130, 25)">
              <circle cx="25" cy="25" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <circle cx="25" cy="25" r="5" fill="#3b6ea5" />
              <line x1="25" y1="25" x2="38" y2="15" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">モーター</text>
            </g>
            
            <g transform="translate(210, 25)">
              <rect x="5" y="5" width="40" height="35" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="10" y1="15" x2="40" y2="15" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
              <line x1="10" y1="25" x2="35" y2="25" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
              <line x1="10" y1="35" x2="30" y2="35" stroke="#3b6ea5" strokeWidth="1" opacity="0.5" />
              <text x="25" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="9">画面</text>
            </g>
            
            <g transform="translate(290, 25)">
              <ellipse cx="25" cy="20" rx="18" ry="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <ellipse cx="25" cy="20" rx="8" ry="6" fill="#3b6ea5" opacity="0.3" />
              <path d="M10 35 L15 45 L35 45 L40 35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="9">スピーカー</text>
            </g>
            
            <text x="200" y="120" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 出力の例</text>
          </svg>
          <figcaption>LEDやモーターが、コンピュータの判断を外の世界に伝えます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様の要望をシステムに変換するとき、
            「何を入力にするか」「何を出力にするか」を
            明確にすることが大切です。
          </p>
          <p>
            例えば「人が来たらライトを点ける」なら、
            入力は「人感センサー」、出力は「LED」です。
            「温度が高くなったら通知する」なら、
            入力は「温度センサー」、出力は「通知（画面やメール）」になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>センサーは、どんな種類があって、何を測れるのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>入力は「外から情報を受け取る」こと、出力は「外に向けて動作する」ことです。</li>
            <li>センサーは入力、LEDやモーターは出力の代表例です。</li>
            <li>コンピュータは入力を受け取り、処理して、出力を返します。</li>
          </ol>
        </div>

        <AskBox lessonId="04-io" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
