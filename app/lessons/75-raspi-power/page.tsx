import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson75Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={75} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
        <p className="lesson-meta">PHASE 7: Raspberry Pi+カメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Raspberry Piを安全に24時間稼働させるには、電源をどう管理すればいいですか？</p>
        </div>

        <h1>第75回: Raspberry Piの電源管理</h1>

        <section>
          <h2>概念: 安定電源の重要性</h2>
          <p>
            Raspberry Piはパソコンと同じように、不安定な電源や突然の電源断に弱いデバイスです。
            SDカードへの書き込み中に電源が切れると、データが壊れることがあります。
            24時間稼働させるには、適切な電源管理が不可欠です。
          </p>

          <div className="analogy">
            <strong>たとえ話</strong>：電源管理は「心臓の安定」に似ています。
            動悸があると体調を崩すように、電圧が不安定だとRaspberry Piも
            「調子を崩し」ます。安定した電源は健康の基本です。
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 200" className="lesson-svg">
            <rect x="20" y="60" width="70" height="80" fill="#e3f2fd" stroke="#1565c0" strokeWidth="2" rx="5"/>
            <text x="55" y="95" textAnchor="middle" fontSize="10">コンセント</text>
            <text x="55" y="110" textAnchor="middle" fontSize="8">AC 100V</text>

            <rect x="120" y="60" width="70" height="80" fill="#fff3e0" stroke="#ef6c00" strokeWidth="2" rx="5"/>
            <text x="155" y="85" textAnchor="middle" fontSize="10">UPS</text>
            <text x="155" y="100" textAnchor="middle" fontSize="8">無停電</text>
            <text x="155" y="115" textAnchor="middle" fontSize="8">電源装置</text>
            <rect x="130" y="120" width="50" height="10" fill="#4caf50" stroke="none"/>
            <text x="155" y="128" textAnchor="middle" fontSize="6" fill="white">バッテリー</text>

            <rect x="220" y="60" width="70" height="80" fill="#f3e5f5" stroke="#7b1fa2" strokeWidth="2" rx="5"/>
            <text x="255" y="90" textAnchor="middle" fontSize="10">電源アダプタ</text>
            <text x="255" y="105" textAnchor="middle" fontSize="8">Pi4: 5V 3A</text>
            <text x="255" y="118" textAnchor="middle" fontSize="8">Pi5: 5V 5A</text>

            <rect x="320" y="60" width="70" height="80" fill="#e8f5e9" stroke="#2e7d32" strokeWidth="2" rx="5"/>
            <text x="355" y="95" textAnchor="middle" fontSize="10">Raspberry</text>
            <text x="355" y="110" textAnchor="middle" fontSize="10">Pi</text>

            <line x1="90" y1="100" x2="120" y2="100" stroke="#666" strokeWidth="2" markerEnd="url(#arrow75)"/>
            <line x1="190" y1="100" x2="220" y2="100" stroke="#666" strokeWidth="2" markerEnd="url(#arrow75)"/>
            <line x1="290" y1="100" x2="320" y2="100" stroke="#666" strokeWidth="2" markerEnd="url(#arrow75)"/>

            <text x="200" y="25" textAnchor="middle" fontSize="12" fontWeight="bold">推奨電源構成</text>
            <text x="200" y="180" textAnchor="middle" fontSize="9" fill="#666">停電時もバッテリーで安全にシャットダウン可能</text>

            <defs>
              <marker id="arrow75" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#666"/>
              </marker>
            </defs>
          </svg>
          <figcaption>図: UPSを使った安定電源構成</figcaption>
        </figure>

        <section>
          <h2>電源管理の基本</h2>

          <h3>1. 適切な電源アダプタ</h3>
          <p>
            Raspberry Piには十分な電流を供給できるアダプタが必要です。
            モデルによって必要な電力が異なります。
          </p>
          <ul>
            <li><strong>Pi 4</strong>: 5V 3A（15W）の公式電源推奨</li>
            <li><strong>Pi 5</strong>: 5V 5A（27W）の公式USB-C電源推奨。3Aでも動作しますが、USBポートの出力が制限されます</li>
            <li><strong>USB-Cケーブル</strong>: 太く短いものを選ぶ（電圧降下防止）</li>
            <li><strong>警告表示</strong>: 画面右上の稲妻マーク=電力不足</li>
          </ul>

          <h3>2. UPS（無停電電源装置）</h3>
          <p>
            停電時にバッテリーで電力を供給し、安全なシャットダウン時間を確保します。
            Raspberry Pi向けの小型UPSも販売されています。
          </p>

          <h3>3. 安全なシャットダウン</h3>
          <p>
            電源を直接抜くのではなく、必ず<code>sudo shutdown -h now</code>で
            シャットダウンしてから電源を切ります。これはデータ破損を防ぐ基本です。
          </p>
        </section>

        <section>
          <h2>長期運用のコツ</h2>
          <ul>
            <li><strong>放熱</strong>: ヒートシンクやファンで温度管理</li>
            <li><strong>再起動スケジュール</strong>: 週1回の定期再起動でメモリリーク対策</li>
            <li><strong>監視</strong>: 温度やCPU使用率をリモート監視</li>
            <li><strong>Read-Onlyモード</strong>: SDカード保護のためのオプション</li>
          </ul>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            「工場で24時間動かしたいが停電が心配」という相談に対して、
            UPSの必要性を説明できます。「停電を検知したら自動シャットダウンする
            仕組みも作れます。月に1回は再起動をお勧めします」といった
            運用面のアドバイスが可能になります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Raspberry PiとM5Stackは、どのように使い分けるべきですか？</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Pi 4は5V 3A、Pi 5は5V 5A（27W）の電源が必要。稲妻マークは電力不足の警告</li>
            <li>UPSで停電時も安全シャットダウンが可能になる</li>
            <li>電源は直接抜かず、必ずshutdownコマンドを使う</li>
          </ol>
        </div>

        <AskBox lessonId="75-raspi-power" />

        <LessonNavigation currentLessonNumber={75} />
      </main>
    </>
  )
}
