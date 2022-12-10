import { CodegenConfig } from '@graphql-codegen/cli';

const ENDPOINT = `${process.env.INTERNAL_ENDPOINT_URL}/graphql`;

const config: CodegenConfig = {
  schema: ENDPOINT,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      plugins: ['typescript'],
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
