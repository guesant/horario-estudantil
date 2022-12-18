import { gql } from '../__generated__';

export const INSTITUICAO_GENERAL_INFO_BY_ID = gql`
  query InstituicaoGeneralInfoById($id: Int!) {
    instituicao: instituicaoById(options: { id: $id }) {
      id
      nome
      sigla
      apelido
    }
  }
`;
