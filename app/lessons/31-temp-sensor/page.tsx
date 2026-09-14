import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson31Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={31} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Phase 4の始まりです。「測る→判断→動かす」の流れを支える、最も基本的なセンサーから学んでいきましょう。温度を電気信号に変えるには、どのような仕組みが使われているのでしょうか?</p>
        </div>

        <h1>第31回: 温度センサー</h1>

        <section>
          <h2>温度センサーとは</h2>
          <p>
            <Link href="/glossary/temp-sensor" className="glossary-link">温度センサー</Link>は、
            周囲の温度を電気信号に変換する部品です。
            私たちが手で「熱い」「冷たい」と感じるように、
            マイコンに温度の情報を伝える役割を果たします。
            温度は工場、オフィス、家庭、農業など、
            あらゆる場面で監視が必要な物理量です。
          </p>
          <p>
            温度センサーには大きく分けて3つの種類があります。
            サーミスタは抵抗値が温度で変わる部品で、安価で広く使われています。
            熱電対は2種類の金属を接合して、温度差で電圧を発生させます。
            ICセンサーは内部に回路を持ち、扱いやすいアナログまたはデジタル信号を出力します。
            用途や測定範囲に応じて使い分けます。
          </p>

          <div className="analogy">
            <span className="analogy-term">温度センサー</span>
            <span className="analogy-equals">=</span>
            <span>温度を電圧や抵抗値に変える「体温計」</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">温度センサーの種類</text>
              
              {/* Thermistor */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="100" height="70" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">サーミスタ</text>
                <circle cx="50" cy="45" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <path d="M42 42 L46 48 L54 42 L58 48" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <text x="50" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">抵抗値が変化</text>
                <text x="50" y="87" textAnchor="middle" fill="#4a4a4a" fontSize="7">-40〜+125℃</text>
              </g>
              
              {/* Thermocouple */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="100" height="70" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">熱電対</text>
                <line x1="30" y1="35" x2="50" y2="55" stroke="#c0392b" strokeWidth="2" />
                <line x1="70" y1="35" x2="50" y2="55" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="50" cy="55" r="3" fill="#4a4a4a" />
                <text x="50" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">電圧を発生</text>
                <text x="50" y="87" textAnchor="middle" fill="#4a4a4a" fontSize="7">-200〜+1200℃</text>
              </g>
              
              {/* IC sensor */}
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="100" height="70" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">ICセンサー</text>
                <rect x="30" y="32" width="40" height="25" rx="2" fill="none" stroke="#27ae60" strokeWidth="2" />
                <line x1="35" y1="57" x2="35" y2="62" stroke="#27ae60" strokeWidth="1.5" />
                <line x1="50" y1="57" x2="50" y2="62" stroke="#27ae60" strokeWidth="1.5" />
                <line x1="65" y1="57" x2="65" y2="62" stroke="#27ae60" strokeWidth="1.5" />
                <text x="50" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">電圧/デジタル出力</text>
                <text x="50" y="87" textAnchor="middle" fill="#4a4a4a" fontSize="7">-40〜+125℃</text>
              </g>
              
              {/* Use cases */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="300" height="50" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">用途で選ぶ</text>
                <text x="150" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">室温・機器温度 → サーミスタ/IC | 高温の炉 → 熱電対</text>
                <text x="150" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="8">デジタル通信で楽したい → ICセンサー（DHT11、DS18B20など）</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 温度センサーの3つのタイプ</text>
          </svg>
          <figcaption>サーミスタ、熱電対、ICセンサーは、用途と温度範囲で使い分けます。</figcaption>
        </figure>

        <section>
          <h2>サーミスタの仕組み</h2>
          <p>
            サーミスタは、温度によって抵抗値が変化する部品です。
            NTCサーミスタは温度が上がると抵抗値が下がり、
            PTCサーミスタは温度が上がると抵抗値が上がります。
            一般的にはNTCサーミスタがよく使われます。
            「25℃で10kΩ」のように、基準温度での抵抗値で呼ばれます。
          </p>
          <p>
            サーミスタは安価で入手しやすいのが利点ですが、
            抵抗値から温度を計算するには「B定数」という特性値と計算式が必要です。
            マイコンで読み取るときは、<Link href="/glossary/adc" className="glossary-link">ADC</Link>と
            分圧回路を組み合わせて使います。
            分圧された電圧をADCで読み取り、計算で温度を求めます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">サーミスタの分圧回路</text>
              
              {/* Circuit */}
              <g transform="translate(50, 25)">
                {/* VCC */}
                <text x="60" y="5" textAnchor="middle" fill="#c0392b" fontSize="9">VCC (3.3V)</text>
                <line x1="60" y1="10" x2="60" y2="25" stroke="#c0392b" strokeWidth="2" />
                
                {/* Fixed resistor */}
                <path d="M60 25 L60 30 L55 33 L65 39 L55 45 L65 51 L60 55 L60 60" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="45" fill="#4a4a4a" fontSize="8">10kΩ</text>
                <text x="85" y="55" fill="#4a4a4a" fontSize="7">(固定抵抗)</text>
                
                {/* Junction */}
                <circle cx="60" cy="60" r="2" fill="#3b6ea5" />
                <line x1="60" y1="60" x2="100" y2="60" stroke="#3b6ea5" strokeWidth="2" />
                <text x="115" y="63" fill="#27ae60" fontSize="9">→ ADC</text>
                
                {/* Thermistor */}
                <line x1="60" y1="62" x2="60" y2="70" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="60" cy="82" r="12" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <path d="M52 79 L56 85 L64 79 L68 85" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <text x="85" y="82" fill="#4a4a4a" fontSize="8">サーミスタ</text>
                <text x="85" y="92" fill="#4a4a4a" fontSize="7">(10kΩ@25℃)</text>
                
                {/* GND */}
                <line x1="60" y1="94" x2="60" y2="110" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="50" y1="110" x2="70" y2="110" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="54" y1="115" x2="66" y2="115" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="58" y1="120" x2="62" y2="120" stroke="#3b6ea5" strokeWidth="2" />
                <text x="60" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="9">GND</text>
              </g>
              
              {/* Explanation */}
              <g transform="translate(180, 40)">
                <rect x="0" y="0" width="150" height="95" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">動作原理</text>
                <text x="10" y="38" fill="#4a4a4a" fontSize="8">温度↑ → 抵抗↓ → 電圧↓</text>
                <text x="10" y="53" fill="#4a4a4a" fontSize="8">温度↓ → 抵抗↑ → 電圧↑</text>
                <line x1="10" y1="60" x2="140" y2="60" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="78" fill="#4a4a4a" fontSize="8">25℃で約1.65V</text>
                <text x="10" y="93" fill="#4a4a4a" fontSize="7">(3.3V÷2、分圧の中点)</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: サーミスタと固定抵抗の分圧回路</text>
          </svg>
          <figcaption>固定抵抗とサーミスタで分圧し、温度に応じた電圧をADCで読み取ります。</figcaption>
        </figure>

        <section>
          <h2>ICセンサーを使う</h2>
          <p>
            初心者におすすめなのが、ICタイプの温度センサーです。
            LM35やTMP36は温度に比例したアナログ電圧を出力し、
            計算がとても簡単です。
            たとえばLM35は1℃あたり10mVを出力するので、
            250mVなら25℃とすぐにわかります。
          </p>
          <p>
            さらに便利なのがデジタル出力のDS18B20やDHT11です。
            DS18B20は1-Wire通信でデジタル値を直接送ってきますし、
            DHT11は温度と湿度を同時に測れます。
            ADCやB定数の計算が不要で、
            ライブラリを使えばすぐに温度が取得できます。
            「とりあえず温度を測りたい」という場面ではDHT11がおすすめです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">よく使われるICセンサー</text>
              
              {/* Analog IC */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="160" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="80" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">アナログ出力</text>
                <text x="80" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="9">LM35 / TMP36</text>
                <text x="80" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">10mV/℃、計算が簡単</text>
              </g>
              
              {/* Digital IC */}
              <g transform="translate(180, 30)">
                <rect x="0" y="0" width="160" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="80" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">デジタル出力</text>
                <text x="80" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="9">DS18B20 / DHT11</text>
                <text x="80" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">ライブラリで楽々読み取り</text>
              </g>
              
              {/* Recommendation */}
              <g transform="translate(40, 105)">
                <rect x="0" y="0" width="260" height="35" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="130" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">初心者のおすすめ</text>
                <text x="130" y="30" textAnchor="middle" fill="#856404" fontSize="8">DHT11 → 安価で温度+湿度、Arduinoライブラリ充実</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: よく使われるICタイプの温度センサー</text>
          </svg>
          <figcaption>初心者にはデジタル出力のDHT11が扱いやすくおすすめです。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「機械の温度が高くなりすぎて困る」というお客様には、
            温度センサーで監視して警報を出す提案ができます。
            「何度を超えたら危険ですか?」と確認し、しきい値を設定します。
            室温監視なら安価なDHT11で十分ですし、
            100℃を超える高温監視には熱電対を選びます。
          </p>
          <p>
            温度センサーの選定では「測定範囲」「精度」「出力形式」を確認します。
            ±1℃の精度で十分か、±0.1℃が必要かで選ぶセンサーが変わります。
            マイコンとの接続方法（アナログ/デジタル/I2C）も提案のポイントです。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>温度の次は「光」を測りましょう。明るさを電気信号に変えるには、どのような仕組みが使われているのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>温度センサーにはサーミスタ、熱電対、ICセンサーの3種類があり、用途で選びます。</li>
            <li>サーミスタは安価ですが分圧回路と計算が必要、ICセンサーは扱いやすいのが特徴です。</li>
            <li>初心者にはデジタル出力のDHT11がおすすめで、温度と湿度を同時に測れます。</li>
          </ol>
        </div>

        <AskBox lessonId="31-temp-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
