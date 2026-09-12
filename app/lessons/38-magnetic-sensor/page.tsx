import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson38Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={38} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>振動の次は「磁気」を測りましょう。ドアの開閉や方位を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第38回: 磁気センサー</h1>

        <section>
          <h2>磁気センサーとは</h2>
          <p>
            <Link href="/glossary/magnetic-sensor" className="glossary-link">磁気センサー</Link>は、
            磁場（磁力の強さや向き）を検知するセンサーです。
            ドアの開閉検知、方位計（コンパス）、モーターの回転検出など、
            「磁石が近くにあるか」「どの方向を向いているか」を知りたい場面で使います。
          </p>
          <p>
            磁気センサーにはホールセンサー、リードスイッチ、磁気抵抗素子などがあります。
            ホールセンサーは磁場を電圧に変換し、
            リードスイッチは磁石が近づくとオンになるスイッチです。
            用途に応じて使い分けますが、
            電子工作ではリードスイッチとホールセンサーがよく使われます。
          </p>

          <div className="analogy">
            <span className="analogy-term">磁気センサー</span>
            <span className="analogy-equals">=</span>
            <span>目に見えない磁力を感じる「コンパス」</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">磁気センサーの種類</text>
              
              {/* Reed switch */}
              <g transform="translate(0, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">リードスイッチ</text>
                {/* Reed switch illustration */}
                <rect x="20" y="35" width="60" height="15" rx="7" fill="none" stroke="#3b6ea5" strokeWidth="1" />
                <line x1="30" y1="42" x2="45" y2="42" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="55" y1="42" x2="70" y2="42" stroke="#4a4a4a" strokeWidth="2" />
                <circle cx="48" cy="42" r="2" fill="#4a4a4a" />
                <circle cx="52" cy="42" r="2" fill="#4a4a4a" />
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">ON/OFF出力</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">ドア開閉に最適</text>
              </g>
              
              {/* Hall sensor */}
              <g transform="translate(120, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">ホールセンサー</text>
                <rect x="30" y="32" width="40" height="20" rx="3" fill="#f39c12" opacity="0.2" stroke="#f39c12" strokeWidth="1" />
                <text x="50" y="46" textAnchor="middle" fill="#f39c12" fontSize="8">IC</text>
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">アナログ/デジタル</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">回転検出、位置検出</text>
              </g>
              
              {/* Magnetometer */}
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="100" height="80" rx="5" fill="#f8f9fa" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">地磁気センサー</text>
                <rect x="25" y="32" width="50" height="20" rx="3" fill="#27ae60" opacity="0.2" stroke="#27ae60" strokeWidth="1" />
                <text x="50" y="46" textAnchor="middle" fill="#27ae60" fontSize="8">HMC5883L</text>
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="8">3軸の磁場を測定</text>
                <text x="50" y="78" textAnchor="middle" fill="#4a4a4a" fontSize="7">コンパス、方位</text>
              </g>
              
              {/* Use cases */}
              <g transform="translate(20, 125)">
                <rect x="0" y="0" width="300" height="50" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="150" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">用途</text>
                <text x="150" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">ドア・窓の開閉検知 → リードスイッチ</text>
                <text x="150" y="45" textAnchor="middle" fill="#4a4a4a" fontSize="8">方位計、ナビ → 地磁気センサー（コンパス）</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 磁気センサーの種類と用途</text>
          </svg>
          <figcaption>ドア開閉にはリードスイッチ、方位検出には地磁気センサーを使います。</figcaption>
        </figure>

        <section>
          <h2>リードスイッチ（マグネットスイッチ）</h2>
          <p>
            リードスイッチは、ガラス管の中に2本の金属片（リード）が入った部品です。
            磁石を近づけると金属片が磁化して引き合い、接点が閉じます。
            磁石を離すと接点が開きます。
            ドアや窓の開閉検知に広く使われており、
            「マグネットセンサー」「ドアセンサー」とも呼ばれます。
          </p>
          <p>
            ドア枠にリードスイッチ、ドアに磁石を取り付けると、
            ドアが閉まっているときは接点が閉じ（ON）、
            開くと接点が開きます（OFF）。
            機械的なスイッチなので、電源不要で動作し、
            接点出力をマイコンのGPIOで読み取ります。
            防犯システムや入退室管理でよく使われます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">リードスイッチでドア開閉検知</text>
              
              {/* Door closed */}
              <g transform="translate(20, 30)">
                <text x="60" y="0" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">ドア閉</text>
                {/* Door frame */}
                <rect x="0" y="15" width="15" height="70" fill="#e0e0e0" stroke="#4a4a4a" strokeWidth="1" />
                {/* Door */}
                <rect x="15" y="15" width="40" height="70" fill="#d4a574" stroke="#4a4a4a" strokeWidth="1" />
                {/* Reed switch */}
                <rect x="3" y="40" width="9" height="20" rx="2" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="7" y="52" textAnchor="middle" fill="#3b6ea5" fontSize="6">RS</text>
                {/* Magnet */}
                <rect x="18" y="42" width="12" height="16" rx="2" fill="#c0392b" stroke="#c0392b" strokeWidth="1" />
                <text x="24" y="52" textAnchor="middle" fill="white" fontSize="6">N</text>
                {/* Status */}
                <rect x="70" y="40" width="50" height="20" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" />
                <text x="95" y="54" textAnchor="middle" fill="#27ae60" fontSize="9">ON (閉)</text>
              </g>
              
              {/* Door open */}
              <g transform="translate(180, 30)">
                <text x="60" y="0" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">ドア開</text>
                {/* Door frame */}
                <rect x="0" y="15" width="15" height="70" fill="#e0e0e0" stroke="#4a4a4a" strokeWidth="1" />
                {/* Door (open) */}
                <g transform="translate(15, 15)">
                  <rect x="0" y="0" width="40" height="70" fill="#d4a574" stroke="#4a4a4a" strokeWidth="1" transform="skewY(-20)" />
                </g>
                {/* Reed switch */}
                <rect x="3" y="40" width="9" height="20" rx="2" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" />
                <text x="7" y="52" textAnchor="middle" fill="#3b6ea5" fontSize="6">RS</text>
                {/* Magnet (away) */}
                <rect x="45" y="25" width="12" height="16" rx="2" fill="#c0392b" stroke="#c0392b" strokeWidth="1" />
                <text x="51" y="35" textAnchor="middle" fill="white" fontSize="6">N</text>
                {/* Status */}
                <rect x="70" y="40" width="50" height="20" rx="3" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" />
                <text x="95" y="54" textAnchor="middle" fill="#c0392b" fontSize="9">OFF (開)</text>
              </g>
              
              {/* Note */}
              <g transform="translate(40, 115)">
                <rect x="0" y="0" width="260" height="40" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="130" y="15" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">配線</text>
                <text x="130" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">リードスイッチの2線をGPIOとGNDに接続、プルアップ抵抗を使用</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: リードスイッチによるドア開閉検知</text>
          </svg>
          <figcaption>磁石がリードスイッチに近いと接点が閉じ、離れると開きます。</figcaption>
        </figure>

        <section>
          <h2>地磁気センサー（コンパス）</h2>
          <p>
            地磁気センサーは、地球の磁場を測定して方位を知るセンサーです。
            スマートフォンのコンパスアプリや、
            ドローンの自動航行などに使われます。
            HMC5883LやQMC5883Lは、3軸の磁場をI2Cで取得できます。
          </p>
          <p>
            地磁気センサーの値から、北がどの方向かを計算できます。
            ただし、近くに磁石や鉄があると磁場が乱れるため、
            キャリブレーション（校正）が必要です。
            <Link href="/lessons/36-accel-sensor">加速度センサー</Link>と組み合わせて
            9軸センサー（MPU9250など）として使うと、
            傾きを補正した正確な方位が得られます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">地磁気センサーで方位検出</text>
              
              {/* Compass visualization */}
              <g transform="translate(50, 30)">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="15" textAnchor="middle" fill="#c0392b" fontSize="12" fontWeight="600">N</text>
                <text x="95" y="54" textAnchor="middle" fill="#4a4a4a" fontSize="10">E</text>
                <text x="50" y="95" textAnchor="middle" fill="#4a4a4a" fontSize="10">S</text>
                <text x="5" y="54" textAnchor="middle" fill="#4a4a4a" fontSize="10">W</text>
                {/* Needle */}
                <line x1="50" y1="50" x2="50" y2="20" stroke="#c0392b" strokeWidth="3" />
                <line x1="50" y1="50" x2="50" y2="75" stroke="#4a4a4a" strokeWidth="2" />
                <circle cx="50" cy="50" r="4" fill="#4a4a4a" />
              </g>
              
              {/* Sensor info */}
              <g transform="translate(180, 30)">
                <rect x="0" y="0" width="140" height="80" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">地磁気センサー</text>
                <text x="15" y="38" fill="#4a4a4a" fontSize="8">・3軸の磁場を測定</text>
                <text x="15" y="53" fill="#4a4a4a" fontSize="8">・方位角度を計算</text>
                <text x="15" y="68" fill="#4a4a4a" fontSize="8">・例: HMC5883L, QMC5883L</text>
              </g>
            </g>

            <text x="200" y="140" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 地磁気センサーで方位を検出</text>
          </svg>
          <figcaption>地球の磁場を測定し、北の方向を計算します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「ドアが開いたら通知してほしい」という要望には、
            リードスイッチとマイコン、通信モジュールを組み合わせた
            簡単な監視システムを提案できます。
            バッテリー駆動も可能で、設置が簡単なのが利点です。
          </p>
          <p>
            「装置がどの方向を向いているか知りたい」という場合は、
            地磁気センサーを使います。
            農業機械やロボットの自動運転で方位が必要な場面もあります。
            周囲の磁気環境（鉄骨の建物など）を確認し、
            キャリブレーションの説明を含めて提案しましょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>磁気の次は「圧力」を測りましょう。押す力や気圧を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>リードスイッチは磁石の接近でON/OFFする、ドア開閉検知に最適なセンサーです。</li>
            <li>地磁気センサー（HMC5883Lなど）は地球の磁場を測り、方位を計算できます。</li>
            <li>磁気センサーは周囲の磁気環境に影響されるため、設置場所の確認が重要です。</li>
          </ol>
        </div>

        <AskBox lessonId="38-magnetic-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
