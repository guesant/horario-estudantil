import { gql } from '../__generated__';

export const DELETE_INSTITUICAO = gql`
  mutation DeleteInstituicao(
    $id: Int!
  ) {
    deleteInstituicao(data: {id: $id})
  }
`;
