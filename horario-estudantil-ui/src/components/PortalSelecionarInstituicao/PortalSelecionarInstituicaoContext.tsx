import {gql, useQuery} from "@apollo/client";
import {createContext, Dispatch, SetStateAction, useMemo, useState,} from "react";
import {useDebounce} from "use-debounce";
import {SEARCH_DELAY} from "./SEARCH_DELAY";

const SEARCH_INSTITUICOES = gql`
    query SearchInstituicoes($query: String) {
        searchInstituicoes(query: $query, limit: 15) {
            hits {
                id
                nome
                sigla
                apelido
            }
            limit
            offset
            estimatedTotalHits
        }
    }
`;

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

export const PortalSelecionarInstituicaoContext = createContext(
  {} as IPortalSelecionarInstituicaoContext
);

export type IPortalSelecionarInstituicaoContextProviderProps = {
  children?: any;
};

export const PortalSelecionarInstituicaoContextProvider = (
  props: IPortalSelecionarInstituicaoContextProviderProps
) => {
  const { children } = props;

  const [searchText, setSearchText] = useState("");

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
    [data]
  );

  return (
    <PortalSelecionarInstituicaoContext.Provider
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
    </PortalSelecionarInstituicaoContext.Provider>
  );
};
