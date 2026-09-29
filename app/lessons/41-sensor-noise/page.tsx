import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson41Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={41} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーの値が安定しないのはなぜでしょうか。「ノイズ」とは何で、どうすれば減らせるのでしょうか。</p>
        </div>

        <h1>第41回: センサーのノイズ</h1>

        <section>
          <h2>概念: ノイズとは「本当の値ではない揺れ」</h2>
          <p>
            センサーで温度を測ると、25.0℃のはずなのに「24.8, 25.3, 24.9, 25.2...」と値が揺れることがあります。
            この「本当の値のまわりで揺れ動く成分」をノイズと呼びます。
            ノイズはセンサー自体の特性、配線、電源、周囲の電磁波など、さまざまな原因で発生します。
          </p>
          <p>
            ノイズがあると、測定値が不正確になります。
            たとえば「温度が30℃を超えたら警報を出す」というシステムで、
            本当は29.5℃なのにノイズで一瞬30.1℃と表示されると、誤報になってしまいます。
            ノイズを理解し、適切に対処することが、信頼できるシステムを作る鍵です。
          </p>

          <div className="analogy">
            <span className="analogy-term">ノイズ</span>
            <span className="analogy-equals">=</span>
            <span>本当の値のまわりで揺れ動く「雑音」成分</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">センサー値とノイズ</text>
              
              <line x1="40" y1="20" x2="40" y2="120" stroke="#4a4a4a" strokeWidth="1" />
              <line x1="40" y1="120" x2="340" y2="120" stroke="#4a4a4a" strokeWidth="1" />
              <text x="35" y="70" textAnchor="end" fill="#4a4a4a" fontSize="9">25℃</text>
              <text x="190" y="135" textAnchor="middle" fill="#4a4a4a" fontSize="9">時間</text>
              
              <line x1="40" y1="70" x2="340" y2="70" stroke="#27ae60" strokeWidth="2" strokeDasharray="5,3" />
              <text x="345" y="73" fill="#27ae60" fontSize="8">本当の値</text>
              
              <path d="M50 68 L70 75 L90 65 L110 78 L130 62 L150 72 L170 68 L190 80 L210 64 L230 73 L250 66 L270 76 L290 69 L310 74 L330 67" fill="none" stroke="#c0392b" strokeWidth="2" />
              <text x="335" y="67" fill="#c0392b" fontSize="8">測定値</text>
              
              <g transform="translate(60, 145)">
                <rect x="0" y="0" width="220" height="25" fill="#fff3cd" stroke="#f39c12" strokeWidth="1" rx="3" />
                <text x="110" y="16" textAnchor="middle" fill="#856404" fontSize="9">本当の値(緑)のまわりで測定値(赤)が揺れる = ノイズ</text>
              </g>
            </g>
          </svg>
          <figcaption>本当の値は一定なのに、測定値が上下に揺れるのがノイズです。</figcaption>
        </figure>

        <section>
          <h2>ノイズの原因</h2>
          <p>
            ノイズにはさまざまな原因があります。
            まず、センサー自体が持つ「熱雑音」があります。
            電子部品は温度によって電子の動きが揺らぐため、完全にノイズをゼロにすることはできません。
            これは物理法則に由来するもので、避けられません。
          </p>
          <p>
            次に、配線から入り込むノイズがあります。
            長い配線はアンテナのように電磁波を拾ってしまいます。
            近くにモーターや蛍光灯があると、その電気的なノイズが混入します。
            電源の品質が悪いと、電圧の揺らぎがセンサーに影響します。
          </p>
          <p>
            これらの原因を知っておくと、対策を立てやすくなります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ノイズの主な原因</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">センサー自体</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">熱雑音など</text>
              </g>
              
              <g transform="translate(140, 25)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">配線・環境</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">電磁波を拾う</text>
              </g>
              
              <g transform="translate(260, 25)">
                <rect x="0" y="0" width="100" height="50" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="22" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">電源</text>
                <text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="8">電圧の揺らぎ</text>
              </g>
              
              <g transform="translate(20, 95)">
                <rect x="0" y="0" width="340" height="40" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1" rx="3" />
                <text x="170" y="16" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">対策</text>
                <text x="170" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">平均化・フィルタ・シールド・安定した電源</text>
              </g>
            </g>
          </svg>
          <figcaption>ノイズは複数の原因から発生します。原因を理解して対策しましょう。</figcaption>
        </figure>

        <section>
          <h2>ノイズを減らす方法: 平均化とフィルタ</h2>
          <p>
            もっとも簡単なノイズ対策は「平均化」です。
            10回測定して平均を取ると、ランダムなノイズは打ち消し合って小さくなります。
            ただし、測定に時間がかかるようになるというトレードオフがあります。
          </p>
          <p>
            「移動平均」は、直近のN個の測定値の平均を使う方法です。
            新しい測定値が来るたびに、古い値を捨てて平均を更新します。
            これにより、滑らかな値が得られます。
          </p>
          <p>
            ハードウェア的には、センサーの近くにコンデンサを入れて電圧を安定させたり、
            シールド線を使って電磁波の影響を防いだりする方法があります。
            <Link href="/lessons/20-capacitor">第20回</Link>で学んだコンデンサの「ノイズ除去」機能を思い出しましょう。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様が「センサーの値がバラつく」と相談されたら、
            まずノイズの原因を探りましょう。
            「配線は長いですか?」「近くにモーターはありますか?」と確認します。
          </p>
          <p>
            対策として、ソフトウェアで平均化を入れるか、
            ハードウェアでコンデンサやシールドを追加するかを提案できます。
            「10回平均を取ることで、揺らぎを1/3程度に減らせます」のように、
            具体的な改善効果を説明できると説得力が増します。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>ノイズを減らしても、センサーの値が「ずれている」ことがあります。本当の値からのずれを直す「校正」とは何でしょうか。次の第42回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ノイズは「本当の値のまわりで揺れ動く成分」で、ゼロにはできません。</li>
            <li>原因はセンサー自体、配線・環境、電源などさまざまです。</li>
            <li>対策は平均化、フィルタ、コンデンサ、シールドなどがあります。</li>
          </ol>
        </div>

        <AskBox lessonId="41-sensor-noise" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
