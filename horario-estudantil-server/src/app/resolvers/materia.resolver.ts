import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { MateriaService } from 'src/domain/services/materia.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Materia')
export class MateriaResolver {
  constructor(private materiaService: MateriaService) {}

  @SkipAuth()
  @ResolveField('aulas')
  async getAulas(@Parent() materia) {
    const { id } = materia;
    return this.materiaService.findMateriaAulas({ id });
  }

  @SkipAuth()
  @ResolveField('apelidos')
  async getApelidos(@Parent() materia) {
    const { id } = materia;
    return this.materiaService.findMateriaApelidos({ id });
  }
}
