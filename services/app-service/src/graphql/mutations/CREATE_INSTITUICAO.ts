import { gql } from '../__generated__';

export const CREATE_INSTITUICAO = gql`
  mutation CreateInstituicao(
    $nome: String!
    $apelido: String!
    $sigla: String!
  ) {
    createInstituicao(data: { nome: $nome, apelido: $apelido, sigla: $sigla }) {
      id
    }
  }
`;
