import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson24Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={24} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>リレーは絶縁が必要な場面で活躍しました。では、トランジスタより効率がよく大電流を扱える「MOSFET」は、どのような仕組みでしょうか?</p>
        </div>

        <h1>第24回: MOSFETとは何か</h1>

        <section>
          <h2>MOSFETは「電圧で動くスイッチ」</h2>
          <p>
            <Link href="/glossary/mosfet" className="glossary-link">MOSFET</Link>
            （モスフェット）は、電圧でオン・オフを制御できるスイッチです。
            第22回で学んだトランジスタは「電流」で制御しましたが、MOSFETは「電圧」で制御します。
            ゲートに電圧をかけるだけでオンになり、電流はほとんど流れません。
          </p>
          <p>
            MOSFETには「ゲート（G）」「ドレイン（D）」「ソース（S）」という3本の端子があります。
            NチャネルMOSFETの場合、ゲートに電圧をかけるとドレインからソースへ電流が流れます。
            トランジスタのベース・コレクタ・エミッタに対応する関係ですが、
            「電流」ではなく「電圧」で制御するのが大きな違いです。
          </p>

          <div className="analogy">
            <span className="analogy-term">MOSFET</span>
            <span className="analogy-equals">=</span>
            <span>電圧をかけるだけでオンになる高効率スイッチ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">MOSFETの基本動作（Nチャネル）</text>
              
              {/* OFF state */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">OFF（ゲート電圧なし）</text>
                
                {/* VDD */}
                <line x1="70" y1="20" x2="70" y2="35" stroke="#c0392b" strokeWidth="2" />
                <text x="70" y="15" textAnchor="middle" fill="#c0392b" fontSize="8">VDD</text>
                
                {/* Load */}
                <rect x="55" y="35" width="30" height="20" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="48" textAnchor="middle" fill="#3b6ea5" fontSize="7">負荷</text>
                
                {/* Drain */}
                <line x1="70" y1="55" x2="70" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <text x="80" y="65" fill="#3b6ea5" fontSize="8">D</text>
                
                {/* MOSFET symbol */}
                <circle cx="70" cy="85" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Gate */}
                <line x1="40" y1="85" x2="48" y2="85" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="48" y1="72" x2="48" y2="98" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="72" x2="52" y2="98" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="88" fill="#3b6ea5" fontSize="8">G</text>
                
                {/* Internal lines */}
                <line x1="52" y1="75" x2="70" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="52" y1="95" x2="70" y2="95" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="70" y1="67" x2="70" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="70" y1="95" x2="70" y2="103" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Body diode */}
                <polygon points="66,88 70,82 74,88" fill="#3b6ea5" />
                <line x1="66" y1="82" x2="74" y2="82" stroke="#3b6ea5" strokeWidth="1" />
                
                {/* Source */}
                <line x1="70" y1="103" x2="70" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <text x="80" y="115" fill="#3b6ea5" fontSize="8">S</text>
                
                {/* GND */}
                <line x1="60" y1="120" x2="80" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="63" y1="125" x2="77" y2="125" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="66" y1="130" x2="74" y2="130" stroke="#3b6ea5" strokeWidth="1" />
                
                {/* X mark */}
                <line x1="65" y1="58" x2="75" y2="68" stroke="#c0392b" strokeWidth="2" />
                <line x1="75" y1="58" x2="65" y2="68" stroke="#c0392b" strokeWidth="2" />
                
                <text x="70" y="145" textAnchor="middle" fill="#c0392b" fontSize="9">電流流れない</text>
              </g>
              
              {/* ON state */}
              <g transform="translate(190, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">ON（ゲートに電圧をかける）</text>
                
                {/* VDD */}
                <line x1="70" y1="20" x2="70" y2="35" stroke="#27ae60" strokeWidth="2" />
                <text x="70" y="15" textAnchor="middle" fill="#27ae60" fontSize="8">VDD</text>
                
                {/* Load */}
                <rect x="55" y="35" width="30" height="20" rx="2" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="70" y="48" textAnchor="middle" fill="#f39c12" fontSize="7">負荷</text>
                
                {/* Current arrow */}
                <polygon points="66,55 70,65 74,55" fill="#27ae60" />
                
                {/* Drain */}
                <line x1="70" y1="55" x2="70" y2="70" stroke="#27ae60" strokeWidth="2" />
                <text x="80" y="65" fill="#3b6ea5" fontSize="8">D</text>
                
                {/* MOSFET symbol */}
                <circle cx="70" cy="85" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Gate with voltage */}
                <line x1="20" y1="85" x2="48" y2="85" stroke="#27ae60" strokeWidth="2" />
                <line x1="48" y1="72" x2="48" y2="98" stroke="#27ae60" strokeWidth="2" />
                <line x1="52" y1="72" x2="52" y2="98" stroke="#3b6ea5" strokeWidth="2" />
                <text x="15" y="88" fill="#3b6ea5" fontSize="8">G</text>
                <text x="15" y="100" fill="#27ae60" fontSize="7">電圧!</text>
                
                {/* Internal lines */}
                <line x1="52" y1="75" x2="70" y2="75" stroke="#27ae60" strokeWidth="2" />
                <line x1="52" y1="95" x2="70" y2="95" stroke="#27ae60" strokeWidth="2" />
                <line x1="70" y1="67" x2="70" y2="75" stroke="#27ae60" strokeWidth="2" />
                <line x1="70" y1="95" x2="70" y2="103" stroke="#27ae60" strokeWidth="2" />
                
                {/* Body diode */}
                <polygon points="66,88 70,82 74,88" fill="#3b6ea5" />
                <line x1="66" y1="82" x2="74" y2="82" stroke="#3b6ea5" strokeWidth="1" />
                
                {/* Source */}
                <line x1="70" y1="103" x2="70" y2="120" stroke="#27ae60" strokeWidth="2" />
                <text x="80" y="115" fill="#3b6ea5" fontSize="8">S</text>
                
                {/* GND */}
                <line x1="60" y1="120" x2="80" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="63" y1="125" x2="77" y2="125" stroke="#3b6ea5" strokeWidth="1.5" />
                <line x1="66" y1="130" x2="74" y2="130" stroke="#3b6ea5" strokeWidth="1" />
                
                <text x="70" y="145" textAnchor="middle" fill="#27ae60" fontSize="9">大電流が流れる!</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: NチャネルMOSFETのON/OFF動作</text>
          </svg>
          <figcaption>ゲートに電圧をかけるだけでオンになり、電流はほとんど流れません。</figcaption>
        </figure>

        <section>
          <h2>MOSFETのメリット</h2>
          <p>
            MOSFETがトランジスタより優れている点は、主に3つあります。
            1つ目は「効率がよい」こと。ゲートに電流がほとんど流れないため、制御に使う電力が少なくて済みます。
            2つ目は「高速」であること。電圧で制御するため、スイッチングが速く、PWM制御に向いています。
          </p>
          <p>
            3つ目は「大電流を扱える」こと。
            オン状態のMOSFETは抵抗が非常に小さく（オン抵抗）、大電流を流しても発熱が少なく済みます。
            たとえば、モーター制御用のMOSFETは数十アンペアを流せるものもあります。
            <Link href="/glossary/pwm" className="glossary-link">PWM</Link>でモーターの速度を制御するような用途では、
            高速スイッチングが必要なためMOSFETがよく使われます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">トランジスタとMOSFETの比較</text>
              
              {/* Transistor */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="130" height="90" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">トランジスタ</text>
                <line x1="10" y1="25" x2="120" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="42" fill="#4a4a4a" fontSize="9">制御: 電流</text>
                <text x="10" y="57" fill="#4a4a4a" fontSize="9">ベース電流が必要</text>
                <text x="10" y="72" fill="#4a4a4a" fontSize="9">発熱がやや大きい</text>
                <text x="10" y="87" fill="#4a4a4a" fontSize="9">価格が安い</text>
              </g>
              
              {/* MOSFET */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="130" height="90" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" />
                <text x="65" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">MOSFET</text>
                <line x1="10" y1="25" x2="120" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="42" fill="#27ae60" fontSize="9">制御: 電圧</text>
                <text x="10" y="57" fill="#27ae60" fontSize="9">ゲート電流ほぼゼロ</text>
                <text x="10" y="72" fill="#27ae60" fontSize="9">発熱が少ない</text>
                <text x="10" y="87" fill="#27ae60" fontSize="9">高速スイッチング可能</text>
              </g>
              
              {/* Use case */}
              <g transform="translate(50, 125)">
                <text x="120" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9">PWM制御、大電流負荷 → MOSFETが有利</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: トランジスタとMOSFETの違い</text>
          </svg>
          <figcaption>MOSFETは電圧制御で効率がよく、高速スイッチングに向いています。</figcaption>
        </figure>

        <section>
          <h2>MOSFETの注意点</h2>
          <p>
            MOSFETを使うときの注意点が2つあります。
            1つ目は「ゲートしきい値電圧」です。
            MOSFETがオンになるには、ゲートに一定以上の電圧が必要です。
            一般的なMOSFETは4〜5V程度ですが、3.3Vのマイコンで直接駆動するには「ロジックレベルMOSFET」を選ぶ必要があります。
          </p>
          <p>
            2つ目は「静電気に弱い」こと。
            ゲートは非常に薄い絶縁膜で構成されており、静電気で簡単に壊れます。
            取り扱う際は、静電気対策をしっかり行いましょう。
            保管時は足をショートさせる導電スポンジに挿しておくと安全です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">MOSFETの注意点</text>
              
              {/* Gate threshold */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="140" height="70" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">ゲートしきい値電圧</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#f39c12" strokeWidth="1" />
                <text x="10" y="42" fill="#856404" fontSize="8">通常のMOSFET: 4〜5V必要</text>
                <text x="10" y="57" fill="#856404" fontSize="8">ロジックレベル: 2.5〜3V程度</text>
                <text x="10" y="70" fill="#27ae60" fontSize="8">→ 3.3Vマイコンはロジックレベルを!</text>
              </g>
              
              {/* Static sensitivity */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="140" height="70" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">静電気に注意</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#c0392b" strokeWidth="1" />
                <text x="10" y="42" fill="#8b0000" fontSize="8">ゲート絶縁膜が薄い</text>
                <text x="10" y="57" fill="#8b0000" fontSize="8">静電気で破壊される</text>
                <text x="10" y="70" fill="#8b0000" fontSize="8">→ 導電スポンジで保管</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: MOSFETを使うときの注意点</text>
          </svg>
          <figcaption>マイコンの電圧に合わせたMOSFETを選び、静電気に注意して扱います。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「モーターの速度を調整したい」という要望に対して、
            「MOSFETとPWMを使えば、効率よく速度制御できます」と提案できます。
            トランジスタより発熱が少なく、長時間稼働するシステムに適していることを説明しましょう。
          </p>
          <p>
            また、「3.3Vのマイコンを使う場合は、ロジックレベルMOSFETを選んでください」
            といった具体的なアドバイスができると、実装時のトラブルを防げます。
            部品選定の段階で適切な提案ができることは、技術営業として大きな強みになります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>ここまで部品の制御を学んできました。では、センサーからの信号は「アナログ」と「デジタル」のどちらでしょうか? その違いは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>MOSFETは電圧でオン・オフを制御するスイッチで、ゲートに電流がほとんど流れません。</li>
            <li>トランジスタより効率がよく、高速スイッチングや大電流制御に向いています。</li>
            <li>3.3Vマイコンで使う場合は「ロジックレベルMOSFET」を選び、静電気に注意して扱います。</li>
          </ol>
        </div>

        <AskBox lessonId="24-mosfet" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
