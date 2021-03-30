import styled from 'styled-components'
import { colors } from '../../styles'

const PlayingGuess = styled.div`
  max-width: 500px;
  min-height: 400px;
  border: 1px solid lightgray;
  border-radius: 0.5em;
  background: ${colors.primary};
  /* border-radius: 0.5em; */
  padding: 2em;
  display: flex;
  flex-direction: column;
  color: lightgray;

  img {
    width: 50%;
    align-self: center;
  }

  h3 {
    text-align: center;
  }

  p {
    padding: 0.5em;
    /* font-size: 4em; */
  }

  ol {
    align-self: center;
  }

  .orange {
    background: ${colors.orangeBtn};
    transition: background-color 1s;

    :hover {
      background: ${colors.orangeHover};
    }
  }
`
const InputPlayer = styled.input`
  border: 1px solid lightgray;
  height: 2.5em;
  width: 100%;
  font-size: 1.25em;
  border-radius: 0.5em;
  padding-left: 0.5em;
  :focus {
    border: none;
    border-bottom: 4px solid lightgray;
  }

  @media (min-width: 35em) {
    font-size: 1em;
  }
`

const PressToPlay = styled.button`
  background: ${colors.green};
  width: 80%;
  display: flex;
  justify-content: center;
  border: none;
  border-radius: 0.5em;
  color: white;
  font-size: 2em;
  padding: 0.2em 2em;
  margin: 0.4em 0;
  align-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 1s;

  @media (min-width: 35em) {
    width: 40%;
    font-size: 1.5em;
  }

  :hover {
    background: ${colors.greenhover};
  }
`

export { PlayingGuess, InputPlayer, PressToPlay }
