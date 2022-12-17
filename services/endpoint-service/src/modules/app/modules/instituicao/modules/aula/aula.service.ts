import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AulaDbEntity } from '../../../../entities/aula.db.entity';
import { IAulaProfessorRepository } from '../../../../repositories/aula-professor.repository';
import { IAulaTurmaRepository } from '../../../../repositories/aula-turma.repository';
import { IAulaRepository } from '../../../../repositories/aula.repository';
import {
  REPOSITORY_AULA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
} from '../../../../../database/constants/REPOSITORIES';
import { IGenericFindOneQuery } from '../../../../IGenericFindOneQuery';

export type IFindAulaQuery = IGenericFindOneQuery<AulaDbEntity>;

@Injectable()
export class AulaService {
  constructor(
    @Inject(REPOSITORY_AULA)
    private aulaRepository: IAulaRepository,
    @Inject(REPOSITORY_AULA_TURMA)
    private aulaTurmaRepository: IAulaTurmaRepository,
    @Inject(REPOSITORY_AULA_PROFESSOR)
    private aulaProfessorRepository: IAulaProfessorRepository,
  ) {}

  async findAula(query: IFindAulaQuery) {
    const { id, options } = query;

    const targetAula = await this.aulaRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetAula) {
      throw new NotFoundException();
    }

    const aula = (await this.aulaRepository.findOne({
      where: { id: targetAula.id },
      ...options,
    })) as AulaDbEntity;

    return aula;
  }

  async findAulaEvento(query: IFindAulaQuery) {
    const aula = await this.findAula({
      ...query,
      options: { relations: ['evento'] },
    });

    const { evento } = aula;

    return evento;
  }

  async findAulaMateria(query: IFindAulaQuery) {
    const aula = await this.findAula({
      ...query,
      options: { relations: ['materia'] },
    });

    const { materia } = aula;

    return materia;
  }

  async findAulaTurmas(query: IFindAulaQuery) {
    const aula = await this.findAula(query);

    const aulaTurmaRelations = await this.aulaTurmaRepository.find({
      where: { aula: { id: aula.id } },
      relations: ['turma'],
    });

    const turmas = aulaTurmaRelations.map(
      (aulaTurmaRelation) => aulaTurmaRelation.turma,
    );

    return turmas;
  }

  async findAulaProfessores(query: IFindAulaQuery) {
    const aula = await this.findAula(query);

    const aulaProfessorRelations = await this.aulaProfessorRepository.find({
      where: { aula: { id: aula.id } },
      relations: ['turma'],
    });

    const professores = aulaProfessorRelations.map(
      (aulaProfessorRelation) => aulaProfessorRelation.professor,
    );

    return professores;
  }
}
