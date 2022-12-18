import { createContext, FC, PropsWithChildren } from 'react';
import { QueryResult, useQuery } from '@apollo/client';
import { INSTITUICAO_GENERAL_INFO_BY_ID } from '../../graphql/queries/INSTITUICAO_GENERAL_INFO_BY_ID';
import {
  InstituicaoGeneralInfoByIdQuery,
  InstituicaoGeneralInfoQuery,
} from '../../graphql/__generated__/graphql';

export type IPainelInstituicaoInfoGeneralEditContext = {
  instituicaoQuery: QueryResult<InstituicaoGeneralInfoQuery, any>;

  instituicaoData: InstituicaoGeneralInfoQuery['instituicao'] | null;

  handleEdit: (() => void) | null;

  handleDelete: (() => void) | null;
};

export const PainelInstituicaoInfoGeneralViewContext = createContext(
  {} as IPainelInstituicaoInfoGeneralEditContext,
);

type IPainelInstituicaoInfoGeneralViewProviderProps = {
  id_ins: number;

  handleEdit?: () => void;

  handleDelete?: () => void;
};

export const PainelInstituicaoInfoGeneralViewContextProvider: FC<
  PropsWithChildren<IPainelInstituicaoInfoGeneralViewProviderProps>
> = (props) => {
  const { children, id_ins, handleEdit = null, handleDelete = null } = props;

  const instituicaoQuery = useQuery<InstituicaoGeneralInfoByIdQuery>(
    INSTITUICAO_GENERAL_INFO_BY_ID,
    {
      variables: { id: id_ins },
      fetchPolicy: 'cache-and-network',
    },
  );

  const instituicaoData = instituicaoQuery.data?.instituicao ?? null;

  return (
    <PainelInstituicaoInfoGeneralViewContext.Provider
      value={{ instituicaoQuery, instituicaoData, handleEdit, handleDelete }}
    >
      {children}
    </PainelInstituicaoInfoGeneralViewContext.Provider>
  );
};
