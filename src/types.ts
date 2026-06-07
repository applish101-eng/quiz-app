export interface Question {
  id: number
  subject: string
  unit: number
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

export interface UnitInfo {
  number: number
  title: string
  hours: number
}

export interface Subject {
  name: string
  label: string
  icon: string
  description: string
  color: string
}
