import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ProfessorService } from './professor.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { ProfessorType } from './schemas/professor.type';
import { AulaType } from '../aula/schemas/Aula.type';
import { ApelidoType } from '../apelido/schemas/Apelido.type';

@Resolver(() => ProfessorType)
export class ProfessorResolver {
  constructor(private professorService: ProfessorService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaType])
  async aulas(@Parent() professor: ProfessorType) {
    const { id } = professor;
    return this.professorService.findProfessorAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoType])
  async apelidos(@Parent() professor: ProfessorType) {
    const { id } = professor;
    return this.professorService.findProfessorApelidos({ id });
  }
}