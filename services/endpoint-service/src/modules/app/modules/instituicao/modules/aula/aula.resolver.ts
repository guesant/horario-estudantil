import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AulaService } from './aula.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { AulaType } from './schemas/Aula.type';
import { EventoType } from '../evento/schemas/evento.type';
import { MateriaType } from '../materia/schemas/materia.type';
import { TurmaType } from '../turma/schemas/turma.type';
import { ProfessorType } from '../professor/schemas/professor.type';

@Resolver(() => AulaType)
export class AulaResolver {
  constructor(private aulaService: AulaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('evento', () => EventoType)
  async evento(@Parent() aula: AulaType) {
    const { id } = aula;
    return this.aulaService.findAulaEvento(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('materia', () => MateriaType)
  async materia(@Parent() aula: AulaType) {
    const { id } = aula;
    return this.aulaService.findAulaMateria(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmas', () => [TurmaType])
  async turmas(@Parent() aula: AulaType) {
    const { id } = aula;
    return this.aulaService.findAulaTurmas(id);
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('professores', () => [ProfessorType])
  async professores(@Parent() aula: AulaType) {
    const { id } = aula;
    return this.aulaService.findAulaProfessores(id);
  }
}
