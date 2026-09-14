import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson40Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={40} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Phase 4で学んだセンサーをまとめましょう。お客様の課題を聞いて「どの物理量を測るか」「どのセンサーを使うか」を選ぶコツは何でしょうか?</p>
        </div>

        <h1>第40回: センサーの選び方</h1>

        <section>
          <h2>提案の流れ: 課題 → 物理量 → センサー</h2>
          <p>
            お客様から「〜で困っている」という話を聞いたとき、
            すぐにセンサーの名前を出すのではなく、
            まず「何を測れば解決できるか」を考えます。
            <Link href="/lessons/30-combine-io">第30回</Link>で学んだ
            「測る→判断→動かす」のフレームワークを思い出しましょう。
          </p>
          <p>
            たとえば「機械が故障する前に気づきたい」という課題があったとします。
            この場合、「故障の前兆は何か」を探ります。
            温度上昇なら<Link href="/lessons/31-temp-sensor">温度センサー</Link>、
            異常振動なら<Link href="/lessons/37-vibration-sensor">振動センサー</Link>、
            電流増加なら電流センサーが候補になります。
            課題と物理量の対応を見極めることが、センサー選定の第一歩です。
          </p>

          <div className="analogy">
            <span className="analogy-term">センサー選定</span>
            <span className="analogy-equals">=</span>
            <span>課題 → 測るべき物理量 → 適切なセンサー</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">センサー選定の流れ</text>
              
              {/* Step 1: Problem */}
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="90" height="55" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">課題を聞く</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">「何に困っている?」</text>
                <text x="45" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">具体的な状況を確認</text>
              </g>
              
              {/* Arrow */}
              <g transform="translate(115, 45)">
                <line x1="0" y1="12" x2="20" y2="12" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="15,7 25,12 15,17" fill="#4a4a4a" />
              </g>
              
              {/* Step 2: Physical quantity */}
              <g transform="translate(145, 30)">
                <rect x="0" y="0" width="90" height="55" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#f39c12" fontSize="10" fontWeight="500">物理量を決める</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">「何を測れば解決?」</text>
                <text x="45" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度/距離/振動...</text>
              </g>
              
              {/* Arrow */}
              <g transform="translate(240, 45)">
                <line x1="0" y1="12" x2="20" y2="12" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="15,7 25,12 15,17" fill="#4a4a4a" />
              </g>
              
              {/* Step 3: Sensor */}
              <g transform="translate(270, 30)">
                <rect x="0" y="0" width="70" height="55" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">センサー選定</text>
                <text x="35" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">精度/範囲/</text>
                <text x="35" y="48" textAnchor="middle" fill="#4a4a4a" fontSize="8">コスト</text>
              </g>
              
              {/* Example */}
              <g transform="translate(20, 100)">
                <rect x="0" y="0" width="320" height="70" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="160" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="10" fontWeight="500">例: 「機械の故障を予防したい」</text>
                <text x="15" y="40" fill="#4a4a4a" fontSize="8">前兆は? → 温度上昇 or 異常振動 or 音の変化 or 電流増加</text>
                <text x="15" y="58" fill="#4a4a4a" fontSize="8">選択: 温度監視なら温度センサー、振動監視なら加速度センサー</text>
              </g>
            </g>

            <text x="200" y="195" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: 課題から物理量、センサーへの流れ</text>
          </svg>
          <figcaption>いきなりセンサーを選ばず、まず課題と物理量を明確にします。</figcaption>
        </figure>

        <section>
          <h2>Phase 4で学んだセンサー一覧</h2>
          <p>
            Phase 4では10種類の物理量とセンサーを学びました。
            それぞれのセンサーが「何を測るか」「どんな課題に使えるか」を整理しておくと、
            お客様の課題を聞いたときにすぐに対応できます。
            以下に一覧をまとめます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">Phase 4 センサー一覧</text>
              
              {/* Table header */}
              <g transform="translate(0, 20)">
                <rect x="0" y="0" width="70" height="25" fill="#3b6ea5" rx="2" />
                <rect x="72" y="0" width="100" height="25" fill="#3b6ea5" rx="2" />
                <rect x="174" y="0" width="166" height="25" fill="#3b6ea5" rx="2" />
                <text x="35" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">物理量</text>
                <text x="122" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">代表的なセンサー</text>
                <text x="257" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">用途例</text>
              </g>
              
              {/* Rows */}
              <g transform="translate(0, 47)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">温度</text>
                <text x="122" y="15" textAnchor="middle">DHT11, DS18B20</text>
                <text x="257" y="15" textAnchor="middle">機器監視, 空調, 農業</text>
              </g>
              <g transform="translate(0, 69)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">光</text>
                <text x="122" y="15" textAnchor="middle">CdS, BH1750</text>
                <text x="257" y="15" textAnchor="middle">自動照明, 明暗検知</text>
              </g>
              <g transform="translate(0, 91)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">距離</text>
                <text x="122" y="15" textAnchor="middle">HC-SR04, VL53L0X</text>
                <text x="257" y="15" textAnchor="middle">障害物検知, 液面, 人検知</text>
              </g>
              <g transform="translate(0, 113)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">人感</text>
                <text x="122" y="15" textAnchor="middle">HC-SR501 (PIR)</text>
                <text x="257" y="15" textAnchor="middle">自動照明, 防犯, 省エネ</text>
              </g>
              <g transform="translate(0, 135)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">湿度</text>
                <text x="122" y="15" textAnchor="middle">DHT22, SHT31</text>
                <text x="257" y="15" textAnchor="middle">倉庫管理, 農業, 快適性</text>
              </g>
              <g transform="translate(0, 157)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">加速度</text>
                <text x="122" y="15" textAnchor="middle">MPU6050</text>
                <text x="257" y="15" textAnchor="middle">傾き, 落下, 姿勢制御</text>
              </g>
              <g transform="translate(0, 179)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">振動</text>
                <text x="122" y="15" textAnchor="middle">SW-420, 加速度</text>
                <text x="257" y="15" textAnchor="middle">故障予知, 稼働検知, 防犯</text>
              </g>
              <g transform="translate(0, 201)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="white" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">磁気</text>
                <text x="122" y="15" textAnchor="middle">リードSW, HMC5883L</text>
                <text x="257" y="15" textAnchor="middle">ドア開閉, 方位, 回転</text>
              </g>
              <g transform="translate(0, 223)" fill="#4a4a4a" fontSize="8">
                <rect x="0" y="0" width="340" height="22" fill="#f8f9fa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="35" y="15" textAnchor="middle">圧力</text>
                <text x="122" y="15" textAnchor="middle">FSR, BME280</text>
                <text x="257" y="15" textAnchor="middle">着座, 把持, 気圧/高度</text>
              </g>
            </g>

            <text x="200" y="275" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: センサーと用途の対応表</text>
          </svg>
          <figcaption>物理量とセンサー、用途の対応を覚えておくと、提案がスムーズになります。</figcaption>
        </figure>

        <section>
          <h2>センサー選定のポイント</h2>
          <p>
            物理量が決まったら、具体的なセンサーを選びます。
            選ぶときのポイントは「測定範囲」「精度」「出力形式」「コスト」「入手性」です。
            お客様の要件と予算を確認しながら、最適なセンサーを提案します。
          </p>
          <p>
            たとえば「温度を±0.5℃の精度で測りたい」なら、
            DHT11（±2℃）では精度不足で、DHT22（±0.5℃）かDS18B20を選びます。
            「なるべく安く」という要望があればDHT11でも十分な場合もあります。
            お客様の「本当に必要な精度」を確認することが大切です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">センサー選定の5つのポイント</text>
              
              {/* 5 points */}
              <g transform="translate(30, 30)">
                <rect x="0" y="0" width="60" height="45" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="30" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">測定範囲</text>
                <text x="30" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">-40〜80℃?</text>
              </g>
              <g transform="translate(95, 30)">
                <rect x="0" y="0" width="60" height="45" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="30" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">精度</text>
                <text x="30" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">±1℃ or ±0.1℃?</text>
              </g>
              <g transform="translate(160, 30)">
                <rect x="0" y="0" width="60" height="45" rx="5" fill="#fff3e0" stroke="#f39c12" strokeWidth="2" />
                <text x="30" y="20" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">出力形式</text>
                <text x="30" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">アナログ/I2C?</text>
              </g>
              <g transform="translate(225, 30)">
                <rect x="0" y="0" width="50" height="45" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="25" y="20" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">コスト</text>
                <text x="25" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">予算は?</text>
              </g>
              <g transform="translate(280, 30)">
                <rect x="0" y="0" width="50" height="45" rx="5" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="2" />
                <text x="25" y="20" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">入手性</text>
                <text x="25" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">買える?</text>
              </g>
              
              {/* Advice */}
              <g transform="translate(40, 90)">
                <rect x="0" y="0" width="260" height="45" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="130" y="18" textAnchor="middle" fill="#856404" fontSize="9" fontWeight="500">ヒント</text>
                <text x="130" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">「必要十分」を見極める。過剰スペックはコスト増、不足は役立たず</text>
              </g>
            </g>

            <text x="200" y="155" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: センサー選定の5つの確認ポイント</text>
          </svg>
          <figcaption>測定範囲、精度、出力形式、コスト、入手性を確認して選びます。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様の課題をヒアリングするときは、
            「どんな状況で困っていますか?」
            「何がどうなったら解決ですか?」
            「どのくらいの精度が必要ですか?」
            と具体的に聞きましょう。
            漠然とした課題を物理量に落とし込むのが技術営業の腕の見せ所です。
          </p>
          <p>
            複数のセンサーを組み合わせる提案もできます。
            「温度と湿度を同時に監視」ならDHT22かBME280、
            「傾きと振動を両方」ならMPU6050一つで対応できます。
            センサーの知識を活かして、お客様の課題を「測って解決」しましょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 4「センサーで世界を測る」は以上です。次のPhase 5では、M5Stackなどの小さなコンピュータを学び、センサーと組み合わせた実用的なシステムを作っていきます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>センサー選定は「課題 → 物理量 → センサー」の順で考えます。</li>
            <li>選定のポイントは測定範囲、精度、出力形式、コスト、入手性の5つです。</li>
            <li>お客様の「本当に必要な精度」を確認し、必要十分なセンサーを提案します。</li>
          </ol>
        </div>

        <AskBox lessonId="40-choosing-sensors" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
