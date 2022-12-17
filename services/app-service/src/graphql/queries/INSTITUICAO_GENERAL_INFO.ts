import { gql } from '../__generated__';

export const INSTITUICAO_GENERAL_INFO = gql`
  query InstituicaoGeneralInfo($sigla: String, $id: Int) {
    instituicao(options: { sigla: $sigla, id: $id }) {
      id
      nome
      sigla
      apelido
    }
  }
`;