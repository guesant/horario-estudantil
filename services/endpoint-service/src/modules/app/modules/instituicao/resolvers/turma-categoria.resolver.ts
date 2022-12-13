import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TurmaCategoriaService } from '../services/turma-categoria.service';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { TurmaCategoriaEntity } from '../../../entities/turma-categoria.entity';
import { TurmaEntity } from '../../../entities/turma.entity';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => TurmaCategoriaEntity)
export class TurmaCategoriaResolver {
  constructor(private turmaCategoriaService: TurmaCategoriaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmas', () => [TurmaEntity])
  async turmas(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;
    return this.turmaCategoriaService.findCategoriaTurmaTurmas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoEntity)
  async instituicao(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;

    return this.turmaCategoriaService.findCategoriaTurmaInstituicao({
      id,
    });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmaCategoriaPai')
  async turmaCategoriaPai(@Parent() turmaCategoria: TurmaCategoriaEntity) {
    const { id } = turmaCategoria;

    return this.turmaCategoriaService.findCategoriaTurmaCategoriaTurmaPai({
      id,
    });
  }
}
