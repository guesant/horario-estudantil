import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoriaTurmaDbEntity } from '../../../../entities/categoria-turma.db.entity';
import { ICategoriaTurmaRepository } from '../../../../repositories/turma-categoria.repository';
import { IGenericFindOneQuery } from '../../../../IGenericFindOneQuery';
import {
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_INSTITUICAO,
} from '../../../../../database/constants/REPOSITORIES';
import { IInstituicaoRepository } from '../../../../repositories/instituicao.repository';

export type IFindCategoriaTurmaQuery =
  IGenericFindOneQuery<CategoriaTurmaDbEntity>;

@Injectable()
export class CategoriaTurmaService {
  constructor(
    @Inject(REPOSITORY_INSTITUICAO)
    private instituicaoRepository: IInstituicaoRepository,
    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,
  ) {}

  async findCategoriaTurma(query: IFindCategoriaTurmaQuery) {
    const { id, options } = query;

    const targetCategoriaTurma = await this.categoriaTurmaRepository.findOne({
      where: { id },
    });

    if (!targetCategoriaTurma) {
      throw new NotFoundException();
    }

    const categoriaTurma = <CategoriaTurmaDbEntity>(
      await this.categoriaTurmaRepository.findOne({
        where: { id },
        ...options,
      })
    );

    return categoriaTurma;
  }

  async findCategoriaTurmaInstituicao(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma({
      ...query,
      options: {
        relations: ['instituicao'],
      },
    });

    const { instituicao } = categoriaTurma;

    return instituicao;
  }

  async findCategoriaTurmaPai(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma({
      ...query,
      options: {
        relations: ['categoriaTurma'],
      },
    });

    const { categoriaTurmaPai } = categoriaTurma;

    return categoriaTurmaPai;
  }

  async findCategoriaTurmaTurmas(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma({
      ...query,
      options: {
        relations: ['turmas'],
      },
    });

    const { turmas } = categoriaTurma;

    return turmas;
  }
}
