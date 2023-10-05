import type { CodegenConfig } from '@graphql-codegen/cli';

const graphqlCodegenConfig: CodegenConfig = {
  schema: 'apollo-schema.graphql',
  documents: './src/graphql/apollo/**/*.ts',
  generates: {
    'generated/apollo/apollo-graphql-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-document-nodes'
      ]
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier -w']
  }
};

export default graphqlCodegenConfig;
