import { PDFDocumentProxy } from "pdfjs-dist";
import { getDocument } from "pdfjs-dist/legacy/build/pdf";
import { WeekParsedDataManager } from "../WeekParsedData/WeekParsedDataManager";
import { WeekPDFPageParser } from "../WeekPDFPageParser/WeekPDFPageParser";
import { IWeekParsedData } from "../WeekParsedData/interfaces/IWeekParsedData";

export const generateExtractedWeekInfoFromWeekPDFUrl = async (
  pdfURL: string
): Promise<IWeekParsedData> => {
  const weekPDFParser = new WeekPDFParser();

  await weekPDFParser.loadDocumentFromURL(pdfURL);

  const weekParsedData = await weekPDFParser.getParsedData();

  return weekParsedData;
};

export class WeekPDFParser {
  doc: PDFDocumentProxy | null = null;

  async loadDocument(doc: PDFDocumentProxy) {
    this.doc = doc;
  }

  async loadDocumentFromURL(url: string) {
    const doc = await getDocument(url).promise;
    await this.loadDocument(doc);
  }

  async getParsedData() {
    const doc = this.doc;

    const weekParsedDataManager = new WeekParsedDataManager();

    weekParsedDataManager.data.unidadeEstudantil = { slug: "ifro-jipa" };

    if (doc) {
      const pagesCount = doc.numPages;

      for (let pageOrder = 1; pageOrder <= pagesCount; pageOrder++) {
        const page = await doc.getPage(pageOrder);

        const pageParser = new WeekPDFPageParser();
        await pageParser.loadPage(page);

        if (pageOrder === 1) {
          const { asDate } = pageParser.getDayRange();

          Object.assign(weekParsedDataManager.data, {
            startDate: asDate.startDate.getTime(),
            endDate: asDate.endDate.getTime(),
          });
        }

        const dias = pageParser.getDiasSlugs();
        weekParsedDataManager.addDiaBySlugs(dias);

        const horarios = pageParser.getHorariosSlugs();
        weekParsedDataManager.addHorarioBySlugs(horarios);

        const materias = pageParser.getMateriaSlugs();
        weekParsedDataManager.addMateriaBySlugs(materias);

        const turmas = pageParser.getTurmasSlugs();
        weekParsedDataManager.addTurmaBySlugs(turmas);

        const professores = pageParser.getProfessoresSlugs();
        weekParsedDataManager.addProfessorBySlugs(professores);

        const aulas = pageParser.getAulasCompacts();
        weekParsedDataManager.addAulaCompacts(aulas);
      }
    }

    return weekParsedDataManager.data;
  }

  static async getParsedDataFromPDFUrl(
    pdfURL: string
  ): Promise<IWeekParsedData> {
    const weekPDFParser = new WeekPDFParser();

    await weekPDFParser.loadDocumentFromURL(pdfURL);
    const weekParsedData = await weekPDFParser.getParsedData();

    return weekParsedData;
  }
}
