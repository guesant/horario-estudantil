import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaService } from '../services/turma.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { TurmaEntity } from '../../../entities/turma.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { TurmaCategoriaEntity } from '../../../entities/turma-categoria.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => TurmaEntity)
export class TurmaResolver {
  constructor(private turmaService: TurmaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmaCategoria', () => TurmaCategoriaEntity)
  async turmaCategoria(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaCategoriaTurma({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() turma: TurmaEntity) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidos({ id });
  }
}
