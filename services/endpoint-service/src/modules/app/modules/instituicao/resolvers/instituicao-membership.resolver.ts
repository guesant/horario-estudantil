import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InstituicaoMembershipService } from '../services/instituicao-membership.service';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';
import { UserEntity } from '../../../entities/user.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';

@Resolver(() => InstituicaoMembershipEntity)
export class InstituicaoMembershipResolver {
  constructor(
    private instituicaoMembershipService: InstituicaoMembershipService,
  ) {}

  // @SkipAuth()
  @ResolveField('usuario', () => UserEntity)
  async usuario(@Parent() instituicaoMembership: InstituicaoMembershipEntity) {
    const { id } = instituicaoMembership;

    return this.instituicaoMembershipService.findInstituicaoMembershipUsuario({
      id,
    });
  }

  // @SkipAuth()
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
