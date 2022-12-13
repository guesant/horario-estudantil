import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EtapaService } from '../services/etapa.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { EtapaEntity } from '../../../entities/etapa.entity';
import { PeriodoLetivoEntity } from '../../../entities/periodo-letivo.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => EtapaEntity)
export class EtapaResolver {
  constructor(private etapaService: EtapaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('periodoLetivo', () => PeriodoLetivoEntity)
  async periodoLetivo(@Parent() etapa: EtapaEntity) {
    const { id } = etapa;

    return this.etapaService.findEtapaPeriodoLetivo({ id });
  }
}
