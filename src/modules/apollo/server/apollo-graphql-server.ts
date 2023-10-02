import 'reflect-metadata';

import { type NextRequest } from 'next/server';

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { nextPrismaClient as prisma } from 'src/modules/prisma/prisma-client';

import { TypeGraphQLIntegratedSchema } from 'src/modules/schema';

import { GraphQLQueryComplexity } from './plugins/GraphQLQueryComplexity';
import { SentryObservability } from './plugins/SentryObservability';

/**
 * The function creates an Apollo Server instance with a TypeGraphQL integrated schema, bounded cache,
 * CSRF prevention, and no error formatting or plugins.
 * @returns The function `ApolloServerWithTypeGraphQLSchema` is returning a new instance of
 * `ApolloServer` with the following configuration:
 */
const ApolloServerWithTypeGraphQLSchema = async () => {
  return new ApolloServer({
    schema: await TypeGraphQLIntegratedSchema(),
    cache: 'bounded',
    csrfPrevention: true,
    formatError: error => error,
    plugins: [SentryObservability, GraphQLQueryComplexity]
  });
};

/**
 * The function exports a handler for an integrated Apollo Server with TypeGraphQL schema that can be
 * used with Next.js.
 * @returns The function `nextIntegratedApolloServerHandler` is returning a promise that resolves to a
 * Next.js request handler.
 */
export const nextIntegratedApolloServerHandler = async () => {
  const apolloServer = await ApolloServerWithTypeGraphQLSchema();
  return startServerAndCreateNextHandler<NextRequest>(apolloServer, {
    context: async req => ({ req, prisma })
  });
};
