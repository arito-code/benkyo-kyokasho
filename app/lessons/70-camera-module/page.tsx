import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson70Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={70} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box"><h2>今日の問い</h2><p>Raspberry Piにカメラをつなぐには、どのようなカメラモジュールを使うのでしょうか。</p></div>
        <h1>第70回: カメラモジュール</h1>
        <section>
          <h2>概念: 専用カメラモジュールで高画質撮影</h2>
          <p>Raspberry Pi用には、専用のカメラモジュールがあります。CSI(Camera Serial Interface)端子でつなぎ、高画質な静止画や動画を撮影できます。USB Webカメラも使えますが、専用モジュールの方が低遅延で高性能です。</p>
          <div className="analogy"><span className="analogy-term">カメラモジュール</span><span className="analogy-equals">=</span><span>Raspberry Pi専用の高性能カメラ</span></div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">カメラモジュールの種類</text>
              <g transform="translate(30, 25)"><rect x="0" y="0" width="100" height="55" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" /><text x="50" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">Camera Module 3</text><text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">12MP / オートフォーカス</text><text x="50" y="50" textAnchor="middle" fill="#27ae60" fontSize="7">標準的な選択</text></g>
              <g transform="translate(145, 25)"><rect x="0" y="0" width="100" height="55" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" /><text x="50" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">NoIR Camera</text><text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">赤外線フィルタなし</text><text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="7">暗所撮影向け</text></g>
              <g transform="translate(260, 25)"><rect x="0" y="0" width="100" height="55" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" /><text x="50" y="20" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">HQ Camera</text><text x="50" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">12.3MP / レンズ交換</text><text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="7">高画質用途</text></g>
              <g transform="translate(60, 90)"><rect x="0" y="0" width="240" height="25" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" /><text x="120" y="16" textAnchor="middle" fill="#4a4a4a" fontSize="8">CSI端子にフレキシブルケーブルで接続</text></g>
            </g>
          </svg>
          <figcaption>用途に応じてカメラモジュールを選びます。</figcaption>
        </figure>
        <section><h2>接続と設定</h2><p>カメラモジュールはフレキシブルケーブルでCSI端子に接続します。現在のRaspberry Pi OS（Bookworm以降）ではカメラは自動検出されます。<code>rpicam-hello --list-cameras</code>コマンドで接続を確認できます。Pythonではpicamera2ライブラリを使います。</p></section>
        <PracticeToggle><h3>提案で使うと</h3><p>「画像検査をしたい」というお客様には、Raspberry Piとカメラモジュールの組み合わせを提案できます。「専用モジュールなので低遅延で、AIでの画像認識にも対応できます」と説明できます。</p></PracticeToggle>
        <div className="next-question"><h3>次の問い</h3><p>カメラで画像を撮影するプログラムは、どう書くのでしょうか。次の第71回で学びます。</p></div>
        <div className="memory-box"><h3>今日覚えること</h3><ol><li>専用カメラモジュールはCSI端子に接続し、低遅延で高性能です。</li><li>標準・NoIR(暗所向け)・HQ(高画質)などの種類があります。</li><li>libcameraコマンドやpicamera2ライブラリで制御します。</li></ol></div>
        <AskBox lessonId="70-camera-module" />

        <LessonNavigation currentLessonNumber={70} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
