import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson79Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={79} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 8: AI入門</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>画像の「分類」と「検出」は何が違うのですか？</p>
        </div>

        <h1>第79回: 分類と検出の違い</h1>

        <section>
          <h2>概念: 二つのアプローチ</h2>
          <p>
            画像認識には大きく「分類」と「検出」という二つのアプローチがあります。
            どちらを選ぶかは、解決したい問題によって決まります。
            この違いを理解することで、適切な技術を選択できるようになります。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：分類は「この写真は何の写真？」という質問です。
            検出は「この写真のどこに何がある？」という質問です。
            集合写真を見て「運動会の写真だ」と言うのが分類、
            「左から田中さん、鈴木さん、佐藤さん」と指すのが検出です。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 220" className="lesson-svg">
            <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">分類 vs 検出</text>

            <rect x="30" y="40" width="150" height="160" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="5"/>
            <text x="105" y="60" textAnchor="middle" fontSize="11" fontWeight="bold">分類 (Classification)</text>

            <rect x="50" y="75" width="110" height="70" fill="#fff" stroke="#999" strokeWidth="1"/>
            <circle cx="85" cy="110" r="15" fill="#ffa726"/>
            <circle cx="115" cy="115" r="12" fill="#ffa726"/>
            <text x="105" y="158" textAnchor="middle" fontSize="9">→ 「みかん: 98%」</text>

            <text x="105" y="180" textAnchor="middle" fontSize="8" fill="#1565c0">画像全体を1つのラベルに</text>
            <text x="105" y="192" textAnchor="middle" fontSize="8" fill="#1565c0">「何が写っているか」</text>

            <rect x="220" y="40" width="150" height="160" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="295" y="60" textAnchor="middle" fontSize="11" fontWeight="bold">検出 (Detection)</text>

            <rect x="240" y="75" width="110" height="70" fill="#fff" stroke="#999" strokeWidth="1"/>
            <circle cx="270" cy="105" r="15" fill="#ffa726"/>
            <rect x="258" y="88" width="24" height="34" fill="none" stroke="#c62828" strokeWidth="2"/>
            <circle cx="315" cy="115" r="12" fill="#ffa726"/>
            <rect x="301" y="101" width="28" height="28" fill="none" stroke="#c62828" strokeWidth="2"/>
            <text x="295" y="158" textAnchor="middle" fontSize="9">→ 位置＋ラベル×2</text>

            <text x="295" y="180" textAnchor="middle" fontSize="8" fill="#2e7d32">物体ごとに位置を特定</text>
            <text x="295" y="192" textAnchor="middle" fontSize="8" fill="#2e7d32">「どこに何があるか」</text>
          </svg>
          <figcaption>図: 分類は画像全体を判定、検出は個々の物体の位置を特定</figcaption>
        </figure>

        <section>
          <h2>分類（Classification）</h2>
          <p>
            画像全体に対して「これは何か」を判定します。
          </p>
          <ul>
            <li><strong>出力</strong>: ラベル（カテゴリ）と確信度</li>
            <li><strong>例</strong>: 「この画像は猫（95%）」</li>
            <li><strong>用途</strong>: 製品の良品/不良品判定、画像の分類整理</li>
            <li><strong>特徴</strong>: 処理が軽く、高速</li>
          </ul>
        </section>

        <section>
          <h2>検出（Detection）</h2>
          <p>
            画像内の物体の「位置」と「種類」を同時に特定します。
          </p>
          <ul>
            <li><strong>出力</strong>: バウンディングボックス（矩形）＋ラベル＋確信度</li>
            <li><strong>例</strong>: 「座標(100,50)-(200,150)に猫（90%）」</li>
            <li><strong>用途</strong>: 人数カウント、車両検知、棚の在庫確認</li>
            <li><strong>特徴</strong>: 分類より処理が重いが、詳細な情報が得られる</li>
          </ul>
        </section>

        <section>
          <h2>使い分けの基準</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f5f5f5' }}>判断基準</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f5f5f5' }}>分類</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f5f5f5' }}>検出</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>位置が必要か</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>不要</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>必要</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>複数物体があるか</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>1つ</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>複数</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>処理速度</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>高速</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>やや遅い</td>
              </tr>
            </tbody>
          </table>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「製品検査をAIでやりたい」という相談に対して、「製品が1個ずつ流れてくるなら
            分類モデルで良品/不良品を判定、複数の部品が写る画像なら検出モデルで
            個々の部品を見つけて判定します」と使い分けを説明できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>AIモデルは中で何をしているのですか？（直感的な理解）</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>分類は「画像全体が何か」を判定。出力はラベルと確信度</li>
            <li>検出は「どこに何があるか」を特定。出力は位置＋ラベル＋確信度</li>
            <li>位置情報や複数物体が必要なら検出、そうでなければ分類を選ぶ</li>
          </ol>
        </div>

        <AskBox lessonId="79-classification-detection" />
      </main>
    </>
  )
}
