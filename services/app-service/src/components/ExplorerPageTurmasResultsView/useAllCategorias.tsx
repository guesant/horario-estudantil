import { useContext } from 'react';
import { ExplorerPageTurmasContext } from '../ExplorerPageTurmas/ExplorerPageTurmasContext';

export const useAllCategorias = () => {
  const { categorias } = useContext(ExplorerPageTurmasContext);
  return categorias;
};
