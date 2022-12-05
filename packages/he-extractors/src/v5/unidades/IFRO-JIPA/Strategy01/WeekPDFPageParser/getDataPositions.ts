import findLastIndex from "lodash/findLastIndex";
import { WeekPDFPageParser } from "./WeekPDFPageParser";

export const getDataPositions = (pageParser: WeekPDFPageParser) => {
  const header = 0;

  const dayRangeSerialized = header + 1;

  const dia = dayRangeSerialized + 1;
  const horario = dia + 1;

  const turmaStart = horario + 1;

  const turmaEnd =
    turmaStart +
    pageParser.textNodesWithUsefulData
      .slice(turmaStart)
      .findIndex((i) => i.includes("-"));

  const coreDataStart = turmaEnd;

  const coreDataEnd = findLastIndex(pageParser.textNodesWithUsefulData, (i) =>
    i.includes("-")
  );

  return {
    header,
    dayRangeSerialized,
    dia,
    horario,
    turmaStart,
    turmaEnd,
    coreDataStart,
    coreDataEnd,
  };
};
