import Link from 'next/link'
import { phases } from '@/lib/course'

export default function CourseRoadmap() {
  return (
    <div className="course-roadmap">
      {phases.map((phase) => (
        <div key={phase.id} className="phase-section">
          <h3 className="phase-title">
            <span className="phase-number">PHASE {phase.id}</span>
            {phase.title}
          </h3>
          <div className="phase-lessons">
            {phase.lessons.map((lesson) => {
              const displayTitle = lesson.title || `第${lesson.number}回`
              
              if (lesson.ready) {
                return (
                  <Link
                    key={lesson.number}
                    href={`/lessons/${lesson.slug}`}
                    className="lesson-item lesson-ready"
                  >
                    <span className="lesson-number">第{lesson.number}回</span>
                    <span className="lesson-title">{lesson.title}</span>
                  </Link>
                )
              }
              
              return (
                <div
                  key={lesson.number}
                  className="lesson-item lesson-soon"
                  aria-disabled="true"
                >
                  <span className="lesson-number">第{lesson.number}回</span>
                  {lesson.title && <span className="lesson-title">{lesson.title}</span>}
                  {!lesson.title && <span className="lesson-title soon-label">準備中</span>}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
