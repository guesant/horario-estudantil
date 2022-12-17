import { Etapa } from "./Etapa";
import { Instituicao } from "./Instituicao";

export type PeriodoLetivo = {
  id: number;

  etapas: Etapa[];

  instituicao: Instituicao;
};
