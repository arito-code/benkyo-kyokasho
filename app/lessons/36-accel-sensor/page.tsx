import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson36Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={36} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>湿度の次は「加速度」を測りましょう。物の動きや傾きを知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第36回: 加速度センサー</h1>

        <section>
          <h2>加速度センサーとは</h2>
          <p>
            <Link href="/glossary/accel-sensor" className="glossary-link">加速度センサー</Link>は、
            物体にかかる加速度を測るセンサーです。
            スマートフォンの画面回転、歩数計、ドローンの姿勢制御など、
            「動き」や「傾き」を知りたい場面で使われます。
            加速度の単位は「G」で、1Gは地球の重力加速度（約9.8m/s²）です。
          </p>
          <p>
            加速度センサーは3軸（X、Y、Z）の加速度を測定できます。
            静止しているときも重力がかかるため、
            センサーを傾けると各軸の値が変わります。
            これを利用して、傾きや姿勢を検出できます。
            急に動かすと加速度が変わるため、振動や衝撃の検知にも使えます。
          </p>

          <div className="analogy">
            <span className="analogy-term">加速度センサー</span>
            <span className="analogy-equals">=</span>
            <span>「動きと傾き」を感じる三半規管</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">3軸加速度センサー</text>
              
              {/* Sensor chip */}
              <g transform="translate(30, 30)">
                <rect x="0" y="20" width="80" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">加速度</text>
                <text x="40" y="58" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">センサー</text>
                <text x="40" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">MPU6050等</text>
              </g>
              
              {/* 3D axes */}
              <g transform="translate(170, 60)">
                {/* X axis */}
                <line x1="0" y1="30" x2="80" y2="30" stroke="#c0392b" strokeWidth="2" />
                <polygon points="80,26 90,30 80,34" fill="#c0392b" />
                <text x="95" y="34" fill="#c0392b" fontSize="10" fontWeight="500">X</text>
                
                {/* Y axis */}
                <line x1="40" y1="70" x2="40" y2="-10" stroke="#27ae60" strokeWidth="2" />
                <polygon points="36,-10 40,-20 44,-10" fill="#27ae60" />
                <text x="40" y="-25" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">Y</text>
                
                {/* Z axis (coming out) */}
                <line x1="40" y1="30" x2="15" y2="55" stroke="#3b6ea5" strokeWidth="2" />
                <polygon points="11,51 5,61 19,55" fill="#3b6ea5" />
                <text x="0" y="70" fill="#3b6ea5" fontSize="10" fontWeight="500">Z</text>
                
                {/* Origin */}
                <circle cx="40" cy="30" r="3" fill="#4a4a4a" />
              </g>
              
              {/* Gravity explanation */}
              <g transform="translate(280, 30)">
                <rect x="0" y="0" width="60" height="80" rx="3" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" />
                <text x="30" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="8" fontWeight="500">水平</text>
                <line x1="20" y1="25" x2="40" y2="25" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="30" y1="25" x2="30" y2="45" stroke="#f39c12" strokeWidth="2" />
                <polygon points="26,45 30,55 34,45" fill="#f39c12" />
                <text x="45" y="42" fill="#f39c12" fontSize="7">1G</text>
                <text x="30" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="7">Z = -1G</text>
              </g>
              
              {/* Tilted */}
              <g transform="translate(50, 115)">
                <rect x="0" y="0" width="280" height="55" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">傾けると</text>
                <text x="140" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">重力がX、Y、Zに分解される → 傾き角度がわかる</text>
                <text x="140" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="8">例: 45°傾けると X≈0.7G、Z≈-0.7G</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 3軸加速度センサーと重力の関係</text>
          </svg>
          <figcaption>センサーを傾けると、重力が各軸に分解されて値が変わります。</figcaption>
        </figure>

        <section>
          <h2>よく使われる加速度センサー</h2>
          <p>
            電子工作で人気なのがMPU6050です。
            加速度（3軸）とジャイロ（3軸）を搭載した6軸センサーで、
            I2C接続で簡単に使えます。
            ジャイロは角速度（回転の速さ）を測るセンサーで、
            加速度と組み合わせると姿勢をより正確に検出できます。
          </p>
          <p>
            ADXL345は加速度のみの3軸センサーで、
            低消費電力が特徴です。
            MPU9250は加速度、ジャイロ、地磁気の9軸センサーで、
            方位まで検出できます。
            用途に応じて選びますが、
            まずはMPU6050から始めるのがおすすめです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">加速度センサーの種類</text>
              
              {/* ADXL345 */}
              <g transform="translate(0, 25)">
                <rect x="0" y="0" width="100" height="65" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">ADXL345</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">加速度 3軸</text>
                <text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">低消費電力</text>
                <text x="50" y="63" textAnchor="middle" fill="#27ae60" fontSize="7">シンプル</text>
              </g>
              
              {/* MPU6050 */}
              <g transform="translate(120, 25)">
                <rect x="0" y="0" width="100" height="65" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">MPU6050</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">加速度 3軸</text>
                <text x="50" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="8">+ ジャイロ 3軸</text>
                <text x="50" y="63" textAnchor="middle" fill="#27ae60" fontSize="7">おすすめ</text>
              </g>
              
              {/* MPU9250 */}
              <g transform="translate(240, 25)">
                <rect x="0" y="0" width="100" height="65" rx="5" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">MPU9250</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">加速度 + ジャイロ</text>
                <text x="50" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="8">+ 地磁気 (9軸)</text>
                <text x="50" y="63" textAnchor="middle" fill="#f39c12" fontSize="7">方位もわかる</text>
              </g>
              
              {/* Use cases */}
              <g transform="translate(30, 100)">
                <rect x="0" y="0" width="280" height="35" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">用途例</text>
                <text x="140" y="30" textAnchor="middle" fill="#4a4a4a" fontSize="8">傾き検知、落下検知、歩数計、ドローンの姿勢制御</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 代表的な加速度センサー</text>
          </svg>
          <figcaption>MPU6050はジャイロ付きで人気、用途に応じて選びます。</figcaption>
        </figure>

        <section>
          <h2>傾きの計算</h2>
          <p>
            加速度センサーの値から傾きを計算できます。
            水平に置いたときZ軸に-1G（または+1G、センサーの向きによる）、
            90度傾けるとX軸またはY軸に±1Gがかかります。
            逆正接（atan2）関数を使うと、傾き角度を求められます。
          </p>
          <p>
            ただし、加速度センサーだけでは「動きながら」の傾きは正確に測れません。
            振動やセンサーの移動が加速度に影響するためです。
            ジャイロと組み合わせて「センサーフュージョン」を行うと、
            より安定した姿勢検出ができます。
            ライブラリやDMP（デジタルモーションプロセッサ）を使うと、
            複雑な計算を自分でしなくても姿勢が取得できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">傾き検知の例</text>
              
              {/* Horizontal */}
              <g transform="translate(30, 30)">
                <rect x="0" y="20" width="80" height="30" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <line x1="-10" y1="50" x2="90" y2="50" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,2" />
                <text x="40" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="9">水平 (0°)</text>
                <text x="40" y="85" textAnchor="middle" fill="#3b6ea5" fontSize="8">Z = -1G</text>
              </g>
              
              {/* Tilted 45 */}
              <g transform="translate(150, 30)">
                <g transform="rotate(-30, 40, 35)">
                  <rect x="0" y="20" width="80" height="30" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                </g>
                <line x1="-10" y1="50" x2="90" y2="50" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,2" />
                <text x="40" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="9">傾き (30°)</text>
                <text x="40" y="85" textAnchor="middle" fill="#27ae60" fontSize="8">X = 0.5G, Z = -0.87G</text>
              </g>
              
              {/* Vertical */}
              <g transform="translate(270, 30)">
                <g transform="rotate(-90, 40, 35)">
                  <rect x="0" y="20" width="80" height="30" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                </g>
                <line x1="-10" y1="50" x2="90" y2="50" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4,2" />
                <text x="40" y="70" textAnchor="middle" fill="#4a4a4a" fontSize="9">垂直 (90°)</text>
                <text x="40" y="85" textAnchor="middle" fill="#f39c12" fontSize="8">X = 1G, Z = 0G</text>
              </g>
            </g>

            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 傾き角度と加速度の関係</text>
          </svg>
          <figcaption>傾けると重力が各軸に分配され、角度を計算できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「装置が傾いたら警告を出したい」という要望には、
            加速度センサーで傾きを監視する提案ができます。
            しきい値を超えたらアラームを鳴らしたり、
            メールを送信したりする仕組みを作れます。
          </p>
          <p>
            「製品が落下したか検知したい」という場合も加速度センサーが使えます。
            落下中は無重力状態（0G）になり、
            着地時に大きな加速度（衝撃）がかかります。
            物流や精密機器の品質管理に応用できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>加速度の次は「振動」を測りましょう。機械の異常を振動で検知するには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>加速度センサーは3軸の加速度を測り、傾きや動きを検出できます。</li>
            <li>MPU6050は加速度+ジャイロの6軸センサーで、I2C接続で手軽に使えます。</li>
            <li>静止時は重力だけがかかるため、傾き角度を計算できます。</li>
          </ol>
        </div>

        <AskBox lessonId="36-accel-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
