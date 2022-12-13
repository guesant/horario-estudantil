import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
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
import { AuthMode } from 'src/modules/auth/AuthMode';
import { BadRequestException, ForbiddenException } from '@nestjs/common';

@Resolver(() => InstituicaoEntity)
export class InstituicaoResolver {
  constructor(private instituicaoService: InstituicaoService) {}

  @ResourceAuth(AuthMode.OPTIONAL)
  @Query(() => SearchInstituicoesResult)
  async searchInstituicoes(
    @RequestActor() actor: IRequestActor,
    @Args('query', { type: () => String, nullable: true }) query = '',
    @Args('limit', { type: () => Int, nullable: true }) limit = 20,
    @Args('offset', { type: () => Int, nullable: true }) offset = 0,
    @Args('onlyMemberships', { type: () => Boolean, nullable: true })
    onlyMemberships = false,
  ) {
    if (onlyMemberships && !actor) {
      throw new ForbiddenException();
    }

    return this.instituicaoService.searchInstituicoes({
      query,
      limit,
      offset,
      user: onlyMemberships ? actor : undefined,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => InstituicaoEntity)
  async instituicao(
    @Args('id', { type: () => Int, nullable: true }) id?: number,
    @Args('sigla', { type: () => String, nullable: true }) sigla?: string,
  ) {
    if ((!id && !sigla) || (id && sigla)) {
      throw new BadRequestException('Please provide id OR sigla.');
    }

    return this.instituicaoService.findInstituicao({ id, sigla });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmaCategorias', () => [TurmaCategoriaEntity])
  async turmaCategorias(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;

    return this.instituicaoService.findInstituicaoCategoriasTurma({
      id,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('memberships', () => [InstituicaoMembershipEntity])
  async memberships(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoMemberships({
      id,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('periodosLetivos', () => [PeriodoLetivoEntity])
  async periodosLetivos(@Parent() instituicao: InstituicaoEntity) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoPeriodos({ id });
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => InstituicaoEntity)
  async createInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args('data') data: CreateInstituicaoInput,
  ) {
    return this.instituicaoService.createInstituicao(actor, data);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => InstituicaoEntity)
  async updateInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args('data') data: UpdateInstituicaoInput,
  ) {
    return this.instituicaoService.updateInstituicao(actor, id, data);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => Boolean)
  async deleteInstituicao(
    @RequestActor() actor: IRequestActor,
    @Args('data') data: DeleteInstituicaoInput,
  ) {
    return this.instituicaoService.deleteInstituicao(actor, data);
  }
}
