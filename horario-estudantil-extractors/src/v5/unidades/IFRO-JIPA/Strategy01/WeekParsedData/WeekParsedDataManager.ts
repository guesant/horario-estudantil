import find from "lodash/find";
import { getDefaultWekParsedData } from "./getDefaultWekParsedData";
import { IWeekParsedDataAulaCompact } from "./interfaces/IWeekParsedDataAulaCompact";
import { IWeekParsedDataAula } from "./interfaces/IWeekParsedDataAula";

export class WeekParsedDataManager {
  data = getDefaultWekParsedData();

  getDiaBySlug(slug: string) {
    return find(this.data.dias, (i) => i.slug === slug);
  }

  addDiaBySlug(slug: string) {
    if (!this.getDiaBySlug(slug)) {
      const [day, month] = slug.split("/").map(Number);

      this.data.dias.push({
        slug,
        day,
        month,
      });
    }
  }

  addDiaBySlugs(slugs: string[]) {
    for (let slug of slugs) {
      this.addDiaBySlug(slug);
    }
  }

  getHorarioBySlug(slug: string) {
    return find(this.data.horarios, (i) => i.slug === slug);
  }

  addHorarioBySlug(slug: string) {
    if (!this.getHorarioBySlug(slug)) {
      const startHour = 0;
      const startMinute = 0;
      const endHour = 0;
      const endMinute = 0;

      this.data.horarios.push({
        slug,
        startHour,
        startMinute,
        endHour,
        endMinute,
      });
    }
  }

  addHorarioBySlugs(slugs: string[]) {
    for (let slug of slugs) {
      this.addHorarioBySlug(slug);
    }
  }

  getMateriaBySlug(slug: string) {
    return find(this.data.materias, (i) => i.slug === slug);
  }

  addMateriaBySlug(slug: string) {
    if (!this.getMateriaBySlug(slug)) {
      this.data.materias.push({ slug });
    }
  }

  addMateriaBySlugs(slugs: string[]) {
    for (let slug of slugs) {
      this.addMateriaBySlug(slug);
    }
  }

  getTurmaBySlug(slug: string) {
    return find(this.data.turmas, (i) => i.slug === slug);
  }

  addTurmaBySlug(slug: string) {
    if (!this.getTurmaBySlug(slug)) {
      this.data.turmas.push({ slug });
    }
  }

  addTurmaBySlugs(slugs: string[]) {
    for (let slug of slugs) {
      this.addTurmaBySlug(slug);
    }
  }

  getProfessorBySlug(slug: string) {
    return find(this.data.professores, (i) => i.slug === slug);
  }

  addProfessorBySlug(slug: string) {
    if (!this.getProfessorBySlug(slug)) {
      this.data.professores.push({ slug });
    }
  }

  addProfessorBySlugs(slugs: string[]) {
    for (let slug of slugs) {
      this.addProfessorBySlug(slug);
    }
  }

  addAulaCompact(aulaCompact: IWeekParsedDataAulaCompact) {
    const aula: IWeekParsedDataAula = {
      dia: { slug: aulaCompact.dia },
      materia: aulaCompact.materia ? { slug: aulaCompact.materia } : null,
      turmas: aulaCompact.turmas.map((slug) => ({ slug })),
      professores: aulaCompact.professores.map((slug) => ({ slug })),
    };

    this.data.aulas.push(aula);
  }

  addAulaCompacts(aulas: IWeekParsedDataAulaCompact[]) {
    for (const aula of aulas) {
      this.addAulaCompact(aula);
    }
  }
}
