import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UnidadeEstudantilService } from 'src/domain/services/unidade-estudantil.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('UnidadeEstudantil')
export class UnidadeEstudantilResolver {
  constructor(private unidadeEstudantilService: UnidadeEstudantilService) {}

  @SkipAuth()
  @Query()
  async searchUnidadesEstudantis(
    @Args('query') query: string,
    @Args('limit') limit: number,
    @Args('offset') offset: number,
  ) {
    return this.unidadeEstudantilService.searchUnidadesEstudantis(
      query,
      limit,
      offset,
    );
  }

  @SkipAuth()
  @Query()
  async unidadeEstudantil(@Args('sigla') sigla: string) {
    return this.unidadeEstudantilService.findUnidadeEstudantil({ sigla });
  }

  @SkipAuth()
  @ResolveField('categoriasTurma')
  async getCategoriasTurma(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;

    return this.unidadeEstudantilService.findUnidadeEstudantilCategoriasTurma({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('memberships')
  async getMemberships(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;
    return this.unidadeEstudantilService.findUnidadeEstudantilMemberships({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('periodosLetivos')
  async getPeriodosLetivos(@Parent() unidadeEstudantil) {
    const { id } = unidadeEstudantil;
    return this.unidadeEstudantilService.findUnidadeEstudantilPeriodos({ id });
  }
}
