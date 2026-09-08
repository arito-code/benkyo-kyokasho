import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson21Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={21} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>前回のコンデンサに続いて、新しい部品を学びます。「ダイオード」とは何でしょうか? なぜ電流を一方向にだけ流すのでしょうか?</p>
        </div>

        <h1>第21回: ダイオードとは何か</h1>

        <section>
          <h2>ダイオードは「電流の一方通行」</h2>
          <p>
            <Link href="/glossary/diode" className="glossary-link">ダイオード</Link>は、
            電流を一方向にだけ流す部品です。
            水道の「逆止弁」のようなもので、順方向には流れますが、逆方向には流れません。
            この性質を利用して、電源の逆接続から回路を守ったり、交流を直流に変換したりします。
          </p>
          <p>
            ダイオードには「アノード」と「カソード」という2つの端子があります。
            アノード側がプラス、カソード側がマイナスになるように電圧をかけると電流が流れます。
            これを「順方向」といいます。
            逆に、カソード側がプラス、アノード側がマイナスだと電流は流れません。
            これを「逆方向」といいます。
          </p>

          <div className="analogy">
            <span className="analogy-term">ダイオード</span>
            <span className="analogy-equals">=</span>
            <span>電流の一方通行を作る逆止弁</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ダイオードの順方向と逆方向</text>
              
              {/* Forward bias */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">順方向（電流が流れる）</text>
                
                {/* Battery */}
                <rect x="0" y="30" width="30" height="40" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="15" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="8">＋</text>
                <text x="15" y="62" textAnchor="middle" fill="#3b6ea5" fontSize="8">−</text>
                
                {/* Wire */}
                <line x1="30" y1="45" x2="60" y2="45" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Diode symbol */}
                <polygon points="65,35 65,55 90,45" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="90" y1="35" x2="90" y2="55" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Labels */}
                <text x="72" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="8">A</text>
                <text x="95" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="8">K</text>
                
                {/* Wire and current arrow */}
                <line x1="90" y1="45" x2="140" y2="45" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="120,41 130,45 120,49" fill="#27ae60" />
                <line x1="140" y1="45" x2="140" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="75" x2="140" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="70" x2="15" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="70" y="95" textAnchor="middle" fill="#27ae60" fontSize="9">→ 電流が流れる</text>
              </g>
              
              {/* Reverse bias */}
              <g transform="translate(190, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">逆方向（電流が流れない）</text>
                
                {/* Battery (reversed) */}
                <rect x="0" y="30" width="30" height="40" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="15" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="8">−</text>
                <text x="15" y="62" textAnchor="middle" fill="#3b6ea5" fontSize="8">＋</text>
                
                {/* Wire */}
                <line x1="30" y1="45" x2="60" y2="45" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Diode symbol */}
                <polygon points="65,35 65,55 90,45" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="90" y1="35" x2="90" y2="55" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Labels */}
                <text x="72" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="8">A</text>
                <text x="95" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="8">K</text>
                
                {/* Wire with X */}
                <line x1="90" y1="45" x2="140" y2="45" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="110" y1="38" x2="120" y2="52" stroke="#c0392b" strokeWidth="2" />
                <line x1="120" y1="38" x2="110" y2="52" stroke="#c0392b" strokeWidth="2" />
                <line x1="140" y1="45" x2="140" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="75" x2="140" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="15" y1="70" x2="15" y2="75" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="70" y="95" textAnchor="middle" fill="#c0392b" fontSize="9">× 電流が流れない</text>
              </g>
              
              {/* Legend */}
              <g transform="translate(80, 150)">
                <text x="0" y="0" fill="#3b6ea5" fontSize="9">A = アノード（＋側）</text>
                <text x="120" y="0" fill="#3b6ea5" fontSize="9">K = カソード（−側）</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: ダイオードの順方向と逆方向</text>
          </svg>
          <figcaption>アノードからカソードの向きにのみ電流が流れます。逆方向には流れません。</figcaption>
        </figure>

        <section>
          <h2>順方向電圧（Vf）がある</h2>
          <p>
            ダイオードを順方向に使う場合でも、電流を流すには最低限の電圧が必要です。
            これを<Link href="/glossary/forward-voltage" className="glossary-link">順方向電圧</Link>（Vf: Forward Voltage）といいます。
            シリコンダイオードの場合、Vfは約0.6〜0.7Vです。
            この電圧以下では、順方向でも電流はほとんど流れません。
          </p>
          <p>
            LEDも実はダイオードの一種です。
            「発光ダイオード（Light Emitting Diode）」の略で、順方向に電流が流れると光ります。
            LEDのVfは色によって異なり、赤色で約2V、青や白で約3Vです。
            第15回で学んだ「LEDにかかる電圧」は、まさにこの順方向電圧のことでした。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ダイオードの順方向電圧（Vf）</text>
              
              {/* Diode types and Vf */}
              <g transform="translate(20, 30)">
                {/* Silicon diode */}
                <rect x="0" y="0" width="100" height="50" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" />
                <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">シリコンダイオード</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="12" fontWeight="600">Vf ≈ 0.6〜0.7V</text>
                
                {/* Red LED */}
                <rect x="120" y="0" width="80" height="50" rx="3" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" />
                <text x="160" y="20" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">赤色LED</text>
                <text x="160" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="12" fontWeight="600">Vf ≈ 2V</text>
                
                {/* Blue/White LED */}
                <rect x="220" y="0" width="100" height="50" rx="3" fill="#cce5ff" stroke="#3b6ea5" strokeWidth="1" />
                <text x="270" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">青・白LED</text>
                <text x="270" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="12" fontWeight="600">Vf ≈ 3V</text>
              </g>
              
              {/* V-I characteristic simplified */}
              <g transform="translate(50, 100)">
                <text x="125" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">電圧-電流特性（イメージ）</text>
                
                {/* Axes */}
                <line x1="20" y1="50" x2="230" y2="50" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="80" y1="10" x2="80" y2="55" stroke="#3b6ea5" strokeWidth="1" />
                <text x="235" y="53" fill="#4a4a4a" fontSize="8">電圧</text>
                <text x="85" y="15" fill="#4a4a4a" fontSize="8">電流</text>
                
                {/* Forward region */}
                <path d="M80 50 Q100 50 120 45 T180 15" fill="none" stroke="#27ae60" strokeWidth="2" />
                
                {/* Reverse region */}
                <line x1="80" y1="50" x2="30" y2="50" stroke="#c0392b" strokeWidth="2" />
                
                {/* Vf mark */}
                <line x1="110" y1="48" x2="110" y2="55" stroke="#3b6ea5" strokeWidth="1" />
                <text x="110" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="8">Vf</text>
                
                <text x="160" y="35" fill="#27ae60" fontSize="8">順方向</text>
                <text x="50" y="45" fill="#c0392b" fontSize="8">逆方向</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 順方向電圧（Vf）の違い</text>
          </svg>
          <figcaption>ダイオードの種類によってVfが異なります。LEDのVfは色で変わります。</figcaption>
        </figure>

        <section>
          <h2>電源の逆接続防止</h2>
          <p>
            ダイオードの代表的な使い方が「電源の逆接続防止」です。
            電子機器に電池やアダプターを接続するとき、プラスとマイナスを間違えると回路が壊れることがあります。
            電源ラインにダイオードを入れておくと、逆接続時には電流が流れず、回路を保護できます。
          </p>
          <p>
            この方法の欠点は、ダイオードのVf分だけ電圧が下がることです。
            5Vの電源を使っていても、ダイオード（Vf≈0.6V）を通すと約4.4Vになります。
            電圧に余裕がある場合は問題ありませんが、電池駆動など電圧がギリギリの場合は注意が必要です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">逆接続防止ダイオード</text>
              
              {/* Correct connection */}
              <g transform="translate(0, 25)">
                <text x="70" y="0" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">正しい接続 → 動作する</text>
                
                {/* Battery */}
                <rect x="0" y="15" width="25" height="35" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="12" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="7">＋</text>
                <text x="12" y="42" textAnchor="middle" fill="#3b6ea5" fontSize="7">−</text>
                <text x="12" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="8">5V</text>
                
                {/* Wire and Diode */}
                <line x1="25" y1="28" x2="45" y2="28" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="50,20 50,36 70,28" fill="none" stroke="#27ae60" strokeWidth="2" />
                <line x1="70" y1="20" x2="70" y2="36" stroke="#27ae60" strokeWidth="2" />
                
                {/* Wire to circuit */}
                <line x1="70" y1="28" x2="100" y2="28" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Circuit box */}
                <rect x="100" y="15" width="40" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="120" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="8">回路</text>
                
                {/* Return */}
                <line x1="120" y1="45" x2="120" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="60" x2="120" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="50" x2="12" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Current arrow */}
                <polygon points="85,24 95,28 85,32" fill="#27ae60" />
                
                {/* Voltage note */}
                <text x="85" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">回路には約4.4V（5V-0.6V）</text>
              </g>
              
              {/* Wrong connection */}
              <g transform="translate(190, 25)">
                <text x="70" y="0" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">逆接続 → 保護される</text>
                
                {/* Battery (reversed) */}
                <rect x="0" y="15" width="25" height="35" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="12" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="7">−</text>
                <text x="12" y="42" textAnchor="middle" fill="#3b6ea5" fontSize="7">＋</text>
                <text x="12" y="60" textAnchor="middle" fill="#c0392b" fontSize="8">逆!</text>
                
                {/* Wire and Diode */}
                <line x1="25" y1="28" x2="45" y2="28" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="50,20 50,36 70,28" fill="none" stroke="#c0392b" strokeWidth="2" />
                <line x1="70" y1="20" x2="70" y2="36" stroke="#c0392b" strokeWidth="2" />
                
                {/* Block symbol */}
                <line x1="56" y1="18" x2="64" y2="38" stroke="#c0392b" strokeWidth="2" />
                <line x1="64" y1="18" x2="56" y2="38" stroke="#c0392b" strokeWidth="2" />
                
                {/* Wire to circuit */}
                <line x1="70" y1="28" x2="100" y2="28" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Circuit box */}
                <rect x="100" y="15" width="40" height="30" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="120" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="8">回路</text>
                
                {/* Return */}
                <line x1="120" y1="45" x2="120" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="60" x2="120" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="12" y1="50" x2="12" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Note */}
                <text x="85" y="75" textAnchor="middle" fill="#c0392b" fontSize="8">電流が流れない → 回路は無事</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 逆接続防止ダイオードの働き</text>
          </svg>
          <figcaption>ダイオードを入れておくと、逆接続しても回路を保護できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「電源をつなぎ間違えたらどうなりますか?」という不安に対して、
            「逆接続防止ダイオードを入れておけば、間違っても壊れません」と説明できます。
            特に現場で電池交換をするような機器では、作業者が間違える可能性を考慮した設計が求められます。
          </p>
          <p>
            また、LEDが「発光ダイオード」であることを知っていると、
            なぜLEDに極性があるのか（逆につなぐと光らない理由）を説明できます。
            「ダイオードなので一方向にしか電流が流れません」と伝えると、お客様も納得しやすくなります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>ダイオードは電流を一方向に流すだけでした。では、小さな電流で大きな電流を制御できる「トランジスタ」は、どのような仕組みでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ダイオードは電流を一方向にだけ流す部品です。アノード→カソードの向きに流れます。</li>
            <li>順方向電圧（Vf）を超えないと電流は流れません。シリコンダイオードは約0.6V、LEDは色により2〜3Vです。</li>
            <li>電源の逆接続防止にダイオードを使うと、間違って接続しても回路を守れます。</li>
          </ol>
        </div>

        <AskBox lessonId="21-diode" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
