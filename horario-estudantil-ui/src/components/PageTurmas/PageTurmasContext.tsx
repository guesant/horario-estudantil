import { QueryResult, useQuery } from "@apollo/client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { AppContext } from "../AppContext/AppContext";
import { PAGE_TURMAS_DATA_CATEGORIAS } from "./PageTurmasData";

export type ICategoria = any;

export type IPageTurmasContext = {
  categorias: ICategoria[];

  categoriasQuery: QueryResult<any, any>;
};

export const PageTurmasContext = createContext({} as IPageTurmasContext);

export const PageTurmasContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { sigla } = useContext(AppContext);

  const categoriasQuery = useQuery(PAGE_TURMAS_DATA_CATEGORIAS, {
    variables: { sigla: sigla },
  });

  const { data } = categoriasQuery;

  const categorias: ICategoria[] = useMemo(
    () => data?.instituicao.categoriasTurma ?? [],
    [data]
  );

  return (
    <PageTurmasContext.Provider
      value={{
        categorias,
        categoriasQuery,
      }}
    >
      {children}
    </PageTurmasContext.Provider>
  );
};
