import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_UNIDADE_ESTUDANTIL,
  REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
} from 'src/infraestructure/constants';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';
import { ICategoriaTurmaRepository } from '../repositories/categoria-turma.repository';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';
import { IUnidadeEstudantilMembershipRepository } from '../repositories/unidade-estudantil-membership.repository';
import { IUnidadeEstudantilRepository } from '../repositories/unidade-estudantil.repository';

export type IFindUnidadeEstudantilQuery = Partial<
  Pick<UnidadeEstudantilEntity, 'sigla' | 'id'>
>;

@Injectable()
export class UnidadeEstudantilService {
  constructor(
    @Inject(REPOSITORY_UNIDADE_ESTUDANTIL)
    private unidadeEstudantilRepository: IUnidadeEstudantilRepository,

    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,

    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,

    @Inject(REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP)
    private unidadeEstudantilMembershipRepository: IUnidadeEstudantilMembershipRepository,
  ) {}

  async findUnidadeEstudantil(query: IFindUnidadeEstudantilQuery) {
    const { id, sigla } = query;

    const unidadeEstudantil = await this.unidadeEstudantilRepository.findOne({
      where: { id, sigla },
    });

    if (!unidadeEstudantil) {
      throw new NotFoundException();
    }

    return unidadeEstudantil;
  }

  async findUnidadesEstudantis() {
    const data = await this.unidadeEstudantilRepository.find();
    return data;
  }

  async findUnidadeEstudantilPeriodos(query: IFindUnidadeEstudantilQuery) {
    const unidadeEstudantil = await this.findUnidadeEstudantil(query);

    const periodosLetivos = await this.periodoLeitivoRepository.find({
      where: { unidadeEstudantil },
    });

    return periodosLetivos;
  }

  async findUnidadeEstudantilCategoriasTurma(
    query: IFindUnidadeEstudantilQuery,
  ) {
    const unidadeEstudantil = await this.findUnidadeEstudantil(query);

    const categoriasTurma = await this.categoriaTurmaRepository.find({
      where: { unidadeEstudantil },
      relations: ['categoriaTurmaPai'],
    });

    return categoriasTurma;
  }

  async findUnidadeEstudantilMemberships(query: IFindUnidadeEstudantilQuery) {
    const unidadeEstudantil = await this.findUnidadeEstudantil(query);

    const memberships = await this.unidadeEstudantilMembershipRepository.find({
      where: { unidadeEstudantil },
    });

    return memberships;
  }
}
