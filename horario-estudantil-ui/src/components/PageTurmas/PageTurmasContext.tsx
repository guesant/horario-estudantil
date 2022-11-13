import { gql, QueryResult, useQuery } from "@apollo/client";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { AppContext } from "../AppContext/AppContext";

const GET_PAGE_TURMAS_DATA = gql`
  query PageTurmasData($sigla: String!) {
    unidadeEstudantil(sigla: $sigla) {
      categoriasTurma {
        id
        titulo
        tituloFilhos

        categoriaTurmaPai {
          id
        }

        turmas {
          id
          nome
        }
      }
    }
  }
`;

export type ICategoria = any;

export type IPageTurmasContext = {
  categorias: ICategoria[];

  pageTurmasQuery: QueryResult<any, any>;
};

export const PageTurmasContext = createContext({} as IPageTurmasContext);

export const PageTurmasContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { selectedUnidadeDeEnsino } = useContext(AppContext);

  const pageTurmasQuery = useQuery(GET_PAGE_TURMAS_DATA, {
    variables: { sigla: selectedUnidadeDeEnsino },
  });

  const pageTurmasQueryData = pageTurmasQuery.data;

  const categorias: ICategoria[] = useMemo(
    () => pageTurmasQueryData?.unidadeEstudantil.categoriasTurma ?? [],
    [JSON.stringify(pageTurmasQueryData)]
  );

  return (
    <PageTurmasContext.Provider
      value={{ pageTurmasQuery: pageTurmasQuery, categorias }}
    >
      {children}
    </PageTurmasContext.Provider>
  );
};
