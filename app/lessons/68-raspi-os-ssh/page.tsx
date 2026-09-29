import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson68Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={68} ready={true} />
        <div style={{ marginBottom: 'var(--spacing-md)' }}><Link href="/">← ホームに戻る</Link></div>
        <p className="lesson-meta">PHASE 7: Raspberry Piとカメラ</p>
        <div className="question-box">
          <h2>今日の問い</h2>
          <p>Raspberry PiにOSをインストールし、リモートでアクセスするには、どうすればよいでしょうか。</p>
        </div>
        <h1>第68回: OSのインストールとSSH</h1>
        <section>
          <h2>概念: OSはmicroSDカードに書き込む</h2>
          <p>Raspberry PiのOSはmicroSDカードにインストールします。公式の「Raspberry Pi Imager」というツールを使うと、OS選択からSDカードへの書き込みまで簡単にできます。OSは「Raspberry Pi OS」が標準で、Debian Linuxベースです。</p>
          <div className="analogy">
            <span className="analogy-term">OS準備</span>
            <span className="analogy-equals">=</span>
            <span>Raspberry Pi Imagerで、SDカードにOSを書き込む</span>
          </div>
        </section>
        <figure className="svg-figure">
          <svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(20, 20)">
              <text x="180" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">セットアップの流れ</text>
              <g transform="translate(20, 30)">
                <rect x="0" y="0" width="80" height="40" rx="3" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="#3b6ea5" fontSize="8">1. Imagerで</text>
                <text x="40" y="32" textAnchor="middle" fill="#3b6ea5" fontSize="8">SDに書込み</text>
              </g>
              <g transform="translate(105, 45)"><line x1="0" y1="5" x2="20" y2="5" stroke="#4a4a4a" strokeWidth="2" /><polygon points="15,0 25,5 15,10" fill="#4a4a4a" /></g>
              <g transform="translate(130, 30)">
                <rect x="0" y="0" width="80" height="40" rx="3" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="#27ae60" fontSize="8">2. SDをPiに</text>
                <text x="40" y="32" textAnchor="middle" fill="#27ae60" fontSize="8">挿入して起動</text>
              </g>
              <g transform="translate(215, 45)"><line x1="0" y1="5" x2="20" y2="5" stroke="#4a4a4a" strokeWidth="2" /><polygon points="15,0 25,5 15,10" fill="#4a4a4a" /></g>
              <g transform="translate(240, 30)">
                <rect x="0" y="0" width="80" height="40" rx="3" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="#f39c12" fontSize="8">3. SSHで</text>
                <text x="40" y="32" textAnchor="middle" fill="#f39c12" fontSize="8">リモート接続</text>
              </g>
              <g transform="translate(40, 85)">
                <rect x="0" y="0" width="280" height="35" fill="#f8f9fa" stroke="#4a4a4a" strokeWidth="1" rx="3" />
                <text x="140" y="14" textAnchor="middle" fill="#4a4a4a" fontSize="8">ImagerでWi-Fi/SSHを事前設定しておくと便利</text>
                <text x="140" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="8">ssh ユーザー名@raspberrypi.local でアクセス</text>
              </g>
            </g>
          </svg>
          <figcaption>Imagerで書き込み、起動後はSSHでリモート操作できます。</figcaption>
        </figure>
        <section>
          <h2>SSHでリモート接続</h2>
          <p>SSH(Secure Shell)を使うと、PCからRaspberry Piにリモート接続できます。ディスプレイやキーボードをつながなくても、コマンドラインで操作できます。Raspberry Pi Imagerで書き込み時にSSHを有効化しておくと便利です。</p>
        </section>
        <section>
          <h2>ヘッドレスセットアップ</h2>
          <p>ディスプレイなしで初期設定する方法を「ヘッドレスセットアップ」と呼びます。Imagerの詳細設定でWi-Fi情報とSSHを設定しておけば、起動後すぐにSSH接続できます。IoT用途ではこの方法が一般的です。</p>
        </section>
        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>「Raspberry Piはディスプレイなしでも使えます。SSHでリモート操作できるので、設置場所を選びません」と説明できます。現場に設置した後も、PCから遠隔で設定変更やプログラム更新ができることをアピールしましょう。</p>
        </PracticeToggle>
        <div className="next-question">
          <h3>次の問い</h3>
          <p>Raspberry PiでLEDやセンサーを制御する「GPIO」はどう使うのでしょうか。次の第69回で学びます。</p>
        </div>
        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>Raspberry Pi Imagerで、microSDカードにOSを書き込みます。</li>
            <li>SSHを使うと、ディスプレイなしでリモート操作できます。</li>
            <li>ImagerでWi-Fi/SSHを事前設定する「ヘッドレスセットアップ」が便利です。</li>
          </ol>
        </div>
        <AskBox lessonId="68-raspi-os-ssh" />

        <LessonNavigation currentLessonNumber={68} />
        <div style={{ marginTop: 'var(--spacing-lg)' }}><Link href="/">← ホームに戻る</Link></div>
      </main>
    </>
  )
}
