import { gql } from '@apollo/client';

export const PAGE_TURMAS_DATA_CATEGORIAS = gql`
  query PageTurmasData($sigla: String!) {
    instituicao(sigla: $sigla) {
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
