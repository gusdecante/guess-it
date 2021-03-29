import { createContext, useContext, useEffect, useState } from 'react'
import { ChildrenProviderProps, TimerContextData } from '../@types/types'

export const TimerContext = createContext({} as TimerContextData)

let timerTimeout: NodeJS.Timeout

export function TimerProvider({ children }: ChildrenProviderProps) {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startTimer() {
    setIsActive(true)
  }

  function resetTimer() {
    clearTimeout(timerTimeout)
    setIsActive(false)
    setTime(0)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive) {
      timerTimeout = setTimeout(() => {
        setTime(time + 1)
      }, 1000)
    }
  }, [isActive, time])

  return (
    <TimerContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startTimer,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
