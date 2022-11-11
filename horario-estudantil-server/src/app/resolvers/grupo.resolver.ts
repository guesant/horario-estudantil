import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GrupoService } from 'src/domain/services/grupo.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Grupo')
export class GrupoResolver {
  constructor(private grupoService: GrupoService) {}

  @SkipAuth()
  @ResolveField('turmas')
  async getTurmas(@Parent() grupo) {
    const { id } = grupo;
    return this.grupoService.findGrupoTurmas({ id });
  }

  @SkipAuth()
  @ResolveField('unidadeEstudantil')
  async getUnidadeEstudantil(@Parent() grupo) {
    const { id } = grupo;
    return this.grupoService.findGrupoUnidadeEstudantil({ id });
  }
}
