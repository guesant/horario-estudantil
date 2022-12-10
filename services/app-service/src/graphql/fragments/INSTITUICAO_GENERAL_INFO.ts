import { gql } from '../__generated__';

export const INSTITUICAO_GENERAL_INFO = gql`
  query InstituicaoGeneralInfo($sigla: String!) {
    instituicao(sigla: $sigla) {
      id
      nome
      sigla
      apelido
    }
  }
`;
