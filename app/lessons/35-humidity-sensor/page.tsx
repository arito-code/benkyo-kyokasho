import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson35Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={35} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>人感の次は「湿度」を測りましょう。空気中の水分量を知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <h1>第35回: 湿度センサー</h1>

        <section>
          <h2>湿度センサーとは</h2>
          <p>
            <Link href="/glossary/humidity-sensor" className="glossary-link">湿度センサー</Link>は、
            空気中の水分量（湿度）を測るセンサーです。
            エアコンの制御、農業ハウス、倉庫管理、気象観測など、
            湿度を監視したい場面で使われます。
            一般的に「相対湿度（%RH）」を測定します。
          </p>
          <p>
            相対湿度は、その温度で空気が含むことができる最大の水分量に対して、
            実際にどれだけ含んでいるかの割合です。
            100%なら飽和状態で結露が始まり、
            30%以下だと乾燥を感じます。
            快適な室内環境は40〜60%とされています。
          </p>

          <div className="analogy">
            <span className="analogy-term">相対湿度</span>
            <span className="analogy-equals">=</span>
            <span>「空気のスポンジがどれだけ水を含んでいるか」の割合</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">相対湿度のイメージ</text>
              
              {/* Low humidity */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="90" height="70" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="45" y="18" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">30%RH</text>
                <text x="45" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">乾燥</text>
                {/* Few water droplets */}
                <circle cx="30" cy="50" r="3" fill="#3b6ea5" opacity="0.5" />
                <circle cx="50" cy="55" r="3" fill="#3b6ea5" opacity="0.5" />
                <circle cx="65" cy="48" r="3" fill="#3b6ea5" opacity="0.5" />
              </g>
              
              {/* Comfortable humidity */}
              <g transform="translate(125, 30)">
                <rect x="0" y="0" width="90" height="70" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="45" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">50%RH</text>
                <text x="45" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">快適</text>
                {/* Medium water droplets */}
                <circle cx="25" cy="48" r="3" fill="#3b6ea5" opacity="0.6" />
                <circle cx="40" cy="55" r="3" fill="#3b6ea5" opacity="0.6" />
                <circle cx="55" cy="45" r="3" fill="#3b6ea5" opacity="0.6" />
                <circle cx="70" cy="52" r="3" fill="#3b6ea5" opacity="0.6" />
                <circle cx="33" cy="60" r="3" fill="#3b6ea5" opacity="0.6" />
                <circle cx="62" cy="62" r="3" fill="#3b6ea5" opacity="0.6" />
              </g>
              
              {/* High humidity */}
              <g transform="translate(230, 30)">
                <rect x="0" y="0" width="90" height="70" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">80%RH</text>
                <text x="45" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">じめじめ</text>
                {/* Many water droplets */}
                <circle cx="20" cy="45" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="35" cy="52" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="50" cy="45" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="65" cy="50" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="80" cy="46" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="25" cy="60" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="42" cy="62" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="58" cy="58" r="3" fill="#3b6ea5" opacity="0.7" />
                <circle cx="75" cy="63" r="3" fill="#3b6ea5" opacity="0.7" />
              </g>
              
              {/* Scale */}
              <g transform="translate(40, 120)">
                <line x1="0" y1="0" x2="260" y2="0" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="0" y1="-5" x2="0" y2="5" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="130" y1="-5" x2="130" y2="5" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="260" y1="-5" x2="260" y2="5" stroke="#4a4a4a" strokeWidth="2" />
                <text x="0" y="20" textAnchor="middle" fill="#4a4a4a" fontSize="8">0%</text>
                <text x="130" y="20" textAnchor="middle" fill="#4a4a4a" fontSize="8">50%</text>
                <text x="260" y="20" textAnchor="middle" fill="#4a4a4a" fontSize="8">100%</text>
                <rect x="78" y="-8" width="104" height="16" fill="#27ae60" opacity="0.2" rx="2" />
                <text x="130" y="35" textAnchor="middle" fill="#27ae60" fontSize="8">快適ゾーン 40-60%</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 相対湿度と快適さの関係</text>
          </svg>
          <figcaption>相対湿度40〜60%が快適とされ、低すぎても高すぎても不快になります。</figcaption>
        </figure>

        <section>
          <h2>DHT11とDHT22</h2>
          <p>
            電子工作で最もよく使われる湿度センサーがDHT11とDHT22です。
            どちらも温度と湿度を同時に測定でき、
            デジタル信号でマイコンに値を送ります。
            <Link href="/lessons/31-temp-sensor">第31回</Link>で紹介したDHT11は、
            温度センサーとしても湿度センサーとしても使えるお得な部品です。
          </p>
          <p>
            DHT11は安価ですが精度が低め（湿度±5%、温度±2℃）です。
            DHT22はやや高価ですが精度が高く（湿度±2〜5%、温度±0.5℃）、
            測定範囲も広いです。
            「だいたいの湿度がわかればいい」ならDHT11、
            「より正確に測りたい」ならDHT22を選びます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">DHT11 vs DHT22</text>
              
              {/* DHT11 */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="140" height="95" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">DHT11</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="15" y="40" fill="#4a4a4a" fontSize="8">湿度: 20-80%RH (±5%)</text>
                <text x="15" y="55" fill="#4a4a4a" fontSize="8">温度: 0-50℃ (±2℃)</text>
                <text x="15" y="70" fill="#4a4a4a" fontSize="8">サンプリング: 1秒</text>
                <text x="15" y="85" fill="#27ae60" fontSize="9" fontWeight="500">価格: 安い（〜200円）</text>
              </g>
              
              {/* DHT22 */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="140" height="95" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="70" y="18" textAnchor="middle" fill="#27ae60" fontSize="11" fontWeight="600">DHT22</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="15" y="40" fill="#4a4a4a" fontSize="8">湿度: 0-100%RH (±2-5%)</text>
                <text x="15" y="55" fill="#4a4a4a" fontSize="8">温度: -40-80℃ (±0.5℃)</text>
                <text x="15" y="70" fill="#4a4a4a" fontSize="8">サンプリング: 2秒</text>
                <text x="15" y="85" fill="#f39c12" fontSize="9" fontWeight="500">価格: やや高い（〜500円）</text>
              </g>
            </g>

            <text x="200" y="150" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: DHT11とDHT22の比較</text>
          </svg>
          <figcaption>精度と価格のバランスで、DHT11かDHT22を選びます。</figcaption>
        </figure>

        <section>
          <h2>I2Cセンサー（SHT31、BME280）</h2>
          <p>
            より高精度な測定には、I2C接続のセンサーが適しています。
            SHT31は湿度±2%、温度±0.2℃の高精度で、
            産業用途にも使われます。
            BME280は温度・湿度・気圧を1つのセンサーで測れる万能タイプです。
          </p>
          <p>
            I2Cセンサーはライブラリを使えば簡単に値を取得できます。
            複数のセンサーを同じI2Cバスに接続できるため、
            配線がシンプルになるのも利点です。
            本格的な環境監視システムを作る場合は、
            DHT系よりI2Cセンサーを検討しましょう。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">高精度I2Cセンサー</text>
              
              {/* SHT31 */}
              <g transform="translate(30, 25)">
                <rect x="0" y="0" width="120" height="60" rx="5" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="2" />
                <text x="60" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">SHT31</text>
                <text x="60" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">温度+湿度</text>
                <text x="60" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">湿度±2%, 温度±0.2℃</text>
              </g>
              
              {/* BME280 */}
              <g transform="translate(190, 25)">
                <rect x="0" y="0" width="120" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="60" y="18" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">BME280</text>
                <text x="60" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">温度+湿度+気圧</text>
                <text x="60" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="8">3-in-1の万能センサー</text>
              </g>
              
              {/* Note */}
              <g transform="translate(50, 95)">
                <rect x="0" y="0" width="240" height="25" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="120" y="17" textAnchor="middle" fill="#856404" fontSize="8">I2C接続なので配線がシンプル、ライブラリで簡単</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: 高精度なI2C湿度センサー</text>
          </svg>
          <figcaption>産業用途や本格的な環境監視には、I2C接続の高精度センサーが適しています。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「倉庫の湿度が高くて製品が傷む」という課題には、
            湿度センサーで監視して換気や除湿機を制御する提案ができます。
            「湿度が70%を超えたら換気ファンを回す」のような自動化です。
            どの程度の精度が必要かを確認し、DHT系かI2C系かを選びます。
          </p>
          <p>
            農業ハウスでは温度と湿度の両方が重要です。
            DHT22やBME280なら1つのセンサーで両方測れるため、
            コストと配線を抑えられます。
            気圧も測れるBME280は、天候の変化を予測する用途にも使えます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>湿度の次は「加速度」を測りましょう。物の動きや傾きを知るには、どのようなセンサーを使うのでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>湿度センサーは相対湿度（%RH）を測定し、40-60%が快適な範囲です。</li>
            <li>DHT11は安価で手軽、DHT22は精度が高く、どちらも温度と湿度を同時に測れます。</li>
            <li>高精度が必要な場合はI2C接続のSHT31やBME280を選びます。</li>
          </ol>
        </div>

        <AskBox lessonId="35-humidity-sensor" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
