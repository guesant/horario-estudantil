import { Aula } from "./Aula";
import { Turma } from "./Turma";

export type AulaTurma = {
  id: number;

  aula: Aula;

  turma: Turma;
};
