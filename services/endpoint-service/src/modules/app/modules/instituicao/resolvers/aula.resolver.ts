import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AulaService } from '../services/aula.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { AulaEntity } from '../../../entities/aula.entity';
import { EventoEntity } from '../../../entities/evento.entity';
import { MateriaEntity } from '../../../entities/materia.entity';
import { TurmaEntity } from '../../../entities/turma.entity';
import { ProfessorEntity } from '../../../entities/professor.entity';

@Resolver(() => AulaEntity)
export class AulaResolver {
  constructor(private aulaService: AulaService) {}

  @SkipAuth()
  @ResolveField('evento', () => EventoEntity)
  async evento(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaEvento({ id });
  }

  @SkipAuth()
  @ResolveField('materia', () => MateriaEntity)
  async materia(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaMateria({ id });
  }

  @SkipAuth()
  @ResolveField('turmas', () => [TurmaEntity])
  async turmas(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaTurmas({ id });
  }

  @SkipAuth()
  @ResolveField('professores', () => [ProfessorEntity])
  async professores(@Parent() aula: AulaEntity) {
    const { id } = aula;
    return this.aulaService.findAulaProfessores({ id });
  }
}
