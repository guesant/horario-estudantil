import { Materia } from "./Materia";
import { Professor } from "./Professor";
import { Turma } from "./Turma";

export type Apelido = {
  id: number;
  apelido: string;
  turma: Turma | null;
  professor: Professor | null;
  materia: Materia | null;
};
