import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson80Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={80} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 8: AI入門</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>画像認識AIは、中でどのような処理をしているのですか？</p>
        </div>

        <h1>第80回: 画像モデルの直感的理解</h1>

        <section>
          <h2>概念: AIが「見る」仕組み</h2>
          <p>
            画像認識AIの中身は複雑ですが、直感的に理解することは可能です。
            詳細な数学を知らなくても、「何をしているか」を把握することで、
            AIの可能性と限界を正しく理解できるようになります。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：AIの仕組みは「多層の審査員」に似ています。
            最初の審査員は「線や色」を見て、次の審査員は「形」を見て、
            さらに次は「部品」を見て、最後の審査員が「全体」を判断します。
            各審査員は前の審査員の結果を元に判断を積み重ねていきます。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" className="lesson-svg">
            <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">ニューラルネットワークの直感的理解</text>

            <rect x="20" y="50" width="50" height="50" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="3"/>
            <text x="45" y="70" textAnchor="middle" fontSize="8">入力</text>
            <text x="45" y="83" textAnchor="middle" fontSize="8">画像</text>

            <rect x="90" y="40" width="50" height="70" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="3"/>
            <text x="115" y="58" textAnchor="middle" fontSize="7">第1層</text>
            <text x="115" y="70" textAnchor="middle" fontSize="6">エッジ</text>
            <text x="115" y="80" textAnchor="middle" fontSize="6">色</text>
            <line x1="100" y1="88" x2="130" y2="88" stroke="#ef6c00" strokeWidth="1"/>
            <line x1="100" y1="95" x2="130" y2="95" stroke="#ef6c00" strokeWidth="1"/>

            <rect x="160" y="40" width="50" height="70" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="3"/>
            <text x="185" y="58" textAnchor="middle" fontSize="7">第2層</text>
            <text x="185" y="70" textAnchor="middle" fontSize="6">形</text>
            <text x="185" y="80" textAnchor="middle" fontSize="6">パターン</text>
            <circle cx="175" cy="93" r="5" fill="none" stroke="#7b1fa2" strokeWidth="1"/>
            <rect x="185" y="88" width="10" height="10" fill="none" stroke="#7b1fa2" strokeWidth="1"/>

            <rect x="230" y="40" width="50" height="70" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="3"/>
            <text x="255" y="58" textAnchor="middle" fontSize="7">第3層</text>
            <text x="255" y="70" textAnchor="middle" fontSize="6">部品</text>
            <text x="255" y="80" textAnchor="middle" fontSize="6">耳・目</text>
            <text x="255" y="95" textAnchor="middle" fontSize="10">👁️</text>

            <rect x="300" y="40" width="50" height="70" fill="#ffebee" stroke="#c62828" strokeWidth="2" rx="3"/>
            <text x="325" y="58" textAnchor="middle" fontSize="7">最終層</text>
            <text x="325" y="70" textAnchor="middle" fontSize="6">全体</text>
            <text x="325" y="85" textAnchor="middle" fontSize="8">🐱</text>
            <text x="325" y="100" textAnchor="middle" fontSize="6">猫!</text>

            <line x1="70" y1="75" x2="90" y2="75" stroke="#666" strokeWidth="1" markerEnd="url(#arrow80)"/>
            <line x1="140" y1="75" x2="160" y2="75" stroke="#666" strokeWidth="1" markerEnd="url(#arrow80)"/>
            <line x1="210" y1="75" x2="230" y2="75" stroke="#666" strokeWidth="1" markerEnd="url(#arrow80)"/>
            <line x1="280" y1="75" x2="300" y2="75" stroke="#666" strokeWidth="1" markerEnd="url(#arrow80)"/>

            <rect x="60" y="140" width="280" height="60" fill="#f5f5f5" stroke="#666" strokeWidth="1" rx="5"/>
            <text x="200" y="158" textAnchor="middle" fontSize="9" fontWeight="bold">各層の役割</text>
            <text x="200" y="175" textAnchor="middle" fontSize="8">前の層の出力を入力として、より高度な特徴を抽出</text>
            <text x="200" y="190" textAnchor="middle" fontSize="8">浅い層→単純な特徴、深い層→複雑な特徴</text>

            <defs>
              <marker id="arrow80" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
              </marker>
            </defs>
          </svg>
          <figcaption>図: ニューラルネットワークの層ごとの特徴抽出</figcaption>
        </figure>

        <section>
          <h2>ニューラルネットワークの仕組み</h2>

          <h3>1. 層（レイヤー）による特徴抽出</h3>
          <p>
            AIは複数の「層」を重ねた構造をしています。
            各層は前の層の出力を受け取り、より高度な特徴を抽出します。
          </p>
          <ul>
            <li><strong>浅い層</strong>: 線、エッジ、色などの単純な特徴</li>
            <li><strong>中間層</strong>: 形、パターン、テクスチャ</li>
            <li><strong>深い層</strong>: 目、耳、車輪などの部品</li>
            <li><strong>最終層</strong>: 全体を見て「猫」「車」などと判断</li>
          </ul>

          <h3>2. 重み（ウェイト）の学習</h3>
          <p>
            各層には「重み」というパラメータがあり、学習によって調整されます。
            正しく判断できるように重みが自動で調整されることが「学習」です。
            この重みの数が「モデルのサイズ」として表されます（数百万〜数十億個）。
          </p>

          <h3>3. 事前学習モデル</h3>
          <p>
            大量の画像で学習済みのモデル（ImageNet学習済みなど）を利用すると、
            少ない追加学習で自分の目的に合ったAIが作れます。
            これを「転移学習」や「ファインチューニング」と呼びます。
          </p>
        </section>

        <section>
          <h2>AIの限界を知る</h2>
          <ul>
            <li><strong>学習データ依存</strong>: 見たことがないものは判断できない</li>
            <li><strong>ブラックボックス</strong>: なぜその判断をしたか説明が難しい</li>
            <li><strong>誤判定</strong>: 100%の精度は不可能。閾値で調整が必要</li>
            <li><strong>環境依存</strong>: 照明や角度の変化に弱いことがある</li>
          </ul>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「AIは万能ですか」という質問に対して、「AIは大量のデータから特徴を学習して
            判断しますが、学習データにない状況では誤判定することもあります。
            導入時は実環境でのテストが重要です」と現実的な説明ができます。
            過度な期待を抑えつつ、正しい活用方法を提案できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>ここまで学んだ知識を、どのように実務の提案に活かせますか？（→次フェーズへ続く）</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>AIは複数の層で単純→複雑な特徴を段階的に抽出する</li>
            <li>学習とは「重み」を正しく調整すること。事前学習モデルを活用できる</li>
            <li>AIには限界がある。学習データ外の状況や100%精度は期待しない</li>
          </ol>
        </div>

        <AskBox lessonId="80-image-model-intuition" />

        <LessonNavigation currentLessonNumber={80} />
      </main>
    </>
  )
}
