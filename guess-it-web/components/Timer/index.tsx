import { useContext, useState } from 'react'
import { TimerContext } from '../../contexts/TimerContext'
import {
  GenericButton,
  TimerContainer,
  ContainerGuesses,
  Guess,
  MessageGuess,
  InputNumberGuess,
  ContainerButtonsAttempt,
  RoundButtonAttempt,
  BoxShadowAttemptsToHit,
} from './styles'

import { FaLessThan, FaEquals, FaGreaterThan } from 'react-icons/fa'

export default function Timer() {
  const {
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
  } = useContext(TimerContext)

  const [insertedNumber, setInsertedNumber] = useState(0)

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
      {isActive && (
        <ContainerGuesses>
          <Guess className="black">?</Guess>
          <MessageGuess>
            Faça seu palpite, digite um <strong>número</strong> abaixo e diga se
            ele é <strong>maior, menor ou igual</strong> ao gerado pelo
            computador {randomNumber}
          </MessageGuess>
          <MessageGuess className="attempts">
            Número de Tentativas até agora: <strong>{numberOfAttempts}</strong>
          </MessageGuess>
          <InputNumberGuess
            min={1}
            max={1000}
            type="number"
            onChange={(e) => setInsertedNumber(parseInt(e.target.value))}
          />
          <ContainerButtonsAttempt>
            <div>
              <RoundButtonAttempt
                className="less"
                onClick={() => compareTwoNumbers('less', insertedNumber)}
              >
                <FaLessThan />
              </RoundButtonAttempt>
              <h4>Menor</h4>
            </div>
            <div>
              <RoundButtonAttempt
                className="equal"
                onClick={() => compareTwoNumbers('equal', insertedNumber)}
              >
                <FaEquals />
              </RoundButtonAttempt>
              <h4>Igual</h4>
            </div>
            <div>
              <RoundButtonAttempt
                className="greater"
                onClick={() => compareTwoNumbers('greater', insertedNumber)}
              >
                <FaGreaterThan />
              </RoundButtonAttempt>
              <h4>Maior</h4>
            </div>
          </ContainerButtonsAttempt>
          {/* <p>Tempo Total: {timeToHit.reduce((time, acc) => time + acc)}</p> */}
        </ContainerGuesses>
      )}
      <BoxShadowAttemptsToHit>
        {timeToHit.map((time, index) => {
          return (
            <span>
              Jogada: <strong>{index + 1}</strong> | Tempo p/ acertar:{' '}
              <strong>{time} segundos</strong>
            </span>
          )
        })}
      </BoxShadowAttemptsToHit>
    </div>
  )
}
