import { Apelido } from "./Apelido";
import { CategoriaTurma } from "./CategoriaTurma";
import { Instituicao } from "./Instituicao";

export type Turma = {
  id: number;

  instituicao: Instituicao;

  apelidos: Apelido[];

  categoriaTurma: CategoriaTurma | null;
};
