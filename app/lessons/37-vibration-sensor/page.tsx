import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson37Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={37} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>加速度の次は「振動」を測りましょう。機械の異常を振動で検知するには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第37回: 振動センサー</h1>

        <section>
          <h2>振動センサーとは</h2>
          <p>
            <Link href="/glossary/vibration-sensor" className="glossary-link">振動センサー</Link>は、
            物体の振動（細かな揺れ）を検知するセンサーです。
            機械の故障予知、地震検知、盗難警報など、
            「揺れ」を知りたい場面で使われます。
            振動を検知する仕組みにはいくつかの方式があります。
          </p>
          <p>
            シンプルなのは「振動スイッチ」です。
            内部のバネや金属球が振動で動き、
            接点が触れるとオンになります。
            デジタル出力（オン/オフ）なので、
            「振動があったかどうか」の検知に向いています。
            振動の強さや周波数を測るには、
            <Link href="/lessons/36-accel-sensor">加速度センサー</Link>や
            専用の振動センサーを使います。
          </p>

          <div className="analogy">
            <span className="analogy-term">振動センサー</span>
            <span className="analogy-equals">=</span>
            <span>揺れを感じて知らせる「地震計」</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">振動センサーの種類</text>
              
              {/* Vibration switch */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">振動スイッチ</text>
                {/* Switch mechanism */}
                <circle cx="50" cy="48" r="15" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <circle cx="50" cy="48" r="4" fill="#4a4a4a" />
                <path d="M50 48 L50 35" stroke="#4a4a4a" strokeWidth="1.5" />
                <path d="M46 35 Q50 30 54 35" fill="none" stroke="#4a4a4a" strokeWidth="1" />
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">ON/OFF出力</text>
                <text x="50" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="7">安価・シンプル</text>
              </g>
              
              {/* Piezo vibration sensor */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">圧電素子</text>
                {/* Piezo element */}
                <rect x="25" y="35" width="50" height="8" rx="1" fill="#f39c12" opacity="0.3" stroke="#f39c12" strokeWidth="1" />
                <line x1="25" y1="50" x2="50" y2="50" stroke="#f39c12" strokeWidth="1.5" />
                <line x1="75" y1="50" x2="50" y2="50" stroke="#f39c12" strokeWidth="1.5" />
                <path d="M35 50 L38 45 L42 55 L46 45 L50 55 L54 45 L58 55 L62 50" fill="none" stroke="#f39c12" strokeWidth="1" />
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">アナログ出力</text>
                <text x="50" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="7">振動の強さがわかる</text>
              </g>
              
              {/* Accelerometer */}
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">加速度センサー</text>
                <rect x="25" y="35" width="50" height="25" rx="3" fill="#27ae60" opacity="0.2" stroke="#27ae60" strokeWidth="1" />
                <text x="50" y="52" textAnchor="middle" fill="#27ae60" fontSize="8">MPU6050</text>
                <text x="50" y="72" textAnchor="middle" fill="#4a4a4a" fontSize="8">3軸+周波数分析</text>
                <text x="50" y="85" textAnchor="middle" fill="#4a4a4a" fontSize="7">高機能・やや複雑</text>
              </g>
              
              {/* Comparison */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="300" height="50" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">選び方</text>
                <text x="150" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">振動の有無だけ → 振動スイッチ</text>
                <text x="150" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">強さや周波数も → 圧電素子 or 加速度センサー</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 振動センサーの種類と特徴</text>
          </svg>
          <figcaption>用途に応じて、シンプルな振動スイッチから高機能な加速度センサーまで選べます。</figcaption>
        </figure>

        <section>
          <h2>機械の異常検知</h2>
          <p>
            工場では、モーターやポンプなどの回転機械の振動を監視して、
            故障の予兆を検知する「予知保全」が行われています。
            正常な機械には特有の振動パターン（周波数）があり、
            異常が発生するとパターンが変わります。
            軸受の摩耗、アンバランス、緩みなどを早期に発見できます。
          </p>
          <p>
            振動の周波数分析には、FFT（高速フーリエ変換）という手法を使います。
            時間領域の振動データを周波数領域に変換し、
            どの周波数成分が強いかを調べます。
            この処理は複雑ですが、エッジAI対応のセンサーや
            クラウドサービスを使うと、比較的簡単に実現できます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">振動による異常検知</text>
              
              {/* Normal vibration */}
              <g transform="translate(20, 30)">
                <text x="60" y="0" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">正常な振動</text>
                <rect x="0" y="10" width="120" height="50" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <path d="M10 35 Q25 25 40 35 T70 35 T100 35" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="60" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">規則的なパターン</text>
              </g>
              
              {/* Abnormal vibration */}
              <g transform="translate(200, 30)">
                <text x="60" y="0" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">異常な振動</text>
                <rect x="0" y="10" width="120" height="50" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <path d="M10 35 Q20 15 30 45 T50 25 T70 50 T90 20 T110 40" fill="none" stroke="#c0392b" strokeWidth="2" />
                <text x="60" y="75" textAnchor="middle" fill="#4a4a4a" fontSize="8">不規則・振幅増大</text>
              </g>
              
              {/* Detection flow */}
              <g transform="translate(40, 100)">
                <rect x="0" y="0" width="260" height="55" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="130" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">予知保全の流れ</text>
                <text x="130" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">振動を常時監視 → 異常パターン検出 → 故障前に対応</text>
                <text x="130" y="48" textAnchor="middle" fill="#27ae60" fontSize="8">突然の故障・ライン停止を防止</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 振動パターンの変化で異常を検知</text>
          </svg>
          <figcaption>正常時と異常時の振動パターンの違いを検出して、故障を予知します。</figcaption>
        </figure>

        <section>
          <h2>シンプルな振動検知</h2>
          <p>
            「振動があったら通知する」程度のシンプルな用途なら、
            SW-420のような振動スイッチモジュールで十分です。
            デジタル出力（HIGH/LOW）をマイコンのGPIOで読み取るだけで、
            振動の有無がわかります。
            感度はモジュール上のボリュームで調整できます。
          </p>
          <p>
            ドアや窓への取り付けで侵入検知に使ったり、
            機械の始動・停止を検知したりできます。
            「振動が1秒以上続いたら異常」のような判定を
            プログラムで追加すると、誤検知を減らせます。
            まずはシンプルな振動スイッチで試してから、
            必要に応じて高機能なセンサーに移行するのがおすすめです。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">振動スイッチモジュール（SW-420）</text>
              
              {/* Module */}
              <g transform="translate(80, 25)">
                <rect x="0" y="0" width="80" height="55" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <circle cx="40" cy="22" r="12" fill="none" stroke="#3b6ea5" strokeWidth="1.5" />
                <text x="40" y="26" textAnchor="middle" fill="#3b6ea5" fontSize="8">振動SW</text>
                <circle cx="20" cy="45" r="5" fill="none" stroke="#f39c12" strokeWidth="1" />
                <text x="40" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="7">感度調整</text>
                
                {/* Pins */}
                <line x1="25" y1="55" x2="25" y2="70" stroke="#c0392b" strokeWidth="2" />
                <line x1="40" y1="55" x2="40" y2="70" stroke="#27ae60" strokeWidth="2" />
                <line x1="55" y1="55" x2="55" y2="70" stroke="#4a4a4a" strokeWidth="2" />
                <text x="25" y="80" textAnchor="middle" fill="#c0392b" fontSize="6">VCC</text>
                <text x="40" y="80" textAnchor="middle" fill="#27ae60" fontSize="6">OUT</text>
                <text x="55" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="6">GND</text>
              </g>
              
              {/* Output description */}
              <g transform="translate(200, 30)">
                <rect x="0" y="0" width="130" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="65" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">出力</text>
                <text x="15" y="38" fill="#4a4a4a" fontSize="8">静止時: LOW</text>
                <text x="15" y="55" fill="#4a4a4a" fontSize="8">振動時: HIGH</text>
                <text x="65" y="68" textAnchor="middle" fill="#4a4a4a" fontSize="7">(機種により逆の場合も)</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: SW-420振動スイッチモジュール</text>
          </svg>
          <figcaption>3本線をつなぐだけで振動の有無を検知できます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「機械が止まったか知りたい」という要望には、
            振動スイッチで稼働状態を監視する提案ができます。
            「振動がなくなったら停止と判断」というシンプルな構成です。
            異常振動による故障予知は高度な分析が必要ですが、
            稼働/停止の判定なら安価に実現できます。
          </p>
          <p>
            「不審な振動を検知したい」という防犯用途もあります。
            ドアや窓、金庫などに振動センサーを取り付けて、
            振動があったらアラームを鳴らしたり通知したりします。
            この場合は誤報を減らすため、感度調整が重要です。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>振動の次は「磁気」を測りましょう。ドアの開閉や方位を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>振動スイッチは振動の有無をデジタル出力で知らせる、シンプルで安価なセンサーです。</li>
            <li>加速度センサーや圧電素子を使うと、振動の強さや周波数も測定できます。</li>
            <li>工場の予知保全では、振動パターンの変化から機械の異常を早期発見します。</li>
          </ol>
        </div>

        <AskBox lessonId="37-vibration-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
