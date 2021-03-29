import styled from 'styled-components'

export const RankingContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  color: white;
`

export const RankingGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 0.2em;
  p {
    background: blue;
  }

  span {
    background: lightgray;
    color: black;
  }
`
