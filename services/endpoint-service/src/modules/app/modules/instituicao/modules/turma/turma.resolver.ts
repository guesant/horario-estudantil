import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaService } from './turma.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';

import { AuthMode } from '../../../../../auth/AuthMode';
import { CategoriaTurmaType } from '../categoria-turma/schemas/CategoriaTurma.type';
import { TurmaType } from './schemas/turma.type';
import { ApelidoType } from '../apelido/schemas/Apelido.type';
import { AulaType } from '../aula/schemas/Aula.type';

@Resolver(() => TurmaType)
export class TurmaResolver {
  constructor(private turmaService: TurmaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmaCategoria', () => CategoriaTurmaType)
  async turmaCategoria(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaCategoriaTurma({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaType])
  async aulas(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoType])
  async apelidos(@Parent() turma: TurmaType) {
    const { id } = turma;
    return this.turmaService.findTurmaApelidos({ id });
  }
}
