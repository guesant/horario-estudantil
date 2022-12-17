import { Evento } from "./Evento";
import { Materia } from "./Materia";
import { Turma } from "./Turma";
import { Professor } from "./Professor";

export type Aula = {
  id: number;
  evento: Evento;
  materia: Materia | null;
  turmas: Turma[];
  professores: Professor[];
};
