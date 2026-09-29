import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson61Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={61} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 6: 通信・IoT</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>IoTデータを保存・分析する「クラウドサービス」には、どのようなものがあるでしょうか。</p>
        </div>
        <h1>第61回: クラウドサービス入門</h1>
        <section>
          <h2>概念: クラウドは「インターネット上のコンピュータ」</h2>
          <p>クラウドサービスは、インターネット上にあるコンピュータやストレージを使えるサービスです。IoTでは、センサーデータをクラウドに送って保存・分析・可視化します。自分でサーバーを用意しなくても、必要な分だけ使えるのがメリットです。</p>
          <div className="analogy">
            <span className="analogy-term">クラウド</span>
            <span className="analogy-equals">=</span>
            <span>インターネット上で使える「レンタルコンピュータ」</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">IoT向けクラウドサービス</text>
              <g transform="translate(30, 30)">
                <rect x="0" y="0" width="100" height="40" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8" fontWeight="500">IoTプラットフォーム</text>
                <text x="50" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">Ambient, ThingSpeak</text>
              </g>
              <g transform="translate(145, 30)">
                <rect x="0" y="0" width="100" height="40" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="8" fontWeight="500">大手クラウド</text>
                <text x="50" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">AWS, Azure, GCP</text>
              </g>
              <g transform="translate(260, 30)">
                <rect x="0" y="0" width="100" height="40" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="8" fontWeight="500">ノーコード系</text>
                <text x="50" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">Blynk, IFTTT</text>
              </g>
              <g transform="translate(40, 85)">
                <rect x="0" y="0" width="280" height="45" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="140" y="16" textAnchor="middle" fill="#4a4a4a" fontSize="9" fontWeight="500">選び方のポイント</text>
                <text x="140" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="8">試作: 無料枠があるAmbientやThingSpeak</text>
                <text x="140" y="44" textAnchor="middle" fill="#4a4a4a" fontSize="8">本番: セキュリティや拡張性を考慮してAWS/Azure</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じてサービスを選びます。試作には無料枠が便利です。</figcaption>
        </figure>
        <section>
          <h2>クラウドでできること</h2>
          <p>データの保存(ストレージ)、リアルタイム表示(ダッシュボード)、アラート通知(しきい値超えたらメール)、データ分析(傾向の可視化)などができます。最初は簡単なIoTプラットフォームから始め、必要に応じて大手クラウドに移行するのがおすすめです。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「まずAmbientで試作して動作確認し、本番ではAWS IoT Coreを使う」というステップを提案できます。無料で始められることを伝えると、お客様も試しやすくなります。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>APIでやり取りするデータの形式「JSON」とは何でしょうか。次の第62回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>クラウドはインターネット上で使えるコンピュータ・ストレージです。</li>
            <li>IoTプラットフォーム(Ambient等)は試作に、大手クラウドは本番に向きます。</li>
            <li>保存・可視化・アラート・分析などの機能が使えます。</li>
          </ol>
        </div>
        <AskBox lessonId="61-cloud-basics" />

        <LessonNavigation currentLessonNumber={61} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
