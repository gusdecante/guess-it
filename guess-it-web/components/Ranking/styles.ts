import styled from 'styled-components'

import { colors } from '../../styles'

export const RankingContainer = styled.div`
  max-width: 500px;
  margin-top: 0.5em;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.green};
  padding: 0.2em;
  color: white;
  text-align: center;
`

export const RankingGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2em;
  p {
    font-weight: 600;
    background: ${colors.orangeHover};
  }

  span {
    background: lightgray;
    color: black;
  }
`
