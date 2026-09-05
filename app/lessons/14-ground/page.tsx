import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson14Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={14} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>回路図でよく見る「GND」とは何でしょうか? なぜすべての回路に登場するのでしょうか?</p>
        </div>

        <h1>第14回: グラウンドとは何か</h1>

        <section>
          <h2>GNDは電圧の「基準点」</h2>
          <p>
            <Link href="/glossary/ground" className="glossary-link">グラウンド</Link>（GND）は、
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>の電圧を測るときの基準点です。
            「ここを0Vとする」と決めた場所がGNDです。
            電池でいえば−極にあたります。
            回路図では「⏚」の記号で表し、すべての回路で必ず登場します。
          </p>
          <p>
            <Link href="/glossary/voltage" className="glossary-link">電圧</Link>は「2点間の電位の差」です。
            「5V」と言うときは、「GNDを基準にして5V高い」という意味です。
            基準がなければ電圧は測れません。
            建物の高さを「海抜○メートル」と言うとき、海面が基準になっているのと同じです。
            GNDは回路における「海面」のようなものです。
          </p>

          <div className="analogy">
            <span className="analogy-term">GND</span>
            <span className="analogy-equals">=</span>
            <span>電圧の基準点（0V）</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Voltage reference illustration */}
            <g transform="translate(50, 20)">
              <text x="150" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">電圧は基準点からの高さ</text>
              
              {/* Vertical scale */}
              <line x1="50" y1="30" x2="50" y2="150" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="45" y1="30" x2="55" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="45" y1="90" x2="55" y2="90" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="45" y1="150" x2="55" y2="150" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Labels */}
              <text x="35" y="35" textAnchor="end" fill="#3b6ea5" fontSize="10">5V</text>
              <text x="35" y="95" textAnchor="end" fill="#3b6ea5" fontSize="10">2.5V</text>
              <text x="35" y="155" textAnchor="end" fill="#3b6ea5" fontSize="10">0V</text>
              
              {/* GND symbol at bottom */}
              <line x1="50" y1="150" x2="50" y2="165" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="35" y1="165" x2="65" y2="165" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="40" y1="170" x2="60" y2="170" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="45" y1="175" x2="55" y2="175" stroke="#3b6ea5" strokeWidth="2" />
              <text x="80" y="170" fill="#3b6ea5" fontSize="10" fontWeight="500">GND（基準）</text>
              
              {/* Battery */}
              <g transform="translate(150, 60)">
                <rect x="0" y="0" width="40" height="80" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="20" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="10">＋</text>
                <text x="20" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="10">−</text>
                
                {/* Voltage labels */}
                <line x1="45" y1="10" x2="70" y2="10" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="75" y="14" fill="#3b6ea5" fontSize="9">5V</text>
                
                <line x1="45" y1="70" x2="70" y2="70" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="3,2" />
                <text x="75" y="74" fill="#3b6ea5" fontSize="9">0V (GND)</text>
                
                {/* Height indicator */}
                <line x1="100" y1="10" x2="100" y2="70" stroke="#3b6ea5" strokeWidth="1" />
                <polygon points="97,15 100,10 103,15" fill="#3b6ea5" />
                <polygon points="97,65 100,70 103,65" fill="#3b6ea5" />
                <text x="110" y="45" fill="#3b6ea5" fontSize="10">電圧</text>
                <text x="110" y="58" fill="#3b6ea5" fontSize="10">5V</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: GNDは電圧の基準点</text>
          </svg>
          <figcaption>電圧はGND（0V）を基準にした高さで表します。5Vの電源なら、＋極がGNDより5V高くなっています。</figcaption>
        </figure>

        <section>
          <h2>なぜGNDが必要か</h2>
          <p>
            回路で複数の部品を使うとき、すべての部品が共通の基準点を持つ必要があります。
            たとえば、マイコンとセンサーをつなぐとき、両方のGNDを接続しないと信号がうまく伝わりません。
            「5Vの信号」とは「GNDに対して5V」のことなので、基準が合っていないと正しく読み取れません。
          </p>
          <p>
            電池の−極、USBの黒い線、ACアダプターの「−」側、すべてGNDです。
            回路図で「GND」と書いてある場所は、すべて内部でつながっていると考えます。
            配線するときは、電源のGNDと部品のGNDを確実に接続することが大切です。
            GNDがつながっていないと、回路が動かなかったり、誤動作したりします。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* GND connection example */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">GNDの接続</text>
              
              {/* Power source */}
              <rect x="0" y="30" width="50" height="60" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">電源</text>
              <text x="25" y="70" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Microcontroller */}
              <rect x="120" y="25" width="60" height="70" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="150" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">マイコン</text>
              <text x="135" y="40" fill="#3b6ea5" fontSize="7">5V</text>
              <text x="135" y="85" fill="#3b6ea5" fontSize="7">GND</text>
              
              {/* Sensor */}
              <rect x="250" y="30" width="50" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="275" y="52" textAnchor="middle" fill="#3b6ea5" fontSize="9">センサー</text>
              <text x="275" y="66" textAnchor="middle" fill="#3b6ea5" fontSize="7">GND</text>
              
              {/* 5V line */}
              <line x1="50" y1="45" x2="120" y2="45" stroke="#c0392b" strokeWidth="2" />
              <text x="85" y="40" textAnchor="middle" fill="#c0392b" fontSize="8">5V</text>
              
              {/* GND line - all connected */}
              <line x1="50" y1="80" x2="120" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="180" y1="80" x2="250" y2="80" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Common GND bar */}
              <line x1="50" y1="110" x2="280" y2="110" stroke="#3b6ea5" strokeWidth="3" />
              <line x1="50" y1="80" x2="50" y2="110" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="150" y1="95" x2="150" y2="110" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="275" y1="80" x2="275" y2="110" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* GND symbol */}
              <line x1="165" y1="110" x2="165" y2="125" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="155" y1="125" x2="175" y2="125" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="158" y1="130" x2="172" y2="130" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="161" y1="135" x2="169" y2="135" stroke="#3b6ea5" strokeWidth="2" />
              
              <text x="165" y="155" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">共通GND</text>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: すべてのGNDを接続する</text>
          </svg>
          <figcaption>電源、マイコン、センサーのGNDをすべて接続して、共通の基準点を作ります。</figcaption>
        </figure>

        <section>
          <h2>回路図でのGND記号</h2>
          <p>
            回路図では、GNDを「⏚」の記号で表します。
            この記号が付いている場所は、すべて同じ電位（0V）でつながっていると読みます。
            すべてのGND記号を線でつなぐのは大変なので、記号で「ここはGND」と示す慣習があります。
          </p>
          <p>
            回路図を読むときは、電源の＋極から出発してGNDに戻る経路をたどります。
            GND記号を見たら「電池の−極に戻る」と考えると、回路の流れがわかりやすくなります。
            実際に配線するときは、GND記号のある場所をすべて1本の線（またはブレッドボードの共通ライン）につなぎます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Circuit diagram with GND symbols */}
            <g transform="translate(100, 20)">
              <text x="100" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">回路図でのGND記号</text>
              
              {/* Battery */}
              <line x1="80" y1="25" x2="80" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="70" y1="30" x2="90" y2="30" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="75" y1="40" x2="85" y2="40" stroke="#3b6ea5" strokeWidth="1.5" />
              <text x="95" y="40" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Wire to resistor */}
              <line x1="80" y1="45" x2="80" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Resistor */}
              <path d="M80 60 L85 50 L95 70 L105 50 L115 70 L120 60" fill="none" stroke="#3b6ea5" strokeWidth="2" transform="rotate(90, 100, 60)" />
              
              {/* Wire to LED */}
              <line x1="80" y1="90" x2="80" y2="105" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED */}
              <polygon points="65,105 95,105 80,125" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="65" y1="125" x2="95" y2="125" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* GND symbol under LED */}
              <line x1="80" y1="125" x2="80" y2="140" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="65" y1="140" x2="95" y2="140" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="70" y1="145" x2="90" y2="145" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="75" y1="150" x2="85" y2="150" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* GND symbol under battery */}
              <line x1="80" y1="25" x2="40" y2="25" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="40" y1="25" x2="40" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="25" y1="40" x2="55" y2="40" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="30" y1="45" x2="50" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="35" y1="50" x2="45" y2="50" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Explanation */}
              <text x="140" y="80" fill="#4a4a4a" fontSize="9">同じGND記号は</text>
              <text x="140" y="95" fill="#4a4a4a" fontSize="9">すべて接続されている</text>
              <text x="140" y="110" fill="#4a4a4a" fontSize="9">と読みます</text>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: GND記号は同じ電位を表す</text>
          </svg>
          <figcaption>回路図で離れた場所にあるGND記号は、実際にはすべてつながっています。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「GNDを共通にする」という考え方は、複数の機器を接続するときに重要です。
            たとえば、センサーからの信号がマイコンで正しく読めない場合、
            「GNDは接続されていますか?」と確認するのは基本的なトラブルシューティングです。
          </p>
          <p>
            お客様に回路を説明するときも、「この黒い線がGND、つまりマイナス側です」と言えると、
            わかりやすく伝わります。
            GNDは電子回路の「共通言語」のようなものなので、必ず理解しておきたい概念です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>LEDを光らせるのに「抵抗が必要」と習いました。実際に抵抗の値を計算するには、どうすればよいでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>GND（グラウンド）は、電圧の基準点で0Vの場所です。</li>
            <li>電圧は「GNDからの高さ」で表します。5Vは「GNDより5V高い」という意味です。</li>
            <li>回路図のGND記号は、すべて内部でつながっています。配線時は確実に接続します。</li>
          </ol>
        </div>

        <AskBox lessonId="14-ground" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
