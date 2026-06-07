import { Card, CardDescription, CardTitle } from './ui/card'
import { units, quizData } from '../data/quizData'

interface UnitSelectionProps {
  onSelect: (unit: number) => void
  onBack: () => void
}

export default function UnitSelection({ onSelect, onBack }: UnitSelectionProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-6 sm:px-6 sm:py-8">
      <div className="mb-6 text-center">
        <button
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Operational Research
        </h1>
        <p className="mt-1 text-muted-foreground">
          Choose a unit to practice
        </p>
      </div>

      <div className="space-y-3">
        {units.map((unit) => {
          const count = quizData.filter(
            (q) => q.subject === 'operationalResearch' && q.unit === unit.number
          ).length

          return (
            <button
              key={unit.number}
              onClick={() => {
                if (count > 0) onSelect(unit.number)
              }}
              disabled={count === 0}
              className="group w-full cursor-pointer text-left transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <Card
                className={`overflow-hidden border-l-4 transition-shadow duration-200 ${
                  count === 0
                    ? 'border-l-muted'
                    : 'border-l-rose-500 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4 p-4 sm:p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${
                      count === 0 ? 'bg-muted-foreground/30' : 'bg-rose-500'
                    }`}
                  >
                    {unit.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg">
                      Unit {unit.number}: {unit.title}
                    </CardTitle>
                    <CardDescription className="mt-0.5 flex items-center gap-3">
                      <span>{unit.hours} hrs</span>
                      <span className="text-xs">&bull;</span>
                      <span>{count} question{count !== 1 ? 's' : ''}</span>
                      {count === 0 && (
                        <>
                          <span className="text-xs">&bull;</span>
                          <span className="text-muted-foreground/60">Coming soon</span>
                        </>
                      )}
                    </CardDescription>
                  </div>
                  {count > 0 && (
                    <svg
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </Card>
            </button>
          )
        })}
      </div>
    </div>
  )
}
