import { Apelido } from "./Apelido";
import { CategoriaTurma } from "./CategoriaTurma";

export type Turma = {
  id: number;
  nome: string | null;
  apelidos: Apelido[];
  categoriaTurma: CategoriaTurma | null;
};
