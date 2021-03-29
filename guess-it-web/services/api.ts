const api = 'http://localhost:4000/graphql'

const ranking = `query {
  ranking {
    id
    name
    timeToHitTheNumber
    attemptsToHitTheNumber
    attemptsNumber
    xp
  }
}`

export { api, ranking }
