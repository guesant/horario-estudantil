import type { CodegenConfig } from '@graphql-codegen/cli';

const GRAPHQL_ENDPOINT = `${process.env.INTERNAL_ENDPOINT_URL}/graphql`;

const config: CodegenConfig = {
  schema: GRAPHQL_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}', '!src/api/graphql/__generated__/**/*'],
  generates: {
    './src/api/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
  config: {
    namingConvention: {
      typeNames: 'change-case-all#pascalCase',
      enumValues: 'change-case-all#upperCase',
    },
  },
};

export default config;
