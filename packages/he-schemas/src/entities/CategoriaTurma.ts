import { Turma } from "./Turma";
import { Instituicao } from "./Instituicao";

export type CategoriaTurma = {
  id: number;

  titulo: string | null;

  tituloFilhos: string;

  turmas: Turma[];

  instituicao: Instituicao;

  turmaCategoriaPai: CategoriaTurma | null;
};
