import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { InstituicaoMembershipService } from 'src/domain/services/instituicao-membership.service';

@Resolver('InstituicaoMembership')
export class InstituicaoMembershipResolver {
  constructor(
    private instituicaoMembershipService: InstituicaoMembershipService,
  ) {}

  // @SkipAuth()
  @ResolveField('usuario')
  async getUsuario(@Parent() instituicaoMembership) {
    const { id } = instituicaoMembership;

    return this.instituicaoMembershipService.findInstituicaoMembershipUsuario(
      { id },
    );
  }

  // @SkipAuth()
  @ResolveField('instituicao')
  async getInstituicao(@Parent() instituicaoMembership) {
    const { id } = instituicaoMembership;
    return this.instituicaoMembershipService.findInstituicaoMembershipInstituicao(
      { id },
    );
  }
}
