import Header from '@/components/Header'
import AskBox from '@/components/AskBox'

export default function AskPage() {
  return (
    <>
      <Header />
      <main>
        <h1>質問する</h1>
        <p>
          学習内容についてわからないことがあれば、下のフォームから質問できます。
        </p>
        <AskBox />
      </main>
    </>
  )
}
