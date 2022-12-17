import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoriaTurmaService } from './categoria-turma.service';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { AuthMode } from '../../../../../auth/AuthMode';
import { CategoriaTurmaType } from './schemas/CategoriaTurma.type';
import { TurmaType } from '../turma/schemas/turma.type';
import { InstituicaoType } from '../../schemas/instituicao.type';

@Resolver(() => CategoriaTurmaType)
export class CategoriaTurmaResolver {
  constructor(private categoriaTurmaService: CategoriaTurmaService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('turmas', () => [TurmaType])
  async turmas(@Parent() turmaCategoria: CategoriaTurmaType) {
    const { id } = turmaCategoria;
    return this.categoriaTurmaService.findCategoriaTurmaTurmas({ id });
  }

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('instituicao', () => InstituicaoType)
  async instituicao(@Parent() turmaCategoria: CategoriaTurmaType) {
    const { id } = turmaCategoria;

    return this.categoriaTurmaService.findCategoriaTurmaInstituicao({
      id,
    });
  }

  // @ResourceAuth(AuthMode.ANONYMOUS)
  // @ResolveField('turmaCategoriaPai')
  // async turmaCategoriaPai(@Parent() turmaCategoria: CategoriaTurmaType) {
  //   const { id } = turmaCategoria;
  //
  //   return this.categoriaTurmaService.findCategoriaTurmaCategoriaTurmaPai({
  //     id,
  //   });
  // }
}
