import styled, { css } from 'styled-components'

import { Active } from '../../@types/types'

import { colors } from '../../styles'

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-weight: 600;
  color: ${colors.title};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${colors.white};

    box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    font-size: 5rem;
    text-align: center;
  }

  > div span {
    flex: 1;
  }

  > div span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  > div span:last-child {
    border-right: 1px solid #f0f1f3;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const GenericButton = styled.button<Active>`
  width: 100%;
  height: 5rem;

  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  cursor: pointer;

  transition: background-color 0.2s;

  ${({ active }) =>
    active
      ? css`
          background: ${colors.white};
          color: ${colors.title};
          :hover {
            background: ${colors.red};
            color: ${colors.white};
          }
        `
      : css`
          background: ${colors.blue};
          color: ${colors.white};
          :not(:disabled):hover {
            background: ${colors.blueDark};
          }

          :disabled {
            background: ${colors.white};
            color: ${colors.text};
            cursor: not-allowed;
          }
        `}
`
export const ContainerGuesses = styled.div`
  width: 100%;

  .attempts {
    background: ${colors.green};
  }
`

export const Guess = styled.h1`
  width: 100%;
  height: 2em;
  background-color: black;
  text-align: center;
  padding: 0.5em;
`

export const MessageGuess = styled.p`
  background-color: ${colors.orangeBtn};
  color: ${colors.blue};
`

export const InputNumberGuess = styled.input`
  margin: 0 auto;
  height: 2.5em;
  width: 100%;
`

export const ContainerButtonsAttempt = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0.5em;

  .less {
    background-color: ${colors.green};
  }
  .equal {
    background-color: ${colors.blue};
  }
  .greater {
    background-color: ${colors.orangeBtn};
  }

  div h4 {
    text-align: center;
    text-decoration: underline;
  }
`

export const RoundButtonAttempt = styled.button`
  border-radius: 50%;
  padding: 2em;
  color: white;
  border: 1px solid white;
  cursor: pointer;
`
export const BoxShadowAttemptsToHit = styled.div`
  box-shadow: 1px 1px 1px black;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0;

  span {
    border: 1px solid white;
    width: 100%;
    padding: 0.5em;
  }

  span strong {
    background: ${colors.blue};
  }
`
