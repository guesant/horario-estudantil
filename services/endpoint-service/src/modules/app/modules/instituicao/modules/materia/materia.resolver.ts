import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MateriaService } from './materia.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { MateriaType } from './schemas/materia.type';
import { AulaType } from '../aula/schemas/Aula.type';
import { ApelidoType } from '../apelido/schemas/Apelido.type';

@Resolver(() => MateriaType)
export class MateriaResolver {
  constructor(private materiaService: MateriaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaType])
  async aulas(@Parent() materia: MateriaType) {
    const { id } = materia;
    return this.materiaService.findMateriaAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoType])
  async apelidos(@Parent() materia: MateriaType) {
    const { id } = materia;
    return this.materiaService.findMateriaApelidos({ id });
  }
}
