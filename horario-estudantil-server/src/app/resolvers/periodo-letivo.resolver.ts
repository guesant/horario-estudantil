import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PeriodoLetivoService } from 'src/domain/services/periodo-letivo.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('PeriodoLetivo')
export class PeriodoLetivoResolver {
  constructor(private periodoLetivoService: PeriodoLetivoService) {}

  @SkipAuth()
  @ResolveField('etapas')
  async getEtapas(@Parent() periodoLetivo) {
    const { id } = periodoLetivo;
    return this.periodoLetivoService.findPeriodoLetivoEtapas({ id });
  }

  @SkipAuth()
  @ResolveField('unidadeEstudantil')
  async getUnidadeEstudantil(@Parent() etapa) {
    const { id } = etapa;
    return this.periodoLetivoService.findPeriodoLetivoUnidadeEstudantil({ id });
  }
}
