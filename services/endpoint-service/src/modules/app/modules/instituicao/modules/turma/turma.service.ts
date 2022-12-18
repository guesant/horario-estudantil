import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { TurmaDbEntity } from '../../../../entities/turma.db.entity';
import { ITurmaRepository } from '../../../../repositories/turma.repository';
import {
  REPOSITORY_APELIDO,
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_TURMA,
} from '../../../../../database/constants/REPOSITORIES';
import { IRequestActor } from '../../../../../auth/request-user/IRequestActor';
import {
  ICreateTurmaInput,
  IDeleteTurmaInput,
} from '@horario-estudantil/schemas';
import { InstituicaoService } from '../../instituicao.service';
import { InstituicaoDbEntity } from '../../../../entities/instituicao.db.entity';
import { IApelidoRepository } from '../../../../repositories/apelido.repository';
import { ApelidoDbEntity } from '../../../../entities/apelido.db.entity';
import { ICategoriaTurmaRepository } from '../../../../repositories/turma-categoria.repository';

export type IFindTurmaByIdQuery = {
  id: number;
  options?: FindOneOptions<TurmaDbEntity>;
};

@Injectable()
export class TurmaService {
  constructor(
    private instituicaoService: InstituicaoService,
    @Inject(REPOSITORY_TURMA)
    private turmaRepository: ITurmaRepository,
    @Inject(REPOSITORY_APELIDO)
    private apelidoRepository: IApelidoRepository,
    @Inject(REPOSITORY_CATEGORIA_TURMA)
    private categoriaTurmaRepository: ICategoriaTurmaRepository,
  ) {}

  async findTurmaById(query: IFindTurmaByIdQuery) {
    const { id, options } = query;

    const targetTurma = await this.turmaRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetTurma) {
      throw new NotFoundException();
    }

    const turma = await this.turmaRepository.findOneOrFail({
      where: { id: targetTurma.id },
      ...options,
    });

    return turma;
  }

  async findTurmaByApelido(texto: string) {
    const apelido = await this.apelidoRepository
      .createQueryBuilder('apelido')
      .leftJoin('apelido.turma', 'turma')
      .select(['apelido.id', 'turma.id'])
      .where('apelido.texto = :texto', { texto: texto })
      .andWhere('apelido.turma is not null')
      .getOne();

    if (!apelido || !apelido.turma) {
      throw new NotFoundException();
    }

    return this.findTurmaById({ id: apelido.turma.id });
  }

  async createTurma(actor: IRequestActor, data: ICreateTurmaInput) {
    const { instituicaoId } = data;

    const instituicao = await this.instituicaoService.findInstituicaoOrFail({
      id: instituicaoId,
    });

    const { nome } = data;

    return await this.turmaRepository.manager.transaction(
      async (entityManager) => {
        const turma = this.turmaRepository.create();
        turma.instituicao = <InstituicaoDbEntity>{ id: instituicao.id };
        await entityManager.save(TurmaDbEntity, turma);

        const apelido = this.apelidoRepository.create();
        apelido.tipo = 'turma';
        apelido.texto = nome;
        apelido.turma = <TurmaDbEntity>{ id: turma.id };
        await entityManager.save(ApelidoDbEntity, apelido);

        return turma;
      },
    );
  }

  async deleteTurma(actor: IRequestActor, data: IDeleteTurmaInput) {
    const turma = await this.findTurmaById({ id: data.id });

    return this.turmaRepository.manager
      .transaction(async (entityManager) => {
        await entityManager.delete(TurmaDbEntity, turma.id);
        return true;
      })
      .catch(() => false);
  }

  async findTurmaCategoriaTurma(turmaId: number) {
    const turma = await this.findTurmaById({
      id: turmaId,
      options: { select: ['id'] },
    });

    const categoriaTurma = await this.categoriaTurmaRepository
      .createQueryBuilder('categoriaTurma')
      .leftJoin('categoriaTurma.turmas', 'turma')
      .select(['categoriaTurma.id', 'turma.id'])
      .where('turma.id = :turmaId', { turmaId: turma.id })
      .getOne();

    return categoriaTurma;
  }

  async findTurmaApelidoPrincipal(turmaId: number) {
    const turma = await this.findTurmaById({
      id: turmaId,
      options: { select: ['id'] },
    });

    const apelido = await this.apelidoRepository
      .createQueryBuilder('apelido')
      .leftJoin('apelido.turma', 'turma')
      .select(['apelido.id', 'turma.id'])
      .where('turma.id = :turmaId', { turmaId: turma.id })
      .getOne();

    return apelido;
  }

  async findTurmaApelidos(turmaId: number) {
    const turma = await this.findTurmaById({
      id: turmaId,
      options: { select: ['id'] },
    });

    const apelidos = await this.apelidoRepository
      .createQueryBuilder('apelido')
      .leftJoin('apelido.turma', 'turma')
      .select(['apelido.id', 'turma.id'])
      .where('turma.id = :turmaId', { turmaId: turma.id })
      .getMany();

    return apelidos;
  }
}
