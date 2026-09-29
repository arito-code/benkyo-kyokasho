import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson43Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={43} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>複数のセンサーを組み合わせると、1つでは得られない情報が得られることがあります。「センサーフュージョン」とは何でしょうか。</p>
        </div>

        <h1>第43回: センサーの組み合わせ</h1>

        <section>
          <h2>概念: センサーフュージョンとは「合わせて賢く」</h2>
          <p>
            1つのセンサーには得意・不得意があります。
            たとえば、<Link href="/lessons/36-accel-sensor">加速度センサー</Link>は短時間の動きを正確に測れますが、
            長時間では誤差が積み重なります。
            一方、<Link href="/lessons/38-magnetic-sensor">地磁気センサー</Link>は絶対方位を知れますが、
            近くの金属に影響されやすいです。
          </p>
          <p>
            この2つを組み合わせると、お互いの欠点を補って、
            より正確な方位情報が得られます。
            このように、複数のセンサーの情報を統合して、
            より高品質な情報を得る技術を「センサーフュージョン」と呼びます。
          </p>

          <div className="analogy">
            <span className="analogy-term">センサーフュージョン</span>
            <span className="analogy-equals">=</span>
            <span>複数のセンサーを合わせて、1つより賢い情報を得る</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">センサーフュージョンの考え方</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="90" height="45" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">センサーA</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">得意: 短期の動き</text>
              </g>
              
              <g transform="translate(20, 80)">
                <rect x="0" y="0" width="90" height="45" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="45" y="20" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">センサーB</text>
                <text x="45" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">得意: 絶対方位</text>
              </g>
              
              <g transform="translate(130, 55)">
                <line x1="0" y1="0" x2="40" y2="20" stroke="#4a4a4a" strokeWidth="2" />
                <line x1="0" y1="50" x2="40" y2="30" stroke="#4a4a4a" strokeWidth="2" />
              </g>
              
              <g transform="translate(180, 50)">
                <rect x="0" y="0" width="80" height="50" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="22" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">フュージョン</text>
                <text x="40" y="38" textAnchor="middle" fill="#4a4a4a" fontSize="7">統合処理</text>
              </g>
              
              <g transform="translate(270, 60)">
                <line x1="0" y1="15" x2="30" y2="15" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="25,10 35,15 25,20" fill="#4a4a4a" />
              </g>
              
              <g transform="translate(310, 45)">
                <rect x="0" y="0" width="40" height="50" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="20" y="22" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">より</text>
                <text x="20" y="38" textAnchor="middle" fill="#c0392b" fontSize="9" fontWeight="500">正確</text>
              </g>
              
              <g transform="translate(40, 140)">
                <rect x="0" y="0" width="260" height="25" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="130" y="16" textAnchor="middle" fill="#4a4a4a" fontSize="9">お互いの弱点を補い合って、より良い結果を出す</text>
              </g>
            </g>
          </svg>
          <figcaption>複数のセンサーを組み合わせて、1つより高品質な情報を得ます。</figcaption>
        </figure>

        <section>
          <h2>よくある組み合わせ例</h2>
          <p>
            スマートフォンには多くのセンサーフュージョンが使われています。
            「9軸センサー」は、加速度3軸+ジャイロ3軸+地磁気3軸を組み合わせて、
            安定した姿勢・方位情報を提供します。
            ドローンや自動運転にも同じ技術が使われています。
          </p>
          <p>
            温度と湿度を同時に測る<Link href="/lessons/35-humidity-sensor">DHT22</Link>は、
            両方のデータから「不快指数」や「結露リスク」を計算できます。
            これも一種のセンサーフュージョンと言えます。
          </p>
          <p>
            工場の予知保全では、振動センサーと温度センサーを組み合わせて、
            「振動が増えて温度も上がっている」ときに異常と判断する、
            といった使い方もあります。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">センサーフュージョンの例</text>
              
              <g transform="translate(20, 25)">
                <rect x="0" y="0" width="100" height="90" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="9" fontWeight="500">9軸センサー</text>
                <text x="50" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="7">加速度3軸</text>
                <text x="50" y="50" textAnchor="middle" fill="#4a4a4a" fontSize="7">ジャイロ3軸</text>
                <text x="50" y="65" textAnchor="middle" fill="#4a4a4a" fontSize="7">地磁気3軸</text>
                <text x="50" y="82" textAnchor="middle" fill="#3b6ea5" fontSize="7">→ 姿勢・方位</text>
              </g>
              
              <g transform="translate(140, 25)">
                <rect x="0" y="0" width="100" height="90" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#27ae60" fontSize="9" fontWeight="500">環境センサー</text>
                <text x="50" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度</text>
                <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">湿度</text>
                <text x="50" y="82" textAnchor="middle" fill="#27ae60" fontSize="7">→ 不快指数・結露</text>
              </g>
              
              <g transform="translate(260, 25)">
                <rect x="0" y="0" width="100" height="90" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="50" y="18" textAnchor="middle" fill="#f39c12" fontSize="9" fontWeight="500">予知保全</text>
                <text x="50" y="40" textAnchor="middle" fill="#4a4a4a" fontSize="7">振動</text>
                <text x="50" y="55" textAnchor="middle" fill="#4a4a4a" fontSize="7">温度</text>
                <text x="50" y="82" textAnchor="middle" fill="#f39c12" fontSize="7">→ 異常検知</text>
              </g>
            </g>
          </svg>
          <figcaption>用途に応じてセンサーを組み合わせると、より高度な判断ができます。</figcaption>
        </figure>

        <section>
          <h2>Phase 4のまとめ</h2>
          <p>
            Phase 4では、さまざまなセンサーと、その選び方・扱い方を学びました。
            <Link href="/lessons/40-choosing-sensors">第40回</Link>で「課題→物理量→センサー」の流れを学び、
            <Link href="/lessons/41-sensor-noise">第41回</Link>でノイズ対策、
            <Link href="/lessons/42-sensor-calibration">第42回</Link>で校正、
            そして今回のセンサーフュージョンまで、センサーを「使いこなす」知識が揃いました。
          </p>
          <p>
            次のPhase 5では、M5Stackという小さなコンピュータを使って、
            センサーの値を画面に表示したり、インターネットに送ったりする方法を学びます。
            センサーの知識を活かして、実際に動くシステムを作っていきましょう。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様が「1つのセンサーでは判断できない」課題を持っているとき、
            センサーフュージョンの提案ができます。
            「温度だけでなく、振動も見ることで、より確実に異常を検知できます」
            と説明できます。
          </p>
          <p>
            ただし、センサーを増やすとコストも複雑さも増えます。
            本当に必要かどうかを見極め、
            「この組み合わせで、〇〇という課題が解決できます」と
            具体的なメリットを説明しましょう。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>Phase 4「センサーで世界を測る」は以上です。Phase 5では、M5Stackを使ってセンサーデータを活用する方法を学びます。M5Stackとは何でしょうか。次の第44回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>センサーフュージョンは、複数のセンサーを組み合わせて高品質な情報を得る技術です。</li>
            <li>お互いの弱点を補い合うことで、1つより正確な結果が得られます。</li>
            <li>9軸センサー、環境センサー、予知保全などで活用されています。</li>
          </ol>
        </div>

        <AskBox lessonId="43-sensor-fusion" />

        <LessonNavigation currentLessonNumber={43} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
