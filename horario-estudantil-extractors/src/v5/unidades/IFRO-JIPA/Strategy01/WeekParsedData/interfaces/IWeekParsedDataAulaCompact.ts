import { IWeekParsedDataProfessor } from "./IWeekParsedDataProfessor";
import { IWeekParsedDataMateria } from "./IWeekParsedDataMateria";
import { IWeekParsedDataTurma } from "./IWeekParsedDataTurma";
import { IWeekParsedDataDia } from "./IWeekParsedDataDia";

export type IWeekParsedDataAulaCompact = {
  dia: IWeekParsedDataDia["slug"];
  turmas: IWeekParsedDataTurma["slug"][];
  materia: IWeekParsedDataMateria["slug"] | null;
  professores: IWeekParsedDataProfessor["slug"][];
};
