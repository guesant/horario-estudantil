import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_TURMA } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { TurmaEntity } from '../entities/turma.entity';
import { ITurmaRepository } from '../repositories/turma.repository';

export type IFindTurmaQuery = Partial<Pick<TurmaEntity, 'id'>>;

@Injectable()
export class TurmaService {
  constructor(
    @Inject(REPOSITORY_TURMA)
    private turmaRepository: ITurmaRepository,
  ) {}

  async findTurma(
    query: IFindTurmaQuery,
    options?: FindOneOptions<TurmaEntity>,
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
      relations: ['categoriaTurma'],
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
