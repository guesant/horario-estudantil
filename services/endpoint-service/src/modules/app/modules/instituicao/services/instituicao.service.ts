import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import MeiliSearch, { SearchParams } from 'meilisearch';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';
import { ITurmaCategoriaRepository } from '../../../repositories/turma-categoria.repository';
import { IPeriodoLetivoRepository } from '../../../repositories/periodo-letivo.repository';
import { IInstituicaoMembershipRepository } from '../../../repositories/instituicao-membership.repository';
import { IInstituicaoRepository } from '../../../repositories/instituicao.repository';
import {
  REPOSITORY_INSTITUICAO,
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_TURMA_CATEGORIA,
} from '../../../../database/constants/REPOSITORIES';
import { MEILISEARCH_CLIENT } from '../../../../search/constants/MEILISEARCH_CLIENT';
import { INDEX_INSTITUICAO } from '../../../../search/infrastructure/SEARCH_INDEXES';
import { IRequestActor } from '../../../../auth/request-user/IRequestActor';
import { CreateInstituicaoInput } from '../dtos/CreateInstituicaoInput';
import { getEntityRef } from '../../../../utils/getEntityRef';
import { UserEntity } from '../../../entities/user.entity';
import { InstituicaoMembershipEntity } from '../../../entities/instituicao-membership.entity';
import { DeleteInstituicaoInput } from '../dtos/DeleteInstituicaoInput';
import { UpdateInstituicaoInput } from '../dtos/UpdateInstituicaoInput';
import { FindOneOptions } from 'typeorm';
import { parseLimit } from '../../../../utils/parseLimit';
import { parseOffset } from '../../../../utils/parseOffset';
import { AppError } from '../../../AppError';

export type IFindInstituicaoQuery = {
  id?: number;
  sigla?: string;
  options?: FindOneOptions<InstituicaoEntity>;

  shouldThrowIfNotFound?: boolean;
};

export type ISearchInstituicoesOptions = {
  query: string;

  limit?: number;

  offset?: number;

  user?: IRequestActor;
};

@Injectable()
export class InstituicaoService {
  constructor(
    @Inject(REPOSITORY_INSTITUICAO)
    private instituicaoRepository: IInstituicaoRepository,
    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,
    @Inject(REPOSITORY_TURMA_CATEGORIA)
    private turmaCategoriaRepository: ITurmaCategoriaRepository,
    @Inject(REPOSITORY_INSTITUICAO_MEMBERSHIP)
    private instituicaoMembershipRepository: IInstituicaoMembershipRepository,
    @Inject(MEILISEARCH_CLIENT)
    private meilisearchClient: MeiliSearch,
  ) {}

  async findInstituicao(
    query: IFindInstituicaoQuery,
  ): Promise<InstituicaoEntity> {
    const { id, sigla, options, shouldThrowIfNotFound = true } = query;

    if (id === undefined && sigla === undefined) {
      throw new UnprocessableEntityException();
    }

    const targetInstituicao = await this.instituicaoRepository.findOne({
      where: { id, sigla },
      select: ['id'],
    });

    if (!targetInstituicao) {
      if (shouldThrowIfNotFound) {
        throw new NotFoundException(
          new AppError(
            'not-found',
            'Instituição não foi encontrada',
            'instituicao',
          ),
        );
      } else {
        return null as any;
      }
    }

    const instituicao = (await this.instituicaoRepository.findOne({
      where: { id: targetInstituicao.id },
      ...options,
    })) as InstituicaoEntity;

    return instituicao;
  }

  async findInstituicaoFields(
    query: IFindInstituicaoQuery,
    fields: (keyof InstituicaoEntity)[],
  ) {
    return this.findInstituicao({
      ...query,
      options: { ...query.options, select: fields },
    });
  }

  async findInstituicaoField(
    query: IFindInstituicaoQuery,
    field: keyof InstituicaoEntity,
  ) {
    const instituicao = await this.findInstituicaoFields(query, [field]);
    return instituicao[field];
  }

