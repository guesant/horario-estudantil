import { gql } from '../__generated__';

export const INSTITUICAO_GENERAL_INFO_BY_SIGLA = gql`
  query InstituicaoGeneralInfoBySigla($sigla: String!) {
    instituicao: instituicaoBySigla(options: { sigla: $sigla }) {
      id
      nome
      sigla
      apelido
    }
  }
`;
