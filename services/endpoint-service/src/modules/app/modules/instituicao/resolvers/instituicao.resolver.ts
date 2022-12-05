import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { SkipAuth } from '../../../../auth/skip-auth';
import { InstituicaoService } from '../services/instituicao.service';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';
import { SearchInstituicoesResult } from '../dtos/SearchInstituicoesResult';
import { TurmaCategoriaEntity } from '../../../entities/turma-categoria.entity';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';
import { PeriodoLetivoEntity } from '../../../entities/periodo-letivo.entity';
import { CreateInstituicaoInput } from '../dtos/CreateInstituicaoInput';
import { RequestActor } from '../../../../auth/request-user/request-actor';
import { IRequestActor } from '../../../../auth/request-user/IRequestActor';
import { DeleteInstituicaoInput } from '../dtos/DeleteInstituicaoInput';
import { UpdateInstituicaoInput } from '../dtos/UpdateInstituicaoInput';

@Resolver(() => InstituicaoEntity)
export class InstituicaoResolver {
  constructor(private instituicaoService: InstituicaoService) {}

  @SkipAuth()
  @Query(() => SearchInstituicoesResult)
  async searchInstituicoes(
    @Args('query') query: string,
    @Args('limit') limit: number = 20,
    @Args('offset') offset: number = 0,
  ) {
    return this.instituicaoService.searchInstituicoes(query, limit, offset);
  }

  @SkipAuth()
  @Query(() => InstituicaoEntity)
  async instituicao(@Args('sigla') sigla: string) {
    return this.instituicaoService.findInstituicao({ sigla });
  }

  @SkipAuth()
  @ResolveField('turmaCategorias', () => [TurmaCategoriaEntity])
  async turmaCategorias(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;

    return this.instituicaoService.findInstituicaoCategoriasTurma({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('memberships', () => [InstituicaoMembershipEntity])
  async memberships(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoMemberships({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('periodosLetivos', () => [PeriodoLetivoEntity])
  async periodosLetivos(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoPeriodos({ id });
  }

  @Mutation(() => InstituicaoEntity)
  async createInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args('data') data: CreateInstituicaoInput,
  ) {
    return this.instituicaoService.createInstituicao(actor, data);
  }

  @Mutation(() => InstituicaoEntity)
  async updateInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: UpdateInstituicaoInput,
  ) {
    return this.instituicaoService.updateInstituicao(actor, id, data);
  }

  @Mutation(() => Boolean)
  async deleteInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args('data') data: DeleteInstituicaoInput,
  ) {
    return this.instituicaoService.deleteInstituicao(actor, data);
  }
}
