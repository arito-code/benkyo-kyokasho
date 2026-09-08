import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson26Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={26} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 3: 部品と入力・出力</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>アナログをデジタルに変換する「ADC」は、具体的にどのような仕組みでしょうか? 分解能とは何でしょうか?</p>
        </div>

        <h1>第26回: ADCとは何か</h1>

        <section>
          <h2>ADCは「アナログを数値にする」</h2>
          <p>
            <Link href="/glossary/adc" className="glossary-link">ADC</Link>
            （Analog-to-Digital Converter）は、
            連続的な<Link href="/glossary/analog" className="glossary-link">アナログ</Link>電圧を、
            <Link href="/glossary/digital" className="glossary-link">デジタル</Link>の数値に変換する回路です。
            センサーが出力する電圧（たとえば0〜5V）を、マイコンが扱える数値（たとえば0〜1023）に変換します。
          </p>
          <p>
            たとえば、温度センサーが温度に比例した電圧を出力するとします。
            0℃で0V、50℃で5Vを出力するセンサーの場合、25℃では2.5Vになります。
            ADCはこの2.5Vを読み取り、「512」のような数値に変換します。
            マイコンはこの数値を使って「今の温度は25℃」と判断できます。
          </p>

          <div className="analogy">
            <span className="analogy-term">ADC</span>
            <span className="analogy-equals">=</span>
            <span>電圧を目盛りの数値に変換する翻訳機</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ADCの基本動作</text>
              
              {/* Sensor */}
              <g transform="translate(0, 35)">
                <rect x="0" y="0" width="70" height="50" rx="3" fill="none" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9">温度センサー</text>
                <text x="35" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">25℃ → 2.5V</text>
                <line x1="70" y1="25" x2="100" y2="25" stroke="#3b6ea5" strokeWidth="2" />
                <text x="85" y="20" fill="#4a4a4a" fontSize="7">2.5V</text>
              </g>
              
              {/* ADC */}
              <g transform="translate(100, 25)">
                <rect x="0" y="0" width="80" height="70" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="25" textAnchor="middle" fill="#3b6ea5" fontSize="12" fontWeight="600">ADC</text>
                <text x="40" y="42" textAnchor="middle" fill="#4a4a4a" fontSize="8">10ビット</text>
                <text x="40" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="8">0〜1023</text>
                <line x1="80" y1="35" x2="110" y2="35" stroke="#27ae60" strokeWidth="2" />
              </g>
              
              {/* MCU */}
              <g transform="translate(210, 30)">
                <rect x="0" y="0" width="70" height="60" rx="3" fill="none" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="20" textAnchor="middle" fill="#27ae60" fontSize="9">マイコン</text>
                <text x="35" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="10" fontWeight="500">512</text>
                <text x="35" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">→ 25℃と判断</text>
              </g>
              
              {/* Conversion explanation */}
              <g transform="translate(30, 115)">
                <rect x="0" y="0" width="280" height="40" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="140" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">変換の計算</text>
                <text x="140" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="9">2.5V ÷ 5V × 1023 ≈ 512   →   512 ÷ 1023 × 50℃ = 25℃</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図1: ADCがアナログ電圧を数値に変換</text>
          </svg>
          <figcaption>センサーの電圧をADCで数値に変換し、マイコンで処理します。</figcaption>
        </figure>

        <section>
          <h2>分解能とは何か</h2>
          <p>
            ADCの「分解能」は、電圧をどれだけ細かく区切れるかを表します。
            10ビットADCなら2の10乗＝1024段階、12ビットADCなら2の12乗＝4096段階で電圧を表現できます。
            分解能が高いほど、細かい電圧の変化を捉えられます。
          </p>
          <p>
            たとえば、0〜5Vを10ビットADCで読むと、1段階あたりの電圧は 5V ÷ 1024 ≈ 4.9mV です。
            12ビットADCなら 5V ÷ 4096 ≈ 1.2mV となり、4倍細かく測れます。
            温度センサーのように微小な変化を捉えたい場合は、分解能の高いADCを選びます。
            Arduinoは10ビット、多くのマイコンは12ビットのADCを内蔵しています。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">分解能の違い</text>
              
              {/* 8-bit */}
              <g transform="translate(0, 30)">
                <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">8ビット（256段階）</text>
                <rect x="0" y="10" width="100" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="2" />
                
                {/* Coarse steps */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#e0e0e0" strokeWidth="1" />
                <line x1="12.5" y1="10" x2="12.5" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="25" y1="10" x2="25" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="37.5" y1="10" x2="37.5" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="50" y1="10" x2="50" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="62.5" y1="10" x2="62.5" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="75" y1="10" x2="75" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="87.5" y1="10" x2="87.5" y2="60" stroke="#3b6ea5" strokeWidth="1" strokeDasharray="2,2" />
                
                <text x="50" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">1段階 = 19.6mV</text>
                <text x="50" y="92" textAnchor="middle" fill="#4a4a4a" fontSize="7">粗い</text>
              </g>
              
              {/* 10-bit */}
              <g transform="translate(120, 30)">
                <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">10ビット（1024段階）</text>
                <rect x="0" y="10" width="100" height="50" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="2" />
                
                {/* More steps */}
                <g stroke="#3b6ea5" strokeWidth="0.5" strokeDasharray="1,1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line key={i} x1={6.25 * (i + 1)} y1="10" x2={6.25 * (i + 1)} y2="60" />
                  ))}
                </g>
                
                <text x="50" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">1段階 = 4.9mV</text>
                <text x="50" y="92" textAnchor="middle" fill="#27ae60" fontSize="7">Arduino標準</text>
              </g>
              
              {/* 12-bit */}
              <g transform="translate(240, 30)">
                <text x="50" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">12ビット（4096段階）</text>
                <rect x="0" y="10" width="100" height="50" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="2" />
                
                {/* Many steps (just show as gradient) */}
                <defs>
                  <linearGradient id="fineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#27ae60" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#27ae60" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <rect x="0" y="10" width="100" height="50" fill="url(#fineGrad)" />
                
                <text x="50" y="80" textAnchor="middle" fill="#4a4a4a" fontSize="8">1段階 = 1.2mV</text>
                <text x="50" y="92" textAnchor="middle" fill="#27ae60" fontSize="7">高精度</text>
              </g>
              
              {/* Summary */}
              <g transform="translate(70, 115)">
                <rect x="0" y="0" width="200" height="30" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="100" y="20" textAnchor="middle" fill="#856404" fontSize="9">分解能が高い → 細かい変化を捉えられる</text>
              </g>
            </g>

            <text x="200" y="175" textAnchor="middle" fill="#4a4a4a" fontSize="11">図2: 分解能（ビット数）による精度の違い</text>
          </svg>
          <figcaption>ビット数が大きいほど、細かい電圧変化を検出できます。</figcaption>
        </figure>

        <section>
          <h2>ADCを使うときの注意点</h2>
          <p>
            ADCを使うときは、「基準電圧」に注意します。
            基準電圧は「何Vを最大値（1023など）とするか」を決めます。
            多くのマイコンでは電源電圧（5Vや3.3V）が基準電圧になりますが、
            外部から精密な基準電圧を入力できるものもあります。
          </p>
          <p>
            また、ADCの入力には電源電圧以上の電圧を入れてはいけません。
            5Vのマイコンに7Vを入力すると、マイコンが壊れる可能性があります。
            センサーの出力電圧範囲を確認し、必要に応じて分圧回路で電圧を下げます。
            ノイズ対策として、ADCの入力近くにコンデンサを入れることも有効です。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ADCの注意点</text>
              
              {/* Reference voltage */}
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="140" height="70" fill="#f8f9fa" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">基準電圧（Vref）</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#e0e0e0" strokeWidth="1" />
                <text x="10" y="42" fill="#4a4a4a" fontSize="8">Vref = 5V のとき</text>
                <text x="10" y="55" fill="#4a4a4a" fontSize="8">5V入力 → 1023</text>
                <text x="10" y="68" fill="#4a4a4a" fontSize="8">2.5V入力 → 512</text>
              </g>
              
              {/* Input range */}
              <g transform="translate(180, 25)">
                <rect x="0" y="0" width="140" height="70" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <text x="70" y="18" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">入力電圧の制限</text>
                <line x1="10" y1="25" x2="130" y2="25" stroke="#c0392b" strokeWidth="1" />
                <text x="10" y="42" fill="#8b0000" fontSize="8">VCC以上を入れると危険!</text>
                <text x="10" y="55" fill="#8b0000" fontSize="8">5Vマイコン → 0〜5Vまで</text>
                <text x="10" y="68" fill="#27ae60" fontSize="8">→ 必要なら分圧で下げる</text>
              </g>
            </g>

            <text x="200" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="11">図3: ADCの基準電圧と入力電圧制限</text>
          </svg>
          <figcaption>基準電圧を理解し、入力電圧がVCCを超えないように注意します。</figcaption>
        </figure>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「センサーの値を細かく読み取りたい」という要望に対して、
            「12ビットADCを使えば、10ビットより4倍細かく測れます」と提案できます。
            温度監視や振動検知など、微小な変化を検出する用途では分解能が重要です。
          </p>
          <p>
            また、「センサーの出力が0〜10Vなのですが」という場合には、
            「マイコンのADCは5Vまでなので、分圧回路で電圧を下げる必要があります」
            と回路設計のアドバイスができます。
            ADCの特性を理解していると、適切なマイコン選定や回路設計の提案ができます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>ADCで入力を読み取れるようになりました。では、デジタル出力でアナログ的な制御を行う「PWM」は、どのような仕組みでしょうか?</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ADCはアナログ電圧をデジタルの数値に変換する回路です。センサーの読み取りに使います。</li>
            <li>分解能（ビット数）が高いほど細かい電圧変化を捉えられます。10ビットで1024段階、12ビットで4096段階です。</li>
            <li>ADCの入力電圧は基準電圧（多くはVCC）以下にする必要があります。</li>
          </ol>
        </div>

        <AskBox lessonId="26-adc" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
