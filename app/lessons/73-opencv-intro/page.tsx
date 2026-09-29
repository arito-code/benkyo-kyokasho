import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson73Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={73} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box"><h2>今日の問い</h2><p>画像を加工・分析できる「OpenCV」とは何で、どんなことができるのでしょうか。</p></div>
        <h1>第73回: OpenCV入門</h1>
        <section>
          <h2>概念: OpenCVは「画像処理の定番ライブラリ」</h2>
          <p>OpenCV(Open Source Computer Vision Library)は、画像処理・コンピュータビジョンのための定番ライブラリです。Python、C++、Javaなどで使え、画像の読み込み、変換、フィルタ、輪郭検出、顔検出などさまざまな処理ができます。</p>
          <div className="analogy"><span className="analogy-term">OpenCV</span><span className="analogy-equals">=</span><span>画像処理・分析のための「スイスアーミーナイフ」</span></div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">OpenCVでできること</text>
              <g transform="translate(20, 25)"><rect x="0" y="0" width="80" height="40" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" /><text x="40" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">色変換</text><text x="40" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">RGB/グレー/HSV</text></g>
              <g transform="translate(110, 25)"><rect x="0" y="0" width="80" height="40" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" /><text x="40" y="18" textAnchor="middle" fill="#27ae60" fontSize="8">フィルタ</text><text x="40" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">ぼかし/エッジ</text></g>
              <g transform="translate(200, 25)"><rect x="0" y="0" width="80" height="40" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" /><text x="40" y="18" textAnchor="middle" fill="#f39c12" fontSize="8">検出</text><text x="40" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">輪郭/顔/特徴点</text></g>
              <g transform="translate(290, 25)"><rect x="0" y="0" width="80" height="40" rx="3" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" /><text x="40" y="18" textAnchor="middle" fill="#c0392b" fontSize="8">変形</text><text x="40" y="32" textAnchor="middle" fill="#4a4a4a" fontSize="7">回転/リサイズ</text></g>
              <g transform="translate(60, 80)"><rect x="0" y="0" width="240" height="30" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" /><text x="120" y="12" textAnchor="middle" fill="#4a4a4a" fontSize="8">インストール: pip install opencv-python</text><text x="120" y="25" textAnchor="middle" fill="#4a4a4a" fontSize="8">import cv2 で利用開始</text></g>
            </g>
          </svg>
          <figcaption>OpenCVでさまざまな画像処理が可能です。</figcaption>
        </figure>
        <section><h2>基本的な使い方</h2><p>cv2.imread()で画像読込、cv2.cvtColor()で色変換、cv2.GaussianBlur()でぼかし、cv2.Canny()でエッジ検出、cv2.findContours()で輪郭検出、といった関数を組み合わせて使います。カメラ映像に対してリアルタイムで処理することもできます。</p></section>
        <PracticeToggle><h3>提案で使うと</h3><p>「製品の傷を検出したい」「色で分類したい」というお客様に、OpenCVを使った画像処理を提案できます。「オープンソースで無料、実績も豊富なライブラリです」と説明できます。AIによる画像認識の前処理としてもOpenCVは必須です。</p></PracticeToggle>
        <div className="next-question"><h3>次の問い</h3><p>撮影した画像をどこに保存し、どうやって他のシステムに転送するのでしょうか。次の第74回で学びます。</p></div>
        <div className="memory-box"><h3>今日覚えること</h3><ol><li>OpenCVは画像処理・コンピュータビジョンの定番ライブラリです。</li><li>pip install opencv-python でインストール、import cv2 で使用開始です。</li><li>色変換、フィルタ、輪郭検出、顔検出など多彩な機能があります。</li></ol></div>
        <AskBox lessonId="73-opencv-intro" />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
