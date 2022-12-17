import { QueryResult, useQuery } from '@apollo/client';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from 'react';
import { ExplorerContext } from '../ExplorerContext/ExplorerContext';
import { INSTITUICAO_TURMAS } from '../../graphql/queries/INSTITUICAO_TURMAS';

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

  const categoriasQuery = useQuery(INSTITUICAO_TURMAS, {
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
