import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { PeriodoLetivoService } from './periodo-letivo.service';
import { AuthMode } from '../../../../../auth/AuthMode';
import { PeriodoLetivoType } from './schemas/periodo-letivo.type';
import { EtapaType } from '../etapa/schemas/etapa.type';
import { InstituicaoType } from '../../schemas/instituicao.type';

@Resolver(() => PeriodoLetivoType)
export class PeriodoLetivoResolver {
  constructor(private periodoLetivoService: PeriodoLetivoService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('etapas', () => [EtapaType])
  async etapas(@Parent() periodoLetivo: PeriodoLetivoType) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoEtapas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoType)
  async instituicao(@Parent() periodoLetivo: PeriodoLetivoType) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoInstituicao({ id });
  }
}
