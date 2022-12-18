import {
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ResourceAuth } from '../../../auth/ResourceAuth.decorator';
import { InstituicaoService } from './instituicao.service';
import { PeriodoLetivoDbEntity } from '../../entities/periodo-letivo.db.entity';
import { CreateInstituicaoInputType } from './schemas/dtos/CreateInstituicao.input.type';
import { RequestActor } from '../../../auth/request-user/request-actor';
import { IRequestActor } from '../../../auth/request-user/IRequestActor';
import { DeleteInstituicaoInputType } from './schemas/dtos/DeleteInstituicao.input.type';
import { UpdateInstituicaoInputType } from './schemas/dtos/UpdateInstituicao.input.type';
import { AuthMode } from 'src/modules/auth/AuthMode';
import { ForbiddenException } from '@nestjs/common';
import { SearchInstituicoesResultType } from './schemas/dtos/SearchInstituicoesResult.type';
import { InstituicaoType } from './schemas/instituicao.type';
import { CategoriaTurmaType } from './modules/categoria-turma/schemas/CategoriaTurma.type';
import { InstituicaoMembershipType } from './modules/instituicao-membership/schemas/instituicao-membership.type';
import { SearchInstituicoesInputType } from './schemas/dtos/SearchInstituicoes.input.type';
import {
  CreateInstituicaoInputZod,
  DeleteInstituicaoInputZod,
  FindInstituicaoByIdInputZod,
  FindInstituicaoBySiglaInputZod,
  IdZod,
  SearchInstituicoesInputZod,
  UpdateInstituicaoInputZod,
} from '@horario-estudantil/schemas';
import { ValidatedArgs } from '../../../graphql/ValidatedArgs.decorator';
import { FindInstituicaoByIdInputType } from './schemas/dtos/FindInstituicaoById.input.type';
import { FindInstituicaoBySiglaInputType } from './schemas/dtos/FindInstituicaoBySigla.input.type';
import { InstituicaoDbEntity } from '../../entities/instituicao.db.entity';

@Resolver(() => InstituicaoType)
export class InstituicaoResolver {
  constructor(private instituicaoService: InstituicaoService) {}

  // start QUERIES

  @ResourceAuth(AuthMode.OPTIONAL)
  @Query(() => SearchInstituicoesResultType)
  async searchInstituicoes(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('options', SearchInstituicoesInputZod, {
      nullable: true,
      defaultValue: {},
    })
    options: SearchInstituicoesInputType,
  ) {
    if (options.onlyMemberships && !actor) {
      throw new ForbiddenException();
    }

    return this.instituicaoService.searchInstituicoes(
      options,
      options.onlyMemberships ? actor : undefined,
    );
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => InstituicaoType)
  async instituicaoById(
    @ValidatedArgs('options', FindInstituicaoByIdInputZod)
    options: FindInstituicaoByIdInputType,
  ) {
    const { id } = options;

    return this.instituicaoService.findInstituicaoOrFail({
      id,
      options: { select: ['id'] },
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => InstituicaoType)
  async instituicaoBySigla(
    @ValidatedArgs('options', FindInstituicaoBySiglaInputZod)
    options: FindInstituicaoBySiglaInputType,
  ) {
    const { sigla } = options;

    return this.instituicaoService.findInstituicaoOrFail({
      sigla,
      options: { select: ['id'] },
    });
  }

  // end QUERIES

  // start MUTATIONS

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => InstituicaoType)
  async createInstituicao(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('data', CreateInstituicaoInputZod)
    data: CreateInstituicaoInputType,
  ) {
    return this.instituicaoService.createInstituicao(actor, data);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => InstituicaoType)
  async updateInstituicao(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('id', IdZod, { type: () => Int }) id: number,
    @ValidatedArgs('data', UpdateInstituicaoInputZod)
    data: UpdateInstituicaoInputType,
  ) {
    return this.instituicaoService.updateInstituicao(actor, id, data);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => Boolean)
  async deleteInstituicao(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('data', DeleteInstituicaoInputZod)
    data: DeleteInstituicaoInputType,
  ) {
    return this.instituicaoService.deleteInstituicao(actor, data);
  }

  // end MUTATIONS

  // start RESOLVE_FIELD

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('nome')
  nome(@Parent() instituicao: InstituicaoType) {
    return this.resolveGenericField(instituicao, 'nome');
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('sigla')
  sigla(@Parent() instituicao: InstituicaoType) {
    return this.resolveGenericField(instituicao, 'sigla');
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelido')
  apelido(@Parent() instituicao: InstituicaoType) {
    return this.resolveGenericField(instituicao, 'apelido');
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('lastUpdate')
  lastUpdate(@Parent() instituicao: InstituicaoType) {
    return this.resolveGenericField(instituicao, 'lastUpdate');
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmas', () => [CategoriaTurmaType])
  async turmas(@Parent() instituicao: InstituicaoType) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoTurmas(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('categoriasTurma', () => [CategoriaTurmaType])
  async categoriasTurma(@Parent() instituicao: InstituicaoType) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoCategoriasTurma(id);
  }

  @ResourceAuth(AuthMode.STRICT)
  @ResolveField('memberships', () => [InstituicaoMembershipType])
  async memberships(@Parent() instituicao: InstituicaoType) {
    const { id } = instituicao;

    return this.instituicaoService.findInstituicaoMemberships(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('periodosLetivos', () => [PeriodoLetivoDbEntity])
  async periodosLetivos(@Parent() instituicao: InstituicaoType) {
    const { id } = instituicao;
    return this.instituicaoService.findInstituicaoPeriodos(id);
  }

  private async resolveGenericField<K extends keyof InstituicaoDbEntity>(
    instituicao: InstituicaoType,
    field: K,
    useCache = true,
  ): Promise<InstituicaoDbEntity[K]> {
    const { id } = instituicao;

    if (useCache && Object.hasOwn(instituicao, field)) {
      return (<any>instituicao)[field];
    }

    return this.instituicaoService.findInstituicaoField({ id }, field);
  }

  // end RESOLVE_FIELD
}
