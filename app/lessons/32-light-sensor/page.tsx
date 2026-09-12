import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson32Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={32} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>温度センサーの次は「光」です。明るさを電気信号に変えるには、どのような仕組みが使われているのでしょうか?</p>
        </div>

        <h1>第32回: 光センサー</h1>

        <section>
          <h2>光センサーとは</h2>
          <p>
            <Link href="/glossary/light-sensor" className="glossary-link">光センサー</Link>は、
            光の強さ（明るさ）を電気信号に変換する部品です。
            人間の目が明るい・暗いを感じるように、
            マイコンに光の情報を伝えます。
            自動照明、カメラの露出調整、昼夜の判定など、
            身の回りの多くの機器で使われています。
          </p>
          <p>
            光センサーには主にCdSセル、フォトダイオード、フォトトランジスタがあります。
            CdSセル（硫化カドミウム）は光によって抵抗値が変わる部品で、
            昔から広く使われています。
            フォトダイオードは光を電流に変換し、高速な応答が必要な場面で使います。
            フォトトランジスタは光に反応するトランジスタで、
            感度が高いのが特徴です。
          </p>

          <div className="analogy">
            <span className="analogy-term">光センサー</span>
            <span className="analogy-equals">=</span>
            <span>光を電気に変える「電子の目」</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">光センサーの種類</text>
              
              {/* CdS cell */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="100" height="75" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">CdSセル</text>
                <circle cx="50" cy="42" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <path d="M40 38 L60 38 M43 42 L57 42 M40 46 L60 46" stroke="#3b6ea5" strokeWidth="1" />
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">抵抗値が変化</text>
                <text x="50" y="84" textAnchor="middle" fill="#4a4a4a" fontSize="7">応答：遅い</text>
              </g>
              
              {/* Photodiode */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="100" height="75" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">フォトダイオード</text>
                <polygon points="35,35 35,50 55,42.5" fill="none" stroke="#f39c12" strokeWidth="2" />
                <line x1="55" y1="35" x2="55" y2="50" stroke="#f39c12" strokeWidth="2" />
                <line x1="30" y1="28" x2="38" y2="36" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="38,33 38,36 35,36" fill="#f39c12" />
                <line x1="35" y1="25" x2="43" y2="33" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="43,30 43,33 40,33" fill="#f39c12" />
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">電流に変換</text>
                <text x="50" y="84" textAnchor="middle" fill="#4a4a4a" fontSize="7">応答：速い</text>
              </g>
              
              {/* Phototransistor */}
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="100" height="75" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">フォトトランジスタ</text>
                <circle cx="50" cy="42" r="15" fill="none" stroke="#27ae60" strokeWidth="2" />
                <line x1="35" y1="42" x2="42" y2="42" stroke="#27ae60" strokeWidth="2" />
                <line x1="42" y1="35" x2="42" y2="49" stroke="#27ae60" strokeWidth="2" />
                <line x1="42" y1="38" x2="55" y2="32" stroke="#27ae60" strokeWidth="2" />
                <line x1="42" y1="46" x2="55" y2="52" stroke="#27ae60" strokeWidth="2" />
                <line x1="30" y1="28" x2="38" y2="36" stroke="#27ae60" strokeWidth="1.5" />
                <polygon points="38,33 38,36 35,36" fill="#27ae60" />
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">光で導通</text>
                <text x="50" y="84" textAnchor="middle" fill="#4a4a4a" fontSize="7">感度：高い</text>
              </g>
              
              {/* Comparison */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="300" height="50" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">選び方のポイント</text>
                <text x="150" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">昼/夜の判定、照度計 → CdSセル（安価・簡単）</text>
                <text x="150" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">高速な光通信、精密測定 → フォトダイオード/トランジスタ</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 光センサーの3つのタイプ</text>
          </svg>
          <figcaption>用途に応じて、CdSセル、フォトダイオード、フォトトランジスタを使い分けます。</figcaption>
        </figure>

        <section>
          <h2>CdSセルの使い方</h2>
          <p>
            CdSセル（CdS光導電セル、または光可変抵抗器）は、
            光によって抵抗値が変わる部品です。
            暗いときは数百kΩ〜数MΩと高抵抗になり、
            明るいときは数百Ω〜数kΩに下がります。
            サーミスタと同じように、分圧回路を使ってADCで読み取ります。
          </p>
          <p>
            CdSセルは応答速度が遅い（数十〜数百ミリ秒）のが特徴です。
            そのため、高速に点滅する光には追従できませんが、
            「暗くなったら照明を点ける」のような用途には十分です。
            また、カドミウムを含むため環境規制の対象になっており、
            新規設計ではフォトトランジスタやICセンサーが増えています。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">CdSセルの分圧回路</text>
              
              {/* Circuit */}
              <g transform="translate(50, 25)">
                {/* VCC */}
                <text x="60" y="5" textAnchor="middle" fill="#c0392b" fontSize="9">VCC (5V)</text>
                <line x1="60" y1="10" x2="60" y2="25" stroke="#c0392b" strokeWidth="2" />
                
                {/* Fixed resistor */}
                <path d="M60 25 L60 30 L55 33 L65 39 L55 45 L65 51 L60 55 L60 60" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="45" fill="#4a4a4a" fontSize="8">10kΩ</text>
                
                {/* Junction */}
                <circle cx="60" cy="60" r="2" fill="#3b6ea5" />
                <line x1="60" y1="60" x2="100" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <text x="115" y="63" fill="#27ae60" fontSize="9">→ ADC</text>
                
                {/* CdS cell */}
                <line x1="60" y1="62" x2="60" y2="68" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="60" cy="82" r="14" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <path d="M52 79 L68 79 M54 82 L66 82 M52 85 L68 85" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="45" y1="70" x2="52" y2="77" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="52,74 52,77 49,77" fill="#f39c12" />
                <line x1="40" y1="73" x2="47" y2="80" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="47,77 47,80 44,80" fill="#f39c12" />
                <text x="85" y="85" fill="#4a4a4a" fontSize="8">CdSセル</text>
                
                {/* GND */}
                <line x1="60" y1="96" x2="60" y2="110" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="50" y1="110" x2="70" y2="110" stroke="#3b6ea5" strokeWidth="2" />
                <text x="60" y="125" textAnchor="middle" fill="#4a4a4a" fontSize="9">GND</text>
              </g>
              
              {/* Explanation */}
              <g transform="translate(180, 35)">
                <rect x="0" y="0" width="150" height="100" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">動作原理</text>
                <text x="10" y="38" fill="#4a4a4a" fontSize="8">明るい → 抵抗↓ → 電圧↑</text>
                <text x="10" y="53" fill="#4a4a4a" fontSize="8">暗い　 → 抵抗↑ → 電圧↓</text>
                <line x1="10" y1="62" x2="140" y2="62" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="78" fill="#4a4a4a" fontSize="8">しきい値を決めて判定:</text>
                <text x="10" y="93" fill="#4a4a4a" fontSize="8">「ADC &lt; 500なら暗い」など</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: CdSセルと固定抵抗の分圧回路</text>
          </svg>
          <figcaption>明るいときは電圧が高く、暗いときは電圧が低くなります。</figcaption>
        </figure>

        <section>
          <h2>照度センサーIC</h2>
          <p>
            より扱いやすいのがICタイプの照度センサーです。
            BH1750やTSL2561などは、
            I2C通信でルクス（lux）の値を直接取得できます。
            人間の目の感度特性に近い測定ができるため、
            照度計や自動調光の用途に適しています。
          </p>
          <p>
            I2Cセンサーを使えば、ADCの計算や分圧回路が不要になります。
            ライブラリを使って「今何ルクスか」をそのまま数値で取得でき、
            「500ルクス以下なら照明を点ける」のような判定が簡単です。
            「とりあえず明るさを測りたい」場面ではBH1750がおすすめです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">照度センサーIC（BH1750）</text>
              
              {/* BH1750 */}
              <g transform="translate(60, 30)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">BH1750</text>
                <text x="40" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">照度センサー</text>
                <text x="40" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">I2C通信</text>
                
                {/* Light input */}
                <line x1="25" y1="-10" x2="32" y2="-3" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="32,-6 32,-3 29,-3" fill="#f39c12" />
                <line x1="40" y1="-15" x2="40" y2="-3" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="37,-3 40,-3 40,-6" fill="#f39c12" />
                <line x1="55" y1="-10" x2="48" y2="-3" stroke="#f39c12" strokeWidth="1.5" />
                <polygon points="48,-6 48,-3 51,-3" fill="#f39c12" />
              </g>
              
              {/* Arrow */}
              <g transform="translate(155, 45)">
                <line x1="0" y1="10" x2="30" y2="10" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="25,5 35,10 25,15" fill="#3b6ea5" />
                <text x="15" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="8">I2C</text>
              </g>
              
              {/* MCU */}
              <g transform="translate(200, 30)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">マイコン</text>
                <text x="40" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="600">532 lux</text>
              </g>
              
              {/* Benefit */}
              <g transform="translate(40, 95)">
                <rect x="0" y="0" width="260" height="30" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="130" y="12" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">メリット</text>
                <text x="130" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="8">ADC不要、ルクス値を直接取得、ライブラリで簡単</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: I2C照度センサーICの利点</text>
          </svg>
          <figcaption>I2Cセンサーを使えば、ルクス単位の照度を簡単に取得できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「暗くなったら照明を自動で点けたい」という要望には、
            光センサーで照度を測り、しきい値で判定する提案ができます。
            単純なオン・オフならCdSセルで十分ですし、
            「300ルクス以下で点灯」のような細かな制御にはI2Cセンサーが適しています。
          </p>
          <p>
            工場の検査ラインでは、部品の有無を光センサーで検出することもあります。
            「物が通過すると光が遮られる」という原理を使い、
            通過カウントや位置検知に応用できます。
            このような用途にはフォトダイオードやフォトインタラプタを使います。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>光の次は「距離」を測りましょう。物体までの距離を知るには、どのような方法があるのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>光センサーにはCdSセル、フォトダイオード、フォトトランジスタがあり、用途で選びます。</li>
            <li>CdSセルは分圧回路でADCから読み取り、簡単な明暗判定に向いています。</li>
            <li>BH1750などのI2Cセンサーを使えば、ルクス単位の照度を簡単に取得できます。</li>
          </ol>
        </div>

        <AskBox lessonId="32-light-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
