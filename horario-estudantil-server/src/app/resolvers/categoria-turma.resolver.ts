import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CategoriaTurmaService } from 'src/domain/services/categoria-turma.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('CategoriaTurma')
export class CategoriaTurmaResolver {
  constructor(private categoriaTurmaService: CategoriaTurmaService) {}

  @SkipAuth()
  @ResolveField('turmas')
  async getTurmas(@Parent() categoriaTurma) {
    const { id } = categoriaTurma;
    return this.categoriaTurmaService.findCategoriaTurmaTurmas({ id });
  }

  @SkipAuth()
  @ResolveField('instituicao')
  async getInstituicao(@Parent() categoriaTurma) {
    const { id } = categoriaTurma;
    return this.categoriaTurmaService.findCategoriaTurmaInstituicao({
      id,
    });
  }

  @SkipAuth()
  @ResolveField('categoriaTurmaPai')
  async getCategoriaTurmaPai(@Parent() categoriaTurma) {
    const { id } = categoriaTurma;
    return this.categoriaTurmaService.findCategoriaTurmaCategoriaTurmaPai({
      id,
    });
  }
}
