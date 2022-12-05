import { IWeekParsedDataAula } from "./IWeekParsedDataAula";
import { IWeekParsedDataDia } from "./IWeekParsedDataDia";
import { IWeekParsedDataEtapa } from "./IWeekParsedDataEtapa";
import { IWeekParsedDataHorario } from "./IWeekParsedDataHorario";
import { IWeekParsedDataMateria } from "./IWeekParsedDataMateria";
import { IWeekParsedDataPeriodo } from "./IWeekParsedDataPeriodo";
import { IWeekParsedDataProfessor } from "./IWeekParsedDataProfessor";
import { IWeekParsedDataTurma } from "./IWeekParsedDataTurma";
import { IWeekParsedDataUnidadeEstudantil } from "./IWeekParsedDataUnidadeEstudantil";

export type IWeekParsedData = {
  unidadeEstudantil: IWeekParsedDataUnidadeEstudantil;
  periodo: IWeekParsedDataPeriodo;
  etapa: IWeekParsedDataEtapa;

  startDate: number;
  endDate: number;

  dias: IWeekParsedDataDia[];
  horarios: IWeekParsedDataHorario[];

  aulas: IWeekParsedDataAula[];
  turmas: IWeekParsedDataTurma[];
  materias: IWeekParsedDataMateria[];
  professores: IWeekParsedDataProfessor[];
};
