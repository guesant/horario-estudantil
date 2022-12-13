import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InstituicaoMembershipService } from '../services/instituicao-membership.service';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';
import { UserEntity } from '../../../entities/user.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => InstituicaoMembershipEntity)
export class InstituicaoMembershipResolver {
  constructor(
    private instituicaoMembershipService: InstituicaoMembershipService,
  ) {}

  @ResourceAuth(AuthMode.STRICT)
  @ResolveField('usuario', () => UserEntity)
  async usuario(@Parent() instituicaoMembership: InstituicaoMembershipEntity) {
    const { id } = instituicaoMembership;

    return this.instituicaoMembershipService.findInstituicaoMembershipUsuario({
      id,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoEntity)
  async instituicao(
    @Parent() instituicaoMembership: InstituicaoMembershipEntity,
  ) {
    const { id } = instituicaoMembership;
    return this.instituicaoMembershipService.findInstituicaoMembershipInstituicao(
      { id },
    );
  }
}
