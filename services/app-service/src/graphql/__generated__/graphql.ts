/* eslint-disable */
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Apelido = {
  __typename?: 'Apelido';
  apelido: Scalars['String'];
  id: Scalars['Int'];
  materia?: Maybe<Materia>;
  professor?: Maybe<Professor>;
  turma?: Maybe<Turma>;
};

export type Aula = {
  __typename?: 'Aula';
  evento: Evento;
  id: Scalars['Int'];
  materia?: Maybe<Materia>;
  professores: Array<Professor>;
  turmas: Array<Turma>;
};

export type CreateInstituicaoInput = {
  apelido: Scalars['String'];
  nome: Scalars['String'];
  sigla: Scalars['String'];
};

export type DeleteInstituicaoInput = {
  id: Scalars['Float'];
};

export type Etapa = {
  __typename?: 'Etapa';
  id: Scalars['Int'];
  periodoLetivo: PeriodoLetivo;
};

export type Evento = {
  __typename?: 'Evento';
  aula?: Maybe<Aula>;
  dataFim?: Maybe<Scalars['DateTime']>;
  dataInicio?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
};

export type Instituicao = {
  __typename?: 'Instituicao';
  apelido: Scalars['String'];
  id: Scalars['Int'];
  lastSearchSync?: Maybe<Scalars['DateTime']>;
  lastUpdate?: Maybe<Scalars['DateTime']>;
  memberships: Array<InstituicaoMembership>;
  nome: Scalars['String'];
  periodosLetivos: Array<PeriodoLetivo>;
  sigla: Scalars['String'];
  turmaCategorias: Array<TurmaCategoria>;
};

export type InstituicaoMembership = {
  __typename?: 'Instituicao_Membership';
  id: Scalars['Int'];
  instituicao: Instituicao;
  usuario: User;
};

export type Materia = {
  __typename?: 'Materia';
  apelidos: Array<Apelido>;
  aulas: Array<Aula>;
  id: Scalars['Int'];
  nome: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createInstituicao: Instituicao;
  deleteInstituicao: Scalars['Boolean'];
  updateInstituicao: Instituicao;
};

export type MutationCreateInstituicaoArgs = {
  data: CreateInstituicaoInput;
};

export type MutationDeleteInstituicaoArgs = {
  data: DeleteInstituicaoInput;
};

export type MutationUpdateInstituicaoArgs = {
  data: UpdateInstituicaoInput;
  id: Scalars['Int'];
};

export type PeriodoLetivo = {
  __typename?: 'PeriodoLetivo';
  etapas: Array<Etapa>;
  id: Scalars['Int'];
  instituicao: Instituicao;
};

export type Professor = {
  __typename?: 'Professor';
  apelidos: Array<Apelido>;
  aulas: Array<Aula>;
  id: Scalars['Int'];
  nome: Scalars['String'];
  professores: Array<Professor>;
};

export type Query = {
  __typename?: 'Query';
  instituicao: Instituicao;
  searchInstituicoes: SearchInstituicoesResult;
};

export type QueryInstituicaoArgs = {
  id?: InputMaybe<Scalars['Int']>;
  sigla?: InputMaybe<Scalars['String']>;
};

export type QuerySearchInstituicoesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  onlyMemberships?: InputMaybe<Scalars['Boolean']>;
  query?: InputMaybe<Scalars['String']>;
};

