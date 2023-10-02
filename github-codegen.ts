import type { CodegenConfig } from '@graphql-codegen/cli';

const graphqlCodegenConfig: CodegenConfig = {
  schema: 'github-schema.graphql',
  documents: './src/graphql/github/**/*.gql',
  generates: {
    'generated/github/github-graphql-types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query'
      ],
      config: {
        fetcher: 'graphql-request'
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier -w']
  }
};

export default graphqlCodegenConfig;
