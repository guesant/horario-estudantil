import { QueryResult, useQuery } from '@apollo/client';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { PAGE_TURMAS_DATA_CATEGORIAS } from '../../graphql/fragments/PAGE_TURMAS_DATA_CATEGORIAS';

export type ICategoria = any;

export type IPageTurmasContext = {
  categorias: ICategoria[];

  categoriasQuery: QueryResult<any, any>;
};

export const ExplorerPageTurmasContext = createContext(
  {} as IPageTurmasContext,
);

export const PageTurmasContextProvider: FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const { sigla } = useContext(ExplorerContext);

  const categoriasQuery = useQuery(PAGE_TURMAS_DATA_CATEGORIAS, {
    variables: { sigla: sigla },
  });

  const { data } = categoriasQuery;

  const categorias: ICategoria[] = useMemo(
    () => data?.instituicao.categoriasTurma ?? [],
    [data],
  );

  return (
    <ExplorerPageTurmasContext.Provider
      value={{
        categorias,
        categoriasQuery,
      }}
    >
      {children}
    </ExplorerPageTurmasContext.Provider>
  );
};
