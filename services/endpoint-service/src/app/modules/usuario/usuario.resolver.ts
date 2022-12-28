import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { ResourceAuth } from '../../../infrastructure/auth/decorators/ResourceAuth.decorator';
import { AuthMode } from '../../../infrastructure/auth/consts/AuthMode';
import { BindResourceActionRequest } from '../../../infrastructure/auth/decorators/BindResourceActionRequest.decorator';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import { ValidatedArgs } from '../../../infrastructure/graphql/ValidatedArgs.decorator';
import {
  CreateUsuarioInputZod,
  DeleteUsuarioInputZod,
  FindUsuarioByIdInputZod,
  UpdateUsuarioInputZod,
} from '@horario-estudantil/schemas';
import {
  CreateUsuarioInputType,
  DeleteUsuarioInputType,
  FindUsuarioByIdInputType,
  UpdateUsuarioInputType,
} from './dtos';
import { UsuarioType } from './usuario.type';

@Resolver(() => UsuarioType)
export class UsuarioResolver {
  constructor(private usuarioService: UsuarioService) {}

  // START: queries

  @ResourceAuth(AuthMode.OPTIONAL)
  @Query(() => UsuarioType)
  async findUsuarioById(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', FindUsuarioByIdInputZod)
    dto: FindUsuarioByIdInputType,
  ) {
    return this.usuarioService.findUsuarioById(resourceActionRequest, dto);
  }

  // END: queries

  // START: mutations

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => UsuarioType)
  async createUsuario(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', CreateUsuarioInputZod)
    dto: CreateUsuarioInputType,
  ) {
    return this.usuarioService.createUsuario(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => UsuarioType)
  async updateUsuario(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', UpdateUsuarioInputZod)
    dto: UpdateUsuarioInputType,
  ) {
    return this.usuarioService.updateUsuario(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => UsuarioType)
  async deleteUsuario(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', DeleteUsuarioInputZod)
    dto: DeleteUsuarioInputType,
  ) {
    return this.usuarioService.deleteUsuario(resourceActionRequest, dto);
  }

  // END: mutations

  // START: fields resolvers

  // END: fields resolvers
}
