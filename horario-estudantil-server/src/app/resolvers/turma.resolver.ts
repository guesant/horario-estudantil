import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaService } from 'src/domain/services/turma.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Turma')
export class TurmaResolver {
  constructor(private turmaService: TurmaService) {}

  @SkipAuth()
  @ResolveField('grupo')
  async getGrupo(@Parent() turma) {
    const { id } = turma;
    return this.turmaService.findTurmaGrupo({ id });
  }

  @SkipAuth()
  @ResolveField('aulas')
  async getAulas(@Parent() turma) {
    const { id } = turma;
    return this.turmaService.findTurmaAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos')
  async getApelidos(@Parent() turma) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidos({ id });
  }
}
