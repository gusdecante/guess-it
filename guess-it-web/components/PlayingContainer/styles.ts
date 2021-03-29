import styled from 'styled-components'
import { colors } from '../../styles'

const PlayingGuess = styled.div`
  width: 500px;
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
  font-size: 1em;
  border-radius: 0.5em;
  padding-left: 0.5em;
  :focus {
    border: none;
    border-bottom: 4px solid lightgray;
  }
`

const PressToPlay = styled.button`
  background: ${colors.green};
  width: 40%;
  border: none;
  border-radius: 0.5em;
  color: white;
  font-size: 1.5em;
  padding: 0.2em 2em;
  margin: 0.4em 0;
  align-self: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 1s;

  :hover {
    background: ${colors.greenhover};
  }
`

export { PlayingGuess, InputPlayer, PressToPlay }
