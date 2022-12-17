import { gql } from '../__generated__';

export const UPDATE_INSTITUICAO = gql`
  mutation UpdateInstituicao(
    $id: Int!
    $nome: String
    $apelido: String
    $sigla: String
  ) {
    updateInstituicao(
      id: $id
      data: { nome: $nome, apelido: $apelido, sigla: $sigla }
    ) {
      id
    }
  }
`;
