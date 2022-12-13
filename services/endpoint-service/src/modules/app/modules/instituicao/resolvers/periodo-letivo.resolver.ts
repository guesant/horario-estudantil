import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { PeriodoLetivoService } from '../services/periodo-letivo.service';
import { PeriodoLetivoEntity } from '../../../entities/periodo-letivo.entity';
import { EtapaEntity } from '../../../entities/etapa.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => PeriodoLetivoEntity)
export class PeriodoLetivoResolver {
  constructor(private periodoLetivoService: PeriodoLetivoService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('etapas', () => [EtapaEntity])
  async etapas(@Parent() periodoLetivo: PeriodoLetivoEntity) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoEtapas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoEntity)
  async instituicao(@Parent() periodoLetivo: PeriodoLetivoEntity) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoInstituicao({ id });
  }
}
