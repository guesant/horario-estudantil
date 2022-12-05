import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from '../../../../user/user.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { UserEntity } from '../../../entities/user.entity';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';

@Resolver(() => UserEntity)
export class UsuarioResolver {
  constructor(private usuarioService: UserService) {}

  @SkipAuth()
  @ResolveField('memberships', () => [InstituicaoMembershipEntity])
  async memberships(@Parent() usuario: UserEntity) {
    const { id } = usuario;
    return this.usuarioService.findUsuarioMemberships({
      id,
    });
  }
}
