import { Aula } from "./Aula";
import { Professor } from "./Professor";

export type AulaProfessor = {
  id: number;

  aula: Aula;

  professor: Professor;
};
