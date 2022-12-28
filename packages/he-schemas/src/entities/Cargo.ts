import { Permissao } from "./Permissao";

export type Cargo = {
  id: number;

  permissoes: Permissao[];
};
