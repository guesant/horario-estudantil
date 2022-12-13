import { gql } from '../__generated__';

export const SEARCH_INSTITUICOES = gql`
  query SearchInstituicoes(
    $query: String!
    $limit: Int = 15
    $onlyMemberships: Boolean = false
  ) {
    searchInstituicoes(
      query: $query
      limit: $limit
      onlyMemberships: $onlyMemberships
    ) {
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
