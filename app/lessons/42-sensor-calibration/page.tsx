import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import Link from 'next/link'

export default function Lesson42Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={42} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 4: センサーで世界を測る</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>センサーの値が「正確な基準」からずれているとき、どうやって直せばよいでしょうか。「校正」とは何でしょうか。</p>
        </div>

        <h1>第42回: センサーの校正</h1>

        <section>
          <h2>概念: 校正とは「基準に合わせる」こと</h2>
          <p>
            <Link href="/lessons/41-sensor-noise">前回</Link>学んだノイズは「値の揺れ」でしたが、
            今回学ぶ「ずれ」は別の問題です。
            たとえば、本当は25℃なのにセンサーが常に26℃と表示するなら、
            それは1℃ずれています。この「系統的なずれ」を直すのが校正です。
          </p>
          <p>
            校正は、信頼できる基準（たとえば校正済みの温度計）と比較して、
            センサーの値を調整する作業です。
            英語ではCalibration（キャリブレーション）と呼びます。
            定期的に校正を行うことで、センサーの精度を維持できます。
          </p>

          <div className="analogy">
            <span className="analogy-term">校正</span>
            <span className="analogy-equals">=</span>
            <span>基準と比較して、センサーの値を正しく調整すること</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">校正前と校正後</text>
              
              <g transform="translate(20, 25)">
                <text x="60" y="0" textAnchor="middle" fill="#c0392b" fontSize="10" fontWeight="500">校正前</text>
                <rect x="0" y="10" width="120" height="60" rx="5" fill="#ffcccc" stroke="#c0392b" strokeWidth="2" />
                <text x="60" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="9">基準: 25.0℃</text>
                <text x="60" y="55" textAnchor="middle" fill="#c0392b" fontSize="11" fontWeight="600">センサー: 26.2℃</text>
                <text x="60" y="85" textAnchor="middle" fill="#c0392b" fontSize="9">+1.2℃ ずれている</text>
              </g>
              
              <g transform="translate(160, 40)">
                <line x1="0" y1="15" x2="40" y2="15" stroke="#4a4a4a" strokeWidth="2" />
                <polygon points="35,10 45,15 35,20" fill="#4a4a4a" />
                <text x="20" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="8">校正作業</text>
              </g>
              
              <g transform="translate(220, 25)">
                <text x="60" y="0" textAnchor="middle" fill="#27ae60" fontSize="10" fontWeight="500">校正後</text>
                <rect x="0" y="10" width="120" height="60" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="60" y="35" textAnchor="middle" fill="#4a4a4a" fontSize="9">基準: 25.0℃</text>
                <text x="60" y="55" textAnchor="middle" fill="#27ae60" fontSize="11" fontWeight="600">センサー: 25.0℃</text>
                <text x="60" y="85" textAnchor="middle" fill="#27ae60" fontSize="9">ずれが解消された</text>
              </g>
              
              <g transform="translate(40, 130)">
                <rect x="0" y="0" width="280" height="30" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="1" rx="3" />
                <text x="140" y="19" textAnchor="middle" fill="#3b6ea5" fontSize="9">校正 = センサー値を基準に合わせて補正する作業</text>
              </g>
            </g>
          </svg>
          <figcaption>校正によって、センサーの値を正確な基準に合わせます。</figcaption>
        </figure>

        <section>
          <h2>校正の方法: オフセットと傾き</h2>
          <p>
            校正には主に2つの調整があります。
            「オフセット調整」は、値を一定量ずらす方法です。
            センサーが常に+1℃高く表示するなら、読み取り値から1を引きます。
          </p>
          <p>
            「傾き調整（ゲイン調整）」は、値を一定の割合で補正する方法です。
            たとえば、センサーが50℃を52℃と表示し、0℃を0℃と表示するなら、
            傾きがずれています。読み取り値に0.96を掛けて補正します。
          </p>
          <p>
            実際の校正では、複数の基準点（たとえば0℃と100℃）で比較し、
            オフセットと傾きの両方を調整します。
            これを「2点校正」と呼びます。
          </p>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">2点校正の考え方</text>
              
              <line x1="50" y1="20" x2="50" y2="120" stroke="#4a4a4a" strokeWidth="1" />
              <line x1="50" y1="120" x2="320" y2="120" stroke="#4a4a4a" strokeWidth="1" />
              <text x="35" y="25" textAnchor="end" fill="#4a4a4a" fontSize="8">高</text>
              <text x="35" y="115" textAnchor="end" fill="#4a4a4a" fontSize="8">低</text>
              <text x="55" y="135" fill="#4a4a4a" fontSize="8">基準点1</text>
              <text x="295" y="135" fill="#4a4a4a" fontSize="8">基準点2</text>
              
              <line x1="70" y1="100" x2="300" y2="30" stroke="#27ae60" strokeWidth="2" />
              <text x="310" y="25" fill="#27ae60" fontSize="8">理想</text>
              
              <line x1="70" y1="110" x2="300" y2="25" stroke="#c0392b" strokeWidth="2" strokeDasharray="5,3" />
              <text x="310" y="18" fill="#c0392b" fontSize="8">ずれ</text>
              
              <circle cx="70" cy="100" r="4" fill="#3b6ea5" />
              <circle cx="300" cy="30" r="4" fill="#3b6ea5" />
              <text x="70" y="90" textAnchor="middle" fill="#3b6ea5" fontSize="7">0℃</text>
              <text x="300" y="45" textAnchor="middle" fill="#3b6ea5" fontSize="7">100℃</text>
            </g>
          </svg>
          <figcaption>2点で比較し、オフセット(上下のずれ)と傾き(角度のずれ)を調整します。</figcaption>
        </figure>

        <section>
          <h2>校正の頻度と記録</h2>
          <p>
            センサーは時間とともに特性が変化することがあります。
            これを「ドリフト」と呼びます。
            そのため、定期的な校正が必要です。
            頻度は用途によりますが、重要な測定では月1回や年1回の校正を行います。
          </p>
          <p>
            工業用途では、校正の記録を残すことが求められます。
            「いつ」「どの基準で」「誰が」校正したかを記録しておくと、
            測定値の信頼性を証明できます。
            これをトレーサビリティと呼びます。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            お客様が「センサーの値が正確か不安」と言われたら、
            校正の提案ができます。
            「基準となる測定器と比較して、ずれを補正しましょう」と説明します。
          </p>
          <p>
            定期校正のスケジュールや、校正記録の管理方法も提案すると、
            システム全体の信頼性が上がります。
            「年に1回の校正で、±0.5℃以内の精度を維持できます」のように、
            具体的な数字で説明すると分かりやすくなります。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>1つのセンサーでは得られない情報を、複数のセンサーを組み合わせることで得る方法があります。「センサーフュージョン」とは何でしょうか。次の第43回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>校正は、センサーの値を信頼できる基準に合わせる作業です。</li>
            <li>オフセット(一定量のずれ)と傾き(比率のずれ)を調整します。</li>
            <li>定期的な校正と記録が、測定値の信頼性を保ちます。</li>
          </ol>
        </div>

        <AskBox lessonId="42-sensor-calibration" />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
