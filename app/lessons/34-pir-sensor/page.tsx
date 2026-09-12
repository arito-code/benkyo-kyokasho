import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson34Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={34} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>距離の次は「人の存在」を検知しましょう。人がいるかどうかを知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第34回: 人感センサー</h1>

        <section>
          <h2>人感センサーとは</h2>
          <p>
            <Link href="/glossary/pir-sensor" className="glossary-link">人感センサー</Link>は、
            人の存在や動きを検知するセンサーです。
            自動照明、防犯システム、トイレの自動水栓など、
            「人が来たら反応する」場面で広く使われています。
            最も一般的なのがPIRセンサー（焦電型赤外線センサー）です。
          </p>
          <p>
            PIRセンサーは、人体から放射される赤外線を検知します。
            人間の体温は約36℃で、周囲より温かいため赤外線を放っています。
            PIRセンサーはこの赤外線の「変化」を捉えて、
            人が動いたことを検知します。
            静止している人は検知しにくいのが特徴です。
          </p>

          <div className="analogy">
            <span className="analogy-term">PIRセンサー</span>
            <span className="analogy-equals">=</span>
            <span>人の「体温の動き」を見る目</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">PIRセンサーの仕組み</text>
              
              {/* PIR sensor */}
              <g transform="translate(40, 30)">
                <rect x="0" y="10" width="70" height="50" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="35" cy="35" r="15" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="35" cy="35" r="8" fill="#3b6ea5" opacity="0.3" />
                <text x="35" y="75" textAnchor="middle" fill="#3b6ea5" fontSize="9">PIRセンサー</text>
              </g>
              
              {/* Detection area */}
              <g transform="translate(115, 25)">
                <path d="M0 30 L100 5 L100 55 Z" fill="#3b6ea5" opacity="0.1" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="4,2" />
                <text x="60" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="8">検知範囲</text>
                <text x="60" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="7">〜7m、120°</text>
              </g>
              
              {/* Person */}
              <g transform="translate(200, 10)">
                <circle cx="30" cy="10" r="10" fill="none" stroke="#c0392b" strokeWidth="2" />
                <line x1="30" y1="20" x2="30" y2="45" stroke="#c0392b" strokeWidth="2" />
                <line x1="30" y1="25" x2="15" y2="35" stroke="#c0392b" strokeWidth="2" />
                <line x1="30" y1="25" x2="45" y2="35" stroke="#c0392b" strokeWidth="2" />
                <line x1="30" y1="45" x2="20" y2="65" stroke="#c0392b" strokeWidth="2" />
                <line x1="30" y1="45" x2="40" y2="65" stroke="#c0392b" strokeWidth="2" />
                <text x="30" y="80" textAnchor="middle" fill="#c0392b" fontSize="8">〜36℃</text>
                
                {/* IR rays */}
                <path d="M20 15 Q10 20 5 30" fill="none" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
                <path d="M25 20 Q15 25 10 35" fill="none" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
                <path d="M35 20 Q40 25 45 35" fill="none" stroke="#ff6b6b" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
              </g>
              
              {/* Output explanation */}
              <g transform="translate(270, 25)">
                <rect x="0" y="0" width="70" height="65" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="35" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">出力</text>
                <text x="35" y="32" textAnchor="middle" fill="#27ae60" fontSize="9">人検知</text>
                <text x="35" y="45" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="600">HIGH</text>
                <text x="35" y="60" textAnchor="middle" fill="#4a4a4a" fontSize="7">(数秒間)</text>
              </g>
              
              {/* Note */}
              <g transform="translate(30, 115)">
                <rect x="0" y="0" width="280" height="55" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">PIRセンサーの特徴</text>
                <text x="15" y="32" fill="#856404" fontSize="8">・動きを検知（静止している人は検知しにくい）</text>
                <text x="15" y="47" fill="#856404" fontSize="8">・デジタル出力（HIGH/LOW）でシンプル</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: PIRセンサーは人体の赤外線の変化を検知</text>
          </svg>
          <figcaption>人が動くと赤外線の変化が起こり、PIRセンサーがそれを検知します。</figcaption>
        </figure>

        <section>
          <h2>PIRセンサーの使い方</h2>
          <p>
            HC-SR501は、電子工作でよく使われるPIRセンサーモジュールです。
            電源（5V）、GND、出力の3本の線をつなぐだけで動作します。
            人を検知するとOUT端子がHIGH（約3.3V）になり、
            検知がなくなるとLOWに戻ります。
          </p>
          <p>
            モジュール上のボリューム（可変抵抗）で、
            感度と出力保持時間を調整できます。
            感度を上げると遠くの動きも検知しますが、
            誤検知が増えることがあります。
            出力保持時間は、検知後にHIGHを維持する秒数です。
            用途に応じて調整します。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">HC-SR501の接続</text>
              
              {/* PIR module */}
              <g transform="translate(80, 30)">
                <rect x="0" y="0" width="100" height="70" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="50" cy="25" r="18" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="50" cy="25" r="10" fill="#3b6ea5" opacity="0.2" />
                <text x="50" y="55" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">HC-SR501</text>
                
                {/* Potentiometers */}
                <circle cx="20" cy="60" r="5" fill="none" stroke="#f39c12" strokeWidth="1" />
                <circle cx="80" cy="60" r="5" fill="none" stroke="#f39c12" strokeWidth="1" />
                <text x="20" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="6">感度</text>
                <text x="80" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="6">時間</text>
                
                {/* Pins */}
                <line x1="30" y1="70" x2="30" y2="90" stroke="#c0392b" strokeWidth="2" />
                <line x1="50" y1="70" x2="50" y2="90" stroke="#27ae60" strokeWidth="2" />
                <line x1="70" y1="70" x2="70" y2="90" stroke="#4a4a4a" strokeWidth="2" />
                <text x="30" y="100" textAnchor="middle" fill="#c0392b" fontSize="7">VCC</text>
                <text x="50" y="100" textAnchor="middle" fill="#27ae60" fontSize="7">OUT</text>
                <text x="70" y="100" textAnchor="middle" fill="#4a4a4a" fontSize="7">GND</text>
              </g>
              
              {/* MCU */}
              <g transform="translate(220, 40)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">マイコン</text>
                <text x="40" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">GPIO入力</text>
                
                {/* Connections */}
                <line x1="-40" y1="25" x2="0" y2="25" stroke="#27ae60" strokeWidth="2" />
              </g>
              
              {/* Output waveform */}
              <g transform="translate(50, 125)">
                <text x="0" y="0" fill="#3b6ea5" fontSize="9" fontWeight="500">出力波形:</text>
                <line x1="50" y1="0" x2="50" y2="-5" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="50" y1="-5" x2="120" y2="-5" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="120" y1="-5" x2="120" y2="0" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="120" y1="0" x2="200" y2="0" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="0" y1="0" x2="50" y2="0" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="15" textAnchor="start" fill="#4a4a4a" fontSize="7">検知</text>
                <text x="120" y="15" textAnchor="start" fill="#4a4a4a" fontSize="7">保持時間後OFF</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: HC-SR501の接続と出力波形</text>
          </svg>
          <figcaption>3本の線をつなぐだけで、人を検知するとHIGH信号が出力されます。</figcaption>
        </figure>

        <section>
          <h2>PIRセンサーと他のセンサーの違い</h2>
          <p>
            人を検知する方法は他にもあります。
            <Link href="/lessons/33-distance-sensor">距離センサー</Link>を使えば、
            「近くに何かがある」ことを検知できます。
            しかし距離センサーは人以外の物体にも反応します。
            PIRセンサーは体温を持つ動く物体に特化しているため、
            人の検知に向いています。
          </p>
          <p>
            ただしPIRセンサーには弱点もあります。
            静止している人は検知できませんし、
            ガラス越しでは赤外線が遮られて検知できません。
            また、犬や猫などの動物も検知してしまいます。
            用途に応じて、距離センサーとの組み合わせや、
            AIカメラによる人物認識を検討することもあります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">PIRセンサー vs 距離センサー</text>
              
              {/* PIR */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="140" height="80" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">PIRセンサー</text>
                <text x="15" y="38" fill="#27ae60" fontSize="8">○ 人に特化（体温）</text>
                <text x="15" y="52" fill="#27ae60" fontSize="8">○ シンプル・安価</text>
                <text x="15" y="66" fill="#c0392b" fontSize="8">× 静止人は検知困難</text>
                <text x="15" y="80" fill="#c0392b" fontSize="8">× 動物も反応</text>
              </g>
              
              {/* Distance */}
              <g transform="translate(180, 30)">
                <rect x="0" y="0" width="140" height="80" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="70" y="20" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">距離センサー</text>
                <text x="15" y="38" fill="#27ae60" fontSize="8">○ 静止物も検知</text>
                <text x="15" y="52" fill="#27ae60" fontSize="8">○ 距離がわかる</text>
                <text x="15" y="66" fill="#c0392b" fontSize="8">× 人以外にも反応</text>
                <text x="15" y="80" fill="#c0392b" fontSize="8">× 設置場所に制約</text>
              </g>
            </g>

            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 用途に応じてセンサーを選ぶ</text>
          </svg>
          <figcaption>それぞれのセンサーに得意・不得意があり、用途で選びます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「人が来たら照明を点けたい」「無人のとき空調を止めたい」という要望には、
            PIRセンサーが最適です。
            設置場所と検知範囲を確認し、感度と保持時間を調整して提案します。
            トイレや廊下など、人の出入りが明確な場所に向いています。
          </p>
          <p>
            「会議室に何人いるか知りたい」という要望には、
            PIRセンサーでは難しいため、
            複数の距離センサーやカウントセンサー、
            AIカメラによる人数カウントを提案します。
            お客様の「何を」「どう」検知したいかを丁寧に聞き取りましょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>人感の次は「湿度」を測りましょう。空気中の水分量を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>PIRセンサーは人体の赤外線（体温）の変化を検知するセンサーです。</li>
            <li>HC-SR501は3本線で接続、検知するとHIGHを出力するシンプルな動作です。</li>
            <li>動いている人を検知しますが、静止している人やガラス越しは検知できません。</li>
          </ol>
        </div>

        <AskBox lessonId="34-pir-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
