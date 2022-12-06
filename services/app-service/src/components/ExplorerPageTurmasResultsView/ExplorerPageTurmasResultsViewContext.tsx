import {createContext, useCallback} from "react";
import {ICategoria} from "../ExplorerPageTurmas/ExplorerPageTurmasContext";

export type IPageTurmasResultsViewContext = {
  allCategorias: ICategoria[];

  getCategoria: (categoriaId: string | number | null) => ICategoria | null;

  getSubCategorias: (parentId: string | number | null) => ICategoria[];

  getParentCategoria: (childId: string | number | null) => ICategoria | null;
};

export const ExplorerPageTurmasResultsViewContext = createContext(
  {} as IPageTurmasResultsViewContext
);

export type IPageTurmasResultsViewContextProviderProps = {
  children?: any;

  allCategorias: ICategoria[];
};

export const PageTurmasResultsViewContextProvider = (
  props: IPageTurmasResultsViewContextProviderProps
) => {
  const {children, allCategorias} = props;

  const getSubCategorias = useCallback(
    (parentId: string | number | null): ICategoria[] =>
      parentId !== null
        ? allCategorias.filter(
          (i) =>
            i.categoriaTurmaPai &&
            String(i.categoriaTurmaPai.id) === String(parentId)
        )
        : [],
    [allCategorias]
  );

  const getCategoria = useCallback(
    (categoriaId: string | number | null): ICategoria | null => {
      if (categoriaId === null) {
        return null;
      }

      return allCategorias.find(
        (cat) => String(cat.id) === String(categoriaId)
      );
    },
    [allCategorias]
  );

  const getParentCategoria = useCallback(
    (childId: string | number | null): ICategoria | null => {
      const childCategoria = getCategoria(childId);
      const parentId = childCategoria?.categoriaTurmaPai?.id;
      return getCategoria(parentId);
    },
    [getCategoria]
  );

  return (
    <ExplorerPageTurmasResultsViewContext.Provider
      value={{
        allCategorias,
        getCategoria,
        getSubCategorias,
        getParentCategoria,
      }}
    >
      {children}
    </ExplorerPageTurmasResultsViewContext.Provider>
  );
};
