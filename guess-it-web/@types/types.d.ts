import { ReactNode } from 'react'

export interface ChildrenProviderProps {
  children: ReactNode
}

export interface TimerContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  randomNumber: number
  numberOfAttempts: number
  timeToHit: number[]
  name: string
  setNewName: (newName: string) => void
  startTimer: () => void
  resetTimer: () => void
  compareTwoNumbers: (operation: string, insertedNumber: number) => void
  addUser: () => void
}

export interface Active {
  active?: Boolean
}

export interface User {
  id: string
  name: string
  timeToHitTheNumber: number
  attemptsToHitTheNumber: number
}
