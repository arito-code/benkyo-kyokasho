import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson17Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={17} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>はんだ付けなしで回路を試せる「ブレッドボード」は、どのような仕組みでしょうか?</p>
        </div>

        <h1>第17回: ブレッドボード</h1>

        <section>
          <h2>ブレッドボードは「試作の味方」</h2>
          <p>
            <Link href="/glossary/breadboard" className="glossary-link">ブレッドボード</Link>は、
            はんだ付けなしで<Link href="/glossary/circuit" className="glossary-link">回路</Link>を組める便利な実験台です。
            部品の足を穴に差し込むだけで配線でき、何度でもやり直しができます。
            新しい回路を試したり、動作確認をしたりするのに欠かせない道具です。
          </p>
          <p>
            ブレッドボードの名前の由来は「パン用のまな板」です。
            昔、回路を試すときに木の板に釘を打ってワイヤーを巻いていたことから、この名前がつきました。
            現代のブレッドボードはプラスチック製で、内部に金属の接点が入っています。
            特定の穴同士が内部でつながっているので、それを理解して使います。
          </p>

          <div className="analogy">
            <span className="analogy-term">ブレッドボード</span>
            <span className="analogy-equals">=</span>
            <span>はんだ付け不要の試作用配線台</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            {/* Breadboard structure */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ブレッドボードの構造</text>
              
              {/* Main board */}
              <rect x="20" y="20" width="300" height="150" rx="5" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Power rails - top */}
              <line x1="40" y1="35" x2="300" y2="35" stroke="#c0392b" strokeWidth="3" />
              <text x="32" y="38" textAnchor="end" fill="#c0392b" fontSize="8">+</text>
              <line x1="40" y1="45" x2="300" y2="45" stroke="#3b6ea5" strokeWidth="3" />
              <text x="32" y="48" textAnchor="end" fill="#3b6ea5" fontSize="8">−</text>
              
              {/* Center gap */}
              <rect x="150" y="60" width="40" height="80" fill="#e0e0e0" rx="2" />
              
              {/* Holes - left side */}
              <g fill="#666">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((col) =>
                  [0, 1, 2, 3, 4].map((row) => (
                    <circle key={`l-${col}-${row}`} cx={50 + col * 12} cy={70 + row * 12} r="2" />
                  ))
                )}
              </g>
              
              {/* Holes - right side */}
              <g fill="#666">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((col) =>
                  [0, 1, 2, 3, 4].map((row) => (
                    <circle key={`r-${col}-${row}`} cx={200 + col * 12} cy={70 + row * 12} r="2" />
                  ))
                )}
              </g>
              
              {/* Power rails - bottom */}
              <line x1="40" y1="145" x2="300" y2="145" stroke="#c0392b" strokeWidth="3" />
              <text x="32" y="148" textAnchor="end" fill="#c0392b" fontSize="8">+</text>
              <line x1="40" y1="155" x2="300" y2="155" stroke="#3b6ea5" strokeWidth="3" />
              <text x="32" y="158" textAnchor="end" fill="#3b6ea5" fontSize="8">−</text>
              
              {/* Column labels */}
              <text x="50" y="180" textAnchor="middle" fill="#999" fontSize="7">a</text>
              <text x="62" y="180" textAnchor="middle" fill="#999" fontSize="7">b</text>
              <text x="74" y="180" textAnchor="middle" fill="#999" fontSize="7">c</text>
              <text x="86" y="180" textAnchor="middle" fill="#999" fontSize="7">d</text>
              <text x="98" y="180" textAnchor="middle" fill="#999" fontSize="7">e</text>
              
              {/* Connection indicators */}
              <rect x="48" y="68" width="52" height="4" fill="#3b6ea5" opacity="0.3" rx="1" />
              <text x="140" y="73" fill="#3b6ea5" fontSize="8">← 横一列が内部でつながっている</text>
            </g>

            <text x="200" y="215" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: ブレッドボードの穴の接続</text>
          </svg>
          <figcaption>横一列（a〜e、f〜jなど）の穴が内部でつながっています。電源レールは縦につながっています。</figcaption>
        </figure>

        <section>
          <h2>穴の接続ルール</h2>
          <p>
            ブレッドボードの穴は、特定のルールでつながっています。
            中央部分は「横一列」がつながっています。
            たとえば、同じ行のa・b・c・d・eの5つの穴は内部で接続されています。
            中央の溝を挟んで反対側（f・g・h・i・j）も同様に5つつながっていますが、溝の両側はつながっていません。
          </p>
          <p>
            上下にある長い列は「電源ライン」です。
            赤いライン（+）は電源の＋側（たとえば5V）、青いライン（−）は<Link href="/glossary/ground" className="glossary-link">GND</Link>に使います。
            電源ラインは縦方向につながっているので、どの穴からでも電源を取れます。
            部品をつなぐときは、このルールを理解して配線します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Simple circuit on breadboard */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">LEDを光らせる配線例</text>
              
              {/* Simplified breadboard */}
              <rect x="50" y="30" width="240" height="120" rx="5" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Power rails */}
              <line x1="65" y1="45" x2="275" y2="45" stroke="#c0392b" strokeWidth="2" />
              <line x1="65" y1="135" x2="275" y2="135" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Holes grid - simplified */}
              <g fill="#999">
                <circle cx="80" cy="70" r="2" />
                <circle cx="92" cy="70" r="2" />
                <circle cx="104" cy="70" r="2" />
                <circle cx="116" cy="70" r="2" />
                <circle cx="128" cy="70" r="2" />
                
                <circle cx="80" cy="85" r="2" />
                <circle cx="92" cy="85" r="2" />
                <circle cx="104" cy="85" r="2" />
                <circle cx="116" cy="85" r="2" />
                <circle cx="128" cy="85" r="2" />
                
                <circle cx="80" cy="100" r="2" />
                <circle cx="92" cy="100" r="2" />
                <circle cx="104" cy="100" r="2" />
                <circle cx="116" cy="100" r="2" />
                <circle cx="128" cy="100" r="2" />
              </g>
              
              {/* Components */}
              {/* Wire from + to row */}
              <line x1="80" y1="45" x2="80" y2="70" stroke="#c0392b" strokeWidth="2" />
              
              {/* Resistor */}
              <line x1="80" y1="70" x2="80" y2="77" stroke="#d35400" strokeWidth="3" />
              <rect x="75" y="77" width="10" height="16" fill="#e8d4a8" stroke="#d35400" strokeWidth="1" rx="1" />
              <line x1="80" y1="93" x2="80" y2="100" stroke="#d35400" strokeWidth="3" />
              <text x="60" y="87" textAnchor="end" fill="#d35400" fontSize="8">抵抗</text>
              
              {/* Jump wire to LED */}
              <line x1="80" y1="100" x2="116" y2="100" stroke="#27ae60" strokeWidth="2" />
              
              {/* LED */}
              <path d="M111 95 L121 95 L116 82 Z" fill="none" stroke="#c0392b" strokeWidth="2" />
              <circle cx="116" cy="78" r="2" fill="#ff4444" />
              <line x1="116" y1="97" x2="116" y2="115" stroke="#c0392b" strokeWidth="2" />
              <text x="140" y="93" fill="#c0392b" fontSize="8">LED</text>
              
              {/* Wire to GND */}
              <line x1="116" y1="115" x2="116" y2="135" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Labels */}
              <text x="50" y="48" textAnchor="end" fill="#c0392b" fontSize="9">5V (+)</text>
              <text x="50" y="138" textAnchor="end" fill="#3b6ea5" fontSize="9">GND (−)</text>
              
              {/* Flow indication */}
              <g transform="translate(180, 50)">
                <rect x="0" y="0" width="100" height="75" fill="none" stroke="#3b6ea5" strokeWidth="1" rx="3" strokeDasharray="3,2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9">電流の流れ</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">5V → 抵抗 →</text>
                <text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">LED → GND</text>
              </g>
            </g>

            <text x="200" y="190" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: ブレッドボードでLED回路を組む</text>
          </svg>
          <figcaption>抵抗とLEDを差し込み、ジャンパワイヤーで電源とGNDを接続するだけで回路が完成します。</figcaption>
        </figure>

        <section>
          <h2>ジャンパワイヤーで配線</h2>
          <p>
            ブレッドボードでは「ジャンパワイヤー」を使って穴と穴をつなぎます。
            両端に金属のピンがついた短い線で、必要な場所に差し込むだけで配線できます。
            色分けして使うと、どの線が電源でどの線がGNDかわかりやすくなります。
            一般的に、赤は＋（電源）、黒はGND、他の色は信号線に使います。
          </p>
          <p>
            部品の足も同様に穴に差し込みます。
            抵抗やLEDの足は細いので、そのまま差し込めます。
            ICなどの部品は中央の溝をまたぐように差し込むと、両側の足がそれぞれ独立した列につながります。
            試作が終わったら、部品を抜いて別の回路に再利用できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            {/* Jumper wires */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ジャンパワイヤーの種類</text>
              
              {/* Male-to-Male */}
              <g transform="translate(20, 30)">
                <line x1="0" y1="30" x2="80" y2="30" stroke="#c0392b" strokeWidth="3" />
                <rect x="-5" y="25" width="15" height="10" fill="#c0392b" rx="1" />
                <rect x="70" y="25" width="15" height="10" fill="#c0392b" rx="1" />
                <text x="40" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="9">オス−オス</text>
                <text x="40" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">ブレッドボード同士</text>
              </g>
              
              {/* Male-to-Female */}
              <g transform="translate(130, 30)">
                <line x1="0" y1="30" x2="80" y2="30" stroke="#3b6ea5" strokeWidth="3" />
                <rect x="-5" y="25" width="15" height="10" fill="#3b6ea5" rx="1" />
                <rect x="70" y="25" width="15" height="10" fill="none" stroke="#3b6ea5" strokeWidth="2" rx="1" />
                <text x="40" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="9">オス−メス</text>
                <text x="40" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">センサーなどへ</text>
              </g>
              
              {/* Female-to-Female */}
              <g transform="translate(240, 30)">
                <line x1="0" y1="30" x2="80" y2="30" stroke="#27ae60" strokeWidth="3" />
                <rect x="-5" y="25" width="15" height="10" fill="none" stroke="#27ae60" strokeWidth="2" rx="1" />
                <rect x="70" y="25" width="15" height="10" fill="none" stroke="#27ae60" strokeWidth="2" rx="1" />
                <text x="40" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="9">メス−メス</text>
                <text x="40" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">ピンヘッダー同士</text>
              </g>
              
              {/* Color convention */}
              <g transform="translate(50, 95)">
                <text x="0" y="15" fill="#3b6ea5" fontSize="9" fontWeight="500">色の慣習:</text>
                <rect x="60" y="5" width="15" height="15" fill="#c0392b" rx="2" />
                <text x="80" y="17" fill="#4a4a4a" fontSize="9">赤 = 電源(+)</text>
                <rect x="140" y="5" width="15" height="15" fill="#1a1a1a" rx="2" />
                <text x="160" y="17" fill="#4a4a4a" fontSize="9">黒 = GND</text>
                <rect x="210" y="5" width="15" height="15" fill="#27ae60" rx="2" />
                <text x="230" y="17" fill="#4a4a4a" fontSize="9">他 = 信号</text>
              </g>
            </g>

            <text x="200" y="145" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: ジャンパワイヤーの種類と色</text>
          </svg>
          <figcaption>用途に応じてワイヤーの種類を選び、色で役割を区別すると配線がわかりやすくなります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様にシステムを提案するとき、「まずブレッドボードで試作して動作確認します」と言えると、
            安心感を与えられます。
            本番の基板を作る前に、ブレッドボードで回路が正しく動くか確認するのは基本的なプロセスです。
          </p>
          <p>
            デモンストレーションでも、ブレッドボードに組んだ回路を見せると、
            「こうやってセンサーとマイコンがつながっています」と具体的に説明できます。
            試作ツールとしてのブレッドボードは、技術提案の強い味方です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電圧や抵抗を実際に測定するには、どうすればよいでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ブレッドボードは、はんだ付けなしで回路を試作できる便利な実験台です。</li>
            <li>横一列（a〜e、f〜j）の穴が内部でつながっています。電源ラインは縦につながっています。</li>
            <li>ジャンパワイヤーで穴と穴をつなぎます。赤は電源、黒はGNDの慣習があります。</li>
          </ol>
        </div>

        <AskBox lessonId="17-breadboard" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
