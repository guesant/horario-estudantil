import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { EtapaDbEntity } from '../../../../entities/etapa.db.entity';
import { IEtapaRepository } from '../../../../repositories/etapa.repository';
import { REPOSITORY_ETAPA } from '../../../../../database/constants/REPOSITORIES';

export type IFindEtapaQuery = Partial<Pick<EtapaDbEntity, 'id'>>;

@Injectable()
export class EtapaService {
  constructor(
    @Inject(REPOSITORY_ETAPA)
    private etapaRepository: IEtapaRepository,
  ) {}

  async findEtapa(
    query: IFindEtapaQuery,
    options?: FindOneOptions<EtapaDbEntity>,
  ) {
    const { id } = query;

    const etapa = await this.etapaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!etapa) {
      throw new NotFoundException();
    }

    return etapa;
  }

  async findEtapaPeriodoLetivo(query: IFindEtapaQuery) {
    const etapa = await this.findEtapa(query, { relations: ['periodoLetivo'] });

    const { periodoLetivo } = etapa;

    return periodoLetivo;
  }
}
