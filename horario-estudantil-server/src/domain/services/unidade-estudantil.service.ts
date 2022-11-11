import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_GRUPO,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_UNIDADE_ESTUDANTIL,
  REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
} from 'src/infraestructure/constants';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';
import { IGrupoRepository } from '../repositories/grupo.repository';
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

    @Inject(REPOSITORY_GRUPO)
    private grupoRepository: IGrupoRepository,

    @Inject(REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP)
    private unidadeEstudantilMembershipRepository: IUnidadeEstudantilMembershipRepository,
  ) {}

  async findUnidadeEstudantil(query: IFindUnidadeEstudantilQuery) {
    const { id, sigla } = query;

    const unidadeEstudantil = await this.unidadeEstudantilRepository.findOne({
      where: { id, sigla },
    });

    if (!unidadeEstudantil) {
      throw new NotFoundException('Unidade estudantil not found');
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

  async findUnidadeEstudantilGrupos(query: IFindUnidadeEstudantilQuery) {
    const unidadeEstudantil = await this.findUnidadeEstudantil(query);

    const grupos = await this.grupoRepository.find({
      where: { unidadeEstudantil },
    });

    return grupos;
  }

  async findUnidadeEstudantilMemberships(query: IFindUnidadeEstudantilQuery) {
    const unidadeEstudantil = await this.findUnidadeEstudantil(query);

    const memberships = await this.unidadeEstudantilMembershipRepository.find({
      where: { unidadeEstudantil },
    });

    return memberships;
  }
}
