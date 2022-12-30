/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** Date custom scalar type */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AddPermissaoToCargoInputType = {
  cargoId: Scalars['Int'];
  permissaoId: Scalars['Int'];
};

export type Cargo = {
  __typename?: 'Cargo';
  id: Scalars['Int'];
  permissoes: Array<Permissao>;
};

export type CreateCargoInputType = {
  placeholder?: InputMaybe<Scalars['Boolean']>;
};

export type CreatePermissaoInputType = {
  receita: Scalars['String'];
};

export type CreateUsuarioInputType = {
  cargoId?: InputMaybe<Scalars['Int']>;
};

export type DeleteCargoInputType = {
  id: Scalars['Int'];
};

export type DeletePermissaoInputType = {
  id: Scalars['Int'];
};

export type DeleteUsuarioInputType = {
  id: Scalars['Int'];
};

export type FindCargoByIdInputType = {
  id: Scalars['Int'];
};

export type FindPermissaoByIdInputType = {
  id: Scalars['Int'];
};

export type FindUsuarioByIdInputType = {
  id: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPermissao: Scalars['Boolean'];
  createCargo: Cargo;
  createPermissao: Permissao;
  createUsuario: Usuario;
  deleteCargo: Cargo;
  deletePermissao: Permissao;
  deleteUsuario: Usuario;
  removePermissao: Scalars['Boolean'];
  updateCargo: Cargo;
  updatePermissao: Permissao;
  updateUsuario: Usuario;
};

export type MutationAddPermissaoArgs = {
  dto: AddPermissaoToCargoInputType;
};

export type MutationCreateCargoArgs = {
  dto: CreateCargoInputType;
};

export type MutationCreatePermissaoArgs = {
  dto: CreatePermissaoInputType;
};

export type MutationCreateUsuarioArgs = {
  dto: CreateUsuarioInputType;
};

export type MutationDeleteCargoArgs = {
  dto: DeleteCargoInputType;
};

export type MutationDeletePermissaoArgs = {
  dto: DeletePermissaoInputType;
};

export type MutationDeleteUsuarioArgs = {
  dto: DeleteUsuarioInputType;
};

export type MutationRemovePermissaoArgs = {
  dto: RemovePermissaoToCargoInputType;
};

export type MutationUpdateCargoArgs = {
  dto: UpdateCargoInputType;
};

export type MutationUpdatePermissaoArgs = {
  dto: UpdatePermissaoInputType;
};

export type MutationUpdateUsuarioArgs = {
  dto: UpdateUsuarioInputType;
};

export type Permissao = {
  __typename?: 'Permissao';
  id: Scalars['Int'];
  receita: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findCargoById: Cargo;
  findPermissaoById: Permissao;
  findUsuarioById: Usuario;
  getLoggedUser: Usuario;
  hello: Scalars['String'];
};

export type QueryFindCargoByIdArgs = {
  dto: FindCargoByIdInputType;
};

export type QueryFindPermissaoByIdArgs = {
  dto: FindPermissaoByIdInputType;
};

export type QueryFindUsuarioByIdArgs = {
  dto: FindUsuarioByIdInputType;
};

export type RemovePermissaoToCargoInputType = {
  cargoId: Scalars['Int'];
  permissaoId: Scalars['Int'];
};

export type UpdateCargoInputType = {
  id: Scalars['Int'];
};

export type UpdatePermissaoInputType = {
  id: Scalars['Int'];
  receita?: InputMaybe<Scalars['String']>;
};

export type UpdateUsuarioInputType = {
  id: Scalars['Int'];
};

export type Usuario = {
  __typename?: 'Usuario';
  autorizacaoRegras: Scalars['JSON'];
  cargo?: Maybe<Cargo>;
  id: Scalars['Int'];
};

export type GetLoggedUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetLoggedUserQuery = {
  __typename?: 'Query';
  getLoggedUser: { __typename?: 'Usuario'; id: number; autorizacaoRegras: any };
};

export const GetLoggedUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetLoggedUser' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getLoggedUser' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'autorizacaoRegras' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetLoggedUserQuery, GetLoggedUserQueryVariables>;
