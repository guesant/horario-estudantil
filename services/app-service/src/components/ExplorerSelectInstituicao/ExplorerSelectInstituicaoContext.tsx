import { useQuery } from '@apollo/client';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import { useDebounce } from 'use-debounce';
import { SEARCH_DELAY } from './SEARCH_DELAY';
import { SEARCH_INSTITUICOES } from '../../graphql/fragments/SEARCH_INSTITUICOES';

export type IPortalSelecionarInstituicaoContext = {
  // searchQuery: QueryResult<any>;

  data: any | null;

  hasData: boolean;
  isError: boolean;
  isLoading: boolean;

  instituicoes: any[];

  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
};

export const ExplorerSelectInstituicaoContext = createContext(
  {} as IPortalSelecionarInstituicaoContext,
);

export type IPortalSelecionarInstituicaoContextProviderProps = {
  children?: any;
};

export const PortalSelecionarInstituicaoContextProvider = (
  props: IPortalSelecionarInstituicaoContextProviderProps,
) => {
  const { children } = props;

  const [searchText, setSearchText] = useState('');

  const [debouncedSearchText] = useDebounce(searchText, SEARCH_DELAY);

  const searchQuery = useQuery(SEARCH_INSTITUICOES, {
    variables: { query: debouncedSearchText },
  });

  const data = searchQuery.data;
  const hasData = Boolean(data);
  const isError = Boolean(searchQuery.error);
  const isLoading =
    debouncedSearchText !== searchText || Boolean(searchQuery.loading);

  const instituicoes = useMemo(
    (): any[] => data?.searchInstituicoes.hits ?? [],
    [data],
  );

  return (
    <ExplorerSelectInstituicaoContext.Provider
      value={{
        // searchQuery,

        searchText,
        setSearchText,

        data,
        hasData,
        isError,
        isLoading,
        instituicoes,
      }}
    >
      {children}
    </ExplorerSelectInstituicaoContext.Provider>
  );
};
