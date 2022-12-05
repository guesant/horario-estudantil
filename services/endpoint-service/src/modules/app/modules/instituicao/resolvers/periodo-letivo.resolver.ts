import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { SkipAuth } from '../../../../auth/skip-auth';
import { PeriodoLetivoService } from '../services/periodo-letivo.service';
import { PeriodoLetivoEntity } from '../../../entities/periodo-letivo.entity';
import { EtapaEntity } from '../../../entities/etapa.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';

@Resolver(() => PeriodoLetivoEntity)
export class PeriodoLetivoResolver {
  constructor(private periodoLetivoService: PeriodoLetivoService) {}

  @SkipAuth()
  @ResolveField('etapas', () => [EtapaEntity])
  async etapas(@Parent() periodoLetivo: PeriodoLetivoEntity) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoEtapas({ id });
  }

  @SkipAuth()
  @ResolveField('instituicao', () => InstituicaoEntity)
  async instituicao(@Parent() periodoLetivo: PeriodoLetivoEntity) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoInstituicao({ id });
  }
}
