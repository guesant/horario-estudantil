import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { TurmaDbEntity } from '../../../../entities/turma.db.entity';
import { ITurmaRepository } from '../../../../repositories/turma.repository';
import { REPOSITORY_TURMA } from '../../../../../database/constants/REPOSITORIES';

export type IFindTurmaQuery = Partial<Pick<TurmaDbEntity, 'id'>>;

@Injectable()
export class TurmaService {
  constructor(
    @Inject(REPOSITORY_TURMA)
    private turmaRepository: ITurmaRepository,
  ) {}

  async findTurma(
    query: IFindTurmaQuery,
    options?: FindOneOptions<TurmaDbEntity>,
  ) {
    const { id } = query;

    const turma = await this.turmaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!turma) {
      throw new NotFoundException();
    }

    return turma;
  }

  async findTurmaCategoriaTurma(query: IFindTurmaQuery) {
    const turma = await this.findTurma(query, {
      relations: ['turmaCategoria'],
    });

    const { categoriaTurma } = turma;

    return categoriaTurma;
  }

  async findTurmaAulas(query: IFindTurmaQuery) {
    const turma = await this.findTurma(query, {
      relations: ['aulaTurmaRelations', 'aulaTurmaRelations.aula'],
    });

    const { aulaTurmaRelations } = turma;

    const aulas = aulaTurmaRelations.map((i) => i.aula);

    return aulas;
  }

  async findTurmaApelidos(query: IFindTurmaQuery) {
    const turma = await this.findTurma(query, {
      relations: ['apelidos'],
    });

    const { apelidos } = turma;

    return apelidos;
  }
}