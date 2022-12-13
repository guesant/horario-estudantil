import { QueryResult, useQuery } from '@apollo/client';
import { createContext, FC, PropsWithChildren, useMemo } from 'react';
import { SEARCH_INSTITUICOES } from '../../graphql/fragments/SEARCH_INSTITUICOES';
import { SearchInstituicoesQuery } from '../../graphql/__generated__/graphql';

type IPainelPageInstituicoesContext = {
  data: SearchInstituicoesQuery['searchInstituicoes'] | null;

  instituicoes: SearchInstituicoesQuery['searchInstituicoes']['hits'];

  instituicoesQuery: QueryResult<SearchInstituicoesQuery, any>;

  isLoading: boolean;
};

export const PainelPageInstituicoesContext = createContext(
  {} as IPainelPageInstituicoesContext,
);

export const PainelPageInstituicoesContextProvider: FC<
  PropsWithChildren<{}>
> = (props) => {
  const { children } = props;

  const instituicoesQuery = useQuery<SearchInstituicoesQuery>(
    SEARCH_INSTITUICOES,
    {
      variables: { query: '', onlyMemberships: true },
      fetchPolicy: 'cache-and-network',
    },
  );

  const isLoading = instituicoesQuery.loading;

  const data = instituicoesQuery.data?.searchInstituicoes ?? null;

  const instituicoes = useMemo(() => data?.hits ?? [], [data]);

  return (
    <PainelPageInstituicoesContext.Provider
      value={{ data, instituicoesQuery, instituicoes, isLoading }}
    >
      {children}
    </PainelPageInstituicoesContext.Provider>
  );
};
