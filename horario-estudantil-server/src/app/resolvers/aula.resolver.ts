import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AulaService } from 'src/domain/services/aula.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Aula')
export class AulaResolver {
  constructor(private aulaService: AulaService) {}

  @SkipAuth()
  @ResolveField('turmas')
  async getTurmas(@Parent() aula) {
    const { id } = aula;
    return this.aulaService.findAulaTurmas({ id });
  }

  @SkipAuth()
  @ResolveField('professores')
  async getProfessores(@Parent() aula) {
    const { id } = aula;
    return this.aulaService.findAulaProfessores({ id });
  }
}
