import { gql } from "@apollo/client";

export const QUERY_UNIDADE_DE_ENSINO_INFO = gql`
  query UnidadeDeEnsinoCheck($sigla: String!) {
    unidadeEstudantil(sigla: $sigla) {
      id
      nome
      sigla
      apelido
    }
  }
`;
