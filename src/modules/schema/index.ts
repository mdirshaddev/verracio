import 'reflect-metadata';

import { resolve } from 'path';

import { makeExecutableSchema } from '@graphql-tools/schema';
import {
  AccountCrudResolver,
  SessionCrudResolver,
  UserCrudResolver,
  VerificationTokenCrudResolver
} from 'generated/apollo/prisma';
import { buildTypeDefsAndResolvers } from 'type-graphql';

import { SpotifyCurrentPlaying } from './resolvers/models/spotify.schema';
import { SpotifyResolver } from './resolvers/spotify.resolver';

/**
 * The function exports a TypeGraphQL integrated schema by building type definitions and resolvers and
 * returning an executable schema.
 * @returns The function `TypeGraphQLIntegratedSchema` returns an executable schema object.
 */
export const TypeGraphQLIntegratedSchema = async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [
      AccountCrudResolver,
      SessionCrudResolver,
      UserCrudResolver,
      VerificationTokenCrudResolver,
      SpotifyResolver,
      SpotifyCurrentPlaying
    ],
    emitSchemaFile: resolve(__dirname, 'apollo-schema.graphql')
  });
  return makeExecutableSchema({ typeDefs, resolvers });
};
