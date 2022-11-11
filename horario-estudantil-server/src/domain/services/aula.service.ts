import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_AULA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
} from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { AulaEntity } from '../entities/aula.entity';
import { IAulaProfessorRepository } from '../repositories/aula-professor.repository';
import { IAulaTurmaRepository } from '../repositories/aula-turma.repository';
import { IAulaRepository } from '../repositories/aula.repository';

export type IFindAulaQuery = Partial<Pick<AulaEntity, 'id'>>;

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

  async findAula(query: IFindAulaQuery, options?: FindOneOptions<AulaEntity>) {
    const { id } = query;

    const aula = await this.aulaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!aula) {
      throw new NotFoundException('Aula not found');
    }

    return aula;
  }

  async findAulaEvento(query: IFindAulaQuery) {
    const aula = await this.findAula(query, { relations: ['evento'] });

    const { evento } = aula;

    return evento;
  }

  async findAulaMateria(query: IFindAulaQuery) {
    const aula = await this.findAula(query, { relations: ['materia'] });

    const { materia } = aula;

    return materia;
  }

  async findAulaTurmas(query: IFindAulaQuery) {
    const aula = await this.findAula(query);

    const aulaTurmaRelations = await this.aulaTurmaRepository.find({
      where: { aula },
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
      where: { aula },
      relations: ['turma'],
    });

    const professores = aulaProfessorRelations.map(
      (aulaProfessorRelation) => aulaProfessorRelation.professor,
    );

    return professores;
  }
}