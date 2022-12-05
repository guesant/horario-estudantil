import { TextContent, PDFPageProxy } from "pdfjs-dist/types/src/display/api";
import { getDayRangeFromWeekDayRangeInfo } from "./utils/getDayRangeFromWeekDayRangeInfo";
import { IWeekParsedDataAulaCompact } from "../WeekParsedData/interfaces/IWeekParsedDataAulaCompact";
import { getDataPositions } from "./getDataPositions";

export class WeekPDFPageParser {
  page: PDFPageProxy | null = null;
  textContent: TextContent | null = null;

  textNodesWithUsefulData: string[] = [];

  get dataPositions() {
    return getDataPositions(this);
  }

  static parsePageTextContentItems(textContentItems: TextContent["items"]) {
    return textContentItems
      .map<string>((i: any) => i.str?.trim() ?? "")
      .filter((i) => i && i.length > 0);
  }

  async loadPage(page: PDFPageProxy) {
    this.page = page;
    this.textContent = await page.getTextContent();

    this.textNodesWithUsefulData = WeekPDFPageParser.parsePageTextContentItems(
      this.textContent.items
    );

    const turmas = this.getTurmasSlugs();

    const [, , pageViewportWidth] = this.page.view;

    const maxUsefulDataX =
      (174 / 1262) * pageViewportWidth +
      (169 / 1262) * pageViewportWidth * turmas.length;

    this.textNodesWithUsefulData = WeekPDFPageParser.parsePageTextContentItems(
      this.textContent.items.filter((i) => {
        if ("transform" in i) {
          const [, , , , xLeft, _yBottom] = i.transform;
          return xLeft < maxUsefulDataX;
        }
        return true;
      })
    );
  }

  static parseAulaCompact(aulaCompact: string | null | undefined = "") {
    const [materia = null, professoresCompact = ""] = (aulaCompact ?? "")
      .split("-")
      .map((i) => i.trim());

    const professores = professoresCompact
      .split(/u^/)
      .map((i) => i.trim())
      .filter((i) => i.length > 0);

    return { materia, professores };
  }

  findTurmaSlug(turmaIdentifier: number | string) {
    const turmas = this.getTurmasSlugs();

    if (typeof turmaIdentifier === "number") {
      return turmas[turmaIdentifier];
    }

    return turmaIdentifier;
  }

  findTurmaOrder(turmaIdentifier: number | string) {
    const turmas = this.getTurmasSlugs();

    if (typeof turmaIdentifier === "number") {
      return turmaIdentifier;
    }

    return turmas.indexOf(turmaIdentifier);
  }

  findDiaSlug(diaIdentifier: number | string) {
    const dias = this.getDiasSlugs();

    if (typeof diaIdentifier === "number") {
      return dias[diaIdentifier];
    }

    return diaIdentifier;
  }

  findDiaOrder(diaIdentifier: number | string) {
    const dias = this.getDiasSlugs();

    if (typeof diaIdentifier === "number") {
      return diaIdentifier;
    }

    return dias.indexOf(diaIdentifier);
  }

  getHeader() {
    return this.textNodesWithUsefulData[this.dataPositions.header];
  }

  getDayRange() {
    const compact =
      this.textNodesWithUsefulData[this.dataPositions.dayRangeSerialized];

    const { startDate, endDate } = getDayRangeFromWeekDayRangeInfo(compact);

    return { compact, asDate: { startDate, endDate } };
  }

  getTurmasSlugs() {
    const { turmaStart, turmaEnd } = this.dataPositions;
    return this.textNodesWithUsefulData.slice(turmaStart, turmaEnd);
  }

  getDiasSlugs() {
    const { coreDataEnd } = this.dataPositions;

    return this.textNodesWithUsefulData
      .slice(coreDataEnd)
      .filter((i) => i.includes("/"))
      .sort((a, b) => {
        const [aDay] = a.split("/").map(Number);
        const [bDay] = b.split("/").map(Number);
        return aDay - bDay;
      })
      .sort((a, b) => {
        const [, aMonth] = a.split("/").map(Number);
        const [, bMonth] = b.split("/").map(Number);
        return aMonth - bMonth;
      });
  }

  getCoreData() {
    const { coreDataStart, coreDataEnd } = this.dataPositions;
    return this.textNodesWithUsefulData.slice(coreDataStart, coreDataEnd);
  }

  getHorariosSlugs() {
    const dias = this.getDiasSlugs();
    const turmas = this.getTurmasSlugs();
    const coreData = this.getCoreData();

    const temposCount =
      (coreData.length + 1) / dias.length / (turmas.length + 1);

    return Array.from({ length: temposCount })
      .map((_, idx) => idx)
      .map((i) => (turmas.length + 1) * i)
      .map((idx) => coreData[idx]);
  }

  getTurmaDiaAulaCompact(
    turmaIdentifier: number | string,
    diaIdentifier: number | string,
    aulaOrder: number
  ): IWeekParsedDataAulaCompact {
    const turmas = this.getTurmasSlugs();
    const horarios = this.getHorariosSlugs();
    const coreData = this.getCoreData();

    const turmaOrder = this.findTurmaOrder(turmaIdentifier);
    const diaOrder = this.findTurmaOrder(diaIdentifier);

    const targetIndex =
      1 +
      turmaOrder +
      aulaOrder * (turmas.length + 1) +
      diaOrder * (horarios.length * (turmas.length + 1));

    const aulaCompact = coreData[targetIndex];

    const diaSlug = this.findDiaSlug(diaIdentifier);
    const turmaSlug = this.findTurmaSlug(turmaIdentifier);

    return {
      dia: diaSlug,
      turmas: [turmaSlug],
      ...WeekPDFPageParser.parseAulaCompact(aulaCompact),
    };
  }

  getTurmaDiaAulasCompacts(
    turmaIdentifier: number | string,
    diaIdentifier: number | string
  ) {
    const horarios = this.getHorariosSlugs();

    return horarios.map((_, aulaOrder) =>
      this.getTurmaDiaAulaCompact(turmaIdentifier, diaIdentifier, aulaOrder)
    );
  }

  getTurmaDiasAulasCompacts(turmaIdentifier: number | string) {
    const dias = this.getDiasSlugs();

    return dias.map((_, diaOrder) =>
      this.getTurmaDiaAulasCompacts(turmaIdentifier, diaOrder)
    );
  }

  getMateriaSlugs() {
    const horarios = this.getHorariosSlugs();
    const coreData = this.getCoreData();

    const coreDataMaterias = coreData
      .filter((row) => !horarios.includes(row))
      .map((row) => WeekPDFPageParser.parseAulaCompact(row))
      .map(({ materia }) => materia ?? "")
      .filter((materia) => materia.trim().length > 0) as string[];

    return Array.from(new Set(coreDataMaterias));
  }

  getProfessoresSlugs() {
    const coreData = this.getCoreData();
    const horarios = this.getHorariosSlugs();

    const coreDataProfessores = coreData
      .filter((row) => !horarios.includes(row))
      .map((row) => WeekPDFPageParser.parseAulaCompact(row))
      .map(({ professores }) => professores)
      .flat(1)
      .map((professor) => professor ?? "")
      .filter((professor) => professor.trim().length > 0);

    return Array.from(new Set(coreDataProfessores));
  }

  getAulasCompacts() {
    const turmas = this.getTurmasSlugs();

    const aulas = turmas
      .map((turma) => this.getTurmaDiasAulasCompacts(turma))
      .flat(3);

    return aulas;
  }
}
