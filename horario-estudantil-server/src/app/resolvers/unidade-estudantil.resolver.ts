import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UnidadeEstudantilService } from 'src/domain/services/unidade-estudantil.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('UnidadeEstudantil')
export class UnidadeEstudantilResolver {
  constructor(private unidadeEstudantilService: UnidadeEstudantilService) {}

  @SkipAuth()
  @Query()
  async unidadesEstudantis() {
    return this.unidadeEstudantilService.findUnidadesEstudantis();
  }

  @SkipAuth()
  @Query()
  async unidadeEstudantil(@Args('sigla') sigla: string) {
    return this.unidadeEstudantilService.findUnidadeEstudantil({ sigla });
  }

  @SkipAuth()
  @ResolveField('grupos')
  async getGrupos(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;
    return [];
  }

  @SkipAuth()
  @ResolveField('memberships')
  async getMemberships(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;
    return [];
  }

  @SkipAuth()
  @ResolveField('periodosLetivos')
  async getPeriodosLetivos(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;
    return this.unidadeEstudantilService.findUnidadeEstudantilPeriodos({ id });
  }
}
