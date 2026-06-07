import { useMemo } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { CheckCircle2, XCircle, Home, RotateCcw, BookOpen } from 'lucide-react'
import type { Question, Subject } from '../types'

interface ResultScreenProps {
  questions: Question[]
  subject: Subject
  answers: Record<number, string>
  onRevise: (wrongQuestions: Question[]) => void
  onHome: () => void
}

export default function ResultScreen({
  questions,
  subject,
  answers,
  onRevise,
  onHome,
}: ResultScreenProps) {
  const score = useMemo(
    () => questions.filter((q) => answers[q.id] === q.correctAnswer).length,
    [questions, answers]
  )

  const wrongQuestions = useMemo(
    () => questions.filter((q) => answers[q.id] !== q.correctAnswer),
    [questions, answers]
  )

  const percentage = Math.round((score / questions.length) * 100)

  const lastScoreKey = `lastScore_${subject.name}`
  const lastScore = (() => {
    try {
      return localStorage.getItem(lastScoreKey)
    } catch {
      return null
    }
  })()

  if (lastScore === null || Number(lastScore) < score) {
    try {
      localStorage.setItem(lastScoreKey, String(score))
    } catch {
      // localStorage not available
    }
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          {percentage >= 70 ? (
            <CheckCircle2 className="h-10 w-10 text-success" />
          ) : (
            <XCircle className="h-10 w-10 text-destructive" />
          )}
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Quiz Complete!
        </h1>
        <p className="text-lg text-muted-foreground">
          {subject.label}
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle className="text-center text-2xl">
            You scored{' '}
            <span className={percentage >= 70 ? 'text-success' : 'text-destructive'}>
              {score}
            </span>
            /{questions.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={percentage} className="mb-2 h-3" />
          <p className="text-center text-sm text-muted-foreground">
            {percentage}% correct
          </p>
          {lastScore && (
            <p className="mt-1 text-center text-xs text-muted-foreground">
              Best: {lastScore}/{questions.length}
            </p>
          )}
        </CardContent>
      </Card>

      {wrongQuestions.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <XCircle className="h-5 w-5 text-destructive" />
              Questions to Review ({wrongQuestions.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {wrongQuestions.map((q, idx) => (
              <div
                key={q.id}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <p className="mb-2 text-sm font-medium">
                  {idx + 1}. {q.question}
                </p>
                <div className="mb-2 space-y-1">
                  {q.options.map((opt) => {
                    const isUserAnswer = answers[q.id] === opt
                    const isCorrectAnswer = q.correctAnswer === opt
                    return (
                      <div
                        key={opt}
                        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm ${
                          isCorrectAnswer
                            ? 'bg-success-bg text-success'
                            : isUserAnswer
                              ? 'bg-destructive-bg text-destructive'
                              : 'text-muted-foreground'
                        }`}
                      >
                        {isCorrectAnswer && (
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <XCircle className="h-3.5 w-3.5 shrink-0" />
                        )}
                        <span
                          className={
                            isCorrectAnswer || isUserAnswer
                              ? 'font-medium'
                              : ''
                          }
                        >
                          {opt}
                          {isUserAnswer && !isCorrectAnswer && ' (Your answer)'}
                          {isCorrectAnswer && ' (Correct)'}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <details className="group">
                  <summary className="cursor-pointer text-xs font-medium text-muted-foreground hover:text-foreground">
                    <BookOpen className="mr-1 inline h-3 w-3" />
                    Show explanation
                  </summary>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {q.explanation}
                  </p>
                </details>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button variant="outline" size="lg" onClick={onHome}>
          <Home className="h-4 w-4" />
          Return to Home
        </Button>
        {wrongQuestions.length > 0 && (
          <Button size="lg" onClick={() => onRevise(wrongQuestions)}>
            <RotateCcw className="h-4 w-4" />
            Revise Mistakes ({wrongQuestions.length})
          </Button>
        )}
      </div>
    </div>
  )
}
