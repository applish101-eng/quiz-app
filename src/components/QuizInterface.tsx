import { useState } from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { CheckCircle2, XCircle, ChevronRight, Lightbulb, Trophy, ArrowLeft, Star, BookOpen } from 'lucide-react'
import type { Question, Subject } from '../types'
import { units } from '../data/quizData'

interface QuizInterfaceProps {
  questions: Question[]
  subject: Subject
  unit?: number
  onComplete: (answers: Record<number, string>, score: number) => void
  onBack?: () => void
  isRevise?: boolean
}

export default function QuizInterface({
  questions,
  subject,
  unit,
  onComplete,
  onBack,
  isRevise = false,
}: QuizInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [score, setScore] = useState(0)

  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length
  const progress = ((currentIndex + 1) / totalQuestions) * 100
  const isLastQuestion = currentIndex === totalQuestions - 1

  function handleSelect(option: string) {
    if (isSubmitted) return
    setSelectedOption(option)
  }

  function handleSubmit() {
    if (!selectedOption) return
    setIsSubmitted(true)
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedOption }))

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }

  function handleNext() {
    if (isLastQuestion) {
      const finalAnswers = { ...answers, [currentQuestion.id]: selectedOption ?? '' }
      onComplete(finalAnswers, score)
      return
    }

    setCurrentIndex((prev) => prev + 1)
    setSelectedOption(null)
    setIsSubmitted(false)
    setShowExplanation(false)
    setShowHint(false)
  }

  function getOptionStyle(option: string): string {
    if (!isSubmitted) {
      return selectedOption === option
        ? 'border-primary bg-primary/5 ring-2 ring-primary'
        : 'border-border hover:border-primary/50 hover:bg-muted/50'
    }

    if (option === currentQuestion.correctAnswer) {
      return 'border-success bg-success-bg text-success ring-2 ring-success'
    }

    if (option === selectedOption && option !== currentQuestion.correctAnswer) {
      return 'border-destructive bg-destructive-bg text-destructive ring-2 ring-destructive'
    }

    return 'border-border opacity-50'
  }

  function getOptionIcon(option: string): React.ReactNode {
    if (!isSubmitted) return null
    if (option === currentQuestion.correctAnswer) {
      return <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
    }
    if (option === selectedOption) {
      return <XCircle className="h-5 w-5 shrink-0 text-destructive" />
    }
    return null
  }

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            {onBack && !isRevise && (
              <button onClick={onBack} className="hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            {isRevise
              ? 'Revise Mistakes'
              : unit
                ? `Unit ${unit}: ${units.find((u) => u.number === unit)?.title}`
                : subject.label}
          </span>
          <span>
            {currentIndex + 1} of {totalQuestions}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-4">
        <CardHeader>
          <div className="mb-2 flex flex-wrap gap-2">
            {currentQuestion.isImportant && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                <Star className="h-3 w-3" />
                Important
              </span>
            )}
            {currentQuestion.isPreviouslyAsked && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <BookOpen className="h-3 w-3" />
                Previously Asked
              </span>
            )}
          </div>
          <CardTitle className="text-lg leading-relaxed sm:text-xl">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left text-sm font-medium transition-all duration-200 sm:text-base ${
                  getOptionStyle(option)
                }`}
              >
                <span className="flex-1">{option}</span>
                {getOptionIcon(option)}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {isSubmitted && (
        <div className="space-y-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
          {showExplanation && (
            <Card className="border-muted-foreground/20 bg-muted/50">
              <CardContent className="flex items-start gap-3 p-4">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div>
                  <p className="mb-1 text-sm font-medium">Explanation</p>
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-wrap gap-3">
            {!showExplanation && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowExplanation(true)}
              >
                <Lightbulb className="h-4 w-4" />
                Show Explanation
              </Button>
            )}

            <Button
              onClick={handleNext}
              size={isLastQuestion ? 'lg' : 'default'}
              className="ml-auto"
            >
              {isLastQuestion ? (
                <>
                  <Trophy className="h-4 w-4" />
                  See Results
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {!isSubmitted && (
        <div className="space-y-4">
          {showHint && (
            <Card className="border-muted-foreground/20 bg-muted/50 animate-in slide-in-from-bottom-2 fade-in duration-300">
              <CardContent className="flex items-start gap-3 p-4">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                <div>
                  <p className="mb-1 text-sm font-medium">Explanation</p>
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-wrap justify-between gap-3">
            {!showHint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(true)}
              >
                <Lightbulb className="h-4 w-4" />
                Show Explanation
              </Button>
            )}
            {showHint && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHint(false)}
              >
                <Lightbulb className="h-4 w-4" />
                Hide Explanation
              </Button>
            )}

            <Button
              onClick={handleSubmit}
              disabled={!selectedOption}
              size="lg"
              className="w-full sm:w-auto"
            >
              Submit Answer
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
