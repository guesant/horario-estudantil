import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EtapaService } from '../services/etapa.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { EtapaEntity } from '../../../entities/etapa.entity';
import { PeriodoLetivoEntity } from '../../../entities/periodo-letivo.entity';

@Resolver(() => EtapaEntity)
export class EtapaResolver {
  constructor(private etapaService: EtapaService) {}

  @SkipAuth()
  @ResolveField('periodoLetivo', () => PeriodoLetivoEntity)
  async periodoLetivo(@Parent() etapa: EtapaEntity) {
    const { id } = etapa;

    return this.etapaService.findEtapaPeriodoLetivo({ id });
  }
}
