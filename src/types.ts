export interface Question {
  id: number
  subject: string
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}

export interface Subject {
  name: string
  label: string
  icon: string
  description: string
  color: string
}
