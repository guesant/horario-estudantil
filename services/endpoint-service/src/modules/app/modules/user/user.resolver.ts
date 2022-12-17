import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { ResourceAuth } from '../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../auth/AuthMode';
import { UserType } from './schemas/user.type';
import { InstituicaoMembershipType } from '../instituicao/modules/instituicao-membership/schemas/instituicao-membership.type';

@Resolver(() => UserType)
export class UserResolver {
  constructor(private usuarioService: UserService) {}

  @ResourceAuth(AuthMode.STRICT)
  @ResolveField('memberships', () => [InstituicaoMembershipType])
  async memberships(@Parent() usuario: UserType) {
    const { id } = usuario;
    return this.usuarioService.findUsuarioMemberships({
      id,
    });
  }
}
