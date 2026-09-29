import Header from '@/components/Header'
import PracticeToggle from '@/components/PracticeToggle'
import LessonIllustration from '@/components/illustrations/LessonIllustration'
import AskBox from '@/components/AskBox'
import LessonNavigation from '@/components/LessonNavigation'
import Link from 'next/link'

export default function Lesson48Page() {
  return (
    <>
      <Header />
      <main>
        <LessonIllustration lessonNumber={48} ready={true} />

        <div style={{ marginBottom: 'var(--spacing-md)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>

        <p className="lesson-meta">PHASE 5: M5Stack・小さなコンピュータ</p>

        <div className="question-box">
          <h2>今日の問い</h2>
          <p>複数のセンサーを2本の線だけでつなげる「I2C通信」とは、どのような仕組みでしょうか。</p>
        </div>

        <h1>第48回: I2C通信の基本</h1>

        <section>
          <h2>概念: I2Cは「2本の線で多数のデバイスと話す」通信方式</h2>
          <p>
            I2C（アイ・スクエアド・シー、またはアイ・ツー・シー）は、
            たった2本の信号線で複数のセンサーやデバイスと通信できる方式です。
            SDA（データ線）とSCL（クロック線）の2本を使います。
            電源とGNDを合わせても4本で済むので、<Link href="/lessons/47-grove-connector">Groveコネクタ</Link>と相性が良いのです。
          </p>
          <p>
            各デバイスには「アドレス」という番号が付いていて、
            マイコン（マスター）がアドレスを指定して「誰と話すか」を選びます。
            同じバス（線）に複数のセンサーをつないでも、
            アドレスが違えば混線しません。
          </p>

          <div className="analogy">
            <span className="analogy-term">I2C</span>
            <span className="analogy-equals">=</span>
            <span>2本の線で複数のデバイスと順番に話す通信方式</span>
          </div>
        </section>

        <figure className="svg-figure">
          <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(30, 20)">
              <text x="170" y="0" textAnchor="middle" fill="#3b6ea5" fontSize="11" fontWeight="600">I2Cの仕組み</text>
              
              <g transform="translate(130, 25)">
                <rect x="0" y="0" width="80" height="40" rx="5" fill="#3b6ea5" stroke="#2c5282" strokeWidth="2" />
                <text x="40" y="18" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">M5Stack</text>
                <text x="40" y="32" textAnchor="middle" fill="white" fontSize="8">(マスター)</text>
              </g>
              
              <line x1="170" y1="65" x2="170" y2="90" stroke="#f39c12" strokeWidth="3" />
              <line x1="170" y1="90" x2="50" y2="90" stroke="#f39c12" strokeWidth="3" />
              <line x1="170" y1="90" x2="290" y2="90" stroke="#f39c12" strokeWidth="3" />
              <text x="25" y="95" fill="#f39c12" fontSize="8">SDA (データ)</text>
              
              <line x1="180" y1="65" x2="180" y2="100" stroke="#27ae60" strokeWidth="3" />
              <line x1="180" y1="100" x2="60" y2="100" stroke="#27ae60" strokeWidth="3" />
              <line x1="180" y1="100" x2="300" y2="100" stroke="#27ae60" strokeWidth="3" />
              <text x="25" y="107" fill="#27ae60" fontSize="8">SCL (クロック)</text>
              
              <g transform="translate(30, 115)">
                <rect x="0" y="0" width="70" height="35" rx="5" fill="#e3f2fd" stroke="#3b6ea5" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#3b6ea5" fontSize="8">温度センサー</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="7">アドレス: 0x76</text>
              </g>
              
              <g transform="translate(130, 115)">
                <rect x="0" y="0" width="70" height="35" rx="5" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#27ae60" fontSize="8">加速度センサー</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="7">アドレス: 0x68</text>
              </g>
              
              <g transform="translate(230, 115)">
                <rect x="0" y="0" width="70" height="35" rx="5" fill="#fff3cd" stroke="#f39c12" strokeWidth="2" />
                <text x="35" y="15" textAnchor="middle" fill="#f39c12" fontSize="8">照度センサー</text>
                <text x="35" y="28" textAnchor="middle" fill="#4a4a4a" fontSize="7">アドレス: 0x23</text>
              </g>
              
              <line x1="65" y1="115" x2="65" y2="105" stroke="#4a4a4a" strokeWidth="1" />
              <line x1="165" y1="115" x2="165" y2="105" stroke="#4a4a4a" strokeWidth="1" />
              <line x1="265" y1="115" x2="265" y2="105" stroke="#4a4a4a" strokeWidth="1" />
            </g>
          </svg>
          <figcaption>2本の線(SDA, SCL)を共有し、アドレスで相手を指定します。</figcaption>
        </figure>

        <section>
          <h2>アドレスとは</h2>
          <p>
            I2Cデバイスのアドレスは通常7ビットで、0x00〜0x7Fの範囲です。
            多くのセンサーはアドレスが決まっていて、データシートに記載されています。
            たとえば、BME280は0x76か0x77、MPU6050は0x68です。
          </p>
          <p>
            同じアドレスのデバイスを2つ同時につなぐことはできません。
            一部のセンサーは、ジャンパでアドレスを変更できる機能を持っています。
            「I2Cスキャナー」というプログラムを使うと、
            接続されているデバイスのアドレスを調べることができます。
          </p>
        </section>

        <section>
          <h2>M5StackでI2Cを使う</h2>
          <p>
            M5StackのGroveポートは、デフォルトでI2C用に設定されています。
            Arduino環境では「Wire」ライブラリを使ってI2C通信を行います。
            多くのセンサーには専用のライブラリがあり、
            アドレスやプロトコルの詳細を知らなくても使えます。
          </p>
          <p>
            たとえば「BME280ライブラリ」を使えば、
            bme.readTemperature()のような簡単な関数で温度が取得できます。
            ライブラリがI2C通信の詳細を隠してくれるのです。
          </p>
        </section>

        <PracticeToggle>
          <h3>提案で使うと</h3>
          <p>
            I2Cの利点は「配線が少なくて済む」ことです。
            お客様に「複数のセンサーを使いたい」と言われたら、
            「I2C対応のセンサーなら、同じ2本の線に複数つなげます」
            と説明できます。
          </p>
          <p>
            ただし、「アドレスの重複」には注意が必要です。
            同じセンサーを2個使いたい場合は、
            アドレス変更可能なセンサーを選ぶか、
            I2Cマルチプレクサという部品を使う方法を提案できます。
          </p>
        </PracticeToggle>

        <div className="next-question">
          <h3>次の問い</h3>
          <p>M5StackをインターネットにつなぐWi-Fi機能は、どうやって使うのでしょうか。次の第49回で学びます。</p>
        </div>

        <div className="memory-box">
          <h3>今日覚えること</h3>
          <ol>
            <li>I2CはSDAとSCLの2本の線で複数のデバイスと通信できます。</li>
            <li>各デバイスにはアドレス(0x00〜0x7F)があり、それで相手を指定します。</li>
            <li>ライブラリを使えば、I2Cの詳細を知らなくてもセンサーが使えます。</li>
          </ol>
        </div>

        <AskBox lessonId="48-i2c-basics" />

        <LessonNavigation currentLessonNumber={48} />

        <div style={{ marginTop: 'var(--spacing-lg)' }}>
          <Link href="/">← ホームに戻る</Link>
        </div>
      </main>
    </>
  )
}
