import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { InstituicaoService } from 'src/domain/services/instituicao.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Instituicao')
export class InstituicaoResolver {
  constructor(private instituicaoService: InstituicaoService) {}

  @SkipAuth()
  @Query()
  async searchInstituicoes(
    @Args('query') query: string,
    @Args('limit') limit: number,
    @Args('offset') offset: number,
  ) {
    return this.instituicaoService.searchInstituicoes(
      query,
      limit,
      offset,
    );
  }

  @SkipAuth()
  @Query()
  async instituicao(@Args('sigla') sigla: string) {
    return this.instituicaoService.findInstituicao({ sigla });
  }

  @SkipAuth()
  @ResolveField('categoriasTurma')
  async getCategoriasTurma(@Parent() instituicao) {
    const { id } = instituicao;

    return this.instituicaoService.findInstituicaoCategoriasTurma({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('memberships')
  async getMemberships(@Parent() instituicao) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoMemberships({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('periodosLetivos')
  async getPeriodosLetivos(@Parent() instituicao) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoPeriodos({ id });
  }
}
