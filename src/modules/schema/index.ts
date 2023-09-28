import 'reflect-metadata';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { buildTypeDefsAndResolvers } from 'type-graphql';

import { Spotify } from './resolvers/models/spotify.schema';
import { SpotifyResolver } from './resolvers/spotify.resolver';

/**
 * The function exports a TypeGraphQL integrated schema by building type definitions and resolvers and
 * returning an executable schema.
 * @returns The function `TypeGraphQLIntegratedSchema` returns an executable schema object.
 */
export const TypeGraphQLIntegratedSchema = async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [SpotifyResolver, Spotify],
    emitSchemaFile: './type-graphql.graphql'
  });
  return makeExecutableSchema({ typeDefs, resolvers });
};
