import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfessorService } from 'src/domain/services/professor.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Professor')
export class ProfessorResolver {
  constructor(private professorService: ProfessorService) {}

  @SkipAuth()
  @ResolveField('aulas')
  async getAulas(@Parent() professor) {
    const { id } = professor;
    return this.professorService.findProfessorAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos')
  async getApelidos(@Parent() etapa) {
    const { id } = etapa;
    return this.professorService.findProfessorApelidos({ id });
  }
}
