import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson74Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={74} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 7: Raspberry Pi+カメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>撮影した画像はどこに保存して、どう管理すればいいですか？</p>
        </div>

        <h1>第74回: 画像の保存と管理</h1>

        <section>
          <h2>概念: 画像ストレージの選択肢</h2>
          <p>
            カメラで撮影した画像を保存する方法は複数あります。それぞれに長所と短所があり、
            用途に応じて使い分けることが重要です。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：画像保存は「写真アルバムの選び方」に似ています。
            手元のアルバム（ローカルストレージ）は素早く見られますが、
            量に限りがあります。クラウドアルバム（リモートストレージ）は
            容量を気にせず保存できますが、見るのに時間がかかります。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" className="lesson-svg">
            <rect x="30" y="30" width="80" height="60" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="5"/>
            <text x="70" y="55" textAnchor="middle" fontSize="10">Raspberry Pi</text>
            <text x="70" y="70" textAnchor="middle" fontSize="8">SDカード</text>

            <rect x="160" y="30" width="80" height="60" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="5"/>
            <text x="200" y="55" textAnchor="middle" fontSize="10">USB</text>
            <text x="200" y="70" textAnchor="middle" fontSize="8">外付けSSD</text>

            <rect x="290" y="30" width="80" height="60" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="330" y="55" textAnchor="middle" fontSize="10">クラウド</text>
            <text x="330" y="70" textAnchor="middle" fontSize="8">S3/GCS</text>

            <line x1="110" y1="60" x2="160" y2="60" stroke="#666" strokeWidth="2" markerEnd="url(#arrow74)"/>
            <line x1="240" y1="60" x2="290" y2="60" stroke="#666" strokeWidth="2" markerEnd="url(#arrow74)"/>

            <rect x="30" y="120" width="340" height="50" fill="#f5f5f5" stroke="#666" strokeWidth="1" rx="5"/>
            <text x="200" y="140" textAnchor="middle" fontSize="10" fontWeight="bold">保存場所の比較</text>
            <text x="70" y="155" textAnchor="middle" fontSize="8">速い・容量小</text>
            <text x="200" y="155" textAnchor="middle" fontSize="8">速い・容量大</text>
            <text x="330" y="155" textAnchor="middle" fontSize="8">遅い・無制限</text>

            <defs>
              <marker id="arrow74" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
              </marker>
            </defs>
          </svg>
          <figcaption>図: 画像保存先の選択肢と特徴</figcaption>
        </figure>

        <section>
          <h2>保存方法の詳細</h2>

          <h3>1. ローカル保存（SDカード/SSD）</h3>
          <p>
            Raspberry Piに直接保存する方法です。最も簡単で高速ですが、
            ストレージ容量に制限があります。
          </p>
          <ul>
            <li><strong>SDカード</strong>: 32GB～128GB程度。書き込み寿命に注意</li>
            <li><strong>外付けSSD</strong>: 数TB可能。高速・長寿命</li>
          </ul>

          <h3>2. ネットワーク保存（NAS）</h3>
          <p>
            ローカルネットワーク上のストレージに保存します。
            複数のRaspberry Piから共有でき、容量も大きく取れます。
          </p>

          <h3>3. クラウド保存</h3>
          <p>
            AWS S3やGoogle Cloud Storageなどに保存します。
            容量無制限で、どこからでもアクセスできますが、
            通信コストと時間がかかります。
          </p>
        </section>

        <section>
          <h2>ファイル管理のポイント</h2>
          <ul>
            <li><strong>命名規則</strong>: 日時＋連番で一意に（例: 2024-01-15_001.jpg）</li>
            <li><strong>ディレクトリ構造</strong>: 日付やカメラ番号で分類</li>
            <li><strong>定期削除</strong>: 古いファイルを自動削除してディスクフル防止</li>
            <li><strong>メタデータ</strong>: 撮影条件をファイル名やDBに記録</li>
          </ul>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「監視カメラの映像保管をどうするか」という相談に対して、
            保存期間と容量の関係を説明できます。「1週間分ならローカルSSD、
            1ヶ月分ならクラウドと組み合わせましょう」といった
            具体的な提案が可能になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>常時稼働するRaspberry Piの電源管理は、どうすればいいですか？</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>ローカル保存は速いが容量制限あり。クラウドは容量無制限だが遅い</li>
            <li>外付けSSDはSDカードより高速で長寿命</li>
            <li>ファイル命名規則と定期削除でディスク管理</li>
          </ol>
        </div>

        <AskBox lessonId="74-image-storage" />

        <LessonNavigation currentLessonNumber={74} />
      </main>
    </>
  )
}
