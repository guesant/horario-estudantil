import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { SemanaService } from 'src/domain/services/semana.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Semana')
export class SemanaResolver {
  constructor(private semanaService: SemanaService) {}

  @SkipAuth()
  @ResolveField('etapa')
  async getEtapa(@Parent() semana) {
    const { id } = semana;
    return this.semanaService.findSemanaEtapa({ id });
  }

  @SkipAuth()
  @ResolveField('eventos')
  async getEventos(@Parent() etapa) {
    const { id } = etapa;
    return this.semanaService.findSemanaEventos({ id });
  }
}
