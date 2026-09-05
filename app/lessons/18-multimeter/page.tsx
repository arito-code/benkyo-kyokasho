import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson18Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={18} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 2: 電気の基本</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電圧や抵抗を実際に測定するには、どうすればよいでしょうか?</p>
        </div>

        <h1>第18回: テスターで測る</h1>

        <section>
          <h2>テスターは回路診断の基本道具</h2>
          <p>
            <Link href="/glossary/multimeter" className="glossary-link">テスター</Link>（マルチメーター）は、
            <Link href="/glossary/voltage" className="glossary-link">電圧</Link>、
            <Link href="/glossary/current" className="glossary-link">電流</Link>、
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>を測る計測器です。
            <Link href="/glossary/circuit" className="glossary-link">回路</Link>が動かないとき、
            「電圧が来ているか」「配線が切れていないか」をテスターで確認できます。
            電子工作やトラブルシューティングに欠かせない道具です。
          </p>
          <p>
            テスターには本体、赤いリード線（プローブ）、黒いリード線があります。
            測定する項目（電圧・電流・抵抗）と範囲（レンジ）をダイヤルで選び、
            リード線を測定したい場所に当てると、画面に数値が表示されます。
            デジタル式のテスターは数字で読みやすく、初心者にもおすすめです。
          </p>

          <div className="analogy">
            <span className="analogy-term">テスター</span>
            <span className="analogy-equals">=</span>
            <span>電圧・電流・抵抗を測る万能計測器</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            {/* Multimeter */}
            <g transform="translate(100, 20)">
              <text x="100" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">デジタルテスターの各部</text>
              
              {/* Body */}
              <rect x="50" y="20" width="100" height="150" rx="10" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Display */}
              <rect x="60" y="30" width="80" height="35" rx="3" fill="#e8f4e8" stroke="#3b6ea5" strokeWidth="1" />
              <text x="100" y="55" textAnchor="middle" fill="#1a1a1a" fontSize="16" fontWeight="600">5.02</text>
              <text x="135" y="55" fill="#3b6ea5" fontSize="10">V</text>
              
              {/* Dial */}
              <circle cx="100" cy="95" r="25" fill="#e0e0e0" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="100" y1="95" x2="100" y2="72" stroke="#3b6ea5" strokeWidth="3" />
              
              {/* Dial labels */}
              <text x="68" y="85" fill="#3b6ea5" fontSize="7">V~</text>
              <text x="68" y="105" fill="#3b6ea5" fontSize="7">V⎓</text>
              <text x="125" y="85" fill="#3b6ea5" fontSize="7">Ω</text>
              <text x="125" y="105" fill="#3b6ea5" fontSize="7">A</text>
              <text x="100" y="128" textAnchor="middle" fill="#4a4a4a" fontSize="7">OFF</text>
              
              {/* Probe jacks */}
              <circle cx="75" cy="150" r="5" fill="#1a1a1a" />
              <text x="75" y="163" textAnchor="middle" fill="#1a1a1a" fontSize="7">COM</text>
              <circle cx="100" cy="150" r="5" fill="#c0392b" />
              <text x="100" y="163" textAnchor="middle" fill="#c0392b" fontSize="7">V/Ω</text>
              <circle cx="125" cy="150" r="5" fill="#c0392b" />
              <text x="125" y="163" textAnchor="middle" fill="#c0392b" fontSize="7">A</text>
              
              {/* Probes */}
              <line x1="75" y1="155" x2="40" y2="190" stroke="#1a1a1a" strokeWidth="2" />
              <line x1="35" y1="185" x2="35" y2="210" stroke="#1a1a1a" strokeWidth="4" />
              <text x="35" y="220" textAnchor="middle" fill="#1a1a1a" fontSize="8">黒</text>
              
              <line x1="100" y1="155" x2="160" y2="190" stroke="#c0392b" strokeWidth="2" />
              <line x1="165" y1="185" x2="165" y2="210" stroke="#c0392b" strokeWidth="4" />
              <text x="165" y="220" textAnchor="middle" fill="#c0392b" fontSize="8">赤</text>
              
              {/* Labels */}
              <line x1="155" y1="45" x2="190" y2="45" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
              <text x="195" y="48" fill="#4a4a4a" fontSize="8">液晶画面</text>
              
              <line x1="130" y1="95" x2="190" y2="95" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
              <text x="195" y="98" fill="#4a4a4a" fontSize="8">ダイヤル（レンジ選択）</text>
            </g>

            <text x="200" y="215" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: デジタルテスターの構造</text>
          </svg>
          <figcaption>ダイヤルで測定項目を選び、赤と黒のプローブを測定箇所に当てます。</figcaption>
        </figure>

        <section>
          <h2>電圧の測り方</h2>
          <p>
            電圧を測るときは、ダイヤルを「V」（DC電圧なら「V⎓」）に合わせます。
            黒いプローブを<Link href="/glossary/ground" className="glossary-link">GND</Link>に、
            赤いプローブを測りたい場所に当てます。
            電圧は「2点間の電位差」なので、必ず2箇所に当てて測ります。
          </p>
          <p>
            たとえば、電池の電圧を測るには、黒を−極、赤を＋極に当てます。
            新しい単3電池なら1.5V前後が表示されます。
            回路のある点の電圧を測るには、黒をGNDに当てたまま、赤を測りたい場所に移動します。
            電圧測定は回路を切らずに「並列」に測れるので、動いている回路でも測定できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Voltage measurement */}
            <g transform="translate(30, 30)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">電圧の測り方（並列に当てる）</text>
              
              {/* Circuit */}
              <rect x="20" y="30" width="40" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <text x="40" y="50" textAnchor="middle" fill="#3b6ea5" fontSize="9">電池</text>
              <text x="40" y="65" textAnchor="middle" fill="#3b6ea5" fontSize="8">5V</text>
              
              {/* Wire and resistor */}
              <line x1="60" y1="45" x2="100" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              <path d="M100 45 L105 35 L115 55 L125 35 L135 55 L140 45" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="140" y1="45" x2="180" y2="45" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* LED */}
              <path d="M185 55 L205 55 L195 35 Z" fill="none" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="180" y1="60" x2="210" y2="60" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Return wire */}
              <line x1="195" y1="65" x2="195" y2="90" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="40" y1="90" x2="195" y2="90" stroke="#3b6ea5" strokeWidth="2" />
              <line x1="40" y1="80" x2="40" y2="90" stroke="#3b6ea5" strokeWidth="2" />
              
              {/* Multimeter */}
              <rect x="240" y="35" width="50" height="40" rx="3" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="2" />
              <text x="265" y="55" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="500">3.0</text>
              <text x="265" y="68" textAnchor="middle" fill="#3b6ea5" fontSize="8">V</text>
              
              {/* Probes measuring across resistor */}
              <line x1="250" y1="75" x2="100" y2="45" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="3,2" />
              <line x1="280" y1="75" x2="140" y2="45" stroke="#c0392b" strokeWidth="2" strokeDasharray="3,2" />
              <circle cx="100" cy="45" r="4" fill="#1a1a1a" />
              <circle cx="140" cy="45" r="4" fill="#c0392b" />
              
              {/* Explanation */}
              <g transform="translate(230, 95)">
                <text x="0" y="15" fill="#4a4a4a" fontSize="9">抵抗の両端に当てて</text>
                <text x="0" y="30" fill="#4a4a4a" fontSize="9">抵抗にかかる電圧を測る</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 電圧測定は測りたい箇所に並列に当てる</text>
          </svg>
          <figcaption>電圧は測りたい2点にプローブを当てます。回路を切る必要はありません。</figcaption>
        </figure>

        <section>
          <h2>抵抗と導通の測り方</h2>
          <p>
            抵抗を測るときは、ダイヤルを「Ω」に合わせます。
            測りたい抵抗の両端にプローブを当てると、抵抗値が表示されます。
            ただし、抵抗測定は回路から部品を外した状態で行います。
            回路につながったままだと、他の部品の影響で正確な値が出ません。
          </p>
          <p>
            「導通チェック」は、配線がつながっているか確認する機能です。
            ダイヤルを導通モード（🔊のマーク）に合わせ、2点にプローブを当てます。
            つながっていれば「ピー」と音が鳴り、切れていれば無音です。
            配線ミスやはんだ不良を見つけるのに便利です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Resistance and continuity measurement */}
            <g transform="translate(20, 20)">
              {/* Resistance measurement */}
              <g transform="translate(0, 0)">
                <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">抵抗測定</text>
                
                {/* Resistor alone */}
                <path d="M20 40 L30 30 L50 50 L70 30 L90 50 L100 40" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Probes */}
                <circle cx="20" cy="40" r="4" fill="#1a1a1a" />
                <circle cx="100" cy="40" r="4" fill="#c0392b" />
                
                {/* Multimeter */}
                <rect x="45" y="60" width="40" height="30" rx="2" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="1" />
                <text x="65" y="78" textAnchor="middle" fill="#1a1a1a" fontSize="10">330Ω</text>
                
                <text x="80" y="110" textAnchor="middle" fill="#4a4a4a" fontSize="8">回路から外して測る</text>
              </g>
              
              {/* Continuity check */}
              <g transform="translate(180, 0)">
                <text x="80" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="600">導通チェック</text>
                
                {/* Wire */}
                <line x1="20" y1="40" x2="140" y2="40" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Probes */}
                <circle cx="40" cy="40" r="4" fill="#1a1a1a" />
                <circle cx="120" cy="40" r="4" fill="#c0392b" />
                
                {/* Multimeter */}
                <rect x="55" y="60" width="50" height="30" rx="2" fill="#f5f5f5" stroke="#3b6ea5" strokeWidth="1" />
                <text x="80" y="78" textAnchor="middle" fill="#1a1a1a" fontSize="10">🔊 ピー</text>
                
                <text x="80" y="110" textAnchor="middle" fill="#4a4a4a" fontSize="8">つながっていれば音が鳴る</text>
              </g>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 抵抗測定と導通チェック</text>
          </svg>
          <figcaption>抵抗測定は部品を回路から外して行います。導通チェックは配線の確認に便利です。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            テスターは、現場でのトラブルシューティングに必須の道具です。
            「動かない」というとき、「まず電圧を測りましょう」と言って、
            電源が来ているか、配線が切れていないかを確認できます。
          </p>
          <p>
            お客様に「電池が切れていますね。1.0Vしかありません」「この配線が断線しています」と
            具体的に説明できると、信頼を得られます。
            簡単なテスターは数千円で買えるので、1台持っておくと便利です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 2「電気の基本」が終わりました。Phase 3では、電子部品の読み方を学びます。抵抗の「カラーコード」とは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>テスター（マルチメーター）は電圧・電流・抵抗を測る計測器です。</li>
            <li>電圧は測りたい2点に「並列」に当てて測ります。回路を切る必要はありません。</li>
            <li>導通チェックは配線がつながっているか確認する機能で、音で知らせてくれます。</li>
          </ol>
        </div>

        <AskBox lessonId="18-multimeter" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
