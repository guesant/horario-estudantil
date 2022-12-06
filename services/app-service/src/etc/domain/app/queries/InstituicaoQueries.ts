import {gql} from "@apollo/client";

export const QUERY_INSTITUICAO_INFO = gql`
    query InstituicaoCheck($sigla: String!) {
        instituicao(sigla: $sigla) {
            id
            nome
            sigla
            apelido
        }
    }
`;
