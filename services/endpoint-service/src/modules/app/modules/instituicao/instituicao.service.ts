import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import MeiliSearch, { SearchParams } from 'meilisearch';
import { InstituicaoDbEntity } from '../../entities/instituicao.db.entity';
import { ICategoriaTurmaRepository } from '../../repositories/turma-categoria.repository';
import { IPeriodoLetivoRepository } from '../../repositories/periodo-letivo.repository';
import { IInstituicaoMembershipRepository } from '../../repositories/instituicao-membership.repository';
import { IInstituicaoRepository } from '../../repositories/instituicao.repository';
import {
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_INSTITUICAO,
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_TURMA,
} from '../../../database/constants/REPOSITORIES';
import { MEILISEARCH_CLIENT } from '../../../search/constants/MEILISEARCH_CLIENT';
import { INDEX_INSTITUICAO } from '../../../search/infrastructure/SEARCH_INDEXES';
import { IRequestActor } from '../../../auth/request-user/IRequestActor';
import { CreateInstituicaoInputType } from './schemas/dtos/CreateInstituicao.input.type';
import { UserDbEntity } from '../../entities/user.db.entity';
import { InstituicaoMembershipDbEntity } from '../../entities/instituicao-membership.db.entity';
import { DeleteInstituicaoInputType } from './schemas/dtos/DeleteInstituicao.input.type';
import { UpdateInstituicaoInputType } from './schemas/dtos/UpdateInstituicao.input.type';
import { FindOneOptions } from 'typeorm';
import { parseLimit } from '../../../utils/parseLimit';
import { parseOffset } from '../../../utils/parseOffset';
import { AppError } from '../../AppError';
import { SearchInstituicoesInputType } from './schemas/dtos/SearchInstituicoes.input.type';
import { ITurmaRepository } from '../../repositories/turma.repository';

export type IFindInstituicaoQuery = {
  id?: number;
  sigla?: string;
  options?: FindOneOptions<InstituicaoDbEntity>;
};

@Injectable()
export class InstituicaoService {
  constructor(
    @Inject(REPOSITORY_INSTITUICAO)
    private instituicaoRepository: IInstituicaoRepository,
    @Inject(REPOSITORY_PERIODO_LETIVO)
    private periodoLeitivoRepository: IPeriodoLetivoRepository,
    @Inject(REPOSITORY_TURMA)
    private turmaRepository: ITurmaRepository,
    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,
    @Inject(REPOSITORY_INSTITUICAO_MEMBERSHIP)
    private instituicaoMembershipRepository: IInstituicaoMembershipRepository,
    @Inject(MEILISEARCH_CLIENT)
    private meilisearchClient: MeiliSearch,
  ) {}

  async findInstituicao(
    query: IFindInstituicaoQuery,
  ): Promise<InstituicaoDbEntity | null> {
    const { id, sigla, options } = query;

    if (id === undefined && sigla === undefined) {
      throw new UnprocessableEntityException();
    }

    const targetInstituicao = await this.instituicaoRepository.findOne({
      where: { id, sigla },
      select: ['id'],
    });

    if (!targetInstituicao) {
      return null;
    }

    const instituicao = await this.instituicaoRepository.findOneOrFail({
      where: { id: targetInstituicao.id },
      ...options,
    });

    return instituicao;
  }

  async findInstituicaoOrFail(
    query: IFindInstituicaoQuery,
  ): Promise<InstituicaoDbEntity> {
    const instituicao = await this.findInstituicao(query);

    if (!instituicao) {
      throw new NotFoundException(
        new AppError(
          'not-found',
          'Instituição não foi encontrada',
          'instituicao',
        ),
      );
    }

    return instituicao;
  }

  async findInstituicaoFields(
    query: IFindInstituicaoQuery,
    fields: (keyof InstituicaoDbEntity)[],
  ) {
    return this.findInstituicaoOrFail({
      ...query,
      options: { ...query.options, select: fields },
    });
  }

  async findInstituicaoField<K extends keyof InstituicaoDbEntity>(
    query: IFindInstituicaoQuery,
    field: K,
  ): Promise<InstituicaoDbEntity[K]> {
    const instituicao = await this.findInstituicaoFields(query, [field]);
    return instituicao[field];
  }

