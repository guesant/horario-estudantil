import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PermissaoService } from './permissao.service';
import { PermissaoType } from './permissao.type';
import { ResourceAuth } from '../../../infrastructure/auth/decorators/ResourceAuth.decorator';
import { AuthMode } from '../../../infrastructure/auth/consts/AuthMode';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import GraphQLJSON from 'graphql-type-json';
import { ValidatedArgs } from '../../../infrastructure/graphql/ValidatedArgs.decorator';
import {
  CreatePermissaoInputZod,
  DeletePermissaoInputZod,
  FindPermissaoByIdInputZod,
  UpdatePermissaoInputZod,
} from '@horario-estudantil/schemas';
import { BindResourceActionRequest } from '../../../infrastructure/auth/decorators/BindResourceActionRequest.decorator';
import {
  CreatePermissaoInputType,
  DeletePermissaoInputType,
  FindPermissaoByIdInputType,
  UpdatePermissaoInputType,
} from './dtos';

@Resolver(() => PermissaoType)
export class PermissaoResolver {
  constructor(private permissaoService: PermissaoService) {}

  // START: queries

  @ResourceAuth(AuthMode.OPTIONAL)
  @Query(() => PermissaoType)
  async findPermissaoById(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', FindPermissaoByIdInputZod)
    dto: FindPermissaoByIdInputType,
  ) {
    return this.permissaoService.findPermissaoById(resourceActionRequest, dto);
  }

  // END: queries

  // START: mutations

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => PermissaoType)
  async createPermissao(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', CreatePermissaoInputZod)
    dto: CreatePermissaoInputType,
  ) {
    return this.permissaoService.createPermissao(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => PermissaoType)
  async updatePermissao(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', UpdatePermissaoInputZod)
    dto: UpdatePermissaoInputType,
  ) {
    return this.permissaoService.updatePermissao(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => PermissaoType)
  async deletePermissao(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', DeletePermissaoInputZod)
    dto: DeletePermissaoInputType,
  ) {
    return this.permissaoService.deletePermissao(resourceActionRequest, dto);
  }

  // END: mutations

  // START: fields resolvers
  @ResourceAuth(AuthMode.OPTIONAL)
  @ResolveField('receita', () => GraphQLJSON)
  async receita(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @Parent() permissao: PermissaoType,
  ): Promise<PermissaoType['receita']> {
    const { id } = permissao;

    return this.permissaoService.getPermissaoReceita(resourceActionRequest, id);
  }

  // END: fields resolvers
}
