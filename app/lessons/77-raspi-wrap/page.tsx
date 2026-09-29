import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson77Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={77} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 7: Raspberry Pi+カメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Raspberry Piで学んだことを、実務にどう活かせますか？</p>
        </div>

        <h1>第77回: Raspberry Piフェーズのまとめ</h1>

        <section>
          <h2>概念: Linuxベース開発の基礎</h2>
          <p>
            このフェーズでは、Linuxが動くRaspberry Piを使って、
            カメラ映像の取得からストリーミング配信までを学びました。
            これらの知識は、エッジAIや産業用カメラシステムの
            提案・導入に直接活かせます。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：Raspberry Piの学習は「運転免許を取る」
            ようなものです。基本操作（OS/SSH）を覚え、操作（GPIO/カメラ）を練習し、
            実践（ストリーミング）で腕を磨きました。これで「IoTの運転」ができます。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" className="lesson-svg">
            <text x="200" y="20" textAnchor="middle" fontSize="12" fontWeight="bold">PHASE 7 学習ロードマップ</text>

            <rect x="20" y="40" width="70" height="50" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="5"/>
            <text x="55" y="60" textAnchor="middle" fontSize="9">Pi入門</text>
            <text x="55" y="75" textAnchor="middle" fontSize="8">67-68</text>

            <rect x="100" y="40" width="70" height="50" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="135" y="60" textAnchor="middle" fontSize="9">GPIO/カメラ</text>
            <text x="135" y="75" textAnchor="middle" fontSize="8">69-71</text>

            <rect x="180" y="40" width="70" height="50" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="5"/>
            <text x="215" y="60" textAnchor="middle" fontSize="9">配信/処理</text>
            <text x="215" y="75" textAnchor="middle" fontSize="8">72-73</text>

            <rect x="260" y="40" width="70" height="50" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="5"/>
            <text x="295" y="60" textAnchor="middle" fontSize="9">運用</text>
            <text x="295" y="75" textAnchor="middle" fontSize="8">74-76</text>

            <rect x="340" y="40" width="50" height="50" fill="#ffebee" stroke="#c62828" strokeWidth="2" rx="5"/>
            <text x="365" y="60" textAnchor="middle" fontSize="9">まとめ</text>
            <text x="365" y="75" textAnchor="middle" fontSize="8">77</text>

            <line x1="90" y1="65" x2="100" y2="65" stroke="#666" strokeWidth="2" markerEnd="url(#arrow77)"/>
            <line x1="170" y1="65" x2="180" y2="65" stroke="#666" strokeWidth="2" markerEnd="url(#arrow77)"/>
            <line x1="250" y1="65" x2="260" y2="65" stroke="#666" strokeWidth="2" markerEnd="url(#arrow77)"/>
            <line x1="330" y1="65" x2="340" y2="65" stroke="#666" strokeWidth="2" markerEnd="url(#arrow77)"/>

            <rect x="40" y="110" width="320" height="70" fill="#f5f5f5" stroke="#666" strokeWidth="1" rx="5"/>
            <text x="200" y="130" textAnchor="middle" fontSize="10" fontWeight="bold">習得したスキル</text>
            <text x="110" y="150" textAnchor="middle" fontSize="8">✓ Linux/SSH操作</text>
            <text x="200" y="150" textAnchor="middle" fontSize="8">✓ GPIO制御</text>
            <text x="290" y="150" textAnchor="middle" fontSize="8">✓ カメラ操作</text>
            <text x="110" y="165" textAnchor="middle" fontSize="8">✓ ストリーミング</text>
            <text x="200" y="165" textAnchor="middle" fontSize="8">✓ OpenCV基礎</text>
            <text x="290" y="165" textAnchor="middle" fontSize="8">✓ 電源/ストレージ管理</text>

            <defs>
              <marker id="arrow77" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
              </marker>
            </defs>
          </svg>
          <figcaption>図: PHASE 7の学習内容全体像</figcaption>
        </figure>

        <section>
          <h2>学んだことの整理</h2>

          <h3>基礎知識</h3>
          <ul>
            <li><strong>Raspberry Piとは</strong>: Linuxが動く小型コンピュータ（67回）</li>
            <li><strong>OS/SSH</strong>: リモートからの操作方法（68回）</li>
            <li><strong>GPIO</strong>: センサーやLEDとの接続（69回）</li>
          </ul>

          <h3>カメラ活用</h3>
          <ul>
            <li><strong>カメラモジュール</strong>: 接続と設定方法（70回）</li>
            <li><strong>静止画撮影</strong>: libcameraコマンドの使い方（71回）</li>
            <li><strong>ストリーミング</strong>: リアルタイム映像配信（72回）</li>
            <li><strong>OpenCV</strong>: 画像処理の基礎（73回）</li>
          </ul>

          <h3>運用知識</h3>
          <ul>
            <li><strong>画像保存</strong>: ストレージの選択と管理（74回）</li>
            <li><strong>電源管理</strong>: 24時間稼働のための対策（75回）</li>
            <li><strong>機器選定</strong>: Raspberry Pi vs M5Stackの使い分け（76回）</li>
          </ul>
        </section>

        <section>
          <h2>実務への活かし方</h2>
          <ul>
            <li><strong>監視カメラ案件</strong>: カメラ選定から配信まで提案可能</li>
            <li><strong>検品システム</strong>: OpenCVでの異常検知を説明できる</li>
            <li><strong>PoC作成</strong>: 短期間でプロトタイプを構築できる</li>
            <li><strong>見積もり</strong>: 必要機材と構成を具体的に提示できる</li>
          </ul>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様から「工場の映像をリアルタイムで確認したい」という相談を受けたとき、
            「Raspberry Piとカメラモジュールで構築できます。初期費用は1万円程度、
            社内ネットワークでストリーミング配信できます」と具体的に提案できます。
            次のフェーズでは、この映像をAIで解析する方法を学びます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>カメラで撮った映像を「見る」のではなく「理解する」にはどうすればいいですか？（→AIフェーズへ）</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Raspberry Piは画像処理に強いLinuxベースのエッジデバイス</li>
            <li>カメラ＋ストリーミング＋OpenCVで映像活用システムが構築できる</li>
            <li>次はAIで映像を「理解」させる方法を学ぶ</li>
          </ol>
        </div>

        <AskBox lessonId="77-raspi-wrap" />
      </main>
    </>
  )
}
