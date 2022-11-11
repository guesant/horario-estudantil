import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_AULA as REPOSITORY_ETAPA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_SEMANA,
} from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { EtapaEntity } from '../entities/etapa.entity';
import { IAulaProfessorRepository } from '../repositories/aula-professor.repository';
import { IAulaTurmaRepository } from '../repositories/aula-turma.repository';
import { IAulaRepository } from '../repositories/aula.repository';
import { IEtapaRepository } from '../repositories/etapa.repository';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';
import { ISemanaRepository } from '../repositories/semana.repository';

export type IFindEtapaQuery = Partial<Pick<EtapaEntity, 'id'>>;

@Injectable()
export class EtapaService {
  constructor(
    @Inject(REPOSITORY_ETAPA)
    private etapaRepository: IEtapaRepository,

    @Inject(REPOSITORY_SEMANA)
    private semanaRepository: ISemanaRepository,

    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLetivoRepository: IPeriodoLetivoRepository,
  ) {}

  async findEtapa(
    query: IFindEtapaQuery,
    options?: FindOneOptions<EtapaEntity>,
  ) {
    const { id } = query;

    const etapa = await this.etapaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!etapa) {
      throw new NotFoundException('Etapa not found');
    }

    return etapa;
  }

  async findEtapaSemanas(query: IFindEtapaQuery) {
    const etapa = await this.findEtapa(query);

    const semanas = await this.semanaRepository.find({ where: { etapa } });

    return semanas;
  }

  async findEtapaPeriodoLetivo(query: IFindEtapaQuery) {
    const etapa = await this.findEtapa(query, { relations: ['periodoLetivo'] });

    const { periodoLetivo } = etapa;

    return periodoLetivo;
  }
}
