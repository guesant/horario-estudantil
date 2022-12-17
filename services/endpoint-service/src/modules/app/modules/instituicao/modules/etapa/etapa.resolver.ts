import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EtapaService } from './etapa.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { EtapaType } from './schemas/etapa.type';
import { PeriodoLetivoType } from '../periodo-letivo/schemas/periodo-letivo.type';

@Resolver(() => EtapaType)
export class EtapaResolver {
  constructor(private etapaService: EtapaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('periodoLetivo', () => PeriodoLetivoType)
  async periodoLetivo(@Parent() etapa: EtapaType) {
    const { id } = etapa;

    return this.etapaService.findEtapaPeriodoLetivo({ id });
  }
}
