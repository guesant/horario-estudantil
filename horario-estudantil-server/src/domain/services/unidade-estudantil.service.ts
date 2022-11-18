import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import MeiliSearch from 'meilisearch';
import {
  MEILISEARCH_CLIENT,
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_UNIDADE_ESTUDANTIL,
  REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
} from 'src/infraestructure/constants';
import { INDEX_INSTITUICAO } from 'src/infraestructure/meilisearch/SEARCH_INDEXES';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';
import { ICategoriaTurmaRepository } from '../repositories/categoria-turma.repository';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';
import { IUnidadeEstudantilMembershipRepository } from '../repositories/unidade-estudantil-membership.repository';
import { IUnidadeEstudantilRepository } from '../repositories/unidade-estudantil.repository';

export type IFindUnidadeEstudantilQuery = Partial<
  Pick<UnidadeEstudantilEntity, 'sigla' | 'id'>
>;

const parseLimit = (reqLimit: any) => {
  if (Number.isInteger(reqLimit)) {
    return Math.min(Math.max(reqLimit, 1), 100);
  }

  return 20;
};

const parseOffset = (reqOffset: any) => {
  if (Number.isInteger(reqOffset)) {
    return Math.max(reqOffset, 0);
  }

  return 0;
};

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

    @Inject(MEILISEARCH_CLIENT)
    private meilisearchClient: MeiliSearch,
  ) {}

  async findUnidadeEstudantil(query: IFindUnidadeEstudantilQuery) {
    const { id, sigla } = query;

    const unidadeEstudantil = await this.unidadeEstudantilRepository.findOne({
      where: { id, sigla },
    });

    if (!unidadeEstudantil) {
      throw new NotFoundException({
        message: 'Unidade Estudantil was not found.',
        resource: 'UnidadeEstudantil',
        code: 'not-found',
      });
    }

    return unidadeEstudantil;
  }

  async searchUnidadesEstudantis(
    query: string,
    reqLimit?: number,
    reqOffset?: number,
  ) {
    const limit = parseLimit(reqLimit);
    const offset = parseOffset(reqOffset);

    const results = await this.meilisearchClient
      .index(INDEX_INSTITUICAO)
      .search(query, { limit, offset });

    return results;
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