  async searchInstituicoes(
    options: SearchInstituicoesInputType,
    user?: IRequestActor,
  ) {
    const limit = parseLimit(options.limit);
    const offset = parseOffset(options.offset);
    const query = (options.query ?? '').trim().slice(0, 100);

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

  async findInstituicaoPeriodos(instituicaoId: number) {
    const instituicao = await this.findInstituicaoOrFail({
      id: instituicaoId,
      options: { select: ['id'] },
    });

    const periodosLetivos = await this.periodoLeitivoRepository
      .createQueryBuilder('periodo')
      .leftJoin('periodo.instituicao', 'instituicao')
      .select(['periodo.id', 'instituicao.id'])
      .where('instituicao.id = :instituicaoId', {
        instituicaoId: instituicao.id,
      })
      .getMany();

    return periodosLetivos;
  }

  async findInstituicaoTurmas(instituicaoId: number) {
    const instituicao = await this.findInstituicaoOrFail({
      id: instituicaoId,
      options: { select: ['id'] },
    });

    const turmas = await this.turmaRepository
      .createQueryBuilder('turma')
      .leftJoin('turma.instituicao', 'instituicao')
      .select(['turma.id', 'instituicao.id'])
      .where('instituicao.id = :instituicaoId', {
        instituicaoId: instituicao.id,
      })
      .getMany();

    return turmas;
  }

  async findInstituicaoCategoriasTurma(instituicaoId: number) {
    const instituicao = await this.findInstituicaoOrFail({
      id: instituicaoId,
      options: { select: ['id'] },
    });

    const categoriasTurma = await this.categoriaTurmaRepository
      .createQueryBuilder('categoriaTurma')
      .leftJoin('categoriaTurma.instituicao', 'instituicao')
      .leftJoin('categoriaTurma.categoriaTurmaPai', 'categoriaTurmaPai')
      .where('instituicao.id = :instituicaoId', {
        instituicaoId: instituicao.id,
      })
      .select(['categoriaTurma.id', 'instituicao.id', 'categoriaTurmaPai.id'])
      .getMany();

    return categoriasTurma;
  }

  async findInstituicaoMemberships(instituicaoId: number) {
    const instituicao = await this.findInstituicaoOrFail({
      id: instituicaoId,
      options: { select: ['id'] },
    });

    const categoriasTurma = await this.instituicaoMembershipRepository
      .createQueryBuilder('membership')
      .leftJoin('membership.instituicao', 'instituicao')
      .where('instituicao.id = :instituicaoId', {
        instituicaoId: instituicao.id,
      })
      .select(['membership.id', 'instituicao.id'])
      .getMany();

    return categoriasTurma;
  }

  async createInstituicao(
    actor: IRequestActor,
    data: CreateInstituicaoInputType,
  ) {
    const { nome, apelido, sigla } = data;

    const siglaAlreadyTaken =
      (await this.instituicaoRepository.count({ where: { sigla } })) > 0;

    if (siglaAlreadyTaken) {
      throw new UnprocessableEntityException(
        'The provided sigla was already taken',
      );
    }

    return await this.instituicaoRepository.manager.transaction(
      async (entityManager) => {
        const instituicao = this.instituicaoRepository.create();

        instituicao.nome = nome;
        instituicao.sigla = sigla;
        instituicao.apelido = apelido;

        await entityManager.save(InstituicaoDbEntity, instituicao);

        const membership = this.instituicaoMembershipRepository.create();
        membership.usuario = <UserDbEntity>{ id: actor.id };
        membership.instituicao = <InstituicaoDbEntity>{ id: instituicao.id };
        await entityManager.save(InstituicaoMembershipDbEntity, membership);

        return instituicao;
      },
    );
  }

  async checkSiglaAvailability(sigla: string, id?: number) {
    const instituicao = await this.findInstituicao({
      sigla,
      options: { select: ['id', 'sigla'] },
    });

    return !instituicao || instituicao.id === id;
  }

  async updateInstituicao(
    actor: IRequestActor,
    id: number,
    data: UpdateInstituicaoInputType,
  ) {
    if (!(await this.checkMembership(actor.id, id))) {
      throw new ForbiddenException();
    }

    const instituicao = await this.findInstituicaoOrFail({ id });

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

  async deleteInstituicao(
    actor: IRequestActor,
    data: DeleteInstituicaoInputType,
  ) {
    const { id } = data;

    if (!(await this.checkMembership(actor.id, id))) {
      throw new ForbiddenException();
    }

    const instituicao = await this.findInstituicaoOrFail({ id });
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
