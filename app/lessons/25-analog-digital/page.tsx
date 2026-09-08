import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson25Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={25} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>ここまで部品の制御を学んできました。では、センサーからの信号は「アナログ」と「デジタル」のどちらでしょうか? その違いは何でしょうか?</p>
        </div>

        <h1>第25回: アナログとデジタル</h1>

        <section>
          <h2>アナログは「連続」、デジタルは「0か1」</h2>
          <p>
            <Link href="/glossary/analog" className="glossary-link">アナログ</Link>信号は、
            時間とともに連続的に変化する信号です。
            温度、明るさ、音など、自然界の物理量は基本的にアナログです。
            0Vから5Vの間の「2.5V」や「3.7V」といった中間の値を持つことができます。
          </p>
          <p>
            <Link href="/glossary/digital" className="glossary-link">デジタル</Link>信号は、
            「0（LOW）」と「1（HIGH）」の2つの状態だけを持つ信号です。
            スイッチのオン・オフ、コンピュータの内部データなどがデジタルです。
            「押されている」か「押されていない」か、「5V」か「0V」かのどちらかで、中間はありません。
          </p>

          <div className="analogy">
            <span className="analogy-term">アナログ</span>
            <span className="analogy-equals">=</span>
            <span>坂道のように連続的に変化</span>
          </div>
          <div className="analogy">
            <span className="analogy-term">デジタル</span>
            <span className="analogy-equals">=</span>
            <span>階段のように0か1だけ</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">アナログ信号とデジタル信号</text>
              
              {/* Analog signal */}
              <g transform="translate(0, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">アナログ（連続的）</text>
                
                {/* Axes */}
                <line x1="20" y1="80" x2="140" y2="80" stroke="#4a4a4a" strokeWidth="1" />
                <line x1="20" y1="20" x2="20" y2="85" stroke="#4a4a4a" strokeWidth="1" />
                <text x="145" y="83" fill="#4a4a4a" fontSize="7">時間</text>
                <text x="10" y="25" fill="#4a4a4a" fontSize="7">電圧</text>
                
                {/* Labels */}
                <text x="15" y="35" fill="#4a4a4a" fontSize="7">5V</text>
                <text x="15" y="55" fill="#4a4a4a" fontSize="7">2.5V</text>
                <text x="15" y="78" fill="#4a4a4a" fontSize="7">0V</text>
                
                {/* Sine wave */}
                <path d="M20 50 Q40 25 60 50 T100 50 T140 50" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Example values */}
                <circle cx="50" cy="35" r="2" fill="#c0392b" />
                <text x="55" y="32" fill="#c0392b" fontSize="6">3.7V</text>
                <circle cx="80" cy="65" r="2" fill="#c0392b" />
                <text x="85" y="62" fill="#c0392b" fontSize="6">1.2V</text>
                
                <text x="80" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="8">どんな値も取れる</text>
              </g>
              
              {/* Digital signal */}
              <g transform="translate(180, 30)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">デジタル（離散的）</text>
                
                {/* Axes */}
                <line x1="20" y1="80" x2="140" y2="80" stroke="#4a4a4a" strokeWidth="1" />
                <line x1="20" y1="20" x2="20" y2="85" stroke="#4a4a4a" strokeWidth="1" />
                <text x="145" y="83" fill="#4a4a4a" fontSize="7">時間</text>
                <text x="10" y="25" fill="#4a4a4a" fontSize="7">電圧</text>
                
                {/* Labels */}
                <text x="5" y="35" fill="#4a4a4a" fontSize="7">HIGH(1)</text>
                <text x="5" y="78" fill="#4a4a4a" fontSize="7">LOW(0)</text>
                
                {/* Square wave */}
                <path d="M20 75 L20 30 L50 30 L50 75 L80 75 L80 30 L110 30 L110 75 L140 75" fill="none" stroke="#27ae60" strokeWidth="2" />
                
                <text x="80" y="105" textAnchor="middle" fill="#4a4a4a" fontSize="8">0か1だけ</text>
              </g>
              
              {/* Examples */}
              <g transform="translate(30, 145)">
                <rect x="0" y="0" width="130" height="30" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="65" y="12" textAnchor="middle" fill="#3b6ea5" fontSize="8">アナログの例</text>
                <text x="65" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度、明るさ、音、距離</text>
              </g>
              
              <g transform="translate(180, 145)">
                <rect x="0" y="0" width="130" height="30" fill="#f8f9fa" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="65" y="12" textAnchor="middle" fill="#27ae60" fontSize="8">デジタルの例</text>
                <text x="65" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="7">スイッチ、通信データ、GPIO</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: アナログ信号とデジタル信号の違い</text>
          </svg>
          <figcaption>アナログは連続的に変化し、デジタルは0と1だけで表現します。</figcaption>
        </figure>

        <section>
          <h2>なぜ変換が必要なのか</h2>
          <p>
            センサーの多くはアナログ出力ですが、コンピュータ（マイコン）はデジタルで動作します。
            そのため、センサーのアナログ信号をデジタルに変換する必要があります。
            この変換を行うのが<Link href="/glossary/adc" className="glossary-link">ADC</Link>
            （Analog-to-Digital Converter: アナログ-デジタル変換器）です。
          </p>
          <p>
            逆に、デジタルの処理結果をアナログに戻すこともあります。
            たとえば、音楽データ（デジタル）をスピーカーで再生する（アナログ）ときは、
            DAC（Digital-to-Analog Converter: デジタル-アナログ変換器）を使います。
            マイコンの世界では、「入力はADCで、出力はPWMで」という組み合わせがよく使われます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">信号の変換</text>
              
              {/* ADC flow */}
              <g transform="translate(0, 30)">
                {/* Sensor */}
                <rect x="0" y="20" width="60" height="35" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="35" textAnchor="middle" fill="#3b6ea5" fontSize="9">センサー</text>
                <text x="30" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">アナログ出力</text>
                
                {/* Arrow */}
                <line x1="60" y1="37" x2="90" y2="37" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="85,33 95,37 85,41" fill="#3b6ea5" />
                
                {/* ADC */}
                <rect x="95" y="15" width="50" height="45" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="120" y="33" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">ADC</text>
                <text x="120" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">A→D変換</text>
                
                {/* Arrow */}
                <line x1="145" y1="37" x2="175" y2="37" stroke="#27ae60" strokeWidth="2" />
                <polygon points="170,33 180,37 170,41" fill="#27ae60" />
                
                {/* Microcontroller */}
                <rect x="180" y="20" width="60" height="35" rx="3" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="210" y="35" textAnchor="middle" fill="#27ae60" fontSize="9">マイコン</text>
                <text x="210" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">デジタル処理</text>
                
                {/* Arrow */}
                <line x1="240" y1="37" x2="270" y2="37" stroke="#27ae60" strokeWidth="2" />
                <polygon points="265,33 275,37 265,41" fill="#27ae60" />
                
                {/* PWM/DAC */}
                <rect x="275" y="15" width="55" height="45" rx="3" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="302" y="33" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">PWM</text>
                <text x="302" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">擬似アナログ</text>
              </g>
              
              {/* Signal representation */}
              <g transform="translate(30, 100)">
                {/* Analog wave */}
                <path d="M0 15 Q15 5 30 15 T60 15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">連続</text>
                
                {/* Arrow */}
                <polygon points="75,15 85,15 80,10" fill="#4a4a4a" />
                
                {/* Digital */}
                <path d="M90 20 L90 10 L100 10 L100 20 L110 20 L110 10 L120 10" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="105" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">0と1</text>
                
                {/* Arrow */}
                <polygon points="135,15 145,15 140,10" fill="#4a4a4a" />
                
                {/* PWM */}
                <path d="M150 20 L150 10 L165 10 L165 20 L175 20 L175 10 L200 10 L200 20" fill="none" stroke="#f39c12" strokeWidth="2" />
                <text x="175" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">パルス幅で表現</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: センサー入力からPWM出力までの流れ</text>
          </svg>
          <figcaption>センサーのアナログ信号をADCでデジタル化し、PWMで擬似的にアナログ出力します。</figcaption>
        </figure>

        <section>
          <h2>身近なアナログとデジタル</h2>
          <p>
            身近な例で考えてみましょう。
            アナログ時計の針は連続的に動きます。どの瞬間を見ても、針はある位置を指しています。
            一方、デジタル時計は「12:34」のように、数字がパッと切り替わります。
            「12:34と12:35の間」という表示はありません。
          </p>
          <p>
            温度計も同じです。
            水銀温度計（アナログ）は連続的に温度を示しますが、
            デジタル温度計は「25.3℃」のように、ある精度で区切った数値を表示します。
            「25.35℃」と「25.36℃」の間には無限の温度がありますが、
            デジタルでは表現できる精度に限りがあります。これを「量子化」といいます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">身近なアナログとデジタル</text>
              
              {/* Analog clock */}
              <g transform="translate(30, 30)">
                <circle cx="40" cy="40" r="35" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="7">12</text>
                <text x="70" y="43" textAnchor="middle" fill="#3b6ea5" fontSize="7">3</text>
                <text x="40" y="72" textAnchor="middle" fill="#3b6ea5" fontSize="7">6</text>
                <text x="10" y="43" textAnchor="middle" fill="#3b6ea5" fontSize="7">9</text>
                {/* Hands */}
                <line x1="40" y1="40" x2="40" y2="20" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="40" y1="40" x2="55" y2="35" stroke="#3b6ea5" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="2" fill="#3b6ea5" />
                <text x="40" y="95" textAnchor="middle" fill="#3b6ea5" fontSize="9">アナログ時計</text>
                <text x="40" y="107" textAnchor="middle" fill="#4a4a4a" fontSize="7">連続的に動く</text>
              </g>
              
              {/* Digital clock */}
              <g transform="translate(150, 30)">
                <rect x="10" y="20" width="70" height="40" rx="5" fill="#1a1a1a" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="48" textAnchor="middle" fill="#27ae60" fontSize="16" fontFamily="monospace">12:34</text>
                <text x="45" y="95" textAnchor="middle" fill="#27ae60" fontSize="9">デジタル時計</text>
                <text x="45" y="107" textAnchor="middle" fill="#4a4a4a" fontSize="7">パッと切り替わる</text>
              </g>
              
              {/* Thermometers */}
              <g transform="translate(260, 25)">
                {/* Analog */}
                <rect x="0" y="10" width="12" height="60" rx="2" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <rect x="2" y="40" width="8" height="28" fill="#c0392b" />
                <circle cx="6" cy="75" r="8" fill="#c0392b" stroke="#3b6ea5" strokeWidth="1" />
                <text x="6" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="7">水銀</text>
                
                {/* Digital */}
                <rect x="50" y="25" width="45" height="30" rx="3" fill="#1a1a1a" stroke="#3b6ea5" strokeWidth="1" />
                <text x="72" y="45" textAnchor="middle" fill="#27ae60" fontSize="10" fontFamily="monospace">25.3</text>
                <text x="72" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="7">デジタル</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 身近なアナログとデジタルの例</text>
          </svg>
          <figcaption>時計や温度計にも、アナログ式とデジタル式があります。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「センサーの値をマイコンで読み取りたい」という要望に対して、
            「センサーがアナログ出力の場合は、ADCで変換する必要があります」と説明できます。
            マイコンの選定時に「ADCのチャンネル数」や「分解能」を確認するポイントにもなります。
          </p>
          <p>
            また、「LEDの明るさを変えたい」「モーターの速度を変えたい」という要望には、
            「デジタル出力でもPWMを使えば、擬似的にアナログ制御ができます」と提案できます。
            アナログとデジタルの違いを理解していると、適切な回路設計の提案ができます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>アナログをデジタルに変換する「ADC」は、具体的にどのような仕組みでしょうか? 分解能とは何でしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>アナログは連続的に変化する信号で、温度や明るさなど自然界の物理量です。</li>
            <li>デジタルは0と1だけの信号で、コンピュータはデジタルで動作します。</li>
            <li>センサー（アナログ）→ADC→マイコン（デジタル）→PWM→出力（擬似アナログ）の流れが基本です。</li>
          </ol>
        </div>

        <AskBox lessonId="25-analog-digital" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
