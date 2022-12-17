import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InstituicaoMembershipService } from './instituicao-membership.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { InstituicaoMembershipType } from './schemas/instituicao-membership.type';
import { InstituicaoType } from '../../schemas/instituicao.type';
import { UserType } from '../../../user/schemas/user.type';

@Resolver(() => InstituicaoMembershipType)
export class InstituicaoMembershipResolver {
  constructor(
    private instituicaoMembershipService: InstituicaoMembershipService,
  ) {}

  @ResourceAuth(AuthMode.STRICT)
  @ResolveField('usuario', () => UserType)
  async usuario(@Parent() instituicaoMembership: InstituicaoMembershipType) {
    const { id } = instituicaoMembership;

    return this.instituicaoMembershipService.findInstituicaoMembershipUsuario({
      id,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoType)
  async instituicao(
    @Parent() instituicaoMembership: InstituicaoMembershipType,
  ) {
    const { id } = instituicaoMembership;
    return this.instituicaoMembershipService.findInstituicaoMembershipInstituicao(
      { id },
    );
  }
}
