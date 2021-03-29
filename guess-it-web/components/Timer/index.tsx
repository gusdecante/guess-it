import { useContext } from 'react'
import { TimerContext } from '../../contexts/TimerContext'
import { GenericButton, TimerContainer } from './styles'

export default function Timer() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startTimer,
    resetTimer,
  } = useContext(TimerContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return (
    <div>
      <TimerContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </TimerContainer>
      {hasFinished ? (
        <GenericButton disabled>Ciclo encerrado</GenericButton>
      ) : (
        <>
          {isActive ? (
            <GenericButton active onClick={resetTimer}>
              Abandonar ciclo
            </GenericButton>
          ) : (
            <GenericButton onClick={startTimer}>Iniciar um ciclo</GenericButton>
          )}
        </>
      )}
    </div>
  )
}
