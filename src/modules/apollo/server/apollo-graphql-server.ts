// next request typing
import type { NextRequest } from 'next/server';

// apollo server
import { ApolloServer } from '@apollo/server';

// apollo server with next integration
import { startServerAndCreateNextHandler } from '@as-integrations/next';

// graphql tag
import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    hello: String
    someField: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'world';
    }
  }
};

const nextIntegratedApolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cache: 'bounded',
  csrfPrevention: true,
  plugins: []
});

export const nextIntegratedApolloServerHandler =
  startServerAndCreateNextHandler<NextRequest>(nextIntegratedApolloServer, {
    context: async req => ({ req })
  });
