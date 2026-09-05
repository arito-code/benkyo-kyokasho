import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson20Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={20} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電気を一時的に蓄える「コンデンサ」は、どのような役割を果たすのでしょうか?</p>
        </div>

        <h1>第20回: コンデンサとは何か</h1>

        <section>
          <h2>コンデンサは「電気のバケツ」</h2>
          <p>
            <Link href="/glossary/capacitor" className="glossary-link">コンデンサ</Link>は、
            電気を一時的に蓄えて放出する部品です。
            <Link href="/glossary/battery" className="glossary-link">電池</Link>が大きな「タンク」なら、
            コンデンサは小さな「バケツ」のようなものです。
            素早く充電・放電できるのが特徴で、電池とは違った使い方をします。
          </p>
          <p>
            コンデンサの容量は「ファラド（F）」という単位で表しますが、
            1ファラドは非常に大きいので、普通は「マイクロファラド（μF）」や「ピコファラド（pF）」を使います。
            1μF = 1,000,000pF です。
            容量が大きいほど多くの電気を蓄えられます。
          </p>

          <div className="analogy">
            <span className="analogy-term">コンデンサ</span>
            <span className="analogy-equals">=</span>
            <span>電気を素早く出し入れできるバケツ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            {/* Battery vs Capacitor analogy */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">電池とコンデンサの違い</text>
              
              {/* Battery as tank */}
              <g transform="translate(0, 30)">
                <rect x="30" y="10" width="80" height="100" fill="#3b6ea5" opacity="0.2" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="35" y="15" width="70" height="90" fill="#3b6ea5" opacity="0.3" />
                <text x="70" y="140" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">電池（タンク）</text>
                <text x="70" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="9">大容量</text>
                <text x="70" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">ゆっくり放電</text>
              </g>
              
              {/* Capacitor as bucket */}
              <g transform="translate(200, 30)">
                <path d="M50 30 L30 110 L110 110 L90 30 Z" fill="#3b6ea5" opacity="0.2" stroke="#3b6ea5" strokeWidth="2" />
                <path d="M52 35 L35 105 L105 105 L88 35 Z" fill="#3b6ea5" opacity="0.3" />
                <text x="70" y="140" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">コンデンサ（バケツ）</text>
                <text x="70" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="9">小容量</text>
                <text x="70" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">素早く充放電</text>
              </g>
              
              {/* Comparison */}
              <g transform="translate(50, 155)">
                <text x="0" y="15" fill="#4a4a4a" fontSize="9">電池: 長時間エネルギーを供給</text>
                <text x="180" y="15" fill="#4a4a4a" fontSize="9">コンデンサ: 瞬間的に電気を出し入れ</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 電池とコンデンサの役割の違い</text>
          </svg>
          <figcaption>電池は長時間電気を供給し、コンデンサは瞬間的な充放電に向いています。</figcaption>
        </figure>

        <section>
          <h2>コンデンサの役割</h2>
          <p>
            コンデンサは<Link href="/glossary/circuit" className="glossary-link">回路</Link>の中でさまざまな役割を果たします。
            代表的なのは「電圧の安定化」と「ノイズの除去」です。
            電源の<Link href="/glossary/voltage" className="glossary-link">電圧</Link>が一瞬下がったとき、
            コンデンサが蓄えていた電気を放出して電圧を補います。
            これを「デカップリング」または「バイパス」と呼びます。
          </p>
          <p>
            また、交流成分（ノイズ）だけを通す性質があるため、
            不要なノイズをコンデンサ経由で<Link href="/glossary/ground" className="glossary-link">GND</Link>に逃がすことができます。
            マイコンやセンサーの電源ピンの近くにコンデンサを入れると、動作が安定します。
            「0.1μF」のセラミックコンデンサがよく使われます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Decoupling capacitor */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">デカップリングコンデンサ</text>
              
              {/* Power supply */}
              <rect x="0" y="40" width="50" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="25" y="60" textAnchor="middle" fill="#3b6ea5" fontSize="9">電源</text>
              <text x="25" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* 5V line */}
              <line x1="50" y1="55" x2="280" y2="55" stroke="#c0392b" strokeWidth="2" />
              <text x="60" y="48" fill="#c0392b" fontSize="8">5V</text>
              
              {/* GND line */}
              <line x1="50" y1="80" x2="280" y2="140" stroke="#3b6ea5" strokeWidth="2" />
              <text x="60" y="95" fill="#3b6ea5" fontSize="8">GND</text>
              
              {/* Capacitor near IC */}
              <g transform="translate(170, 55)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="-10" y1="20" x2="10" y2="20" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="-10" y1="28" x2="10" y2="28" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="0" y1="28" x2="0" y2="55" stroke="#3b6ea5" strokeWidth="2" />
                <text x="25" y="25" fill="#3b6ea5" fontSize="8">0.1μF</text>
              </g>
              
              {/* IC */}
              <rect x="220" y="40" width="60" height="45" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="250" y="58" textAnchor="middle" fill="#3b6ea5" fontSize="9">マイコン</text>
              <text x="250" y="73" textAnchor="middle" fill="#3b6ea5" fontSize="8">センサー</text>
              
              {/* Connection to IC */}
              <line x1="170" y1="55" x2="220" y2="55" stroke="#c0392b" strokeWidth="2" />
              <line x1="170" y1="110" x2="220" y2="85" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Explanation */}
              <g transform="translate(50, 130)">
                <rect x="0" y="0" width="240" height="25" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="120" y="17" textAnchor="middle" fill="#3b6ea5" fontSize="9">ICの電源ピン近くにコンデンサを配置 → 動作が安定</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: デカップリングコンデンサの配置</text>
          </svg>
          <figcaption>ICやセンサーの電源ピン近くに0.1μFのコンデンサを入れると、ノイズに強くなります。</figcaption>
        </figure>

        <section>
          <h2>コンデンサの種類</h2>
          <p>
            コンデンサには大きく分けて「電解コンデンサ」と「セラミックコンデンサ」があります。
            電解コンデンサは大容量（10μF〜数千μF）で、電源の平滑化によく使います。
            極性（＋と−）があり、逆につなぐと壊れるので注意が必要です。
            長い足が＋、短い足が−です。
          </p>
          <p>
            セラミックコンデンサは小容量（pF〜数μF）で、ノイズ除去によく使います。
            極性がないので、どちら向きにつないでも問題ありません。
            小さくて扱いやすく、デカップリング用として定番です。
            「104」（=0.1μF）と書かれたセラミックコンデンサは、電子工作の必需品です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Types of capacitors */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">コンデンサの種類</text>
              
              {/* Electrolytic capacitor */}
              <g transform="translate(30, 30)">
                <rect x="20" y="5" width="50" height="70" rx="5" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="9">100μF</text>
                <text x="45" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="8">16V</text>
                <text x="30" y="60" fill="#3b6ea5" fontSize="10">＋</text>
                {/* Legs */}
                <line x1="35" y1="75" x2="35" y2="95" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="55" y1="75" x2="55" y2="88" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="45" y="110" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">電解コンデンサ</text>
                <text x="45" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="8">大容量、極性あり</text>
              </g>
              
              {/* Ceramic capacitor */}
              <g transform="translate(170, 30)">
                <ellipse cx="45" cy="40" rx="25" ry="20" fill="#f5deb3" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="45" textAnchor="middle" fill="#1a1a1a" fontSize="9">104</text>
                {/* Legs */}
                <line x1="35" y1="60" x2="35" y2="80" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="55" y1="60" x2="55" y2="80" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="45" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">セラミックコンデンサ</text>
                <text x="45" y="110" textAnchor="middle" fill="#4a4a4a" fontSize="8">小容量、極性なし</text>
              </g>
              
              {/* Symbol */}
              <g transform="translate(290, 40)">
                <text x="20" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9">回路記号</text>
                <line x1="0" y1="20" x2="40" y2="20" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="20" y1="10" x2="20" y2="20" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="10" y1="25" x2="30" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="10" y1="32" x2="30" y2="32" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="20" y1="32" x2="20" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 電解コンデンサとセラミックコンデンサ</text>
          </svg>
          <figcaption>電解コンデンサは極性があり、長い足が＋です。セラミックコンデンサは極性がありません。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「なぜか動作が不安定」というトラブルの多くは、電源のノイズが原因です。
            「ICの近くにデカップリングコンデンサを入れましたか?」と確認するだけで、
            問題が解決することがよくあります。
          </p>
          <p>
            お客様に回路を説明するときも、
            「このコンデンサは電源を安定させるためのものです」と言えると、
            なぜその部品があるのかを理解してもらえます。
            コンデンサは地味ですが、安定動作には欠かせない重要な部品です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 3では、さらに多くの電子部品を学んでいきます。トランジスタやダイオードは、どのような役割を持つのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>コンデンサは電気を一時的に蓄えて放出する部品です。電池より素早く充放電できます。</li>
            <li>デカップリングコンデンサは、ICの電源ピン近くに入れて電圧を安定させます。</li>
            <li>電解コンデンサは極性があり、セラミックコンデンサは極性がありません。</li>
          </ol>
        </div>

        <AskBox lessonId="20-capacitor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
