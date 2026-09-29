import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson78Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={78} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 8: AI入門</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>AIで「映像を見る」とは、具体的に何をしているのですか？</p>
        </div>

        <h1>第78回: AIによる画像認識とは</h1>

        <section>
          <h2>概念: 画像を「理解する」AI</h2>
          <p>
            前フェーズで学んだカメラとOpenCVは、映像を「撮影」し「加工」するものでした。
            AIを使うと、映像の「中身を理解」できるようになります。
            たとえば「この画像に犬がいる」「この部品は不良品だ」といった判断が可能になります。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：従来のプログラムは「目」だけで、
            映像を見ることはできても意味は分かりませんでした。
            AIは「目＋脳」のようなもので、見たものが何かを判断できます。
            人間の赤ちゃんが「犬」を覚えるように、AIも画像を見て学習します。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" className="lesson-svg">
            <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">画像認識AIの仕組み</text>

            <rect x="30" y="50" width="80" height="60" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="5"/>
            <text x="70" y="75" textAnchor="middle" fontSize="10">📷</text>
            <text x="70" y="92" textAnchor="middle" fontSize="9">入力画像</text>

            <rect x="160" y="50" width="80" height="60" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="5"/>
            <text x="200" y="70" textAnchor="middle" fontSize="9">AIモデル</text>
            <text x="200" y="85" textAnchor="middle" fontSize="8">（学習済み）</text>
            <circle cx="180" cy="95" r="5" fill="#ef6c00"/>
            <circle cx="200" cy="95" r="5" fill="#ef6c00"/>
            <circle cx="220" cy="95" r="5" fill="#ef6c00"/>

            <rect x="290" y="50" width="80" height="60" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="330" y="75" textAnchor="middle" fontSize="10">結果</text>
            <text x="330" y="92" textAnchor="middle" fontSize="8">「犬: 95%」</text>

            <line x1="110" y1="80" x2="160" y2="80" stroke="#666" strokeWidth="2" markerEnd="url(#arrow78)"/>
            <line x1="240" y1="80" x2="290" y2="80" stroke="#666" strokeWidth="2" markerEnd="url(#arrow78)"/>

            <rect x="80" y="140" width="240" height="45" fill="#f5f5f5" stroke="#666" strokeWidth="1" rx="5"/>
            <text x="200" y="158" textAnchor="middle" fontSize="9" fontWeight="bold">学習とは？</text>
            <text x="200" y="175" textAnchor="middle" fontSize="8">大量の「犬の画像」と「犬というラベル」を見せて</text>
            <text x="200" y="185" textAnchor="middle" fontSize="8">「犬の特徴」を自動で覚えさせること</text>

            <defs>
              <marker id="arrow78" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
              </marker>
            </defs>
          </svg>
          <figcaption>図: 画像認識AIの基本的な流れ</figcaption>
        </figure>

        <section>
          <h2>AIが画像を理解する仕組み</h2>

          <h3>1. 学習（トレーニング）</h3>
          <p>
            AIは最初から賢いわけではありません。大量の画像と「正解」を見せることで、
            特徴を学習します。たとえば犬の画像を1万枚見せて「これは犬」と教えることで、
            AIは犬の特徴（耳の形、鼻の位置など）を自動的に学習します。
          </p>

          <h3>2. 推論（予測）</h3>
          <p>
            学習済みのAIに新しい画像を見せると、学習した特徴に基づいて
            「これは犬である確率95%」のように判断します。
            この判断を「推論」または「予測」と呼びます。
          </p>

          <h3>3. 信頼度（確信度）</h3>
          <p>
            AIの出力には「確信度」が付いています。「95%の確率で犬」という形式です。
            この数値が低いときは、AIが迷っている状態を示します。
          </p>
        </section>

        <section>
          <h2>画像認識AIの種類</h2>
          <ul>
            <li><strong>分類（Classification）</strong>: 画像全体が何かを判定（犬 or 猫）</li>
            <li><strong>検出（Detection）</strong>: 画像内の物体の位置を特定</li>
            <li><strong>セグメンテーション</strong>: ピクセル単位で領域を分類</li>
          </ul>
          <p>次回で、分類と検出の違いを詳しく学びます。</p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「AIで何ができるか」という質問に対して、「カメラで撮った映像の中身を
            自動で判断できます。たとえば製品の傷を検出したり、人の数を数えたり
            できます」と具体例を挙げて説明できます。学習データの準備が
            重要なことも伝えられます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>「分類」と「検出」は何が違うのですか？どう使い分けますか？</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>画像認識AIは「学習」で特徴を覚え「推論」で判断する</li>
            <li>AIの出力には信頼度（確率）が付いている</li>
            <li>分類・検出・セグメンテーションなど用途別の種類がある</li>
          </ol>
        </div>

        <AskBox lessonId="78-ai-vision-intro" />
      </main>
    </>
  )
}
