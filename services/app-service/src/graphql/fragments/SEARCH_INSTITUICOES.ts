import { gql } from '../__generated__';

export const SEARCH_INSTITUICOES = gql`
  query SearchInstituicoes($query: String!) {
    searchInstituicoes(query: $query, limit: 15) {
      hits {
        id
        nome
        sigla
        apelido
      }
      limit
      offset
      estimatedTotalHits
    }
  }
`;
