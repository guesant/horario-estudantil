import {
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CargoService } from './cargo.service';
import { CargoType } from './cargo.type';
import { ResourceAuth } from '../../../infrastructure/auth/decorators/ResourceAuth.decorator';
import { AuthMode } from '../../../infrastructure/auth/consts/AuthMode';
import { ResourceActionRequest } from '../../../infrastructure/auth/interfaces/ResourceActionRequest';
import GraphQLJSON from 'graphql-type-json';
import { ValidatedArgs } from '../../../infrastructure/graphql/ValidatedArgs.decorator';
import {
  AddPermissaoToCargoInputZod,
  CreateCargoInputZod,
  DeleteCargoInputZod,
  FindCargoByIdInputZod,
  RemovePermissaoToCargoInputZod,
  UpdateCargoInputZod,
} from '@horario-estudantil/schemas';
import { BindResourceActionRequest } from '../../../infrastructure/auth/decorators/BindResourceActionRequest.decorator';
import {
  CreateCargoInputType,
  DeleteCargoInputType,
  FindCargoByIdInputType,
  UpdateCargoInputType,
} from './dtos';
import { AddPermissaoToCargoInputType } from './dtos/AddPermissaoToCargo.input.type';
import { RemovePermissaoToCargoInputType } from './dtos/RemovePermissaoToCargo.input.type';

@Resolver(() => CargoType)
export class CargoResolver {
  constructor(private cargoService: CargoService) {}

  // START: queries

  @ResourceAuth(AuthMode.OPTIONAL)
  @Query(() => CargoType)
  async findCargoById(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', FindCargoByIdInputZod)
    dto: FindCargoByIdInputType,
  ) {
    return this.cargoService.findCargoById(resourceActionRequest, dto);
  }

  // END: queries

  // START: mutations

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => CargoType)
  async createCargo(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', CreateCargoInputZod)
    dto: CreateCargoInputType,
  ) {
    return this.cargoService.createCargo(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => CargoType)
  async updateCargo(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', UpdateCargoInputZod)
    dto: UpdateCargoInputType,
  ) {
    return this.cargoService.updateCargo(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => CargoType)
  async deleteCargo(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', DeleteCargoInputZod)
    dto: DeleteCargoInputType,
  ) {
    return this.cargoService.deleteCargo(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => Boolean)
  async addPermissao(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', AddPermissaoToCargoInputZod)
    dto: AddPermissaoToCargoInputType,
  ) {
    return this.cargoService.addPermissao(resourceActionRequest, dto);
  }

  @ResourceAuth(AuthMode.STRICT)
  @Mutation(() => Boolean)
  async removePermissao(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @ValidatedArgs('dto', RemovePermissaoToCargoInputZod)
    dto: RemovePermissaoToCargoInputType,
  ) {
    return this.cargoService.removePermissao(resourceActionRequest, dto);
  }

  // END: mutations

  // START: fields resolvers
  @ResourceAuth(AuthMode.OPTIONAL)
  @ResolveField('permissoes', () => GraphQLJSON)
  async permissoes(
    @BindResourceActionRequest() resourceActionRequest: ResourceActionRequest,
    @Parent() permissao: CargoType,
  ): Promise<CargoType['permissoes']> {
    const { id } = permissao;

    return this.cargoService.getCargoPermissoes(resourceActionRequest, id);
  }

  // END: fields resolvers
}
