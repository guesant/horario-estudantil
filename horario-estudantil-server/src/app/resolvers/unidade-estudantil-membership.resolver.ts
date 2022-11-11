import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { UnidadeEstudantilMembershipService } from 'src/domain/services/unidade-estudantil-membership.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('UnidadeEstudantilMembership')
export class UnidadeEstudantilMembershipResolver {
  constructor(
    private unidadeEstudantilMembershipService: UnidadeEstudantilMembershipService,
  ) {}

  @SkipAuth()
  @ResolveField('usuario')
  async getUsuario(@Parent() unidadeEstudantilMembership) {
    const { id } = unidadeEstudantilMembership;
    return this.unidadeEstudantilMembershipService.findUnidadeEstudantilMembershipUnidadeEstudantil(
      { id },
    );
  }

  @SkipAuth()
  @ResolveField('unidadeEstudantil')
  async getUnidadeEstudantil(@Parent() unidadeEstudantilMembership) {
    const { id } = unidadeEstudantilMembership;
    return this.unidadeEstudantilMembershipService.findUnidadeEstudantilMembershipUnidadeEstudantil(
      { id },
    );
  }
}
