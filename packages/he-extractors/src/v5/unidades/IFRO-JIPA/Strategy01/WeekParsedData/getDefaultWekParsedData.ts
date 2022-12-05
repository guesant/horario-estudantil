import { IWeekParsedData } from "./interfaces/IWeekParsedData";

export const getDefaultWekParsedData = (): IWeekParsedData => {
  return {
    unidadeEstudantil: null,
    periodo: null,
    etapa: null,

    startDate: -1,
    endDate: -1,

    dias: [],
    horarios: [],

    aulas: [],
    turmas: [],
    materias: [],
    professores: [],
  };
};
