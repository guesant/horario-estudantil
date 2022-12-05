import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaService } from '../services/turma.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { TurmaEntity } from '../../../entities/turma.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { TurmaCategoriaEntity } from '../../../entities/turma-categoria.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';

@Resolver(() => TurmaEntity)
export class TurmaResolver {
  constructor(private turmaService: TurmaService) {}

  @SkipAuth()
  @ResolveField('turmaCategoria', () => TurmaCategoriaEntity)
  async turmaCategoria(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaCategoriaTurma({ id });
  }

  @SkipAuth()
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidos({ id });
  }
}