  async searchInstituicoes(options: ISearchInstituicoesOptions) {
    const limit = parseLimit(options.limit);
    const offset = parseOffset(options.offset);
    const query = options.query.trim().slice(0, 100);

    const user = options.user;

    const searchParams: SearchParams = {
      limit,
      offset,
      sort: ['apelido:asc'],
    };

    if (user) {
      const memberships = await this.instituicaoMembershipRepository
        .createQueryBuilder('membership')
        .leftJoin('membership.instituicao', 'instituicao')
        .select(['membership.id', 'instituicao.id'])
        .where('membership.usuario.id = :id_usu', { id_usu: user.id })
        .getMany();

      searchParams.filter = [
        `id IN [${memberships
          .map((mebership) => mebership.instituicao.id)
          .join(',')}]`,
      ];
    }

    const results = await this.meilisearchClient
      .index(INDEX_INSTITUICAO)
      .search(query, searchParams);

    return results;
  }

  async findInstituicaoPeriodos(query: IFindInstituicaoQuery) {
    const instituicao = await this.findInstituicao(query);

    const periodosLetivos = await this.periodoLeitivoRepository.find({
      where: { instituicao: { id: instituicao.id } },
    });

    return periodosLetivos;
  }

  async findInstituicaoCategoriasTurma(query: IFindInstituicaoQuery) {
    const instituicao = await this.findInstituicao(query);

    const turmaCategorias = await this.turmaCategoriaRepository.find({
      where: { instituicao: { id: instituicao.id } },
      relations: ['turmaCategoriaPai'],
    });

    return turmaCategorias;
  }

  async findInstituicaoMemberships(query: IFindInstituicaoQuery) {
    const instituicao = await this.findInstituicao(query);

    const memberships = await this.instituicaoMembershipRepository.find({
      where: { instituicao: { id: instituicao.id } },
    });

    return memberships;
  }

  async createInstituicao(actor: IRequestActor, data: CreateInstituicaoInput) {
    const { nome, apelido, sigla } = data;

    const siglaAlreadyTaken =
      (await this.instituicaoRepository.count({ where: { sigla } })) > 0;

    if (siglaAlreadyTaken) {
      throw new UnprocessableEntityException(
        'The provided sigla was already taken',
      );
    }

    const instituicao = this.instituicaoRepository.create();

    instituicao.nome = nome;
    instituicao.sigla = sigla;
    instituicao.apelido = apelido;

    return await this.instituicaoRepository.manager.transaction(
      async (entityManager) => {
        await entityManager.save(InstituicaoEntity, instituicao);

        const membership = this.instituicaoMembershipRepository.create();

        membership.usuario = getEntityRef(actor) as UserEntity;
        membership.instituicao = getEntityRef(instituicao) as InstituicaoEntity;

        await entityManager.save(InstituicaoMembershipEntity, membership);

        return instituicao;
      },
    );
  }

  async checkSiglaAvailability(sigla: string, id?: number) {
    const instituicao = (await this.findInstituicao({
      sigla,
      options: { select: ['id', 'sigla'] },
      shouldThrowIfNotFound: false,
    })) as InstituicaoEntity | null;

    return !instituicao || instituicao.id === id;
  }

  async updateInstituicao(
    actor: IRequestActor,
    id: number,
    data: UpdateInstituicaoInput,
  ) {
    if (!(await this.checkMembership(actor.id, id))) {
      throw new ForbiddenException();
    }

    const instituicao = await this.findInstituicao({ id });

    const { nome } = data;

    if (nome) {
      instituicao.nome = nome;
    }

    const { apelido } = data;

    if (apelido) {
      instituicao.apelido = apelido;
    }

    const { sigla } = data;

    if (sigla) {
      const isSiglaAvailable = await this.checkSiglaAvailability(sigla, id);

      if (!isSiglaAvailable) {
        throw new UnprocessableEntityException(
          new AppError(
            'unprocessable-entity',
            'A sigla já está em uso',
            'instituicao',
            'sigla',
          ),
        );
      }

      instituicao.sigla = sigla;
    }

    await this.instituicaoRepository.save(instituicao);

    return instituicao;
  }

  async deleteInstituicao(actor: IRequestActor, data: DeleteInstituicaoInput) {
    const { id } = data;

    if (!(await this.checkMembership(actor.id, id))) {
      throw new ForbiddenException();
    }

    const instituicao = await this.findInstituicao({ id });
    await this.instituicaoRepository.remove(instituicao);

    return true;
  }

  private async checkMembership(userId: number, instituicaoId: number) {
    const isMember =
      (await this.instituicaoMembershipRepository.count({
        where: {
          usuario: { id: userId },
          instituicao: { id: instituicaoId },
        },
      })) > 0;

    return isMember;
  }
}
