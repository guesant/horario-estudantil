import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoriaTurmaDbEntity } from '../../../../entities/categoria-turma.db.entity';
import { ITurmaCategoriaRepository } from '../../../../repositories/turma-categoria.repository';
import { IGenericFindOneQuery } from '../../../../IGenericFindOneQuery';
import { REPOSITORY_TURMA_CATEGORIA } from '../../../../../database/constants/REPOSITORIES';

export type IFindTurmaCategoriaQuery =
  IGenericFindOneQuery<CategoriaTurmaDbEntity>;

@Injectable()
export class CategoriaTurmaService {
  constructor(
    @Inject(REPOSITORY_TURMA_CATEGORIA)
    private turmaCategoriaRepository: ITurmaCategoriaRepository,
  ) {}

  async findTurmaCategoria(query: IFindTurmaCategoriaQuery) {
    const { id, options } = query;

    const targetTurmaCategoria = await this.turmaCategoriaRepository.findOne({
      where: { id },
    });

    if (!targetTurmaCategoria) {
      throw new NotFoundException();
    }

    const turmaCategoria = (await this.turmaCategoriaRepository.findOne({
      where: { id },
      ...options,
    })) as CategoriaTurmaDbEntity;

    return turmaCategoria;
  }

  async findCategoriaTurmaInstituicao(query: IFindTurmaCategoriaQuery) {
    const turmaCategoria = await this.findTurmaCategoria({
      ...query,
      options: {
        relations: ['instituicao'],
      },
    });

    const { instituicao } = turmaCategoria;

    return instituicao;
  }

  async findCategoriaTurmaCategoriaTurmaPai(query: IFindTurmaCategoriaQuery) {
    const turmaCategoria = await this.findTurmaCategoria({
      ...query,
      options: {
        relations: ['turmaCategoriaPai'],
      },
    });

    const { turmaCategoriaPai } = turmaCategoria;

    return turmaCategoriaPai;
  }

  async findCategoriaTurmaTurmas(query: IFindTurmaCategoriaQuery) {
    const turmaCategoria = await this.findTurmaCategoria({
      ...query,
      options: {
        relations: ['turmas'],
      },
    });

    const { turmas } = turmaCategoria;

    return turmas;
  }
}