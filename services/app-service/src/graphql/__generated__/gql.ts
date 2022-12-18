/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation CreateInstituicao(\n    $nome: String!\n    $apelido: String!\n    $sigla: String!\n  ) {\n    createInstituicao(data: { nome: $nome, apelido: $apelido, sigla: $sigla }) {\n      id\n    }\n  }\n": types.CreateInstituicaoDocument,
    "\n  mutation DeleteInstituicao(\n    $id: Int!\n  ) {\n    deleteInstituicao(data: {id: $id})\n  }\n": types.DeleteInstituicaoDocument,
    "\n  mutation UpdateInstituicao(\n    $id: Int!\n    $nome: String\n    $apelido: String\n    $sigla: String\n  ) {\n    updateInstituicao(\n      id: $id\n      data: { nome: $nome, apelido: $apelido, sigla: $sigla }\n    ) {\n      id\n    }\n  }\n": types.UpdateInstituicaoDocument,
    "\n  query InstituicaoGeneralInfoById($id: Int!) {\n    instituicao: instituicaoById(options: { id: $id }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n": types.InstituicaoGeneralInfoByIdDocument,
    "\n  query InstituicaoGeneralInfoBySigla($sigla: String!) {\n    instituicao: instituicaoBySigla(options: { sigla: $sigla }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n": types.InstituicaoGeneralInfoBySiglaDocument,
    "\n  query PageTurmasData($sigla: String!) {\n    instituicaoBySigla(options: { sigla: $sigla }) {\n      categoriasTurma {\n        id\n\n        titulo\n        tituloFilhos\n\n        categoriaTurmaPai {\n          id\n        }\n\n        turmas {\n          id\n          apelidoPrincipal {\n            texto\n          }\n        }\n      }\n    }\n  }\n": types.PageTurmasDataDocument,
    "\n  query SearchInstituicoes(\n    $query: String!\n    $limit: Int = 15\n    $onlyMemberships: Boolean = false\n  ) {\n    searchInstituicoes(\n      options: {\n        query: $query\n        limit: $limit\n        onlyMemberships: $onlyMemberships\n      }\n    ) {\n      hits {\n        id\n        nome\n        sigla\n        apelido\n      }\n      limit\n      offset\n      estimatedTotalHits\n    }\n  }\n": types.SearchInstituicoesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateInstituicao(\n    $nome: String!\n    $apelido: String!\n    $sigla: String!\n  ) {\n    createInstituicao(data: { nome: $nome, apelido: $apelido, sigla: $sigla }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateInstituicao(\n    $nome: String!\n    $apelido: String!\n    $sigla: String!\n  ) {\n    createInstituicao(data: { nome: $nome, apelido: $apelido, sigla: $sigla }) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteInstituicao(\n    $id: Int!\n  ) {\n    deleteInstituicao(data: {id: $id})\n  }\n"): (typeof documents)["\n  mutation DeleteInstituicao(\n    $id: Int!\n  ) {\n    deleteInstituicao(data: {id: $id})\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateInstituicao(\n    $id: Int!\n    $nome: String\n    $apelido: String\n    $sigla: String\n  ) {\n    updateInstituicao(\n      id: $id\n      data: { nome: $nome, apelido: $apelido, sigla: $sigla }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateInstituicao(\n    $id: Int!\n    $nome: String\n    $apelido: String\n    $sigla: String\n  ) {\n    updateInstituicao(\n      id: $id\n      data: { nome: $nome, apelido: $apelido, sigla: $sigla }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query InstituicaoGeneralInfoById($id: Int!) {\n    instituicao: instituicaoById(options: { id: $id }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n"): (typeof documents)["\n  query InstituicaoGeneralInfoById($id: Int!) {\n    instituicao: instituicaoById(options: { id: $id }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query InstituicaoGeneralInfoBySigla($sigla: String!) {\n    instituicao: instituicaoBySigla(options: { sigla: $sigla }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n"): (typeof documents)["\n  query InstituicaoGeneralInfoBySigla($sigla: String!) {\n    instituicao: instituicaoBySigla(options: { sigla: $sigla }) {\n      id\n      nome\n      sigla\n      apelido\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PageTurmasData($sigla: String!) {\n    instituicaoBySigla(options: { sigla: $sigla }) {\n      categoriasTurma {\n        id\n\n        titulo\n        tituloFilhos\n\n        categoriaTurmaPai {\n          id\n        }\n\n        turmas {\n          id\n          apelidoPrincipal {\n            texto\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query PageTurmasData($sigla: String!) {\n    instituicaoBySigla(options: { sigla: $sigla }) {\n      categoriasTurma {\n        id\n\n        titulo\n        tituloFilhos\n\n        categoriaTurmaPai {\n          id\n        }\n\n        turmas {\n          id\n          apelidoPrincipal {\n            texto\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SearchInstituicoes(\n    $query: String!\n    $limit: Int = 15\n    $onlyMemberships: Boolean = false\n  ) {\n    searchInstituicoes(\n      options: {\n        query: $query\n        limit: $limit\n        onlyMemberships: $onlyMemberships\n      }\n    ) {\n      hits {\n        id\n        nome\n        sigla\n        apelido\n      }\n      limit\n      offset\n      estimatedTotalHits\n    }\n  }\n"): (typeof documents)["\n  query SearchInstituicoes(\n    $query: String!\n    $limit: Int = 15\n    $onlyMemberships: Boolean = false\n  ) {\n    searchInstituicoes(\n      options: {\n        query: $query\n        limit: $limit\n        onlyMemberships: $onlyMemberships\n      }\n    ) {\n      hits {\n        id\n        nome\n        sigla\n        apelido\n      }\n      limit\n      offset\n      estimatedTotalHits\n    }\n  }\n"];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;