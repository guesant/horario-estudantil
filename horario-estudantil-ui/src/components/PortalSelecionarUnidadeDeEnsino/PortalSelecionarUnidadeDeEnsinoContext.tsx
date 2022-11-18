import { gql, useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

const SEARCH_UNIDADES_ESTUDANTIS = gql`
  query SearchUnidadesEstudantis($query: String) {
    searchUnidadesEstudantis(query: $query, limit: 15) {
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

export type IPortalSelecionarUnidadeDeEnsinoContext = {
  // searchQuery: QueryResult<any>;

  data: any | null;

  hasData: boolean;
  isError: boolean;
  isLoading: boolean;

  unidadesEstudantis: any[];

  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
};

export const PortalSelecionarUnidadeDeEnsinoContext = createContext(
  {} as IPortalSelecionarUnidadeDeEnsinoContext
);

export type IPortalSelecionarUnidadeDeEnsinoContextProviderProps = {
  children?: any;
};

const SEARCH_DELAY = 150;

export const PortalSelecionarUnidadeDeEnsinoContextProvider = (
  props: IPortalSelecionarUnidadeDeEnsinoContextProviderProps
) => {
  const { children } = props;

  const [searchText, setSearchText] = useState("");

  const [debouncedSearchText] = useDebounce(searchText, SEARCH_DELAY);

  const searchQuery = useQuery(SEARCH_UNIDADES_ESTUDANTIS, {
    variables: { query: debouncedSearchText },
  });

  const data = searchQuery.data;
  const hasData = Boolean(data);
  const isError = Boolean(searchQuery.error);
  const isLoading =
    debouncedSearchText !== searchText || Boolean(searchQuery.loading);

  const unidadesEstudantis = useMemo(
    (): any[] => data?.searchUnidadesEstudantis.hits ?? [],
    [data]
  );

  return (
    <PortalSelecionarUnidadeDeEnsinoContext.Provider
      value={{
        // searchQuery,

        searchText,
        setSearchText,

        data,
        hasData,
        isError,
        isLoading,
        unidadesEstudantis,
      }}
    >
      {children}
    </PortalSelecionarUnidadeDeEnsinoContext.Provider>
  );
};
