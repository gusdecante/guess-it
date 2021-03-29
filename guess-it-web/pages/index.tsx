import {
  GitHubCorner,
  PlayingContainer,
  GuessItContainer,
  Ranking,
} from '../components'
const IndexPage = () => (
  <GuessItContainer>
    <PlayingContainer />
    <Ranking />
    <GitHubCorner />
  </GuessItContainer>
)

export default IndexPage
