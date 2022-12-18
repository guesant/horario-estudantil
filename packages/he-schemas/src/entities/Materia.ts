import { Apelido } from "./Apelido";
import { Aula } from "./Aula";

export type Materia = {
  id: number;

  aulas: Aula[];

  apelidos: Apelido[];
};
