import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { subjects } from '../data/quizData'
import type { Subject } from '../types'

interface SubjectGridProps {
  onSelect: (subject: Subject) => void
}

const subjectIcons: Record<string, string> = {
  mathematics: '📐',
  science: '🔬',
  history: '📜',
  computers: '💻',
  operationalResearch: '📊',
}

export default function SubjectGrid({ onSelect }: SubjectGridProps) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Quiz Master
        </h1>
        <p className="mt-2 text-muted-foreground">
          Choose a subject to test your knowledge
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <button
            key={subject.name}
            onClick={() => onSelect(subject)}
            className="group cursor-pointer text-left transition-all duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Card className="h-full overflow-hidden transition-shadow duration-200 hover:shadow-lg">
              <div
                className={`flex h-24 items-center justify-center bg-gradient-to-br ${subject.color}`}
              >
                <span className="text-4xl">{subjectIcons[subject.name]}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{subject.label}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center text-sm font-medium text-primary transition-all duration-200 group-hover:gap-2">
                  Start Quiz
                  <svg
                    className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
    </div>
  )
}