export type SearchInstituicoesResult = {
  __typename?: 'SearchInstituicoesResult';
  estimatedTotalHits: Scalars['Int'];
  hits: Array<Instituicao>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Turma = {
  __typename?: 'Turma';
  apelidos: Array<Apelido>;
  aulas: Array<Aula>;
  id: Scalars['Int'];
  nome?: Maybe<Scalars['String']>;
  turmaCategoria: Array<TurmaCategoria>;
  turmas: Array<Turma>;
};

export type TurmaCategoria = {
  __typename?: 'TurmaCategoria';
  id: Scalars['Int'];
  instituicao: Instituicao;
  titulo?: Maybe<Scalars['String']>;
  tituloFilhos: Scalars['String'];
  turmaCategoriaPai?: Maybe<TurmaCategoria>;
  turmas: Array<Turma>;
};

export type UpdateInstituicaoInput = {
  apelido?: InputMaybe<Scalars['String']>;
  nome?: InputMaybe<Scalars['String']>;
  sigla?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  memberships: Array<InstituicaoMembership>;
  nome: Scalars['String'];
};

export type CreateInstituicaoMutationVariables = Exact<{
  nome: Scalars['String'];
  apelido: Scalars['String'];
  sigla: Scalars['String'];
}>;

export type CreateInstituicaoMutation = {
  __typename?: 'Mutation';
  createInstituicao: { __typename?: 'Instituicao'; id: number };
};

export type InstituicaoGeneralInfoQueryVariables = Exact<{
  sigla?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
}>;

export type InstituicaoGeneralInfoQuery = {
  __typename?: 'Query';
  instituicao: {
    __typename?: 'Instituicao';
    id: number;
    nome: string;
    sigla: string;
    apelido: string;
  };
};

export type PageTurmasDataQueryVariables = Exact<{
  sigla: Scalars['String'];
}>;

export type PageTurmasDataQuery = {
  __typename?: 'Query';
  instituicao: {
    __typename?: 'Instituicao';
    turmaCategorias: Array<{
      __typename?: 'TurmaCategoria';
      id: number;
      titulo?: string | null;
      tituloFilhos: string;
      turmaCategoriaPai?: { __typename?: 'TurmaCategoria'; id: number } | null;
      turmas: Array<{ __typename?: 'Turma'; id: number; nome?: string | null }>;
    }>;
  };
};

export type SearchInstituicoesQueryVariables = Exact<{
  query: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  onlyMemberships?: InputMaybe<Scalars['Boolean']>;
}>;

export type SearchInstituicoesQuery = {
  __typename?: 'Query';
  searchInstituicoes: {
    __typename?: 'SearchInstituicoesResult';
    limit: number;
    offset: number;
    estimatedTotalHits: number;
    hits: Array<{
      __typename?: 'Instituicao';
      id: number;
      nome: string;
      sigla: string;
      apelido: string;
    }>;
  };
};

export type UpdateInstituicaoMutationVariables = Exact<{
  id: Scalars['Int'];
  nome?: InputMaybe<Scalars['String']>;
  apelido?: InputMaybe<Scalars['String']>;
  sigla?: InputMaybe<Scalars['String']>;
}>;

export type UpdateInstituicaoMutation = {
  __typename?: 'Mutation';
  updateInstituicao: { __typename?: 'Instituicao'; id: number };
};

export const CreateInstituicaoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateInstituicao' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'nome' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'apelido' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sigla' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInstituicao' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nome' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nome' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'apelido' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'apelido' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sigla' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sigla' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInstituicaoMutation,
  CreateInstituicaoMutationVariables
>;
export const InstituicaoGeneralInfoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'InstituicaoGeneralInfo' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sigla' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instituicao' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sigla' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sigla' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'nome' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'sigla' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'apelido' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InstituicaoGeneralInfoQuery,
  InstituicaoGeneralInfoQueryVariables
>;
export const PageTurmasDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PageTurmasData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sigla' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'instituicao' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sigla' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sigla' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'turmaCategorias' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'titulo' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tituloFilhos' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'turmaCategoriaPai' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'turmas' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'nome' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageTurmasDataQuery, PageTurmasDataQueryVariables>;
export const SearchInstituicoesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchInstituicoes' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'query' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '15' },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'onlyMemberships' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
          defaultValue: { kind: 'BooleanValue', value: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchInstituicoes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'query' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'query' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'onlyMemberships' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'onlyMemberships' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'hits' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nome' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'sigla' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'apelido' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'limit' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'offset' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'estimatedTotalHits' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SearchInstituicoesQuery,
  SearchInstituicoesQueryVariables
>;
export const UpdateInstituicaoDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateInstituicao' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'nome' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'apelido' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sigla' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateInstituicao' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'data' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nome' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nome' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'apelido' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'apelido' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sigla' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sigla' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateInstituicaoMutation,
  UpdateInstituicaoMutationVariables
>;
