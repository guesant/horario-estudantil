import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_CATEGORIA_TURMA } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { CategoriaTurmaEntity } from '../entities/catergoria-turma.entity';
import { ICategoriaTurmaRepository } from '../repositories/categoria-turma.repository';

export type IFindCategoriaTurmaQuery = Partial<
  Pick<CategoriaTurmaEntity, 'id'>
>;

@Injectable()
export class CategoriaTurmaService {
  constructor(
    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,
  ) {}

  async findCategoriaTurma(
    query: IFindCategoriaTurmaQuery,
    options?: FindOneOptions<CategoriaTurmaEntity>,
  ) {
    const { id } = query;

    const categoriaTurma = await this.categoriaTurmaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!categoriaTurma) {
      throw new NotFoundException();
    }

    return categoriaTurma;
  }

  async findCategoriaTurmaInstituicao(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma(query, {
      relations: ['instituicao'],
    });

    const { instituicao } = categoriaTurma;

    return instituicao;
  }

  async findCategoriaTurmaCategoriaTurmaPai(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma(query, {
      relations: ['categoriaTurmaPai'],
    });

    const { categoriaTurmaPai } = categoriaTurma;

    return categoriaTurmaPai;
  }

  async findCategoriaTurmaTurmas(query: IFindCategoriaTurmaQuery) {
    const categoriaTurma = await this.findCategoriaTurma(query, {
      relations: ['turmas'],
    });

    const { turmas } = categoriaTurma;

    return turmas;
  }
}
