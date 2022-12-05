import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MateriaService } from '../services/materia.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { MateriaEntity } from '../../../entities/materia.entity';
import { AulaEntity } from '../../../entities/aula.entity';
import { ApelidoEntity } from '../../../entities/apelido.entity';

@Resolver(() => MateriaEntity)
export class MateriaResolver {
  constructor(private materiaService: MateriaService) {}

  @SkipAuth()
  @ResolveField('aulas', () => [AulaEntity])
  async aulas(@Parent() materia: MateriaEntity) {
    const { id } = materia;
    return this.materiaService.findMateriaAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos', () => [ApelidoEntity])
  async apelidos(@Parent() materia: MateriaEntity) {
    const { id } = materia;
    return this.materiaService.findMateriaApelidos({ id });
  }
}
