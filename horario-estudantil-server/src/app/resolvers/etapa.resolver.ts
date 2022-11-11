import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AulaService } from 'src/domain/services/aula.service';
import { EtapaService } from 'src/domain/services/etapa.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Etapa')
export class EtapaResolver {
  constructor(private etapaService: EtapaService) {}

  @SkipAuth()
  @ResolveField('semanas')
  async getSemanas(@Parent() etapa) {
    const { id } = etapa;
    return this.etapaService.findEtapaSemanas({ id });
  }

  @SkipAuth()
  @ResolveField('periodoLetivo')
  async getPeriodoLetivo(@Parent() etapa) {
    const { id } = etapa;
    return this.etapaService.findEtapaPeriodoLetivo({ id });
  }
}
