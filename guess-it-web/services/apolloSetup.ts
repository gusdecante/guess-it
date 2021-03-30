import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

export const link = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

// import { split } from 'apollo-link'
// import { HttpLink } from 'apollo-link-http'
// import { ApolloClient } from 'apollo-client'
// import { WebSocketLink } from 'apollo-link-ws'
// import { getMainDefinition } from 'apollo-utilities'
// import { InMemoryCache } from 'apollo-boost'

// const wsLink = new WebSocketLink({
//   uri: `http://localhost:4000/graphql`,
//   options: {
//     reconnect: true,
//   },
// })

// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql',
// })

// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     )
//   },
//   wsLink,
//   httpLink
// )

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link,
// })
