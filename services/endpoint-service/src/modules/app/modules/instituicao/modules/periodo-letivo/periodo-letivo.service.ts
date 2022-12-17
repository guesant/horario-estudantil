import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { PeriodoLetivoDbEntity } from '../../../../entities/periodo-letivo.db.entity';
import { IPeriodoLetivoRepository } from '../../../../repositories/periodo-letivo.repository';
import { REPOSITORY_PERIODO_LETIVO } from '../../../../../database/constants/REPOSITORIES';

export type IFindPeriodoLetivoQuery = Partial<
  Pick<PeriodoLetivoDbEntity, 'id'>
>;

@Injectable()
export class PeriodoLetivoService {
  constructor(
    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,
  ) {}

  async findPeriodoLetivo(
    query: IFindPeriodoLetivoQuery,
    options?: FindOneOptions<PeriodoLetivoDbEntity>,
  ) {
    const { id } = query;

    const periodoLetivo = await this.periodoLeitivoRepository.findOne({
      where: { id },
      ...options,
    });

    if (!periodoLetivo) {
      throw new NotFoundException();
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

  async findPeriodoLetivoInstituicao(query: IFindPeriodoLetivoQuery) {
    const periodoLetivo = await this.findPeriodoLetivo(query, {
      relations: ['instituicao'],
    });

    const { instituicao } = periodoLetivo;

    return instituicao;
  }
}
