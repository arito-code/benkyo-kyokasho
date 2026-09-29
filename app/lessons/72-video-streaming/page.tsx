import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson72Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={72} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box"><h2>今日の問い</h2><p>カメラの映像をリアルタイムで他のPCやスマホに送る「ストリーミング」は、どうやるのでしょうか。</p></div>
        <h1>第72回: 映像をストリーミング</h1>
        <section>
          <h2>概念: ネットワーク経由でリアルタイム映像を配信</h2>
          <p>ストリーミングとは、映像をリアルタイムでネットワーク経由で送ることです。Raspberry Piをカメラサーバーにして、PCやスマホのブラウザで映像を見ることができます。MJPEG(Motion JPEG)やRTSPなどのプロトコルを使います。</p>
          <div className="analogy"><span className="analogy-term">ストリーミング</span><span className="analogy-equals">=</span><span>カメラ映像をネットワークでリアルタイム配信</span></div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">ストリーミングの構成</text>
              <g transform="translate(30, 30)"><rect x="0" y="0" width="80" height="50" rx="3" fill="#27ae60" stroke="#1e8449" strokeWidth="2" /><text x="40" y="22" textAnchor="middle" fill="white" fontSize="8">Raspberry Pi</text><text x="40" y="38" textAnchor="middle" fill="white" fontSize="7">+ カメラ</text></g>
              <g transform="translate(115, 45)"><line x1="0" y1="10" x2="50" y2="10" stroke="#3b6ea5" strokeWidth="2" strokeDasharray="4,2" /><text x="25" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="7">Wi-Fi/LAN</text></g>
              <g transform="translate(170, 30)"><rect x="0" y="0" width="60" height="50" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" /><text x="30" y="30" textAnchor="middle" fill="#3b6ea5" fontSize="8">PC</text></g>
              <g transform="translate(245, 30)"><rect x="0" y="0" width="60" height="50" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" /><text x="30" y="30" textAnchor="middle" fill="#f39c12" fontSize="8">スマホ</text></g>
              <g transform="translate(320, 30)"><rect x="0" y="0" width="50" height="50" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" /><text x="25" y="30" textAnchor="middle" fill="#27ae60" fontSize="8">他Pi</text></g>
            </g>
          </svg>
          <figcaption>Raspberry Piがサーバーとなり、複数の端末で映像を閲覧できます。</figcaption>
        </figure>
        <section><h2>簡単なストリーミング方法</h2><p>mjpg-streamerやuv4l、Flask+picamera2など、いくつかの方法があります。Flaskを使う方法は、Pythonだけで完結し、同じコードでAI処理も組み込めるので便利です。ブラウザで http://ラズパイのIP:8080 にアクセスすると映像が見えます。</p></section>
        <PracticeToggle><h3>提案で使うと</h3><p>「現場の様子をリモートで確認したい」というお客様に、ストリーミングを提案できます。「Raspberry Piをカメラサーバーにすれば、スマホやPCからリアルタイムで映像を確認できます」と説明できます。</p></PracticeToggle>
        <div className="next-question"><h3>次の問い</h3><p>撮影した画像を加工・分析する「OpenCV」とは何でしょうか。次の第73回で学びます。</p></div>
        <div className="memory-box"><h3>今日覚えること</h3><ol><li>ストリーミングで、カメラ映像をネットワーク経由でリアルタイム配信できます。</li><li>mjpg-streamer、Flask+picamera2などの方法があります。</li><li>ブラウザからアクセスして映像を確認できます。</li></ol></div>
        <AskBox lessonId="72-video-streaming" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
