import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_GRUPO } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { GrupoEntity } from '../entities/grupo.entity';
import { IGrupoRepository } from '../repositories/grupo.repository';

export type IFindGrupoQuery = Partial<Pick<GrupoEntity, 'id'>>;

@Injectable()
export class GrupoService {
  constructor(
    @Inject(REPOSITORY_GRUPO)
    private grupoRepository: IGrupoRepository,
  ) {}

  async findGrupo(
    query: IFindGrupoQuery,
    options?: FindOneOptions<GrupoEntity>,
  ) {
    const { id } = query;

    const grupo = await this.grupoRepository.findOne({
      where: { id },
      ...options,
    });

    if (!grupo) {
      throw new NotFoundException('Grupo not found');
    }

    return grupo;
  }

  async findGrupoUnidadeEstudantil(query: IFindGrupoQuery) {
    const grupo = await this.findGrupo(query, {
      relations: ['unidadeEstudantil'],
    });

    const { unidadeEstudantil } = grupo;

    return unidadeEstudantil;
  }

  async findGrupoTurmas(query: IFindGrupoQuery) {
    const grupo = await this.findGrupo(query, {
      relations: ['turmas'],
    });

    const { turmas } = grupo;

    return turmas;
  }
}
