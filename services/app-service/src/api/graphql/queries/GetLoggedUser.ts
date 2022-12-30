import { gql } from '../__generated__';

export const GetLoggedUser = gql(/* GraphQL */ `
  query GetLoggedUser {
    getLoggedUser {
      id
      autorizacaoRegras
    }
  }
`);
