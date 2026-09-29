import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson71Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={71} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box"><h2>今日の問い</h2><p>Raspberry Piのカメラで画像を撮影するプログラムは、どのように書くのでしょうか。</p></div>
        <h1>第71回: 画像を撮影する</h1>
        <section>
          <h2>概念: コマンドでもPythonでも撮影できる</h2>
          <p>静止画撮影は、コマンドラインなら「rpicam-still -o image.jpg」で一発です。Pythonでは picamera2 ライブラリを使い、camera.capture_file("image.jpg") のように書きます。定期的に撮影する、センサーに反応して撮影する、といった自動化も簡単です。</p>
          <div className="analogy"><span className="analogy-term">画像撮影</span><span className="analogy-equals">=</span><span>rpicamコマンド または picamera2ライブラリ</span></div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">撮影の方法</text>
              <g transform="translate(30, 25)"><rect x="0" y="0" width="150" height="60" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" /><text x="75" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">コマンドライン</text><text x="75" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7" fontFamily="monospace">rpicam-still -o img.jpg</text><text x="75" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">手軽・スクリプト向け</text></g>
              <g transform="translate(200, 25)"><rect x="0" y="0" width="150" height="60" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" /><text x="75" y="18" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">Python(picamera2)</text><text x="75" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7" fontFamily="monospace">cam.capture_file()</text><text x="75" y="52" textAnchor="middle" fill="#4a4a4a" fontSize="7">プログラム組込み向け</text></g>
            </g>
          </svg>
          <figcaption>用途に応じてコマンドとPythonを使い分けます。</figcaption>
        </figure>
        <section><h2>撮影のタイミング制御</h2><p>タイマーで定期撮影(インターバル撮影)、<Link href="/lessons/34-pir-sensor">人感センサー</Link>が反応したら撮影、ボタンを押したら撮影、といった制御が可能です。Pythonのscheduleライブラリやcronジョブと組み合わせると、決まった時刻に自動撮影することもできます。</p></section>
        <PracticeToggle><h3>提案で使うと</h3><p>「製造ラインの製品を撮影したい」「1時間ごとに現場を記録したい」といったお客様に、撮影の自動化を提案できます。「センサーと組み合わせて、変化があったときだけ撮影することも可能です」と説明できます。</p></PracticeToggle>
        <div className="next-question"><h3>次の問い</h3><p>撮影した映像をリアルタイムで他のPCやスマホに送る「ストリーミング」は、どうやるのでしょうか。次の第72回で学びます。</p></div>
        <div className="memory-box"><h3>今日覚えること</h3><ol><li>rpicam-stillコマンドで簡単に静止画を撮影できます。</li><li>Pythonのpicamera2ライブラリでプログラムから制御できます。</li><li>タイマーやセンサーと組み合わせて自動撮影できます。</li></ol></div>
        <AskBox lessonId="71-capture-image" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
