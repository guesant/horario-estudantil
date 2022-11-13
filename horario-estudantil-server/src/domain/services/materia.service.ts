import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { REPOSITORY_MATERIA } from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { MateriaEntity } from '../entities/materia.entity';
import { IMateriaRepository } from '../repositories/materia.repository';

export type IFindMateriaQuery = Partial<Pick<MateriaEntity, 'id'>>;

@Injectable()
export class MateriaService {
  constructor(
    @Inject(REPOSITORY_MATERIA)
    private materiaRepository: IMateriaRepository,
  ) {}

  async findMateria(
    query: IFindMateriaQuery,
    options?: FindOneOptions<MateriaEntity>,
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
    const materia = await this.findMateria(query, {
      relations: ['aulas'],
    });

    const { aulas } = materia;

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
