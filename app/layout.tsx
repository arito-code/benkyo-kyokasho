import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '勉強教科書',
  description: '日本語で学ぶ理系教科書',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
