import { Materia } from "./Materia";
import { Professor } from "./Professor";
import { Turma } from "./Turma";

export type Apelido = {
  id: number;
  texto: string;
  tipo: "turma" | "professor" | "materia";
  turma: Turma | null;
  professor: Professor | null;
  materia: Materia | null;
};
