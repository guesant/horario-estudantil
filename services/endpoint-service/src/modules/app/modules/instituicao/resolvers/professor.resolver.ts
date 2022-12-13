import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfessorService } from '../services/professor.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { ProfessorEntity } from '../../../entities/professor.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => ProfessorEntity)
export class ProfessorResolver {
  constructor(private professorService: ProfessorService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() professor: ProfessorEntity) {
    const { id } = professor;
    return this.professorService.findProfessorAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() professor: ProfessorEntity) {
    const { id } = professor;
    return this.professorService.findProfessorApelidos({ id });
  }
}
