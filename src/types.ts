export interface Question {
  id: number
  subject: string
  unit: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
  isImportant?: boolean
  isPreviouslyAsked?: boolean
}

export interface UnitInfo {
  number: number
  title: string
  hours: number
  subject?: string
}

export interface Subject {
  name: string
  label: string
  icon: string
  description: string
  color: string
}
