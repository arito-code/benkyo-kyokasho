import Link from 'next/link'
import { phases, LessonInfo } from '@/lib/course'

interface LessonNavigationProps {
  currentLessonNumber: number
}

function getAdjacentLessons(currentNumber: number): {
  prev: LessonInfo | null
  next: LessonInfo | null
} {
  const allLessons = phases.flatMap((p) => p.lessons)
  const readyLessons = allLessons.filter((l) => l.ready)

  const currentIndex = readyLessons.findIndex((l) => l.number === currentNumber)

  if (currentIndex === -1) {
    return { prev: null, next: null }
  }

  const prev = currentIndex > 0 ? readyLessons[currentIndex - 1] : null
  const next =
    currentIndex < readyLessons.length - 1 ? readyLessons[currentIndex + 1] : null

  return { prev, next }
}

export default function LessonNavigation({
  currentLessonNumber,
}: LessonNavigationProps) {
  const { prev, next } = getAdjacentLessons(currentLessonNumber)

  if (!prev && !next) {
    return null
  }

  return (
    <nav
      className="lesson-navigation"
      aria-label="レッスンナビゲーション"
    >
      <div className="lesson-nav-prev">
        {prev ? (
          <Link href={`/lessons/${prev.slug}`} className="lesson-nav-link">
            <span className="lesson-nav-arrow">←</span>
            <span className="lesson-nav-label">前の回</span>
            <span className="lesson-nav-title">
              第{prev.number}回: {prev.title}
            </span>
          </Link>
        ) : (
          <span className="lesson-nav-placeholder" />
        )}
      </div>
      <div className="lesson-nav-next">
        {next ? (
          <Link href={`/lessons/${next.slug}`} className="lesson-nav-link">
            <span className="lesson-nav-label">次の回</span>
            <span className="lesson-nav-arrow">→</span>
            <span className="lesson-nav-title">
              第{next.number}回: {next.title}
            </span>
          </Link>
        ) : (
          <span className="lesson-nav-placeholder" />
        )}
      </div>
    </nav>
  )
}
