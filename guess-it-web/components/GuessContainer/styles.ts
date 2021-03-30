import styled from 'styled-components'

const GuessItContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  min-height: 100vh;

  background-image: url('/assets/background-guess-it-640x480.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 35em) {
    background-image: url('/assets/background-guess-it-1280x960.jpg');
  }

  @media (min-width: 50em) {
    background-image: url('/assets/background-guess-it-1920x1440.jpg');
  }
`

export { GuessItContainer }
