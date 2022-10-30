import { IWeekParsedDataProfessor } from "./IWeekParsedDataProfessor";
import { IWeekParsedDataMateria } from "./IWeekParsedDataMateria";
import { IWeekParsedDataTurma } from "./IWeekParsedDataTurma";

export type IWeekParsedDataAula = {
  dia: Pick<IWeekParsedDataDia, "slug">;
  turmas: Pick<IWeekParsedDataTurma, "slug">[];
  materia: Pick<IWeekParsedDataMateria, "slug"> | null;
  professores: Pick<IWeekParsedDataProfessor, "slug">[];
};
