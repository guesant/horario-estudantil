import { gql } from "@apollo/client";

export const PAGE_TURMAS_DATA_CATEGORIAS = gql`
  query PageTurmasData($sigla: String!) {
    unidadeEstudantil(sigla: $sigla) {
      categoriasTurma {
        id
        titulo
        tituloFilhos

        categoriaTurmaPai {
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
