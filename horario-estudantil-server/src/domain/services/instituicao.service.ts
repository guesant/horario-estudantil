import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import MeiliSearch from 'meilisearch';
import {
  MEILISEARCH_CLIENT,
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_INSTITUICAO,
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
} from 'src/infraestructure/constants';
import { INDEX_INSTITUICAO } from 'src/infraestructure/meilisearch/SEARCH_INDEXES';
import { InstituicaoEntity } from '../entities/instituicao.entity';
import { ICategoriaTurmaRepository } from '../repositories/categoria-turma.repository';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';
import { IInstituicaoMembershipRepository } from '../repositories/instituicao-membership.repository';
import { IInstituicaoRepository } from '../repositories/instituicao.repository';

export type IFindInstituicaoQuery = Partial<
  Pick<InstituicaoEntity, 'sigla' | 'id'>
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
export class InstituicaoService {
  constructor(
    @Inject(REPOSITORY_INSTITUICAO)
    private instituicaoRepository: IInstituicaoRepository,

    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,

    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,

    @Inject(REPOSITORY_INSTITUICAO_MEMBERSHIP)
    private instituicaoMembershipRepository: IInstituicaoMembershipRepository,

    @Inject(MEILISEARCH_CLIENT)
    private meilisearchClient: MeiliSearch,
  ) {}

  async findInstituicao(query: IFindInstituicaoQuery) {
    const { id, sigla } = query;

    const instituicao = await this.instituicaoRepository.findOne({
      where: { id, sigla },
    });

    if (!instituicao) {
      throw new NotFoundException({
        message: 'Instituicao was not found.',
        resource: 'instituicao',
        code: 'not-found',
      });
    }

    return instituicao;
  }

  async searchInstituicoes(
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

  async findInstituicaoPeriodos(query: IFindInstituicaoQuery) {
    const instituicao = await this.findInstituicao(query);

    const periodosLetivos = await this.periodoLeitivoRepository.find({
      where: { instituicao: instituicao },
    });

    return periodosLetivos;
  }

  async findInstituicaoCategoriasTurma(
    query: IFindInstituicaoQuery,
  ) {
    const instituicao = await this.findInstituicao(query);

    const categoriasTurma = await this.categoriaTurmaRepository.find({
      where: { instituicao  },
      relations: ['categoriaTurmaPai'],
    });

    return categoriasTurma;
  }

  async findInstituicaoMemberships(query: IFindInstituicaoQuery) {
    const instituicao = await this.findInstituicao(query);

    const memberships = await this.instituicaoMembershipRepository.find({
      where: { instituicao },
    });

    return memberships;
  }
}
