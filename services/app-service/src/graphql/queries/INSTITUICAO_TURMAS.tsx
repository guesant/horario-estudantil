import { gql } from '@apollo/client';

export const INSTITUICAO_TURMAS = gql`
  query PageTurmasData($sigla: String!) {
    instituicao(options: { sigla: $sigla }) {
      turmaCategorias {
        id
        titulo
        tituloFilhos

        turmaCategoriaPai {
          id
        }

        turmas {
          id
          nome
        }
      }
    }
  }
`;
