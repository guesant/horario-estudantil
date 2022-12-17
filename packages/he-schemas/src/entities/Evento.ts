import { Aula } from "./Aula";

export type Evento = {
  id: number;

  dataFim: Date | string | null;

  dataInicio: Date | string | null;

  aula: Aula | null;
};
