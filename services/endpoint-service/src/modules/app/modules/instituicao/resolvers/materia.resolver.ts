import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MateriaService } from '../services/materia.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { MateriaEntity } from '../../../entities/materia.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => MateriaEntity)
export class MateriaResolver {
  constructor(private materiaService: MateriaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() materia: MateriaEntity) {
    const { id } = materia;
    return this.materiaService.findMateriaAulas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() materia: MateriaEntity) {
    const { id } = materia;
    return this.materiaService.findMateriaApelidos({ id });
  }
}
