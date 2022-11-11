import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UsuarioService } from 'src/domain/services/usuario.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Usuario')
export class UsuarioResolver {
  constructor(private usuarioService: UsuarioService) {}

  @SkipAuth()
  @ResolveField('memberships')
  async getMemberships(@Parent() usuario) {
    const { id } = usuario;
    return this.usuarioService.findUsuarioMemberships({
      id,
    });
  }
}
