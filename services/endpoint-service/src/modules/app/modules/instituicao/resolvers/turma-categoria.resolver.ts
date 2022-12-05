import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaCategoriaService } from '../services/turma-categoria.service';
import { SkipAuth } from '../../../../auth/skip-auth';
import { TurmaCategoriaEntity } from '../../../entities/turma-categoria.entity';
import { TurmaEntity } from '../../../entities/turma.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';

@Resolver(() => TurmaCategoriaEntity)
export class TurmaCategoriaResolver {
  constructor(private turmaCategoriaService: TurmaCategoriaService) {}

  @SkipAuth()
  @ResolveField('turmas', () => [TurmaEntity])
  async turmas(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;
    return this.turmaCategoriaService.findCategoriaTurmaTurmas({ id });
  }

  @SkipAuth()
  @ResolveField('instituicao', () => InstituicaoEntity)
  async instituicao(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;

    return this.turmaCategoriaService.findCategoriaTurmaInstituicao({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('turmaCategoriaPai')
  async turmaCategoriaPai(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;

    return this.turmaCategoriaService.findCategoriaTurmaCategoriaTurmaPai({
      id,
    });
  }
}
