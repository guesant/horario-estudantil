import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { TurmaService } from './turma.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { CategoriaTurmaType } from '../categoria-turma/schemas/CategoriaTurma.type';
import { TurmaType } from './schemas/turma.type';
import { ApelidoType } from '../apelido/schemas/Apelido.type';
import { ValidatedArgs } from '../../../../../graphql/ValidatedArgs.decorator';
import {
  CreateTurmaInputZod,
  DeleteTurmaInputZod,
  FindTurmaByApelidoInputZod,
  FindTurmaByIdInputZod,
} from '@horario-estudantil/schemas';
import { CreateTurmaInputType } from './schemas/dtos/CreateTurma.input.type';
import { RequestActor } from '../../../../../auth/request-user/request-actor';
import { IRequestActor } from '../../../../../auth/request-user/IRequestActor';
import { DeleteTurmaInputType } from './schemas/dtos/DeleteTurma.input.type';
import { FindTurmaByIdInputType } from './schemas/dtos/FindTurmaById.input.type';
import { FindTurmaByApelidoInputType } from './schemas/dtos/FindTurmaByApelido.input.type';

@Resolver(() => TurmaType)
export class TurmaResolver {
  constructor(private turmaService: TurmaService) {}

  // start QUERIES

  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => TurmaType)
  async turmaById(
    @ValidatedArgs('data', FindTurmaByIdInputZod)
    data: FindTurmaByIdInputType,
  ) {
    const { id } = data;
    return this.turmaService.findTurmaById({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => TurmaType)
  async turmaByApelido(
    @ValidatedArgs('data', FindTurmaByApelidoInputZod)
    data: FindTurmaByApelidoInputType,
  ) {
    const { apelido } = data;

    return this.turmaService.findTurmaByApelido(apelido);
  }

  // end QUERIES

  // start MUTATIONS

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => TurmaType)
  async createTurma(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('data', CreateTurmaInputZod)
    data: CreateTurmaInputType,
  ) {
    return this.turmaService.createTurma(actor, data);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => Boolean)
  async deleteTurma(
    @RequestActor() actor: IRequestActor,
    @ValidatedArgs('data', DeleteTurmaInputZod)
    data: DeleteTurmaInputType,
  ) {
    return this.turmaService.deleteTurma(actor, data);
  }

  // end MUTATIONS

  // start RESOLVE_FIELD

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('categoriaTurma', () => CategoriaTurmaType)
  async categoriaTurma(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaCategoriaTurma(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidoPrincipal', () => ApelidoType)
  async apelidoPrincipal(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidoPrincipal(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoType])
  async apelidos(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidos(id);
  }

  // end RESOLVE_FIELD
}
