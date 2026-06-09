# QuizMaster — Agent Guide

## Stack
React 19 + TypeScript 6 + Vite 8 + Tailwind CSS v4 + `vite-plugin-pwa`

## Commands
- `npm run dev` — Vite dev server
- `npm run build` — **must run**: `tsc -b` (type-check) then `vite build` (bundle + PWA SW)
- `npm run lint` — ESLint flat config with `typescript-eslint`, `react-hooks`, `react-refresh`
- `npm run preview` — serves `dist/` locally

## Architecture
- **No router.** Screen state machine in `src/App.tsx` (`'home' | 'units' | 'quiz' | 'result' | 'notes'`), managed via `useState`.
- **All data embedded.** `src/data/quizData.ts` — ~600 MCQ questions across 3 subjects (OR + GIS + Multimedia), no external API calls. Add new questions here.
- **No tests.** No test framework installed.

## Project structure
```
src/
  App.tsx              — root state machine + layout
  main.tsx             — entrypoint
  types.ts             — Question, UnitInfo, Subject interfaces
  data/quizData.ts     — all quiz content (subjects, units, questions)
  components/
    ui/                — shadcn-style primitives (button, card, dialog, progress) built on Radix
    SubjectGrid.tsx, UnitSelection.tsx, QuizInterface.tsx, ResultScreen.tsx, GisNotesScreen.tsx, MultimediaNotesScreen.tsx
```

## Conventions
- Tailwind v4: `@import "tailwindcss"` (no PostCSS config), theme via `@theme {}` in `src/index.css`.
- TypeScript: `verbatimModuleSyntax` — use `import type` for type-only imports. `erasableSyntaxOnly` — no enums, no namespaces.
- `noUnusedLocals: true`, `noUnusedParameters: true` — any unused code fails the build.
- Component variants via `class-variance-authority` + `tailwind-merge` (`cn()` in `src/lib/utils.ts`).
- Icons: `lucide-react`.
- **Dark mode.** Class-based, toggled via Sun/Moon button in header. Preference stored in `localStorage` under key `theme`. Initialized from `prefers-color-scheme` if no stored value.
- **Quiz pagination.** Question navigation dots below the card allow jumping to any question. Previous/Next buttons let users go back and forth. Per-question state (selected option, submitted status) is preserved when navigating.

## PWA
- `vite-plugin-pwa` with `generateSW` mode. Service worker auto-created at build.
- All static assets precached; app works fully offline after first visit.
- Icons in `public/icon-{192,512}.png` (regenerate via `scripts/generate-icons.ps1` if missing).
- Deploy `dist/` to any static host.
