import gql from 'graphql-tag'

const api = 'http://localhost:4000/graphql'

const ranking = `query {
  ranking {
    id
    name
    timeToHitTheNumber
    attemptsToHitTheNumber
  }
}`

// const createUserMutation = (
//   name: string,
//   timeToHitTheNumber: number,
//   attemptsToHitTheNumber: number
// ) =>

const createUserMutation = gql`
  mutation createUser(
    $name: String
    $timeToHitTheNumber: Float
    $attemptsToHitTheNumber: Float
  ) {
    createUser(
      input: {
        name: $name
        timeToHitTheNumber: $timeToHitTheNumber
        attemptsToHitTheNumber: $attemptsToHitTheNumber
      }
    ) {
      id
      name
      timeToHitTheNumber
      attemptsToHitTheNumber
    }
  }
`

export { api, ranking, createUserMutation }
