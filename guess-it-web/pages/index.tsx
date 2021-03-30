import {
  GitHubCorner,
  PlayingContainer,
  GuessItContainer,
  Ranking,
} from '../components'
import { TimerProvider } from '../contexts/TimerContext'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from '../services/apolloSetup'

const IndexPage = () => (
  <ApolloProvider client={client}>
    <TimerProvider>
      <GuessItContainer>
        <PlayingContainer />
        <Ranking />
        <GitHubCorner />
      </GuessItContainer>
    </TimerProvider>
  </ApolloProvider>
)

export default IndexPage
