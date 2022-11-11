import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_UNIDADE_ESTUDANTIL,
} from 'src/infraestructure/constants';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';
import { IPeriodoLetivoRepository } from '../repositories/periodo-letivo.repository';
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
}
