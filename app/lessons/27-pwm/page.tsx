import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson27Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={27} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>ADCで入力を読み取れるようになりました。では、デジタル出力でアナログ的な制御を行う「PWM」は、どのような仕組みでしょうか?</p>
        </div>

        <h1>第27回: PWMとは何か</h1>

        <section>
          <h2>PWMは「高速オン・オフで平均を作る」</h2>
          <p>
            <Link href="/glossary/pwm" className="glossary-link">PWM</Link>
            （Pulse Width Modulation: パルス幅変調）は、
            <Link href="/glossary/digital" className="glossary-link">デジタル</Link>出力の
            オンとオフを高速に繰り返すことで、平均的な電圧を変える方法です。
            マイコンの出力は0Vか5Vの2つの状態しか取れませんが、
            PWMを使えば「疑似的に」1Vや2.5Vなどの中間の電圧を作り出せます。
          </p>
          <p>
            たとえば、1秒間にオン0.5秒・オフ0.5秒を繰り返すと、平均的には電源電圧の半分になります。
            これを「<Link href="/glossary/duty-cycle" className="glossary-link">デューティ比</Link>50%」といいます。
            オン時間を75%にすれば平均電圧は75%に、25%にすれば25%になります。
            この高速なオン・オフは、人間の目やモーターには「滑らかな変化」として認識されます。
          </p>

          <div className="analogy">
            <span className="analogy-term">PWM</span>
            <span className="analogy-equals">=</span>
            <span>高速でパチパチして平均を作る</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">PWMとデューティ比</text>
              
              {/* 25% duty */}
              <g transform="translate(0, 25)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">デューティ比 25%</text>
                
                {/* Waveform */}
                <line x1="10" y1="40" x2="130" y2="40" stroke="#e0e0e0" strokeWidth="1" />
                <text x="5" y="25" fill="#4a4a4a" fontSize="7">5V</text>
                <text x="5" y="43" fill="#4a4a4a" fontSize="7">0V</text>
                
                <path d="M10 40 L10 20 L25 20 L25 40 L50 40 L50 20 L65 20 L65 40 L90 40 L90 20 L105 20 L105 40 L130 40" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                
                {/* Average line */}
                <line x1="10" y1="35" x2="130" y2="35" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" />
                <text x="135" y="38" fill="#c0392b" fontSize="7">平均1.25V</text>
                
                <text x="70" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">LEDは暗い</text>
              </g>
              
              {/* 50% duty */}
              <g transform="translate(0, 90)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">デューティ比 50%</text>
                
                {/* Waveform */}
                <line x1="10" y1="40" x2="130" y2="40" stroke="#e0e0e0" strokeWidth="1" />
                <text x="5" y="25" fill="#4a4a4a" fontSize="7">5V</text>
                <text x="5" y="43" fill="#4a4a4a" fontSize="7">0V</text>
                
                <path d="M10 40 L10 20 L30 20 L30 40 L50 40 L50 20 L70 20 L70 40 L90 40 L90 20 L110 20 L110 40 L130 40" fill="none" stroke="#27ae60" strokeWidth="2" />
                
                {/* Average line */}
                <line x1="10" y1="30" x2="130" y2="30" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" />
                <text x="135" y="33" fill="#c0392b" fontSize="7">平均2.5V</text>
                
                <text x="70" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">LEDは中くらい</text>
              </g>
              
              {/* 75% duty */}
              <g transform="translate(180, 25)">
                <text x="70" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">デューティ比 75%</text>
                
                {/* Waveform */}
                <line x1="10" y1="40" x2="130" y2="40" stroke="#e0e0e0" strokeWidth="1" />
                <text x="5" y="25" fill="#4a4a4a" fontSize="7">5V</text>
                <text x="5" y="43" fill="#4a4a4a" fontSize="7">0V</text>
                
                <path d="M10 40 L10 20 L40 20 L40 40 L50 40 L50 20 L80 20 L80 40 L90 40 L90 20 L120 20 L120 40 L130 40" fill="none" stroke="#f39c12" strokeWidth="2" />
                
                {/* Average line */}
                <line x1="10" y1="25" x2="130" y2="25" stroke="#c0392b" strokeWidth="1" strokeDasharray="3,2" />
                <text x="135" y="28" fill="#c0392b" fontSize="7">平均3.75V</text>
                
                <text x="70" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">LEDは明るい</text>
              </g>
              
              {/* Formula */}
              <g transform="translate(180, 95)">
                <rect x="0" y="0" width="150" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">平均電圧の計算</text>
                <text x="75" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="9">電源電圧 × デューティ比</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: デューティ比と平均電圧</text>
          </svg>
          <figcaption>デューティ比を変えることで、平均電圧（体感の明るさ・速度）を調整できます。</figcaption>
        </figure>

        <section>
          <h2>PWMの用途: LEDの調光</h2>
          <p>
            PWMの代表的な用途が「LEDの調光」です。
            デジタル出力ではLEDは「点灯」か「消灯」しかできませんが、
            PWMで高速にオン・オフを繰り返すと、人間の目には「薄暗い」「明るい」と感じられます。
            デューティ比を0%から100%に変えることで、消灯から全灯まで滑らかに変化します。
          </p>
          <p>
            たとえば、デューティ比10%ならLEDは暗く、50%で中くらい、100%で最大の明るさになります。
            照明器具の調光機能や、スマートフォンの画面の明るさ調整も、同じ原理で動いています。
            マイコンのanalogWrite()関数（Arduino）は、内部でPWMを使っています。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">PWMでLEDを調光</text>
              
              {/* LED brightness levels */}
              <g transform="translate(20, 30)">
                {/* 0% */}
                <g transform="translate(0, 0)">
                  <circle cx="20" cy="20" r="15" fill="#1a1a1a" stroke="#3b6ea5" strokeWidth="1" />
                  <text x="20" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">0%</text>
                  <text x="20" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="7">消灯</text>
                </g>
                
                {/* 25% */}
                <g transform="translate(60, 0)">
                  <circle cx="20" cy="20" r="15" fill="#555555" stroke="#3b6ea5" strokeWidth="1" />
                  <circle cx="20" cy="20" r="10" fill="#888888" opacity="0.5" />
                  <text x="20" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">25%</text>
                  <text x="20" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="7">暗い</text>
                </g>
                
                {/* 50% */}
                <g transform="translate(120, 0)">
                  <circle cx="20" cy="20" r="15" fill="#999999" stroke="#f39c12" strokeWidth="1" />
                  <circle cx="20" cy="20" r="10" fill="#cccccc" opacity="0.7" />
                  <text x="20" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">50%</text>
                  <text x="20" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="7">中くらい</text>
                </g>
                
                {/* 75% */}
                <g transform="translate(180, 0)">
                  <circle cx="20" cy="20" r="15" fill="#dddddd" stroke="#f39c12" strokeWidth="2" />
                  <circle cx="20" cy="20" r="10" fill="#eeeeee" opacity="0.8" />
                  <circle cx="20" cy="20" r="5" fill="#ffffff" />
                  <text x="20" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">75%</text>
                  <text x="20" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="7">明るい</text>
                </g>
                
                {/* 100% */}
                <g transform="translate(240, 0)">
                  <circle cx="20" cy="20" r="15" fill="#fff9e6" stroke="#f39c12" strokeWidth="2" />
                  <circle cx="20" cy="20" r="12" fill="#fff3cd" />
                  <circle cx="20" cy="20" r="8" fill="#ffeb99" />
                  <circle cx="20" cy="20" r="4" fill="#ffffff" />
                  <text x="20" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">100%</text>
                  <text x="20" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="7">最大</text>
                </g>
              </g>
              
              {/* Arrow */}
              <g transform="translate(60, 100)">
                <line x1="0" y1="0" x2="200" y2="0" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="195,-5 205,0 195,5" fill="#3b6ea5" />
                <text x="100" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9">デューティ比を上げる</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: デューティ比による明るさの変化</text>
          </svg>
          <figcaption>デューティ比を変えると、LEDの明るさを滑らかに調整できます。</figcaption>
        </figure>

        <section>
          <h2>PWMの用途: モーター制御</h2>
          <p>
            もう一つの重要な用途が「モーターの速度制御」です。
            モーターは供給する電圧に応じて回転速度が変わりますが、
            デジタル出力では全速か停止しか選べません。
            PWMを使えば、デューティ比に応じた速度でモーターを回せます。
          </p>
          <p>
            <Link href="/glossary/mosfet" className="glossary-link">MOSFET</Link>と組み合わせて使うのが一般的です。
            MOSFETは高速スイッチングに対応しているため、PWMの周波数（1秒に何回オン・オフするか）を高くできます。
            周波数が低いとモーターが「カタカタ」と振動することがありますが、
            周波数を上げれば滑らかに回転します。一般的に数kHz〜数十kHzを使います。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">PWMでモーター速度制御</text>
              
              {/* MCU */}
              <g transform="translate(0, 35)">
                <rect x="0" y="0" width="60" height="40" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9">マイコン</text>
                <text x="30" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">PWM出力</text>
              </g>
              
              {/* PWM signal */}
              <g transform="translate(70, 45)">
                <path d="M0 10 L0 0 L10 0 L10 10 L15 10 L15 0 L25 0 L25 10 L30 10 L30 0 L40 0 L40 10" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
              </g>
              
              {/* MOSFET */}
              <g transform="translate(115, 35)">
                <rect x="0" y="0" width="50" height="40" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="25" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">MOSFET</text>
                <text x="25" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">スイッチング</text>
              </g>
              
              {/* Motor */}
              <g transform="translate(180, 30)">
                <circle cx="30" cy="25" r="22" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="28" textAnchor="middle" fill="#3b6ea5" fontSize="10">M</text>
                <text x="30" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">モーター</text>
                
                {/* Rotation arrows */}
                <path d="M10 10 A 20 20 0 0 1 50 10" fill="none" stroke="#27ae60" strokeWidth="2" />
                <polygon points="48,8 55,10 48,15" fill="#27ae60" />
              </g>
              
              {/* Speed relationship */}
              <g transform="translate(250, 25)">
                <rect x="0" y="0" width="90" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="45" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="8" fontWeight="500">デューティ比と速度</text>
                <line x1="5" y1="22" x2="85" y2="22" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="37" fill="#4a4a4a" fontSize="8">25% → ゆっくり</text>
                <text x="10" y="50" fill="#4a4a4a" fontSize="8">50% → 中速</text>
                <text x="10" y="63" fill="#4a4a4a" fontSize="8">100% → 全速</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: PWMとMOSFETでモーターを制御</text>
          </svg>
          <figcaption>PWMでMOSFETを制御し、モーターの速度を調整します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「LEDの明るさを変えたい」「モーターの速度を調整したい」という要望に対して、
            「PWM制御を使えば、デジタル出力でも滑らかに調整できます」と提案できます。
            マイコンの選定時には「PWM出力のチャンネル数」を確認することも重要です。
          </p>
          <p>
            また、「モーターがカタカタ振動する」というトラブルに対して、
            「PWM周波数を上げると滑らかになります」とアドバイスできます。
            PWMの仕組みを理解していると、適切な制御方法の提案とトラブル対応ができます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>出力の制御を学びました。入力側に戻って、スイッチやボタンを安定して読み取るための「プルアップ」と「プルダウン」について学びましょう。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>PWMは高速オン・オフの比率（デューティ比）で平均電圧を変える方法です。</li>
            <li>デューティ比0%〜100%で、消灯〜全灯、停止〜全速のように滑らかに制御できます。</li>
            <li>LEDの調光やモーターの速度制御に使い、MOSFETと組み合わせることが多いです。</li>
          </ol>
        </div>

        <AskBox lessonId="27-pwm" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
