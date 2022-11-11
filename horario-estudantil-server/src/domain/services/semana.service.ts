import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_SEMANA } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { SemanaEntity } from '../entities/semana.entity';
import { ISemanaRepository } from '../repositories/semana.repository';

export type IFindSemanaQuery = Partial<Pick<SemanaEntity, 'id'>>;

@Injectable()
export class SemanaService {
  constructor(
    @Inject(REPOSITORY_SEMANA)
    private semanaRepository: ISemanaRepository,
  ) {}

  async findSemana(
    query: IFindSemanaQuery,
    options?: FindOneOptions<SemanaEntity>,
  ) {
    const { id } = query;

    const semana = await this.semanaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!semana) {
      throw new NotFoundException('Semana not found');
    }

    return semana;
  }

  async findSemanaEtapa(query: IFindSemanaQuery) {
    const semana = await this.findSemana(query, {
      relations: ['etapa'],
    });

    const { etapa } = semana;

    return etapa;
  }

  async findSemanaEventos(query: IFindSemanaQuery) {
    const semana = await this.findSemana(query, {
      relations: ['eventos'],
    });

    const { eventos } = semana;

    return eventos;
  }
}
