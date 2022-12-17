import { CategoriaTurma } from "./CategoriaTurma";
import { PeriodoLetivo } from "./PeriodoLetivo";
import { InstituicaoMembership } from "./InstituicaoMembership";

export type Instituicao = {
  id: number;
  nome: string;
  sigla: string;
  apelido: string;
  categoriasTurma: CategoriaTurma[];
  memberships: InstituicaoMembership[];
  periodosLetivos: PeriodoLetivo[];
  lastUpdate: Date | string | null;
  lastSearchSync: Date | string | null;
};
