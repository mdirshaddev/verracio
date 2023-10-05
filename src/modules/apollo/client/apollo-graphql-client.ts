import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const nextGraphOSIntegratedApolloClient = new ApolloClient({
  link: new HttpLink({
    uri: '/api/graphql'
  }),
  cache: new InMemoryCache(),
  // name: 'web',
  // version: '1.0',
  connectToDevTools: process.env.NODE_ENV !== 'production'
});
