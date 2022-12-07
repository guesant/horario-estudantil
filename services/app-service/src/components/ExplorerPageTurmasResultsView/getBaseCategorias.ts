import { ICategoria } from '../ExplorerPageTurmas/ExplorerPageTurmasContext';

export const getBaseCategorias = (categorias: ICategoria[]) =>
  categorias.filter((categoria) => categoria.categoriaTurmaPai === null);
