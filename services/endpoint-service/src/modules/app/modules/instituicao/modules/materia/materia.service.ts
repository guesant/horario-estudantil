import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { MateriaDbEntity } from '../../../../entities/materia.db.entity';
import { IMateriaRepository } from '../../../../repositories/materia.repository';
import {
  REPOSITORY_AULA,
  REPOSITORY_MATERIA,
} from '../../../../../database/constants/REPOSITORIES';
import { IAulaRepository } from '../../../../repositories/aula.repository';

export type IFindMateriaQuery = Partial<Pick<MateriaDbEntity, 'id'>>;

@Injectable()
export class MateriaService {
  constructor(
    @Inject(REPOSITORY_AULA)
    private aulaRepository: IAulaRepository,
    @Inject(REPOSITORY_MATERIA)
    private materiaRepository: IMateriaRepository,
  ) {}

  async findMateria(
    query: IFindMateriaQuery,
    options?: FindOneOptions<MateriaDbEntity>,
  ) {
    const { id } = query;

    const materia = await this.materiaRepository.findOne({
      where: { id },
      ...options,
    });

    if (!materia) {
      throw new NotFoundException();
    }

    return materia;
  }

  async findMateriaAulas(query: IFindMateriaQuery) {
    const materia = await this.findMateria(query);

    const aulas = await this.aulaRepository.find({
      where: {
        materia: { id: materia.id },
      },
    });

    return aulas;
  }

  async findMateriaApelidos(query: IFindMateriaQuery) {
    const materia = await this.findMateria(query, {
      relations: ['apelidos'],
    });

    const { apelidos } = materia;

    return apelidos;
  }
}
