import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson39Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={39} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>磁気の次は「圧力」を測りましょう。押す力や気圧を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第39回: 圧力センサー</h1>

        <section>
          <h2>圧力センサーとは</h2>
          <p>
            <Link href="/glossary/pressure-sensor" className="glossary-link">圧力センサー</Link>は、
            加わる力（圧力）を測るセンサーです。
            「押す力」を測る感圧センサーと、
            「気圧」を測る大気圧センサーがあり、
            用途が異なります。
          </p>
          <p>
            感圧センサー（FSR）は、押された強さに応じて抵抗値が変わります。
            タッチパネル、椅子の着座検知、ロボットの把持力制御などに使います。
            大気圧センサー（BMP280など）は、空気の圧力を測り、
            天気予報、高度計、屋内位置検出などに使います。
            どちらも「圧力センサー」と呼ばれますが、測る対象が違います。
          </p>

          <div className="analogy">
            <span className="analogy-term">感圧センサー</span>
            <span className="analogy-equals">=</span>
            <span>「押された強さ」を測る電子の皮膚</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">圧力センサーの2つのタイプ</text>
              
              {/* Force sensitive resistor */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="130" height="90" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="65" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">感圧センサー（FSR）</text>
                {/* FSR illustration */}
                <circle cx="65" cy="48" r="18" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="65" y1="30" x2="65" y2="45" stroke="#f39c12" strokeWidth="2" />
                <polygon points="60,45 70,45 65,52" fill="#f39c12" />
                <text x="65" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">押す力 → 抵抗値変化</text>
                <text x="65" y="92" textAnchor="middle" fill="#4a4a4a" fontSize="7">タッチ、着座、把持</text>
              </g>
              
              {/* Barometric pressure sensor */}
              <g transform="translate(190, 30)">
                <rect x="0" y="0" width="130" height="90" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="65" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">気圧センサー</text>
                {/* Barometer illustration */}
                <rect x="40" y="35" width="50" height="25" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="65" y="52" textAnchor="middle" fill="#27ae60" fontSize="8">BMP280</text>
                <text x="65" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">大気圧 → hPa</text>
                <text x="65" y="92" textAnchor="middle" fill="#4a4a4a" fontSize="7">天気、高度、屋内位置</text>
              </g>
              
              {/* Comparison */}
              <g transform="translate(20, 135)">
                <rect x="0" y="0" width="300" height="40" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">違い</text>
                <text x="150" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">FSR: 物理的に押す力 | 気圧センサー: 空気の圧力（気象・高度）</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 感圧センサーと気圧センサー</text>
          </svg>
          <figcaption>押す力を測る感圧センサーと、空気の圧力を測る気圧センサーがあります。</figcaption>
        </figure>

        <section>
          <h2>感圧センサー（FSR）の使い方</h2>
          <p>
            FSR（Force Sensitive Resistor）は、
            押されていないときは高抵抗（数MΩ）、
            強く押すと低抵抗（数kΩ以下）になります。
            <Link href="/lessons/31-temp-sensor">サーミスタ</Link>と同様に、
            分圧回路を作って<Link href="/glossary/adc" className="glossary-link">ADC</Link>で読み取ります。
          </p>
          <p>
            FSRは絶対的な「何kgの力」を正確に測るのは苦手ですが、
            「押されているか」「どのくらい強く押されているか」の相対的な判定には向いています。
            ロボットの指先に取り付けて物を掴む力を調整したり、
            椅子に仕込んで人が座っているか検知したりできます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">FSRの分圧回路</text>
              
              {/* Circuit */}
              <g transform="translate(50, 25)">
                {/* VCC */}
                <text x="60" y="5" textAnchor="middle" fill="#c0392b" fontSize="9">VCC</text>
                <line x1="60" y1="10" x2="60" y2="25" stroke="#c0392b" strokeWidth="2" />
                
                {/* Fixed resistor */}
                <path d="M60 25 L60 30 L55 33 L65 39 L55 45 L65 51 L60 55 L60 60" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="45" fill="#4a4a4a" fontSize="8">10kΩ</text>
                
                {/* Junction */}
                <circle cx="60" cy="60" r="2" fill="#3b6ea5" />
                <line x1="60" y1="60" x2="100" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <text x="115" y="63" fill="#27ae60" fontSize="9">→ ADC</text>
                
                {/* FSR */}
                <line x1="60" y1="62" x2="60" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="60" cy="85" r="15" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="60" y="89" textAnchor="middle" fill="#3b6ea5" fontSize="9">FSR</text>
                <text x="85" y="85" fill="#4a4a4a" fontSize="7">押すと</text>
                <text x="85" y="95" fill="#4a4a4a" fontSize="7">抵抗↓</text>
                
                {/* GND */}
                <line x1="60" y1="100" x2="60" y2="115" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="50" y1="115" x2="70" y2="115" stroke="#3b6ea5" strokeWidth="2" />
                <text x="60" y="130" textAnchor="middle" fill="#4a4a4a" fontSize="9">GND</text>
              </g>
              
              {/* Explanation */}
              <g transform="translate(180, 35)">
                <rect x="0" y="0" width="140" height="90" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">動作</text>
                <text x="15" y="38" fill="#4a4a4a" fontSize="8">押さない → 抵抗大 → 電圧低</text>
                <text x="15" y="55" fill="#4a4a4a" fontSize="8">強く押す → 抵抗小 → 電圧高</text>
                <line x1="15" y1="65" x2="125" y2="65" stroke="#e0e0e0" strokeWidth="1" />
                <text x="15" y="82" fill="#27ae60" fontSize="8">ADC値で押す力を判定</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: FSRの分圧回路</text>
          </svg>
          <figcaption>押すと抵抗が下がり、電圧が上がります。ADCで読み取って力を判定します。</figcaption>
        </figure>

        <section>
          <h2>気圧センサー（BMP280、BME280）</h2>
          <p>
            BMP280やBME280は、大気圧を測るI2Cセンサーです。
            大気圧は標準で約1013hPa（ヘクトパスカル）で、
            天気が悪くなると下がり、良くなると上がります。
            また、高度が上がると気圧が下がるため、高度計としても使えます。
          </p>
          <p>
            <Link href="/lessons/35-humidity-sensor">第35回</Link>で紹介したBME280は、
            気圧に加えて温度と湿度も測れる万能センサーです。
            気圧の変化から天気の傾向を予測したり、
            屋内での階数推定（エレベーターの移動検知など）に使えます。
            ライブラリを使えば、hPa単位の気圧や高度を簡単に取得できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">気圧センサーの応用</text>
              
              {/* Weather */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="100" height="65" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">天気予測</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">気圧↓ → 悪化傾向</text>
                <text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">気圧↑ → 改善傾向</text>
                <text x="50" y="63" textAnchor="middle" fill="#4a4a4a" fontSize="7">1013hPa = 標準</text>
              </g>
              
              {/* Altitude */}
              <g transform="translate(140, 30)">
                <rect x="0" y="0" width="100" height="65" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">高度計</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">高い → 気圧低い</text>
                <text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">約8m上昇で1hPa低下</text>
                <text x="50" y="63" textAnchor="middle" fill="#4a4a4a" fontSize="7">ドローン、登山</text>
              </g>
              
              {/* Indoor */}
              <g transform="translate(260, 30)">
                <rect x="0" y="0" width="80" height="65" rx="5" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">屋内位置</text>
                <text x="40" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">階数推定</text>
                <text x="40" y="53" textAnchor="middle" fill="#4a4a4a" fontSize="8">エレベーター</text>
                <text x="40" y="66" textAnchor="middle" fill="#4a4a4a" fontSize="7">移動検知</text>
              </g>
              
              {/* Sensor info */}
              <g transform="translate(60, 105)">
                <rect x="0" y="0" width="220" height="30" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="110" y="12" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">おすすめセンサー</text>
                <text x="110" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="8">BME280（気圧+温度+湿度）、I2C接続で簡単</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 気圧センサーの応用例</text>
          </svg>
          <figcaption>気圧から天気、高度、屋内位置など、さまざまな情報を得られます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「椅子に人が座っているか検知したい」という要望には、
            FSRセンサーを椅子の座面に仕込む提案ができます。
            会議室の在席管理や、高齢者の見守りに応用できます。
            FSRは安価なので、複数箇所に設置してもコストを抑えられます。
          </p>
          <p>
            「工場内の環境を監視したい」という場合、
            BME280で温度・湿度・気圧を一括して取得できます。
            1つのセンサーで3つの物理量を測れるため、
            配線とコストを削減できます。
            気圧の急変は天候悪化のサインとして活用できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 4で学んだセンサーをまとめましょう。お客様の課題を聞いて「どの物理量を測るか」「どのセンサーを使うか」を選ぶコツは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>感圧センサー（FSR）は押す力で抵抗が変わり、タッチや着座検知に使います。</li>
            <li>気圧センサー（BMP280、BME280）は大気圧を測り、天気予測や高度計に使います。</li>
            <li>BME280は気圧+温度+湿度の3-in-1で、環境監視に便利です。</li>
          </ol>
        </div>

        <AskBox lessonId="39-pressure-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
