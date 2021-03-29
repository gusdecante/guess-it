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
