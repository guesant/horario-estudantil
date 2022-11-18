import { gql, QueryResult, useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

const SEARCH_UNIDADES_ESTUDANTIS = gql`
  query SearchUnidadesEstudantis($query: String) {
    searchUnidadesEstudantis(query: $query) {
      id

      nome
      sigla
      apelido
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

export const PortalSelecionarUnidadeDeEnsinoContextProvider = (
  props: IPortalSelecionarUnidadeDeEnsinoContextProviderProps
) => {
  const { children } = props;

  const [searchText, setSearchText] = useState("");

  const searchQuery = useQuery(SEARCH_UNIDADES_ESTUDANTIS, {
    variables: { query: searchText },
  });

  const data = searchQuery.data;
  const hasData = Boolean(data);
  const isError = Boolean(searchQuery.error);
  const isLoading = Boolean(searchQuery.loading);

  const unidadesEstudantis = useMemo(
    (): any[] => data?.searchUnidadesEstudantis ?? [],
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
