import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_PERIODO_LETIVO } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { PeriodoLetivoEntity } from '../entities/periodo-letivo.entity';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';

export type IFindPeriodoLetivoQuery = Partial<Pick<PeriodoLetivoEntity, 'id'>>;

@Injectable()
export class PeriodoLetivoService {
  constructor(
    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,
  ) {}

  async findPeriodoLetivo(
    query: IFindPeriodoLetivoQuery,
    options?: FindOneOptions<PeriodoLetivoEntity>,
  ) {
    const { id } = query;

    const periodoLetivo = await this.periodoLeitivoRepository.findOne({
      where: { id },
      ...options,
    });

    if (!periodoLetivo) {
      throw new NotFoundException('Período Letivo not found');
    }

    return periodoLetivo;
  }

  async findPeriodoLetivoEtapas(query: IFindPeriodoLetivoQuery) {
    const periodoLetivo = await this.findPeriodoLetivo(query, {
      relations: ['etapas'],
    });

    const { etapas } = periodoLetivo;

    return etapas;
  }

  async findPeriodoLetivoUnidadeEstudantil(query: IFindPeriodoLetivoQuery) {
    const periodoLetivo = await this.findPeriodoLetivo(query, {
      relations: ['unidadeEstudantil'],
    });

    const { unidadeEstudantil } = periodoLetivo;

    return unidadeEstudantil;
  }
}
