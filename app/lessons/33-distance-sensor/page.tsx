import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson33Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={33} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>光の次は「距離」を測りましょう。物体までの距離を知るには、どのような方法があるのでしょうか?</p>
        </div>

        <h1>第33回: 距離センサー</h1>

        <section>
          <h2>距離センサーとは</h2>
          <p>
            <Link href="/glossary/distance-sensor" className="glossary-link">距離センサー</Link>は、
            センサーから対象物までの距離を測る部品です。
            自動ドア、駐車支援、ロボットの障害物検知など、
            「物がどこにあるか」を知りたい場面で使われます。
            距離を測る方法には、超音波、赤外線、レーザー（ToF）などがあります。
          </p>
          <p>
            超音波センサーは、音を出して反射が戻ってくる時間を測ります。
            赤外線センサーは、光の反射角度や時間で距離を判定します。
            それぞれ得意な距離範囲や特性が異なるため、
            用途に応じて選びます。
            電子工作ではHC-SR04（超音波）やVL53L0X（ToF）がよく使われます。
          </p>

          <div className="analogy">
            <span className="analogy-term">距離センサー</span>
            <span className="analogy-equals">=</span>
            <span>「やまびこ」で距離を測る仕組み</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">距離センサーの種類</text>
              
              {/* Ultrasonic */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">超音波</text>
                <circle cx="30" cy="42" r="10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="70" cy="42" r="10" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="46" textAnchor="middle" fill="#3b6ea5" fontSize="7">T</text>
                <text x="70" y="46" textAnchor="middle" fill="#3b6ea5" fontSize="7">R</text>
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">2cm〜4m</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">HC-SR04</text>
              </g>
              
              {/* Infrared */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">赤外線反射</text>
                <rect x="20" y="35" width="25" height="15" rx="2" fill="none" stroke="#c0392b" strokeWidth="2" />
                <rect x="55" y="35" width="25" height="15" rx="2" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="32" y="46" textAnchor="middle" fill="#c0392b" fontSize="6">IR</text>
                <text x="67" y="46" textAnchor="middle" fill="#27ae60" fontSize="6">PD</text>
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">10cm〜80cm</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">GP2Y0A21YK</text>
              </g>
              
              {/* ToF */}
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">ToF (レーザー)</text>
                <rect x="30" y="32" width="40" height="25" rx="3" fill="none" stroke="#27ae60" strokeWidth="2" />
                <circle cx="50" cy="45" r="5" fill="#27ae60" opacity="0.3" />
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">〜2m (精度高い)</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">VL53L0X</text>
              </g>
              
              {/* Comparison */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="300" height="50" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">選び方</text>
                <text x="150" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">数メートル・安価 → 超音波（HC-SR04）</text>
                <text x="150" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">高精度・小型・近距離 → ToF（VL53L0X）</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 距離センサーの主な種類</text>
          </svg>
          <figcaption>超音波、赤外線、ToFそれぞれに得意な距離範囲と特性があります。</figcaption>
        </figure>

        <section>
          <h2>超音波センサーの仕組み</h2>
          <p>
            HC-SR04は、人間には聞こえない超音波（40kHz）を発射し、
            反射して戻ってくるまでの時間を測定します。
            音速は約340m/秒なので、時間から距離を計算できます。
            往復の時間を測るため、距離 = 時間 × 音速 ÷ 2 です。
          </p>
          <p>
            HC-SR04にはTrig（トリガー）とEcho（エコー）のピンがあります。
            Trigピンに10マイクロ秒のパルスを送ると超音波が発射され、
            反射波を受信するとEchoピンがHIGHになります。
            Echoの時間を測って距離を計算します。
            Arduinoのライブラリを使えば、距離を直接取得できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">超音波センサーの動作原理</text>
              
              {/* Sensor */}
              <g transform="translate(30, 35)">
                <rect x="0" y="0" width="60" height="40" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="18" cy="20" r="10" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <circle cx="42" cy="20" r="10" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <text x="18" y="24" textAnchor="middle" fill="#3b6ea5" fontSize="7">T</text>
                <text x="42" y="24" textAnchor="middle" fill="#3b6ea5" fontSize="7">R</text>
                <text x="30" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9">HC-SR04</text>
              </g>
              
              {/* Sound waves going out */}
              <g transform="translate(95, 45)">
                <path d="M0 10 Q30 0 60 10" fill="none" stroke="#3b6ea5" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M0 10 Q30 20 60 10" fill="none" stroke="#3b6ea5" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="30" y="-2" textAnchor="middle" fill="#3b6ea5" fontSize="7">超音波 →</text>
              </g>
              
              {/* Target object */}
              <g transform="translate(200, 30)">
                <rect x="0" y="0" width="20" height="50" fill="#4a4a4a" rx="2" />
                <text x="10" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">対象物</text>
              </g>
              
              {/* Sound waves returning */}
              <g transform="translate(155, 55)">
                <path d="M40 10 Q20 0 0 10" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeDasharray="4,2" />
                <path d="M40 10 Q20 20 0 10" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeDasharray="4,2" />
                <text x="20" y="32" textAnchor="middle" fill="#27ae60" fontSize="7">← 反射</text>
              </g>
              
              {/* Formula */}
              <g transform="translate(240, 35)">
                <rect x="0" y="0" width="90" height="65" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="45" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">距離の計算</text>
                <text x="45" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">時間 × 340m/s</text>
                <text x="45" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="8">─────</text>
                <text x="45" y="62" textAnchor="middle" fill="#4a4a4a" fontSize="8">2</text>
              </g>
              
              {/* Distance indication */}
              <g transform="translate(60, 95)">
                <line x1="0" y1="0" x2="140" y2="0" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="0" y1="-5" x2="0" y2="5" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="140" y1="-5" x2="140" y2="5" stroke="#3b6ea5" strokeWidth="1" />
                <text x="70" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9">距離 d</text>
              </g>
              
              {/* Note */}
              <g transform="translate(40, 125)">
                <rect x="0" y="0" width="260" height="30" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="130" y="12" textAnchor="middle" fill="#856404" fontSize="8" fontWeight="500">注意</text>
                <text x="130" y="25" textAnchor="middle" fill="#856404" fontSize="8">柔らかい物（布など）は反射しにくい、温度で音速が変わる</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 超音波センサーの動作原理</text>
          </svg>
          <figcaption>超音波の往復時間を測り、音速を使って距離を計算します。</figcaption>
        </figure>

        <section>
          <h2>ToFセンサー（VL53L0X）</h2>
          <p>
            ToF（Time of Flight）センサーは、
            レーザー光を照射して反射光が戻るまでの時間を測ります。
            光は音より圧倒的に速い（約30万km/秒）ため、
            非常に精密な測定が可能です。
            VL53L0Xは±3mmの精度で最大2mまで測定できます。
          </p>
          <p>
            VL53L0XはI2C通信でマイコンと接続します。
            ライブラリを使えば、距離をミリメートル単位で直接取得できます。
            超音波センサーより応答が速く、小型なのが特徴です。
            ただし、直射日光下では測定精度が落ちることがあります。
            屋内のロボットやドローンでよく使われます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ToFセンサー（VL53L0X）</text>
              
              {/* VL53L0X */}
              <g transform="translate(60, 30)">
                <rect x="0" y="0" width="70" height="50" rx="5" fill="#e3f2fd" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">VL53L0X</text>
                <circle cx="35" cy="35" r="8" fill="#27ae60" opacity="0.3" />
                <text x="35" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">I2C接続</text>
              </g>
              
              {/* Laser beam */}
              <g transform="translate(135, 40)">
                <line x1="0" y1="15" x2="60" y2="15" stroke="#c0392b" strokeWidth="2" strokeDasharray="8,4" />
                <line x1="60" y1="15" x2="0" y2="15" stroke="#27ae60" strokeWidth="1" strokeDasharray="4,4" />
                <text x="30" y="5" textAnchor="middle" fill="#c0392b" fontSize="7">レーザー光</text>
                <text x="30" y="35" textAnchor="middle" fill="#27ae60" fontSize="7">反射光</text>
              </g>
              
              {/* Target */}
              <g transform="translate(200, 35)">
                <rect x="0" y="0" width="15" height="40" fill="#4a4a4a" rx="2" />
              </g>
              
              {/* Features */}
              <g transform="translate(240, 25)">
                <rect x="0" y="0" width="90" height="65" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="45" y="15" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">特徴</text>
                <text x="10" y="32" fill="#4a4a4a" fontSize="8">・精度 ±3mm</text>
                <text x="10" y="45" fill="#4a4a4a" fontSize="8">・最大 2m</text>
                <text x="10" y="58" fill="#4a4a4a" fontSize="8">・応答速度 速い</text>
              </g>
            </g>

            <text x="200" y="130" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: ToFセンサーは高精度で高速な距離測定が可能</text>
          </svg>
          <figcaption>レーザー光の往復時間で距離を測定し、ミリメートル精度の値を取得できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「人が近づいたら反応させたい」という要望には、
            距離センサーで近接検知する提案ができます。
            広い範囲（数メートル）を監視するなら超音波センサー、
            精密な位置検知ならToFセンサーを選びます。
          </p>
          <p>
            工場では、コンベア上の物体検知や液面レベルの監視に使われます。
            駐車支援システムも距離センサーの応用例です。
            お客様の「何を」「どのくらいの距離で」検知したいかを確認し、
            適切なセンサーを提案します。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>距離の次は「人の存在」を検知しましょう。人がいるかどうかを知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>距離センサーには超音波（HC-SR04）、赤外線、ToF（VL53L0X）などがあります。</li>
            <li>超音波センサーは音の往復時間を測り、安価で広い範囲を測れます。</li>
            <li>ToFセンサーはレーザー光で測定し、高精度・高速ですがコストは高めです。</li>
          </ol>
        </div>

        <AskBox lessonId="33-distance-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
