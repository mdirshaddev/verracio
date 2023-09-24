import 'reflect-metadata';

// type graphql for building type definition and resolvers and schema generation
import { buildTypeDefsAndResolvers } from 'type-graphql';

// graphql tool for schema mapping
import { makeExecutableSchema } from '@graphql-tools/schema';

import {
  ContentMetaCrudResolver,
  ViewCrudResolver,
  LikeCrudResolver,
  LikeRelationsResolver,
  ViewRelationsResolver,
  ContentMetaRelationsResolver
} from 'generated/type-graphql';

/**
 * The function exports a TypeGraphQL integrated schema by building type definitions and resolvers and
 * returning an executable schema.
 * @returns The function `TypeGraphQLIntegratedSchema` returns an executable schema object.
 */
export const TypeGraphQLIntegratedSchema = async () => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    resolvers: [
      ContentMetaCrudResolver,
      ViewCrudResolver,
      LikeCrudResolver,
      LikeRelationsResolver,
      ViewRelationsResolver,
      ContentMetaRelationsResolver
    ],
    emitSchemaFile: './type-graphql.graphql'
  });
  return makeExecutableSchema({ typeDefs, resolvers });
};
