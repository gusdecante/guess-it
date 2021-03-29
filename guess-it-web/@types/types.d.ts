import { ReactNode } from 'react'

export interface ChildrenProviderProps {
  children: ReactNode
}

export interface TimerContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startTimer: () => void
  resetTimer: () => void
}

export interface Active {
  active?: Boolean
}
