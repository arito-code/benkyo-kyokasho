import { phases, getLessonByNumber } from './course'

export interface Lesson {
  id: string
  title: string
  description: string
  summary: string
  keywords: string[]
}

const lessonContent: Record<string, Lesson> = {
  '01-electricity': {
    id: '01-electricity',
    title: '電気とは何か',
    description: '電圧・電流・抵抗の基本概念とオームの法則を学びます。',
    summary: `電圧は「押し」、電流は「流れる量」、抵抗は「流れにくさ」です。
電圧は＋側が高く、−側が低くなっています。
オームの法則: V = I × R（電圧 = 電流 × 抵抗）`,
    keywords: ['電圧', '電流', '抵抗', 'オームの法則', '電池', 'ボルト', 'アンペア', 'オーム'],
  },
  '02-machine': {
    id: '02-machine',
    title: '機械とは何か',
    description: '機械の役割と電気との違いを学びます。',
    summary: `機械は「力を伝えて物を動かす」仕組みです。
電気が情報やエネルギーを運ぶのに対し、機械は物理的な仕事をします。
モーターは電気を回転の力に変える、電気と機械の橋渡し役です。`,
    keywords: ['機械', 'モーター', 'ギア', '力', '仕事', '回転'],
  },
  '03-computer': {
    id: '03-computer',
    title: 'コンピュータとは何か',
    description: 'コンピュータの役割とプログラムの基本を学びます。',
    summary: `コンピュータは「計算と判断をする機械」です。
プログラムという指示書に従って動きます。
マイコンは小さなコンピュータで、センサーやモーターを制御できます。`,
    keywords: ['コンピュータ', 'プログラム', 'マイコン', '計算', '判断', '制御'],
  },
  '04-io': {
    id: '04-io',
    title: '入力と出力',
    description: '入力と出力の概念、コンピュータが世界とつながる仕組みを学びます。',
    summary: `入力は「外から情報を受け取る」こと、出力は「外に向けて動作する」ことです。
センサーは入力、LEDやモーターは出力の代表例です。
コンピュータは入力を受け取り、処理して、出力を返します。`,
    keywords: ['入力', '出力', 'センサー', 'LED', 'モーター', 'GPIO'],
  },
  '05-sensor-intro': {
    id: '05-sensor-intro',
    title: 'センサーとは何か',
    description: 'センサーの仕組みと種類、物理量を電気信号に変える原理を学びます。',
    summary: `センサーは、温度・光・距離などの物理量を電気信号に変える部品です。
人間の五感のように、コンピュータに外の世界を知らせます。
センサーの値を「入力」として、コンピュータは判断を行います。`,
    keywords: ['センサー', '入力', '温度センサー', '光センサー', '距離センサー', 'ボタン', '物理量', '電気信号'],
  },
  '06-program': {
    id: '06-program',
    title: 'プログラムとは何か',
    description: 'プログラムの仕組み、順番に命令を実行する仕組みを学びます。',
    summary: `プログラムは、コンピュータへの「順番が決まった指示書」です。
「もし〜なら」「繰り返す」などの命令を並べて、自動で動かします。
センサーの値を見て、何をするか判断するのがプログラムの役割です。`,
    keywords: ['プログラム', '命令', '条件分岐', '繰り返し', '処理', '自動化'],
  },
  '07-voltage': {
    id: '07-voltage',
    title: '電圧とは何か',
    description: 'Phase 2の始まり。電圧の本質と、電流・抵抗との関係を深く学びます。',
    summary: `電圧は、電気を流そうとする「押し」の力です。
電流は実際に流れる電気の量、抵抗は流れにくさです。
電圧が高いほど強く押すので、同じ抵抗なら電流が多く流れます。`,
    keywords: ['電圧', '電流', '抵抗', 'ボルト', 'アンペア', 'オーム', 'オームの法則', '電源'],
  },
  '08-current': {
    id: '08-current',
    title: '電流とは何か',
    description: '電流の概念を深く学びます。流れる量としての電流、アンペアの単位、電流と部品の関係を理解します。',
    summary: `電流は、回路を流れる電気の量です。水道にたとえると、パイプを流れる水の量にあたります。
電流の単位はアンペア（A）で、小さな電流はミリアンペア（mA）で表します。
部品には流せる電流の限界があり、超えると壊れてしまいます。`,
    keywords: ['電流', 'アンペア', 'mA', '電気', '流れる量', 'LED', '電池'],
  },
  '09-resistance': {
    id: '09-resistance',
    title: '抵抗とは何か',
    description: '抵抗の概念を深く学びます。流れにくさとしての抵抗、オームの単位、抵抗で電流を制限する方法を理解します。',
    summary: `抵抗は、電気の流れにくさです。水道にたとえると、パイプの細さにあたります。
抵抗の単位はオーム（Ω）で、数字が大きいほど電流が流れにくくなります。
抵抗を使うと電流を制限でき、LEDなどの部品を守ることができます。`,
    keywords: ['抵抗', 'オーム', 'Ω', '流れにくさ', 'LED', '抵抗器', 'カラーコード'],
  },
  '10-ohms-law': {
    id: '10-ohms-law',
    title: 'オームの法則',
    description: '電圧・電流・抵抗の関係を式で表すオームの法則を学びます。V=IRの計算方法を理解します。',
    summary: `オームの法則は V = I × R（電圧 = 電流 × 抵抗）です。
電流を求めるときは I = V ÷ R、抵抗を求めるときは R = V ÷ I を使います。
水道のたとえ: 電圧=押す力、電流=流れる量、抵抗=流れにくさ の関係がこの式で表せます。`,
    keywords: ['オームの法則', '電圧', '電流', '抵抗', 'V=IR', '計算', '回路設計'],
  },
  '11-circuit': {
    id: '11-circuit',
    title: '回路とは何か',
    description: '電気が流れる道「回路」の基本を学びます。閉じた輪と電流の関係を理解します。',
    summary: `回路は、電気が流れるための「閉じた輪」です。
電池の＋極から出た電気は、導線と部品を通って−極に戻ります。
輪が切れていると電流は流れません。これが回路の基本原理です。`,
    keywords: ['回路', '閉回路', '電流', '導線', '配線', '電池', 'ループ'],
  },
  '12-series-parallel': {
    id: '12-series-parallel',
    title: '直列と並列',
    description: '部品のつなぎ方「直列」と「並列」の違いを学びます。電圧と電流がどう変わるか理解します。',
    summary: `直列は部品を一列につなぐ方法、並列は枝分かれさせてつなぐ方法です。
直列では電流が同じで電圧が分かれます。並列では電圧が同じで電流が分かれます。
LEDを2つ光らせるとき、直列か並列かで明るさや必要な電圧が変わります。`,
    keywords: ['直列', '並列', '直列回路', '並列回路', '電圧', '電流', 'LED', '配線'],
  },
  '13-power-sources': {
    id: '13-power-sources',
    title: '電源の種類',
    description: '電池、ACアダプター、USBなど、回路に電気を供給する電源の種類と特徴を学びます。',
    summary: `電源は回路に電気を供給する部品です。乾電池は1.5V、USB電源は5V、ACアダプターは様々な電圧があります。
電源には直流（DC）と交流（AC）があり、電子工作では主に直流を使います。
使う部品に合った電圧の電源を選ぶことが大切です。`,
    keywords: ['電源', '電池', 'USB', 'ACアダプター', '直流', '交流', 'DC', 'AC', 'ボルト'],
  },
  '14-ground': {
    id: '14-ground',
    title: 'グラウンドとは何か',
    description: '回路の基準点「グラウンド（GND）」の役割を学びます。なぜ回路図に必ず登場するか理解します。',
    summary: `グラウンド（GND）は回路の電圧の基準点で、0Vの場所です。
電圧は「どこを基準にするか」で決まります。GNDを基準にして5Vや3.3Vを測ります。
回路図では「⏚」の記号で表し、電池の−極に相当します。`,
    keywords: ['グラウンド', 'GND', '基準点', '0V', 'マイナス', '−極', '電圧'],
  },
  '15-led-resistor': {
    id: '15-led-resistor',
    title: 'LEDと抵抗',
    description: 'LEDを安全に光らせるための抵抗の計算方法を学びます。順方向電圧（Vf）を含めた実践的な回路設計です。',
    summary: `LEDには順方向電圧（Vf）があり、赤色LEDは約2Vです。
5V電源でLEDを光らせるとき、抵抗にかかる電圧は 5V - 2V = 3V です。
20mA流すには R = 3V ÷ 0.02A = 150Ω の抵抗が必要です。`,
    keywords: ['LED', '抵抗', '順方向電圧', 'Vf', 'オームの法則', '電流制限', '発光ダイオード'],
  },
  '16-switch-button': {
    id: '16-switch-button',
    title: 'スイッチとボタン',
    description: '回路のオン・オフを切り替えるスイッチとボタンの仕組みを学びます。',
    summary: `スイッチは回路を「つなぐ」「切る」を切り替える部品です。
押している間だけオンになるのがモーメンタリ、押すたびに切り替わるのがオルタネイトです。
スイッチを入れると回路が閉じて電流が流れ、切ると回路が開いて電流が止まります。`,
    keywords: ['スイッチ', 'ボタン', 'タクトスイッチ', 'モーメンタリ', 'オルタネイト', '入力', '開閉'],
  },
  '17-breadboard': {
    id: '17-breadboard',
    title: 'ブレッドボード',
    description: 'はんだ付け不要で回路を試せるブレッドボードの使い方を学びます。',
    summary: `ブレッドボードは、はんだ付けなしで回路を組める便利な実験台です。
穴に部品の足を差し込むだけで配線でき、何度でもやり直しができます。
横一列の穴は内部でつながっていて、電源ラインは縦につながっています。`,
    keywords: ['ブレッドボード', '配線', '実験', 'プロトタイプ', '穴', '電源ライン', '接続'],
  },
  '18-multimeter': {
    id: '18-multimeter',
    title: 'テスターで測る',
    description: 'テスター（マルチメーター）を使って電圧・電流・抵抗を測る方法を学びます。',
    summary: `テスター（マルチメーター）は電圧・電流・抵抗を測る計測器です。
電圧を測るときは測りたい2点に並列につなぎます。電流は回路を切って直列に入れます。
測る前に正しいレンジ（範囲）を選び、赤い端子がプラス側です。`,
    keywords: ['テスター', 'マルチメーター', '測定', '電圧', '電流', '抵抗', 'レンジ', '計測'],
  },
  '19-reading-parts': {
    id: '19-reading-parts',
    title: '電子部品の読み方',
    description: '電子部品に書かれた文字や色の意味を読み取る方法を学びます。抵抗のカラーコードを理解します。',
    summary: `電子部品には値を示すマーキングがあります。
抵抗は色の帯（カラーコード）で値を表します。茶=1、赤=2、橙=3...と覚えます。
コンデンサやICにも型番や値が印刷されていて、データシートで詳細を調べます。`,
    keywords: ['カラーコード', '抵抗', 'マーキング', '部品', '読み方', '色', 'データシート'],
  },
  '20-capacitor': {
    id: '20-capacitor',
    title: 'コンデンサとは何か',
    description: '電気を一時的に蓄えるコンデンサの仕組みと役割を学びます。',
    summary: `コンデンサは電気を一時的に蓄えて放出する部品です。
電池が「タンク」なら、コンデンサは「バケツ」のようなものです。素早く充放電できます。
ノイズを取り除いたり、電圧を安定させたりするために使います。`,
    keywords: ['コンデンサ', 'キャパシタ', '蓄電', '充電', '放電', 'μF', 'ノイズ', '電解コンデンサ'],
  },
  '21-diode': {
    id: '21-diode',
    title: 'ダイオードとは何か',
    description: '電流を一方向にだけ流すダイオードの仕組みと役割を学びます。',
    summary: `ダイオードは電流を一方向にだけ流す部品です。
順方向に電圧をかけると電流が流れ、逆方向では流れません。
電源の逆接続防止や、交流を直流に変換する整流に使います。`,
    keywords: ['ダイオード', '順方向', '逆方向', '整流', 'LED', '逆接続防止', '順方向電圧'],
  },
  '22-transistor': {
    id: '22-transistor',
    title: 'トランジスタとは何か',
    description: '小さな電流で大きな電流を制御するトランジスタの仕組みを学びます。',
    summary: `トランジスタは小さな電流で大きな電流をオン・オフできるスイッチです。
ベース、コレクタ、エミッタの3本の足があり、ベースに流す電流で制御します。
マイコンでモーターやLEDを制御するときに使います。`,
    keywords: ['トランジスタ', 'NPN', 'ベース', 'コレクタ', 'エミッタ', 'スイッチング', '増幅'],
  },
  '23-relay': {
    id: '23-relay',
    title: 'リレーとは何か',
    description: '電気信号で別の回路をオン・オフするリレーの仕組みを学びます。',
    summary: `リレーは電磁石でスイッチを動かす部品です。
小さな電流で大きな電流や、異なる電圧の回路を制御できます。
制御回路と負荷回路が電気的に分離されるため、安全性が高いのが特徴です。`,
    keywords: ['リレー', '電磁石', 'コイル', '接点', 'NO', 'NC', '電気的絶縁'],
  },
  '24-mosfet': {
    id: '24-mosfet',
    title: 'MOSFETとは何か',
    description: '電圧で大きな電流を制御するMOSFETの仕組みを学びます。',
    summary: `MOSFETは電圧で電流をオン・オフできるスイッチです。
トランジスタより高速で効率がよく、大きな電流を扱えます。
ゲート、ドレイン、ソースの3本の足があります。`,
    keywords: ['MOSFET', 'FET', 'ゲート', 'ドレイン', 'ソース', 'Nチャネル', 'PWM'],
  },
  '25-analog-digital': {
    id: '25-analog-digital',
    title: 'アナログとデジタル',
    description: '連続的なアナログ信号と、0と1のデジタル信号の違いを学びます。',
    summary: `アナログは連続的に変化する信号、デジタルは0と1だけの信号です。
温度や明るさはアナログで測り、コンピュータはデジタルで処理します。
ADCでアナログをデジタルに、DACでデジタルをアナログに変換します。`,
    keywords: ['アナログ', 'デジタル', '連続', '離散', 'ADC', 'DAC', '量子化'],
  },
  '26-adc': {
    id: '26-adc',
    title: 'ADCとは何か',
    description: 'アナログ信号をデジタル信号に変換するADCの仕組みを学びます。',
    summary: `ADC（Analog-to-Digital Converter）はアナログ信号を数値に変換します。
センサーのアナログ出力をマイコンで読み取るために必要です。
分解能（ビット数）が高いほど細かい変化を捉えられます。`,
    keywords: ['ADC', 'アナログ', 'デジタル', '変換', '分解能', 'ビット', 'センサー'],
  },
  '27-pwm': {
    id: '27-pwm',
    title: 'PWMとは何か',
    description: 'デジタル信号でアナログ的な制御を行うPWMの仕組みを学びます。',
    summary: `PWM（Pulse Width Modulation）はオン・オフの比率で平均電圧を変える方法です。
デジタル出力しかないマイコンでも、LEDの明るさやモーターの速度を調整できます。
デューティ比が大きいほど平均電圧が高くなります。`,
    keywords: ['PWM', 'パルス幅変調', 'デューティ比', 'LED調光', 'モーター制御', '平均電圧'],
  },
  '28-pull-up-down': {
    id: '28-pull-up-down',
    title: 'プルアップとプルダウン',
    description: '入力ピンの電圧を安定させるプルアップ・プルダウン抵抗を学びます。',
    summary: `プルアップは入力を電源電圧側に、プルダウンはGND側に引っ張る抵抗です。
スイッチが押されていないときの入力を安定させます。
浮いた入力はノイズを拾って不安定になるため、必ずどちらかが必要です。`,
    keywords: ['プルアップ', 'プルダウン', '抵抗', '入力', 'スイッチ', '浮く', 'ノイズ'],
  },
  '29-debounce': {
    id: '29-debounce',
    title: 'デバウンス',
    description: 'スイッチのチャタリングを防ぐデバウンスの方法を学びます。',
    summary: `デバウンスはスイッチのチャタリング（バタつき）を除去する処理です。
機械式スイッチは押した瞬間にオン・オフを繰り返すため、対策が必要です。
コンデンサやソフトウェアで安定した入力を得られます。`,
    keywords: ['デバウンス', 'チャタリング', 'バウンス', 'スイッチ', 'ボタン', '安定化'],
  },
  '30-combine-io': {
    id: '30-combine-io',
    title: '入出力を組み合わせる',
    description: 'センサーで測り、判断し、出力する一連の流れを実践します。',
    summary: `入力（センサー）で状況を測り、条件で判断し、出力（アクチュエータ）で動作します。
この「測る→判断→動かす」が自動化の基本パターンです。
実際の提案では、この流れを組み合わせて課題を解決します。`,
    keywords: ['入力', '出力', 'センサー', 'アクチュエータ', '自動化', '判断', '組み合わせ'],
  },
  '31-temp-sensor': {
    id: '31-temp-sensor',
    title: '温度センサー',
    description: 'Phase 4の始まり。温度を電気信号に変える仕組みと、サーミスタ・熱電対・ICセンサーの違いを学びます。',
    summary: `温度センサーにはサーミスタ、熱電対、ICセンサーの3種類があります。
サーミスタは安価で広く使われますが分圧回路と計算が必要です。
DHT11やDS18B20などのICセンサーはデジタル出力で扱いやすいのが特徴です。`,
    keywords: ['温度センサー', 'サーミスタ', '熱電対', 'DHT11', 'DS18B20', 'NTC', 'B定数', '温度監視'],
  },
  '32-light-sensor': {
    id: '32-light-sensor',
    title: '光センサー',
    description: '光の強さを電気信号に変える仕組みと、CdSセル・フォトダイオード・照度センサーICの使い方を学びます。',
    summary: `光センサーにはCdSセル、フォトダイオード、フォトトランジスタがあります。
CdSセルは光で抵抗値が変わり、分圧回路でADCから読み取ります。
BH1750などのI2Cセンサーはルクス単位の照度を直接取得できます。`,
    keywords: ['光センサー', 'CdS', 'フォトダイオード', 'フォトトランジスタ', 'BH1750', '照度', 'ルクス', '自動照明'],
  },
  '33-distance-sensor': {
    id: '33-distance-sensor',
    title: '距離センサー',
    description: '超音波やレーザーで距離を測る仕組みと、HC-SR04・VL53L0Xの使い方を学びます。',
    summary: `距離センサーには超音波（HC-SR04）、赤外線、ToF（VL53L0X）などがあります。
超音波センサーは音の往復時間を測り、安価で広い範囲を測定できます。
ToFセンサーはレーザー光で測定し、高精度・高速ですがコストは高めです。`,
    keywords: ['距離センサー', '超音波', 'HC-SR04', 'ToF', 'VL53L0X', '障害物検知', '測距', '近接'],
  },
  '34-pir-sensor': {
    id: '34-pir-sensor',
    title: '人感センサー',
    description: '人体の赤外線を検知するPIRセンサーの仕組みと、HC-SR501の使い方を学びます。',
    summary: `PIRセンサーは人体の赤外線（体温）の変化を検知するセンサーです。
HC-SR501は3本線で接続し、人を検知するとHIGHを出力します。
動いている人を検知しますが、静止している人やガラス越しは検知できません。`,
    keywords: ['人感センサー', 'PIR', 'HC-SR501', '焦電', '赤外線', '人検知', '自動照明', '防犯'],
  },
  '35-humidity-sensor': {
    id: '35-humidity-sensor',
    title: '湿度センサー',
    description: '空気中の水分量を測る仕組みと、DHT11・DHT22・BME280の使い方を学びます。',
    summary: `湿度センサーは相対湿度（%RH）を測定し、40-60%が快適な範囲です。
DHT11は安価で手軽、DHT22は精度が高く、どちらも温度と湿度を同時に測れます。
高精度が必要な場合はI2C接続のSHT31やBME280を選びます。`,
    keywords: ['湿度センサー', 'DHT11', 'DHT22', 'BME280', 'SHT31', '相対湿度', '%RH', '環境監視'],
  },
  '36-accel-sensor': {
    id: '36-accel-sensor',
    title: '加速度センサー',
    description: '物の動きや傾きを測る仕組みと、MPU6050の使い方を学びます。',
    summary: `加速度センサーは3軸の加速度を測り、傾きや動きを検出できます。
MPU6050は加速度+ジャイロの6軸センサーで、I2C接続で手軽に使えます。
静止時は重力だけがかかるため、傾き角度を計算できます。`,
    keywords: ['加速度センサー', 'MPU6050', 'ジャイロ', '6軸', '傾き', '姿勢', '落下検知', 'G'],
  },
  '37-vibration-sensor': {
    id: '37-vibration-sensor',
    title: '振動センサー',
    description: '機械の振動を検知する仕組みと、振動スイッチ・加速度センサーの使い方を学びます。',
    summary: `振動スイッチは振動の有無をデジタル出力で知らせる、シンプルで安価なセンサーです。
加速度センサーや圧電素子を使うと、振動の強さや周波数も測定できます。
工場の予知保全では、振動パターンの変化から機械の異常を早期発見します。`,
    keywords: ['振動センサー', 'SW-420', '振動スイッチ', '予知保全', '故障予知', '異常検知', '圧電'],
  },
  '38-magnetic-sensor': {
    id: '38-magnetic-sensor',
    title: '磁気センサー',
    description: '磁場を検知する仕組みと、リードスイッチ・地磁気センサーの使い方を学びます。',
    summary: `リードスイッチは磁石の接近でON/OFFする、ドア開閉検知に最適なセンサーです。
地磁気センサー（HMC5883Lなど）は地球の磁場を測り、方位を計算できます。
磁気センサーは周囲の磁気環境に影響されるため、設置場所の確認が重要です。`,
    keywords: ['磁気センサー', 'リードスイッチ', 'マグネット', 'ホールセンサー', '地磁気', 'コンパス', 'ドア開閉'],
  },
  '39-pressure-sensor': {
    id: '39-pressure-sensor',
    title: '圧力センサー',
    description: '押す力や気圧を測る仕組みと、FSR・BME280の使い方を学びます。',
    summary: `感圧センサー（FSR）は押す力で抵抗が変わり、タッチや着座検知に使います。
気圧センサー（BMP280、BME280）は大気圧を測り、天気予測や高度計に使います。
BME280は気圧+温度+湿度の3-in-1で、環境監視に便利です。`,
    keywords: ['圧力センサー', 'FSR', '感圧', 'BMP280', 'BME280', '気圧', '高度計', '着座検知'],
  },
  '40-choosing-sensors': {
    id: '40-choosing-sensors',
    title: 'センサーの選び方',
    description: 'Phase 4のまとめ。お客様の課題から適切なセンサーを選ぶコツを学びます。',
    summary: `センサー選定は「課題 → 物理量 → センサー」の順で考えます。
選定のポイントは測定範囲、精度、出力形式、コスト、入手性の5つです。
お客様の「本当に必要な精度」を確認し、必要十分なセンサーを提案します。`,
    keywords: ['センサー選定', '物理量', '提案', '測定範囲', '精度', '技術営業', '課題解決'],
  },
  '41-sensor-noise': {
    id: '41-sensor-noise',
    title: 'センサーのノイズ',
    description: 'センサー値が揺れる原因と、ノイズを減らす方法を学びます。',
    summary: `センサー値の揺れ（ノイズ）は電気的・機械的・環境的な原因で発生します。
移動平均やローパスフィルタでノイズを軽減できます。
配線を短くしたり、シールドケーブルを使うことでも改善します。`,
    keywords: ['ノイズ', 'センサー', '移動平均', 'フィルタ', 'シールド', '揺れ', 'ローパス'],
  },
  '42-sensor-calibration': {
    id: '42-sensor-calibration',
    title: 'センサーの校正',
    description: '基準値を使ってセンサーの誤差を補正する校正の方法を学びます。',
    summary: `校正（キャリブレーション）は基準値と比較してセンサーの誤差を補正することです。
オフセット校正とゲイン校正の2種類があります。
定期的な校正で精度を維持し、信頼性のある計測を実現します。`,
    keywords: ['校正', 'キャリブレーション', '誤差', 'オフセット', 'ゲイン', '基準', '補正'],
  },
  '43-combining-sensors': {
    id: '43-combining-sensors',
    title: '複数センサーの組み合わせ',
    description: '複数のセンサーを組み合わせて信頼性を高める方法を学びます。',
    summary: `複数センサーを組み合わせると信頼性と精度が向上します。
冗長構成で故障に備え、センサーフュージョンで精度を高めます。
異なる種類のセンサーを組み合わせることで検知漏れを減らせます。`,
    keywords: ['センサーフュージョン', '冗長', '信頼性', '組み合わせ', '複合', '精度向上'],
  },
  '44-m5stack-intro': {
    id: '44-m5stack-intro',
    title: 'M5Stackとは何か',
    description: 'Phase 5の始まり。M5Stackの特徴とラインナップを学びます。',
    summary: `M5StackはESP32搭載の開発キットで、画面・ボタン・バッテリーが一体化しています。
Arduino IDEやUIFlowで手軽にプログラミングできます。
Core、Stick、ATOMなど用途に応じたラインナップがあります。`,
    keywords: ['M5Stack', 'ESP32', 'Arduino', 'UIFlow', 'Core', 'ATOM', '開発キット'],
  },
  '45-m5stack-display': {
    id: '45-m5stack-display',
    title: 'M5Stackの画面表示',
    description: 'M5Stackの液晶画面にテキストや図形を表示する方法を学びます。',
    summary: `M5Stackの画面は320×240ピクセルのカラー液晶です。
テキスト、図形、画像を表示でき、センサー値の可視化に便利です。
スプライトを使うとちらつきを防いでスムーズに更新できます。`,
    keywords: ['M5Stack', '画面', '液晶', 'LCD', '表示', 'スプライト', 'TFT'],
  },
  '46-m5stack-buttons': {
    id: '46-m5stack-buttons',
    title: 'M5Stackのボタン操作',
    description: 'M5Stackの物理ボタンを使った入力処理を学びます。',
    summary: `M5Stackには3つの物理ボタン（A/B/C）があります。
wasPressed()で押した瞬間を、isPressed()で押し続けている状態を検知します。
長押しや同時押しも判定でき、メニュー操作などに活用できます。`,
    keywords: ['M5Stack', 'ボタン', '入力', 'wasPressed', '長押し', 'UI'],
  },
  '47-grove-i2c': {
    id: '47-grove-i2c',
    title: 'Grove/I2Cセンサーの接続',
    description: 'M5StackにGroveセンサーやI2Cセンサーを接続する方法を学びます。',
    summary: `Groveは4ピンのコネクタで統一されたセンサー接続システムです。
I2Cは2本の線で複数のセンサーを数珠つなぎにできる通信方式です。
M5StackのPort AがI2C用で、多くのGroveセンサーをそのまま接続できます。`,
    keywords: ['Grove', 'I2C', 'M5Stack', 'センサー', 'コネクタ', 'Port A', '接続'],
  },
  '48-m5stack-wifi': {
    id: '48-m5stack-wifi',
    title: 'M5StackのWiFi接続',
    description: 'M5StackをWiFiネットワークに接続する方法を学びます。',
    summary: `M5StackはESP32搭載でWiFi通信が可能です。
WiFi.begin()でSSIDとパスワードを指定して接続します。
接続状態の確認とエラー処理を実装することが重要です。`,
    keywords: ['M5Stack', 'WiFi', 'ESP32', 'SSID', 'ネットワーク', '無線', '接続'],
  },
  '49-m5stack-dashboard': {
    id: '49-m5stack-dashboard',
    title: '簡易ダッシュボード',
    description: 'M5Stackでセンサー値を表示するダッシュボードを作る方法を学びます。',
    summary: `センサー値を画面に見やすく表示するダッシュボードを作成します。
数値、グラフ、アイコンを組み合わせて直感的な表示を実現します。
更新頻度と表示レイアウトを工夫してユーザビリティを向上させます。`,
    keywords: ['M5Stack', 'ダッシュボード', 'センサー', '表示', 'グラフ', 'UI', '可視化'],
  },
  '50-m5stack-power': {
    id: '50-m5stack-power',
    title: 'M5Stackの電源管理',
    description: 'M5Stackのバッテリーと電源管理の方法を学びます。',
    summary: `M5Stackは内蔵バッテリーで動作し、USB-Cで充電できます。
バッテリー残量の取得やスリープモードで省電力化が可能です。
長時間運用には外部バッテリーや電源供給の工夫が必要です。`,
    keywords: ['M5Stack', '電源', 'バッテリー', '充電', 'スリープ', '省電力', 'USB-C'],
  },
  '51-m5stack-libraries': {
    id: '51-m5stack-libraries',
    title: 'M5Stackライブラリ活用',
    description: 'M5Stack開発で使える便利なライブラリを学びます。',
    summary: `M5Stack公式ライブラリでハードウェア機能を簡単に使えます。
ArduinoJsonでJSON処理、HTTPClientでWeb通信が可能です。
ライブラリの選定と使い方で開発効率が大きく変わります。`,
    keywords: ['M5Stack', 'ライブラリ', 'Arduino', 'JSON', 'HTTP', '開発', 'API'],
  },
  '52-m5stack-project': {
    id: '52-m5stack-project',
    title: 'M5Stackで作るミニプロジェクト',
    description: '学んだ知識を組み合わせて実際に動くものを作ります。',
    summary: `センサー＋画面表示＋ボタン操作を組み合わせた実用的なプロジェクトを作成します。
温度計、タイマー、カウンターなど、身近な課題を解決する小さな製品を実装します。
設計→実装→テストの流れを体験します。`,
    keywords: ['M5Stack', 'プロジェクト', '製作', '実践', 'センサー', '作品', '開発'],
  },
  '53-m5stack-troubleshooting': {
    id: '53-m5stack-troubleshooting',
    title: 'M5Stackのトラブル対応',
    description: 'M5Stackでよくある問題と解決方法を学びます。',
    summary: `書き込みエラー、WiFi接続不良、センサー認識失敗などへの対処法を学びます。
シリアルモニタでのデバッグとI2Cスキャンが問題解決の基本です。
よくあるエラーパターンと解決策を知っておくと素早く対応できます。`,
    keywords: ['M5Stack', 'トラブル', 'デバッグ', 'エラー', 'シリアル', 'I2C', '問題解決'],
  },
  '54-m5stack-choice': {
    id: '54-m5stack-choice',
    title: 'M5Stackの選び方',
    description: 'M5Stackラインナップから用途に合った機種を選ぶコツを学びます。',
    summary: `M5Stack Core（画面付き）、Stick（コンパクト）、ATOM（超小型）から用途で選びます。
プロトタイプにはCore、量産にはATOMが向いています。
価格、サイズ、必要な機能のバランスで最適な機種を選定します。`,
    keywords: ['M5Stack', '選定', 'Core', 'Stick', 'ATOM', '比較', 'ラインナップ'],
  },
  '55-serial-communication': {
    id: '55-serial-communication',
    title: 'シリアル通信とは',
    description: 'Phase 6の始まり。データを順番に送るシリアル通信の基本を学びます。',
    summary: `シリアル通信はデータを1ビットずつ順番に送る方式です。
パラレル通信より配線が少なく、長距離通信に向いています。
通信速度（ボーレート）を送受信側で合わせることが重要です。`,
    keywords: ['シリアル通信', 'ボーレート', 'TX', 'RX', 'ビット', '通信', 'パラレル'],
  },
  '56-uart-i2c-spi': {
    id: '56-uart-i2c-spi',
    title: 'UART/I2C/SPI概要',
    description: '3つの代表的なシリアル通信方式の特徴と使い分けを学びます。',
    summary: `UARTは1対1の非同期通信、I2Cは複数デバイスを2本で接続、SPIは高速通信に適しています。
センサー接続にはI2C、SDカードやディスプレイにはSPIがよく使われます。
必要な速度、デバイス数、配線本数で方式を選びます。`,
    keywords: ['UART', 'I2C', 'SPI', 'シリアル', '通信方式', '比較', 'センサー'],
  },
  '57-wifi-basics': {
    id: '57-wifi-basics',
    title: 'WiFi通信の基礎',
    description: '無線LANの仕組みとIoTでの活用方法を学びます。',
    summary: `WiFiは無線でネットワークに接続する技術です。2.4GHzと5GHzの周波数帯があります。
IoTデバイスでは2.4GHzが一般的で、障害物に強く到達距離が長いのが特徴です。
セキュリティ設定とネットワーク設計がIoT導入の鍵になります。`,
    keywords: ['WiFi', '無線LAN', '2.4GHz', '5GHz', 'SSID', 'セキュリティ', 'ネットワーク'],
  },
  '58-http-basics': {
    id: '58-http-basics',
    title: 'HTTP通信の基礎',
    description: 'Webの通信方式HTTPの仕組みとGET/POSTの違いを学びます。',
    summary: `HTTPはWebサーバーとやり取りするためのプロトコルです。
GETはデータの取得、POSTはデータの送信に使います。
IoTデバイスからクラウドへのデータ送信にHTTPがよく使われます。`,
    keywords: ['HTTP', 'GET', 'POST', 'Web', 'API', 'リクエスト', 'レスポンス'],
  },
  '59-mqtt-basics': {
    id: '59-mqtt-basics',
    title: 'MQTT通信の基礎',
    description: 'IoTで広く使われるMQTTプロトコルの仕組みを学びます。',
    summary: `MQTTはPublish/Subscribe型の軽量プロトコルです。
ブローカーを介してトピックごとにメッセージをやり取りします。
HTTPより軽量で、センサーデータの継続的な送信に適しています。`,
    keywords: ['MQTT', 'Publish', 'Subscribe', 'ブローカー', 'トピック', 'IoT', 'メッセージ'],
  },
  '60-rest-api': {
    id: '60-rest-api',
    title: 'REST APIの基礎',
    description: 'Web APIの設計スタイルであるRESTの基本概念を学びます。',
    summary: `REST APIはHTTPメソッドでリソースを操作する設計スタイルです。
GET（取得）、POST（作成）、PUT（更新）、DELETE（削除）の4つが基本です。
JSON形式でデータをやり取りし、クラウドサービスとの連携に使います。`,
    keywords: ['REST', 'API', 'JSON', 'GET', 'POST', 'PUT', 'DELETE', 'Web'],
  },
  '61-cloud-basics': {
    id: '61-cloud-basics',
    title: 'IoTクラウドの基礎',
    description: 'IoTデータをクラウドに送る仕組みと代表的なサービスを学びます。',
    summary: `IoTクラウドはセンサーデータを収集・蓄積・可視化するサービスです。
AWS IoT、Azure IoT、Google Cloud IoTなどが代表的です。
デバイス登録、認証、データ送信の流れを理解することが重要です。`,
    keywords: ['クラウド', 'AWS', 'Azure', 'Google', 'IoT', 'データ収集', 'サービス'],
  },
  '62-json-basics': {
    id: '62-json-basics',
    title: 'JSONデータ形式',
    description: 'IoTで広く使われるJSONデータ形式の読み書き方法を学びます。',
    summary: `JSONはキーと値のペアでデータを表現する形式です。
人間にも機械にも読みやすく、Web APIのデータ交換に標準的に使われます。
ArduinoJsonライブラリでマイコンでもJSON処理が可能です。`,
    keywords: ['JSON', 'データ', 'フォーマット', 'キー', '値', 'API', 'ArduinoJson'],
  },
  '63-iot-security': {
    id: '63-iot-security',
    title: 'IoTセキュリティ基礎',
    description: 'IoTシステムを安全に運用するためのセキュリティ基礎を学びます。',
    summary: `IoTセキュリティの3要素は機密性、完全性、可用性です。
HTTPSやTLSで通信を暗号化し、デバイス認証で不正アクセスを防ぎます。
ファームウェア更新の仕組みとパスワード管理が重要です。`,
    keywords: ['セキュリティ', 'HTTPS', 'TLS', '認証', '暗号化', 'IoT', '安全'],
  },
  '64-gateway': {
    id: '64-gateway',
    title: 'IoTゲートウェイ',
    description: 'センサーとクラウドの橋渡しをするゲートウェイの役割を学びます。',
    summary: `IoTゲートウェイはセンサーデータを集約してクラウドに送る中継役です。
プロトコル変換、データフィルタリング、エッジ処理を担います。
Raspberry PiやM5Stackをゲートウェイとして使うことができます。`,
    keywords: ['ゲートウェイ', 'エッジ', '中継', 'プロトコル変換', 'データ集約', 'IoT'],
  },
  '65-protocol-choice': {
    id: '65-protocol-choice',
    title: '通信プロトコルの選び方',
    description: '用途に応じた通信プロトコルの選び方を学びます。',
    summary: `HTTP/MQTT/WebSocketなどから用途に応じて選択します。
頻度が低いならHTTP、リアルタイム性が必要ならMQTTやWebSocket。
通信量、消費電力、双方向性を考慮して決定します。`,
    keywords: ['プロトコル', 'HTTP', 'MQTT', 'WebSocket', '選定', '通信', '比較'],
  },
  '66-iot-wrap': {
    id: '66-iot-wrap',
    title: 'IoTフェーズまとめ',
    description: 'Phase 6のまとめ。IoTシステム全体像と構築ステップを振り返ります。',
    summary: `IoTシステムはセンサー→通信→クラウド→可視化の流れで構成されます。
プロトコル選定、セキュリティ、運用を総合的に設計します。
お客様の課題を理解し、適切な構成を提案できるようになりました。`,
    keywords: ['IoT', 'まとめ', 'システム構成', 'センサー', 'クラウド', '提案'],
  },
  '67-raspi-intro': {
    id: '67-raspi-intro',
    title: 'Raspberry Piとは',
    description: 'Phase 7の始まり。Raspberry Piの特徴とM5Stackとの違いを学びます。',
    summary: `Raspberry PiはLinuxが動く小型コンピュータです。
M5Stackより高性能で、画像処理やサーバー用途に向いています。
モデルによって性能や価格が異なり、用途に応じて選択します。`,
    keywords: ['Raspberry Pi', 'Linux', 'コンピュータ', 'ARM', 'モデル', 'ラズパイ'],
  },
  '68-raspi-os-ssh': {
    id: '68-raspi-os-ssh',
    title: 'OS設定とSSH',
    description: 'Raspberry PiにOSをインストールし、SSHで接続する方法を学びます。',
    summary: `Raspberry Pi ImagerでOSをSDカードに書き込みます。
SSHを有効化してネットワーク経由でリモート操作します。
初期設定とセキュリティ設定を正しく行うことが重要です。`,
    keywords: ['Raspberry Pi', 'OS', 'SSH', 'Imager', 'SDカード', 'リモート', '設定'],
  },
  '69-raspi-gpio': {
    id: '69-raspi-gpio',
    title: 'Raspberry PiのGPIO',
    description: 'Raspberry PiのGPIOでLEDやセンサーを制御する方法を学びます。',
    summary: `GPIOはGeneral Purpose Input/Outputの略で、汎用入出力ピンです。
Pythonのgpiozeroライブラリで簡単に制御できます。
ピン番号の指定方法に注意し、過電流で壊さないようにします。`,
    keywords: ['Raspberry Pi', 'GPIO', 'gpiozero', 'Python', 'LED', '入出力', 'ピン'],
  },
  '70-camera-module': {
    id: '70-camera-module',
    title: 'カメラモジュール接続',
    description: 'Raspberry Piにカメラモジュールを接続する方法を学びます。',
    summary: `Raspberry Pi Camera Moduleはフレキシブルケーブルで接続します。
現在のRaspberry Pi OS（Bookworm以降）ではカメラは自動検出されます。
rpicam-hello --list-camerasコマンドで接続を確認できます。`,
    keywords: ['Raspberry Pi', 'カメラ', 'Camera Module', 'rpicam', 'CSI', '接続'],
  },
  '71-image-capture': {
    id: '71-image-capture',
    title: '静止画撮影',
    description: 'Raspberry Piで静止画を撮影する方法を学びます。',
    summary: `libcamera-stillコマンドで静止画を撮影できます。
解像度、露出、ホワイトバランスなどをオプションで調整します。
Pythonのpicamera2ライブラリでプログラムから撮影を制御できます。`,
    keywords: ['Raspberry Pi', '撮影', 'libcamera-still', 'picamera2', '静止画', '画像'],
  },
  '72-video-streaming': {
    id: '72-video-streaming',
    title: 'ストリーミング配信',
    description: 'Raspberry Piでリアルタイム映像を配信する方法を学びます。',
    summary: `MJPEG-streamerやlibcameraでHTTP経由で映像を配信できます。
ネットワーク帯域と画質・フレームレートのバランスを調整します。
遅延を減らすにはハードウェアエンコードを活用します。`,
    keywords: ['Raspberry Pi', 'ストリーミング', 'MJPEG', 'HTTP', '映像配信', 'リアルタイム'],
  },
  '73-opencv-intro': {
    id: '73-opencv-intro',
    title: 'OpenCV入門',
    description: 'Raspberry Piで画像処理ライブラリOpenCVを使う方法を学びます。',
    summary: `OpenCVは画像処理・コンピュータビジョンのライブラリです。
画像の読み込み、変換、フィルタ処理が可能です。
顔検出や動体検知などの高度な処理も実装できます。`,
    keywords: ['OpenCV', 'Raspberry Pi', '画像処理', 'コンピュータビジョン', '検出', 'Python'],
  },
  '74-image-storage': {
    id: '74-image-storage',
    title: '画像の保存と管理',
    description: '撮影した画像の保存先と管理方法を学びます。',
    summary: `画像保存先はローカル（SD/SSD）、NAS、クラウドから選択します。
ファイル命名規則と定期削除でディスク容量を管理します。
保存期間と容量のバランスを考慮して構成を決めます。`,
    keywords: ['画像保存', 'ストレージ', 'NAS', 'クラウド', 'SDカード', 'SSD', '管理'],
  },
  '75-raspi-power': {
    id: '75-raspi-power',
    title: 'Raspberry Piの電源管理',
    description: 'Raspberry Piを安定稼働させるための電源管理を学びます。',
    summary: `Raspberry Piには安定電源が必要です（Pi 4: 5V 3A、Pi 5: 5V 5A）。
UPSで停電時も安全にシャットダウンできます。
電源は直接抜かず、shutdownコマンドを使うのが基本です。`,
    keywords: ['Raspberry Pi', '電源', 'UPS', 'シャットダウン', '安定', '24時間'],
  },
  '76-raspi-vs-m5': {
    id: '76-raspi-vs-m5',
    title: 'Raspberry Pi vs M5Stack',
    description: 'Raspberry PiとM5Stackの使い分けを学びます。',
    summary: `Raspberry Piは画像処理・複雑な処理向き、M5Stackはセンサー収集・携帯向きです。
用途に応じて適材適所で選択し、組み合わせて使うことも有効です。
コスト、消費電力、必要な処理能力で判断します。`,
    keywords: ['Raspberry Pi', 'M5Stack', '比較', '選定', '使い分け', 'IoT'],
  },
  '77-raspi-wrap': {
    id: '77-raspi-wrap',
    title: 'Raspberry Piまとめ',
    description: 'Phase 7のまとめ。Raspberry Piで学んだ知識を振り返ります。',
    summary: `Raspberry PiはLinuxベースのエッジデバイスとして画像処理に強みがあります。
OS設定、GPIO、カメラ、ストリーミング、OpenCVを習得しました。
監視カメラや検品システムの提案に活かせる知識が身につきました。`,
    keywords: ['Raspberry Pi', 'まとめ', 'カメラ', 'エッジ', '画像処理', '総復習'],
  },
  '78-ai-vision-intro': {
    id: '78-ai-vision-intro',
    title: 'AIによる画像認識とは',
    description: 'Phase 8の始まり。AIで映像を「理解する」仕組みを学びます。',
    summary: `画像認識AIは学習で特徴を覚え、推論で判断します。
出力には信頼度（確率）が付き、100%の精度は期待できません。
分類、検出、セグメンテーションなど用途別の種類があります。`,
    keywords: ['AI', '画像認識', '機械学習', '推論', '学習', '信頼度', '分類'],
  },
  '79-classification-detection': {
    id: '79-classification-detection',
    title: '分類と検出の違い',
    description: '画像認識の「分類」と「検出」の違いと使い分けを学びます。',
    summary: `分類は画像全体を1つのラベルに判定、検出は個々の物体の位置を特定します。
位置情報が必要なら検出、不要なら分類を選びます。
製品検査では要件に応じて適切な方式を提案します。`,
    keywords: ['分類', '検出', 'Classification', 'Detection', 'バウンディングボックス', 'AI'],
  },
  '80-image-model-intuition': {
    id: '80-image-model-intuition',
    title: '画像モデルの直感',
    description: 'AIモデルが画像を処理する仕組みを直感的に理解します。',
    summary: `ニューラルネットワークは複数の層で単純→複雑な特徴を段階的に抽出します。
学習とは重みを調整すること。事前学習モデルを活用すると効率的です。
AIには限界があり、学習データ外の状況や完璧な精度は期待できません。`,
    keywords: ['ニューラルネットワーク', '層', '特徴', '学習', '重み', '転移学習', 'AI'],
  },
}

export function getLessonContent(lessonId: string): Lesson | undefined {
  return lessonContent[lessonId]
}

export function getAllLessons(): Lesson[] {
  return Object.values(lessonContent)
}

export function searchLessons(query: string): Array<{ lessonId: string; score: number }> {
  const queryLower = query.toLowerCase()
  const queryTerms = queryLower.split(/\s+/)

  const results: Array<{ lessonId: string; score: number }> = []

  for (const lesson of Object.values(lessonContent)) {
    let score = 0

    for (const term of queryTerms) {
      if (lesson.title.toLowerCase().includes(term)) {
        score += 10
      }

      if (lesson.keywords.some((k) => k.toLowerCase().includes(term))) {
        score += 5
      }

      if (lesson.summary.toLowerCase().includes(term)) {
        score += 2
      }

      if (lesson.description.toLowerCase().includes(term)) {
        score += 1
      }
    }

    if (score > 0) {
      results.push({ lessonId: lesson.id, score })
    }
  }

  return results.sort((a, b) => b.score - a.score)
}

export { phases, getLessonByNumber }
