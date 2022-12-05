import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfessorService } from '../services/professor.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { ProfessorEntity } from '../../../entities/professor.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';

@Resolver(() => ProfessorEntity)
export class ProfessorResolver {
  constructor(private professorService: ProfessorService) {}

  @SkipAuth()
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() professor: ProfessorEntity) {
    const { id } = professor;
    return this.professorService.findProfessorAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() professor: ProfessorEntity) {
    const { id } = professor;
    return this.professorService.findProfessorApelidos({ id });
  }
}
