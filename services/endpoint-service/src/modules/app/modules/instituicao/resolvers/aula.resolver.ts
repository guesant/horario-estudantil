import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AulaService } from '../services/aula.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { AulaEntity } from '../../../entities/aula.entity';
import { EventoEntity } from '../../../entities/evento.entity';
import { MateriaEntity } from '../../../entities/materia.entity';
import { TurmaEntity } from '../../../entities/turma.entity';
import { ProfessorEntity } from '../../../entities/professor.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => AulaEntity)
export class AulaResolver {
  constructor(private aulaService: AulaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('evento', () => EventoEntity)
  async evento(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaEvento({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('materia', () => MateriaEntity)
  async materia(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaMateria({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmas', () => [TurmaEntity])
  async turmas(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaTurmas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('professores', () => [ProfessorEntity])
  async professores(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaProfessores({ id });
  }
}
