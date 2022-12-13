import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from '../../../../user/user.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { UserEntity } from '../../../entities/user.entity';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => UserEntity)
export class UsuarioResolver {
  constructor(private usuarioService: UserService) {}

  @ResourceAuth(AuthMode.STRICT)
  @ResolveField('memberships', () => [InstituicaoMembershipEntity])
  async memberships(@Parent() usuario: UserEntity) {
    const { id } = usuario;
    return this.usuarioService.findUsuarioMemberships({
      id,
    });
  }
}
