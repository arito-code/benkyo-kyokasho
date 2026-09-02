import Link from 'next/link'

interface Lesson {
  id: string
  number: number
  title: string
  href: string
  status: 'available' | 'coming_soon'
}

const lessons: Lesson[] = [
  {
    id: '01-electricity',
    number: 1,
    title: '電気の基礎',
    href: '/electronics/01-electricity',
    status: 'available',
  },
  {
    id: '02-led',
    number: 2,
    title: 'LEDを光らせる',
    href: '/electronics/02-led',
    status: 'coming_soon',
  },
  {
    id: '03-resistor',
    number: 3,
    title: '抵抗の計算',
    href: '/electronics/03-resistor',
    status: 'coming_soon',
  },
  {
    id: '04-circuit',
    number: 4,
    title: '回路図の読み方',
    href: '/electronics/04-circuit',
    status: 'coming_soon',
  },
  {
    id: '05-breadboard',
    number: 5,
    title: 'ブレッドボードの使い方',
    href: '/electronics/05-breadboard',
    status: 'coming_soon',
  },
]

export default function ElectronicsRoadmap() {
  return (
    <nav className="roadmap" style={{ marginTop: 'var(--spacing-lg)' }}>
      {lessons.map((lesson) => {
        const isLocked = lesson.status === 'coming_soon'

        if (isLocked) {
          return (
            <div
              key={lesson.id}
              className="roadmap-item locked"
              aria-disabled="true"
            >
              <span className="roadmap-number">{lesson.number}</span>
              <span>{lesson.title}</span>
              <span
                style={{
                  marginLeft: 'auto',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                準備中
              </span>
            </div>
          )
        }

        return (
          <Link
            key={lesson.id}
            href={lesson.href}
            className="roadmap-item"
          >
            <span className="roadmap-number">{lesson.number}</span>
            <span>{lesson.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}
