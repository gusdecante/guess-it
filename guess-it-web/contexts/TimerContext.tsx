import { createContext, useEffect, useState } from 'react'
import { ChildrenProviderProps, TimerContextData } from '../@types/types'
import { useMutation } from '@apollo/react-hooks'

import { createUserMutation } from '../services/api'

export const TimerContext = createContext({} as TimerContextData)

let timerTimeout: NodeJS.Timeout

export function TimerProvider({ children }: ChildrenProviderProps) {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [randomNumber, setRandomNumber] = useState(1)
  const [numberOfAttempts, setNumberOfAttempts] = useState(0)
  const [timeToHit, setTimeToHit] = useState<number[]>([]) // Tempo para acertar
  const [name, setName] = useState('')
  const [createUser] = useMutation(createUserMutation)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  async function addUser() {
    try {
      await createUser({
        variables: {
          name: name,
          timeToHitTheNumber: timeToHit
            ? timeToHit.reduce((time, acc) => time + acc)
            : 0,
          attemptsToHitTheNumber: numberOfAttempts || 0,
        },
      })
      setTimeToHit([])
    } catch (err) {
      console.log(`Erro ${err}`)
    }
  }

  function setNewName(newName: string) {
    setName(newName)
  }

  function startTimer() {
    setIsActive(true)
    generateRandomNumber()
  }

  function resetTimer() {
    clearTimeout(timerTimeout)
    setIsActive(false)
    setTime(0)
    setHasFinished(false)
  }

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 1000) + 1) // random number between 1 and 1000
  }

  function compareTwoNumbers(operation: string, insertedNumber: number) {
    // alert(`${operation}-${insertedNumber}`)
    if (operation === 'less') {
      const verification = insertedNumber < randomNumber
      verification
        ? (() => {
            alert(`${verification}-${time}`)
            setTimeToHit([...timeToHit, time])
            resetTimer()
          })()
        : (() => {
            generateRandomNumber()
            setNumberOfAttempts(numberOfAttempts + 1)
          })()
    }

    if (operation === 'equal') {
      const verification = insertedNumber === randomNumber
      verification
        ? (() => {
            alert(`${verification}-${time}`)
            setTimeToHit([...timeToHit, time])
            resetTimer()
          })()
        : (() => {
            generateRandomNumber()
            setNumberOfAttempts(numberOfAttempts + 1)
          })()
    }

    if (operation === 'greater') {
      const verification = insertedNumber > randomNumber
      verification
        ? (() => {
            alert(`${verification}-${time}`)
            setTimeToHit([...timeToHit, time])
            resetTimer()
          })()
        : (() => {
            generateRandomNumber()
            setNumberOfAttempts(numberOfAttempts + 1)
          })()
    }
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
        randomNumber,
        compareTwoNumbers,
        numberOfAttempts,
        timeToHit,
        name,
        setNewName,
        addUser,
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
