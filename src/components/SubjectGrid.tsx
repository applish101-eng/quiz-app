import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { subjects } from '../data/quizData'
import type { Subject } from '../types'

interface SubjectGridProps {
  onSelect: (subject: Subject) => void
}

export default function SubjectGrid({ onSelect }: SubjectGridProps) {
  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-lg items-center justify-center px-4 py-8 sm:px-6">
      {subjects.map((subject) => (
        <button
          key={subject.name}
          onClick={() => onSelect(subject)}
          className="group w-full cursor-pointer text-left transition-all duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Card className="overflow-hidden transition-shadow duration-200 hover:shadow-lg">
            <div
              className={`flex h-32 items-center justify-center bg-gradient-to-br ${subject.color}`}
            >
              <span className="text-5xl">{subject.icon}</span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{subject.label}</CardTitle>
              <CardDescription className="text-base">{subject.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <span className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-6 py-3 text-base font-medium text-primary transition-all duration-200 group-hover:gap-3 group-hover:bg-primary/20">
                Start Quiz
                <svg
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </CardContent>
          </Card>
        </button>
      ))}
    </div>
  )
}
