import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import SubjectGrid from './components/SubjectGrid'
import UnitSelection from './components/UnitSelection'
import QuizInterface from './components/QuizInterface'
import ResultScreen from './components/ResultScreen'
import GisNotesScreen from './components/GisNotesScreen'
import MultimediaNotesScreen from './components/MultimediaNotesScreen'
import { quizData } from './data/quizData'
import type { Subject, Question } from './types'

type Screen = 'home' | 'units' | 'quiz' | 'result' | 'notes'

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return { dark, toggle: () => setDark((d) => !d) }
}

export default function App() {
  const { dark, toggle: toggleTheme } = useTheme()
  const [screen, setScreen] = useState<Screen>('home')
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null)
  const [selectedUnit, setSelectedUnit] = useState<number | undefined>()
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isReviseMode, setIsReviseMode] = useState(false)
  const [notesSubject, setNotesSubject] = useState<'gis' | 'multimedia'>('gis')

  function handleSubjectSelect(subject: Subject) {
    setSelectedSubject(subject)
    setScreen('units')
  }

  function handleUnitSelect(unit: number) {
    setSelectedUnit(unit)
    const filtered = quizData.filter(
      (q) => q.subject === selectedSubject!.name && q.unit === unit
    )
    setCurrentQuestions(filtered)
    setAnswers({})
    setIsReviseMode(false)
    setScreen('quiz')
  }

  function handleQuizComplete(finalAnswers: Record<number, string>, _score: number) {
    setAnswers(finalAnswers)
    setScreen('result')
  }

  function handleRevise(wrongQuestions: Question[]) {
    setSelectedUnit(undefined)
    setCurrentQuestions(wrongQuestions)
    setAnswers({})
    setIsReviseMode(true)
    setScreen('quiz')
  }

  function handleBackToUnits() {
    setScreen('units')
    setAnswers({})
    setIsReviseMode(false)
  }

  function handleHome() {
    setScreen('home')
    setSelectedSubject(null)
    setSelectedUnit(undefined)
    setCurrentQuestions([])
    setAnswers({})
    setIsReviseMode(false)
  }

  function handleOpenNotes(subject: 'gis' | 'multimedia') {
    setNotesSubject(subject)
    setScreen('notes')
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <span className="text-lg font-bold tracking-tight">QuizMaster</span>
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <main className="flex-1">
        {screen === 'home' && (
          <SubjectGrid onSelect={handleSubjectSelect} onOpenNotes={handleOpenNotes} />
        )}

        {screen === 'notes' && notesSubject === 'gis' && (
          <GisNotesScreen onBack={handleHome} />
        )}

        {screen === 'notes' && notesSubject === 'multimedia' && (
          <MultimediaNotesScreen onBack={handleHome} />
        )}

        {screen === 'units' && selectedSubject && (
          <UnitSelection
            subject={selectedSubject}
            onSelect={handleUnitSelect}
            onBack={handleHome}
          />
        )}

        {screen === 'quiz' && selectedSubject && (
          <QuizInterface
            questions={currentQuestions}
            subject={selectedSubject}
            unit={isReviseMode ? undefined : selectedUnit}
            onComplete={handleQuizComplete}
            onBack={isReviseMode ? undefined : handleBackToUnits}
            isRevise={isReviseMode}
          />
        )}

        {screen === 'result' && selectedSubject && (
          <ResultScreen
            questions={currentQuestions}
            subject={selectedSubject}
            unit={isReviseMode ? undefined : selectedUnit}
            answers={answers}
            onRevise={handleRevise}
            onHome={handleHome}
            onBack={isReviseMode ? undefined : handleBackToUnits}
            isRevise={isReviseMode}
          />
        )}
      </main>
    </div>
  )
}
