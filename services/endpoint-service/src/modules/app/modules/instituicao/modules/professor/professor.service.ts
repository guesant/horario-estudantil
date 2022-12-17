import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { ProfessorDbEntity } from '../../../../entities/professor.db.entity';
import { IProfessorRepository } from '../../../../repositories/professor.repository';
import { REPOSITORY_PROFESSOR } from '../../../../../database/constants/REPOSITORIES';

export type IFindProfessorQuery = Partial<Pick<ProfessorDbEntity, 'id'>>;

@Injectable()
export class ProfessorService {
  constructor(
    @Inject(REPOSITORY_PROFESSOR)
    private professorRepository: IProfessorRepository,
  ) {}

  async findProfessor(
    query: IFindProfessorQuery,
    options?: FindOneOptions<ProfessorDbEntity>,
  ) {
    const { id } = query;

    const professor = await this.professorRepository.findOne({
      where: { id },
      ...options,
    });

    if (!professor) {
      throw new NotFoundException();
    }

    return professor;
  }

  async findProfessorAulas(query: IFindProfessorQuery) {
    const professor = await this.findProfessor(query, {
      relations: ['aulaProfessorRelations', 'aulaProfessorRelations.aula'],
    });

    const { aulaProfessorRelations } = professor;

    const aulas = aulaProfessorRelations.map(
      (aulaProfessorRelation) => aulaProfessorRelation.aula,
    );

    return aulas;
  }

  async findProfessorApelidos(query: IFindProfessorQuery) {
    const professor = await this.findProfessor(query, {
      relations: ['apelidos'],
    });

    const { apelidos } = professor;

    return apelidos;
  }
}
