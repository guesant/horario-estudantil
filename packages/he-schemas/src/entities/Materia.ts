import { Apelido } from "./Apelido";
import { Aula } from "./Aula";

export type Materia = {
  id: number;

  nome: string;

  aulas: Aula[];

  apelidos: Apelido[];
};
