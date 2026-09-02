export interface GlossaryTerm {
  slug: string
  term: string
  reading?: string
  oneLiner: string
  explanation: string
  example: string
  useCase: string
  relatedTerms: string[]
  lessonNumbers: number[]
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'voltage',
    term: '電圧',
    reading: 'でんあつ',
    oneLiner: '電気を押す力',
    explanation: '電圧は、電気を流そうとする「押し」の力です。水道にたとえると、水を押し出すポンプの強さのようなものです。電池やコンセントには電圧があり、＋側が高く、−側が低くなっています。この高低差があるから電流が流れます。',
    example: '乾電池は1.5V、家庭のコンセントは100V、USBは5Vの電圧があります。',
    useCase: '回路を設計するとき、部品に適切な電圧を供給するために使います。電圧が高すぎると部品が壊れ、低すぎると動きません。',
    relatedTerms: ['電流', '抵抗', '回路', '電池'],
    lessonNumbers: [1, 7, 8],
  },
  {
    slug: 'current',
    term: '電流',
    reading: 'でんりゅう',
    oneLiner: '電気の流れる量',
    explanation: '電流は、回路の中を流れる電気の量です。水道にたとえると、パイプの中を流れる水の量のようなものです。電流が多いほど、LEDは明るく光り、モーターは強く回ります。',
    example: 'LEDには約10〜20mA、小型モーターには数百mAの電流が流れます。',
    useCase: '部品を動かすのに必要な電流を知り、電源や配線を選ぶために使います。',
    relatedTerms: ['電圧', '抵抗', '回路'],
    lessonNumbers: [1, 7, 8],
  },
  {
    slug: 'resistance',
    term: '抵抗',
    reading: 'ていこう',
    oneLiner: '電気の流れにくさ',
    explanation: '抵抗は、電流の流れを妨げる性質です。水道にたとえると、パイプが細いほど水が流れにくくなるのと同じです。抵抗器という部品を使って、電流の量を調整できます。',
    example: 'LEDに330Ωの抵抗をつなぐと、電流を適切な量に制限できます。',
    useCase: 'LEDを守ったり、センサーの信号を調整したり、電流を制御するために使います。',
    relatedTerms: ['電圧', '電流', '回路'],
    lessonNumbers: [1, 7, 8, 9],
  },
  {
    slug: 'sensor',
    term: 'センサー',
    oneLiner: '世界を測る部品',
    explanation: 'センサーは、光・温度・音・動きなど、周りの状態を電気信号に変える部品です。人間の目や耳のように、コンピュータに「世界の情報」を伝えます。',
    example: '温度センサー、光センサー、距離センサー、加速度センサーなどがあります。',
    useCase: '自動ドア、スマートフォン、工場の監視システムなど、あらゆる自動化に使います。',
    relatedTerms: ['入力', 'マイコン', 'GPIO'],
    lessonNumbers: [5, 31, 32, 33],
  },
  {
    slug: 'microcontroller',
    term: 'マイコン',
    oneLiner: '小さなコンピュータ',
    explanation: 'マイコン（マイクロコントローラ）は、1つのチップに入った小さなコンピュータです。センサーからの信号を受け取り、プログラムで判断し、モーターやLEDを動かせます。',
    example: 'Arduino、ESP32、M5Stackなどがマイコンを使った製品です。',
    useCase: '家電、車、ロボット、IoT機器など、身の回りのほとんどの電子機器に入っています。',
    relatedTerms: ['GPIO', 'プログラム', 'センサー', 'コンピュータ'],
    lessonNumbers: [3, 44, 45],
  },
  {
    slug: 'gpio',
    term: 'GPIO',
    oneLiner: '汎用入出力ピン',
    explanation: 'GPIO（General Purpose Input/Output）は、マイコンについている多目的のピンです。プログラムで「入力」か「出力」を切り替えられ、センサーをつないだり、LEDを光らせたりできます。',
    example: 'Raspberry Piには40本のGPIOピンがあり、様々な部品をつなげます。',
    useCase: 'センサーの値を読み取ったり、リレーを動かしたり、外の世界とやり取りするために使います。',
    relatedTerms: ['マイコン', '入力', '出力'],
    lessonNumbers: [4, 44, 67],
  },
  {
    slug: 'api',
    term: 'API',
    oneLiner: 'プログラム同士の会話方法',
    explanation: 'API（Application Programming Interface）は、あるプログラムが別のプログラムと情報をやり取りするための決まりごとです。レストランのメニューのように、「これを頼めばこれが返ってくる」というルールです。',
    example: '天気APIを使うと、今日の天気情報をプログラムで取得できます。',
    useCase: 'クラウドサービスと連携したり、他のシステムとデータをやり取りするために使います。',
    relatedTerms: ['クラウド', 'Wi-Fi', 'IoT'],
    lessonNumbers: [55, 56, 57],
  },
  {
    slug: 'wifi',
    term: 'Wi-Fi',
    oneLiner: '無線でネットにつなぐ',
    explanation: 'Wi-Fiは、ケーブルなしでインターネットやネットワークに接続する無線通信技術です。スマートフォンやパソコンと同じように、マイコンもWi-Fiでインターネットに接続できます。',
    example: 'ESP32はWi-Fi内蔵で、センサーデータをインターネット経由で送信できます。',
    useCase: 'IoT機器をインターネットにつなぎ、離れた場所からデータを見たり操作したりするために使います。',
    relatedTerms: ['API', 'クラウド', 'IoT'],
    lessonNumbers: [55, 56],
  },
  {
    slug: 'cloud',
    term: 'クラウド',
    oneLiner: 'インターネット上のコンピュータ',
    explanation: 'クラウドは、インターネット上にあるコンピュータやサービスのことです。自分のパソコンではなく、インターネットの向こう側でデータを保存したり、計算したりできます。',
    example: 'AWS、Google Cloud、Azureなどがクラウドサービスです。',
    useCase: 'センサーデータの保存、AI処理、遠隔監視など、大量のデータや複雑な処理に使います。',
    relatedTerms: ['API', 'Wi-Fi', 'AI'],
    lessonNumbers: [55, 78],
  },
  {
    slug: 'ai',
    term: 'AI',
    oneLiner: '学習して判断するプログラム',
    explanation: 'AI（人工知能）は、データから学習して、判断や予測ができるプログラムです。画像から物体を認識したり、異常を検知したりできます。',
    example: '画像認識AI、音声認識AI、チャットボットなどがあります。',
    useCase: '工場の欠陥検出、顔認証、自動運転など、人間の判断を代わりにする場面で使います。',
    relatedTerms: ['クラウド', 'センサー', 'カメラ'],
    lessonNumbers: [78, 79, 80],
  },
  {
    slug: 'input',
    term: '入力',
    reading: 'にゅうりょく',
    oneLiner: '外から情報を受け取る',
    explanation: '入力は、センサーやボタンなどから情報を受け取ることです。コンピュータにとっての「目」や「耳」にあたります。',
    example: 'ボタンを押す、温度を測る、画像を撮るなどが入力です。',
    useCase: 'システムが外の世界を知り、状況に応じた動作をするために必要です。',
    relatedTerms: ['出力', 'センサー', 'GPIO'],
    lessonNumbers: [4, 5],
  },
  {
    slug: 'output',
    term: '出力',
    reading: 'しゅつりょく',
    oneLiner: '外に向けて動作する',
    explanation: '出力は、LEDを光らせたり、モーターを回したり、画面に表示したりすることです。コンピュータにとっての「手」や「口」にあたります。',
    example: 'LEDを点灯する、スピーカーで音を出す、ディスプレイに文字を表示するなどが出力です。',
    useCase: '処理結果を人間に伝えたり、機械を動かしたりするために必要です。',
    relatedTerms: ['入力', 'GPIO', 'マイコン'],
    lessonNumbers: [4, 19],
  },
  {
    slug: 'circuit',
    term: '回路',
    reading: 'かいろ',
    oneLiner: '電気が流れる道',
    explanation: '回路は、電気が流れるための道すじです。電池、導線、部品がつながって輪になっていると、電流が流れます。輪が切れていると電流は流れません。',
    example: '電池、スイッチ、LEDを導線でつなぐと簡単な回路ができます。',
    useCase: 'あらゆる電子機器の基本です。回路を設計することで、望む動作を実現できます。',
    relatedTerms: ['電圧', '電流', '抵抗', '電池'],
    lessonNumbers: [1, 7, 8, 9],
  },
  {
    slug: 'battery',
    term: '電池',
    reading: 'でんち',
    oneLiner: '電気を蓄えて供給する',
    explanation: '電池は、化学反応で電気を作り出す部品です。＋極と−極があり、その間に電圧が生まれます。回路に電気を供給する「電源」の一種です。',
    example: '乾電池（1.5V）、リチウム電池（3.7V）、モバイルバッテリー（5V）などがあります。',
    useCase: 'ポータブル機器の電源として、コンセントがない場所でも電子機器を動かすために使います。',
    relatedTerms: ['電圧', '回路'],
    lessonNumbers: [1, 7],
  },
  {
    slug: 'machine',
    term: '機械',
    reading: 'きかい',
    oneLiner: '力を伝えて仕事をする仕組み',
    explanation: '機械は、モーターやギア、レバーなどを組み合わせて、力を伝えたり変換したりして仕事をする仕組みです。電気が「情報やエネルギーを運ぶ」のに対し、機械は「力を使って物を動かす」役割を担います。',
    example: '自動車のエンジン、エレベーター、ロボットアーム、洗濯機のドラムなどが機械です。',
    useCase: '工場の生産ライン、建設機械、輸送機器など、物理的に何かを動かす場面で使います。',
    relatedTerms: ['モーター', '電気', 'ロボット'],
    lessonNumbers: [2],
  },
  {
    slug: 'computer',
    term: 'コンピュータ',
    oneLiner: '計算と判断をする機械',
    explanation: 'コンピュータは、プログラムに従って計算や判断を行う機械です。入力された情報を処理して、結果を出力します。スマートフォンもパソコンもマイコンも、すべてコンピュータの一種です。',
    example: 'パソコン、スマートフォン、タブレット、ゲーム機、Arduino、Raspberry Piなどがコンピュータです。',
    useCase: 'データ処理、自動制御、通信、表示など、あらゆる「考える」作業に使います。',
    relatedTerms: ['プログラム', 'マイコン', '入力', '出力'],
    lessonNumbers: [3, 44],
  },
  {
    slug: 'program',
    term: 'プログラム',
    oneLiner: 'コンピュータへの指示書',
    explanation: 'プログラムは、コンピュータに「何をするか」を伝える指示の集まりです。「もし〜なら〜する」「〜を繰り返す」といった手順を書いておくと、コンピュータがその通りに動きます。',
    example: 'スマホアプリ、ウェブサイト、ゲーム、自動運転システムなど、すべてプログラムで動いています。',
    useCase: 'コンピュータに自動で仕事をさせたいとき、プログラムを書いて指示します。',
    relatedTerms: ['コンピュータ', 'マイコン', 'AI'],
    lessonNumbers: [3, 6],
  },
]

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug)
}

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms
}

export function getTermsByLesson(lessonNumber: number): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.lessonNumbers.includes(lessonNumber))
}
