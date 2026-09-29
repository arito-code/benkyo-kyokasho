import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson51Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={51} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>M5Stackをバッテリーで動かすとき、どのくらい持つのでしょうか。電源管理のポイントは何でしょうか。</p>
        </div>

        <h1>第51回: M5Stackの電源管理</h1>

        <section>
          <h2>概念: 電源は「動作の命綱」</h2>
          <p>
            M5Stackは、USB給電または内蔵バッテリーで動きます。
            デモや試作では問題になりませんが、
            実際に運用するときは「いつまで動くか」「電源が切れたらどうなるか」を考える必要があります。
            <Link href="/lessons/13-power-sources">第13回</Link>で学んだ電源の基本を思い出しましょう。
          </p>
          <p>
            M5Stack Basicの内蔵バッテリーは機種や世代により異なりますが（約110〜150mAh程度）、
            画面をつけて常時動作すると1〜2時間程度しか持ちません。
            長時間のバッテリー運用には、省電力の工夫が必要です。
          </p>

          <div className="analogy">
            <span className="analogy-term">電源管理</span>
            <span className="analogy-equals">=</span>
            <span>いつ・どこから電気をもらい、どのくらい持つか を設計する</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">M5Stackの電源オプション</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">USB給電</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">5V / 安定</text>
                <text x="50" y="52" textAnchor="middle" fill="#27ae60" fontSize="7">連続運用向け</text>
              </g>
              
              <g transform="translate(135, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">内蔵バッテリー</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">110〜150mAh程度</text>
                <text x="50" y="52" textAnchor="middle" fill="#c0392b" fontSize="7">短時間向け</text>
              </g>
              
              <g transform="translate(250, 25)">
                <rect x="0" y="0" width="100" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">外部バッテリー</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">モバイルバッテリー等</text>
                <text x="50" y="52" textAnchor="middle" fill="#27ae60" fontSize="7">長時間運用可</text>
              </g>
              
              <g transform="translate(40, 100)">
                <rect x="0" y="0" width="260" height="40" fill="#ffcccc" stroke="#c0392b" strokeWidth="1" rx="3" />
                <text x="130" y="16" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">注意</text>
                <text x="130" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">画面ON+Wi-FiONだと消費電力が大きくなる</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じて電源方法を選びます。</figcaption>
        </figure>

        <section>
          <h2>省電力の工夫</h2>
          <p>
            バッテリー駆動時間を延ばすには、消費電力を減らす工夫が必要です。
            画面の輝度を下げる、使わないときは画面をオフにする、
            Wi-Fiは必要なときだけ接続する、などが基本です。
          </p>
          <p>
            より本格的な省電力には「Deep Sleep」モードを使います。
            これはCPUをほぼ停止させて、電力消費を数百μAまで下げるモードです。
            タイマーや外部信号で復帰でき、定期的にデータを送るような用途に向いています。
          </p>
        </section>

        <section>
          <h2>電源が切れたときの対策</h2>
          <p>
            バッテリー切れや停電でデータが失われないよう、
            重要なデータは定期的にフラッシュメモリに保存しておくと安心です。
            M5StackにはSPIFFSやPreferencesという仕組みがあり、
            電源を切っても消えないデータを保存できます。
          </p>
          <p>
            長期運用では、バッテリー残量を監視して、
            残りが少なくなったら画面に警告を表示したり、
            データをクラウドに退避したりする処理も検討しましょう。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様に「どのくらい電池が持つか」を聞かれることは多いです。
            「画面をつけっぱなしだと1〜2時間ですが、
            Deep Sleepを使えば数日〜数週間持たせることも可能です」
            と説明できます。
          </p>
          <p>
            「USB電源が取れる場所ですか、それとも電池運用ですか」
            と最初に確認し、それに応じた設計を提案しましょう。
            電池運用なら外部バッテリーやDeep Sleepを、
            電源が取れるならUSB常時接続を提案します。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5Stackで使えるライブラリにはどんなものがあるでしょうか。ライブラリを使うと開発が楽になります。次の第52回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>M5Stackの内蔵バッテリーは小容量で、常時動作は1〜2時間程度です。</li>
            <li>省電力にはDeep Sleepモード、画面オフ、Wi-Fi接続制限が有効です。</li>
            <li>長期運用ではUSB給電か外部バッテリーを検討しましょう。</li>
          </ol>
        </div>

        <AskBox lessonId="51-m5stack-power" />

        <LessonNavigation currentLessonNumber={51} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
