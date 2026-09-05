import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson19Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={19} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>電子部品に書かれた文字や色の帯は、何を意味しているのでしょうか?</p>
        </div>

        <h1>第19回: 電子部品の読み方</h1>

        <section>
          <h2>部品には「値」が書いてある</h2>
          <p>
            電子部品には、その部品の値や種類を示すマーキングがあります。
            <Link href="/glossary/resistance" className="glossary-link">抵抗</Link>には色の帯（カラーコード）、
            <Link href="/glossary/capacitor" className="glossary-link">コンデンサ</Link>には数字や文字、
            ICには型番が印刷されています。
            これらを読み取れると、部品を正しく使えるようになります。
          </p>
          <p>
            特に抵抗のカラーコードは、電子工作で頻繁に使います。
            色の組み合わせで抵抗値を表し、見た目で値がわかるようになっています。
            最初は覚えるのが大変に感じるかもしれませんが、よく使う色から覚えていけば自然に身につきます。
          </p>

          <div className="analogy">
            <span className="analogy-term">カラーコード</span>
            <span className="analogy-equals">=</span>
            <span>色で抵抗値を表す仕組み</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
            {/* Color code table */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">抵抗のカラーコード</text>
              
              {/* Table header */}
              <rect x="0" y="20" width="340" height="25" fill="#3b6ea5" opacity="0.1" />
              <text x="50" y="37" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">色</text>
              <text x="120" y="37" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">数値</text>
              <text x="200" y="37" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">色</text>
              <text x="280" y="37" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">数値</text>
              
              {/* Row 1-5 */}
              <rect x="20" y="50" width="30" height="15" fill="#1a1a1a" rx="2" />
              <text x="75" y="61" fill="#4a4a4a" fontSize="9">黒 = 0</text>
              <rect x="170" y="50" width="30" height="15" fill="#27ae60" rx="2" />
              <text x="225" y="61" fill="#4a4a4a" fontSize="9">緑 = 5</text>
              
              <rect x="20" y="70" width="30" height="15" fill="#8B4513" rx="2" />
              <text x="75" y="81" fill="#4a4a4a" fontSize="9">茶 = 1</text>
              <rect x="170" y="70" width="30" height="15" fill="#3b6ea5" rx="2" />
              <text x="225" y="81" fill="#4a4a4a" fontSize="9">青 = 6</text>
              
              <rect x="20" y="90" width="30" height="15" fill="#c0392b" rx="2" />
              <text x="75" y="101" fill="#4a4a4a" fontSize="9">赤 = 2</text>
              <rect x="170" y="90" width="30" height="15" fill="#8e44ad" rx="2" />
              <text x="225" y="101" fill="#4a4a4a" fontSize="9">紫 = 7</text>
              
              <rect x="20" y="110" width="30" height="15" fill="#e67e22" rx="2" />
              <text x="75" y="121" fill="#4a4a4a" fontSize="9">橙 = 3</text>
              <rect x="170" y="110" width="30" height="15" fill="#7f8c8d" rx="2" />
              <text x="225" y="121" fill="#4a4a4a" fontSize="9">灰 = 8</text>
              
              <rect x="20" y="130" width="30" height="15" fill="#f1c40f" rx="2" />
              <text x="75" y="141" fill="#4a4a4a" fontSize="9">黄 = 4</text>
              <rect x="170" y="130" width="30" height="15" fill="#ecf0f1" stroke="#999" strokeWidth="1" rx="2" />
              <text x="225" y="141" fill="#4a4a4a" fontSize="9">白 = 9</text>
              
              {/* Multiplier and tolerance */}
              <g transform="translate(0, 160)">
                <text x="0" y="15" fill="#3b6ea5" fontSize="9" fontWeight="500">乗数（3本目）:</text>
                <text x="80" y="15" fill="#4a4a4a" fontSize="8">黒=×1, 茶=×10, 赤=×100, 橙=×1k, 黄=×10k...</text>
                
                <text x="0" y="35" fill="#3b6ea5" fontSize="9" fontWeight="500">誤差（4本目）:</text>
                <rect x="80" y="25" width="20" height="12" fill="#C4A44A" rx="1" />
                <text x="105" y="35" fill="#4a4a4a" fontSize="8">金=±5%</text>
                <rect x="150" y="25" width="20" height="12" fill="#C0C0C0" rx="1" />
                <text x="175" y="35" fill="#4a4a4a" fontSize="8">銀=±10%</text>
              </g>
            </g>

            <text x="200" y="215" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: カラーコード表</text>
          </svg>
          <figcaption>色と数字の対応を覚えます。よく使う色から覚えていきましょう。</figcaption>
        </figure>

        <section>
          <h2>カラーコードの読み方</h2>
          <p>
            4本線の抵抗の場合、最初の2本が数値、3本目が乗数（10の何乗か）、4本目が誤差を表します。
            たとえば「茶・黒・赤・金」なら、茶=1、黒=0 で「10」、赤=×100 なので 10×100 = 1000Ω = 1kΩ、金は誤差±5%です。
          </p>
          <p>
            読むときは、誤差を示す金または銀の帯を右側にして持ちます。
            金や銀は光沢があるので見分けやすいです。
            左から順に読んで計算します。
            最初は難しく感じますが、「茶黒赤金=1kΩ」「橙橙茶金=330Ω」など、よく使う組み合わせを覚えると便利です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            {/* Reading example */}
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">カラーコードの読み方例</text>
              
              {/* Resistor 1: 1kΩ */}
              <g transform="translate(0, 30)">
                <line x1="0" y1="25" x2="30" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="30" y="10" width="100" height="30" rx="5" fill="#e8d4a8" stroke="#999" strokeWidth="1" />
                <rect x="45" y="10" width="12" height="30" fill="#8B4513" />
                <rect x="62" y="10" width="12" height="30" fill="#1a1a1a" />
                <rect x="79" y="10" width="12" height="30" fill="#c0392b" />
                <rect x="103" y="10" width="8" height="30" fill="#C4A44A" />
                <line x1="130" y1="25" x2="160" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="180" y="20" fill="#4a4a4a" fontSize="9">茶(1) 黒(0) 赤(×100) 金(±5%)</text>
                <text x="180" y="35" fill="#3b6ea5" fontSize="10" fontWeight="500">= 10 × 100 = 1kΩ</text>
              </g>
              
              {/* Resistor 2: 330Ω */}
              <g transform="translate(0, 90)">
                <line x1="0" y1="25" x2="30" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                <rect x="30" y="10" width="100" height="30" rx="5" fill="#e8d4a8" stroke="#999" strokeWidth="1" />
                <rect x="45" y="10" width="12" height="30" fill="#e67e22" />
                <rect x="62" y="10" width="12" height="30" fill="#e67e22" />
                <rect x="79" y="10" width="12" height="30" fill="#8B4513" />
                <rect x="103" y="10" width="8" height="30" fill="#C4A44A" />
                <line x1="130" y1="25" x2="160" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                
                <text x="180" y="20" fill="#4a4a4a" fontSize="9">橙(3) 橙(3) 茶(×10) 金(±5%)</text>
                <text x="180" y="35" fill="#3b6ea5" fontSize="10" fontWeight="500">= 33 × 10 = 330Ω</text>
              </g>
              
              {/* Tip */}
              <g transform="translate(50, 135)">
                <rect x="0" y="0" width="250" height="25" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="125" y="17" textAnchor="middle" fill="#3b6ea5" fontSize="9">💡 金・銀の帯を右にして、左から読む</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: カラーコードの読み方</text>
          </svg>
          <figcaption>金または銀の帯を右側にして、左から順に読みます。</figcaption>
        </figure>

        <section>
          <h2>その他の部品のマーキング</h2>
          <p>
            コンデンサには、容量を示す数字が印刷されています。
            「104」と書いてあれば、10×10⁴pF = 100,000pF = 0.1μF です。
            最初の2桁が数値、最後の1桁が10の乗数を表します。
            電解コンデンサには「100μF 16V」のように直接値と耐圧が書かれていることもあります。
          </p>
          <p>
            ICやセンサーには型番が印刷されています。
            型番でインターネット検索すると「データシート」という仕様書が見つかります。
            データシートには、電圧範囲、ピン配置、使い方などが書かれています。
            部品を使うときは、まずデータシートで仕様を確認する習慣をつけましょう。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            {/* Other component markings */}
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">その他の部品のマーキング</text>
              
              {/* Ceramic capacitor */}
              <g transform="translate(0, 25)">
                <rect x="20" y="10" width="60" height="30" rx="3" fill="#f5deb3" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="30" textAnchor="middle" fill="#1a1a1a" fontSize="10" fontWeight="500">104</text>
                <text x="50" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">セラミックコンデンサ</text>
                <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">104 = 0.1μF</text>
              </g>
              
              {/* Electrolytic capacitor */}
              <g transform="translate(120, 25)">
                <rect x="20" y="5" width="40" height="45" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#1a1a1a" fontSize="7">100μF</text>
                <text x="40" y="38" textAnchor="middle" fill="#1a1a1a" fontSize="7">16V</text>
                <text x="50" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">電解コンデンサ</text>
                <text x="50" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">値と耐圧が直接書いてある</text>
              </g>
              
              {/* IC */}
              <g transform="translate(240, 25)">
                <rect x="10" y="10" width="60" height="30" rx="2" fill="#1a1a1a" stroke="#3b6ea5" strokeWidth="1" />
                <text x="40" y="30" textAnchor="middle" fill="#fff" fontSize="8">ATmega328P</text>
                <circle cx="18" cy="18" r="3" fill="#3b6ea5" />
                <text x="40" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">IC（マイコン）</text>
                <text x="40" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="8">型番でデータシートを検索</text>
              </g>
              
              {/* Data sheet tip */}
              <g transform="translate(50, 95)">
                <rect x="0" y="0" width="260" height="30" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="130" y="12" textAnchor="middle" fill="#3b6ea5" fontSize="9">💡 型番 + datasheet で検索</text>
                <text x="130" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="8">例: "ATmega328P datasheet" → 公式仕様書が見つかる</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: コンデンサとICのマーキング</text>
          </svg>
          <figcaption>部品の値や型番を読み取り、データシートで詳細を確認します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様から「この部品の値がわかりますか?」と聞かれたとき、
            カラーコードを見て「これは330Ωの抵抗ですね」と即答できると、
            技術的な信頼感が増します。
          </p>
          <p>
            また、部品選定の際に「データシートを確認しましょう」と言えると、
            根拠のある提案ができます。
            「この部品は5V動作です」「最大電流は100mAまでです」といった情報は、
            すべてデータシートに書いてあります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>電気を一時的に蓄える「コンデンサ」は、どのような役割を果たすのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>抵抗のカラーコードは、色で抵抗値を表します。茶=1、赤=2、橙=3...と覚えます。</li>
            <li>4本線の抵抗は「数値2桁 + 乗数 + 誤差」の順で読みます。金・銀を右に持って左から読みます。</li>
            <li>ICやセンサーは型番を検索してデータシートで仕様を確認します。</li>
          </ol>
        </div>

        <AskBox lessonId="19-reading-parts" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
