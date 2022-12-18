import { gql } from '@apollo/client';

export const INSTITUICAO_TURMAS = gql`
  query PageTurmasData($sigla: String!) {
    instituicaoBySigla(options: { sigla: $sigla }) {
      categoriasTurma {
        id

        titulo
        tituloFilhos

        categoriaTurmaPai {
          id
        }

        turmas {
          id
          apelidoPrincipal {
            texto
          }
        }
      }
    }
  }
`;
