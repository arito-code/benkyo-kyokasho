import Header from '@/components/Header'
import ElectronicsRoadmap from '@/components/ElectronicsRoadmap'

export default function ElectronicsPage() {
  return (
    <>
      <Header />
      <main>
        <h1>電子工作</h1>
        <p>
          電子工作コースでは、LEDを光らせることから始めて、電気回路の基礎を学びます。
          各単元は「今日の問い」から始まり、段階的に理解を深めていきます。
        </p>
        <ElectronicsRoadmap />
      </main>
    </>
  )
}
