import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_PERIODO_LETIVO } from 'src/infraestructure/constants';
import { PeriodoLetivoEntity } from '../entities/periodo-letivo.entity';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';

export type IFindUnidadeEstudantilQuery = Partial<
  Pick<UnidadeEstudantilEntity, 'sigla' | 'id'>
>;

@Injectable()
export class PeriodoLetivoService {
  constructor(
    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,
  ) {}

  async findPeriodoLetivo(periodoId: PeriodoLetivoEntity['id']) {
    const periodoLetivo = await this.periodoLeitivoRepository.findOne({
      where: {
        id: periodoId,
      },
    });

    if (!periodoLetivo) {
      throw new NotFoundException('Período Letivo not found');
    }

    return { data: periodoLetivo };
  }
}
