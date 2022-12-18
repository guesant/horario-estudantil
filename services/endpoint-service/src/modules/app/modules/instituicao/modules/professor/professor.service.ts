import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { ProfessorDbEntity } from '../../../../entities/professor.db.entity';
import { IProfessorRepository } from '../../../../repositories/professor.repository';
import {
  REPOSITORY_APELIDO,
  REPOSITORY_PROFESSOR,
} from '../../../../../database/constants/REPOSITORIES';
import { IApelidoRepository } from '../../../../repositories/apelido.repository';
import { AppError } from '../../../../AppError';

export type IFindProfessorQuery = Partial<Pick<ProfessorDbEntity, 'id'>>;

type IFindProfessorQueryGeneric = {
  options?: FindOneOptions<ProfessorDbEntity>;
  shouldThrowIfNotFound?: boolean;
};

export type IFindProfessorByIdQuery = IFindProfessorQueryGeneric & {
  id: number;
};

@Injectable()
export class ProfessorService {
  constructor(
    @Inject(REPOSITORY_APELIDO)
    private apelidoRepository: IApelidoRepository,
    @Inject(REPOSITORY_PROFESSOR)
    private professorRepository: IProfessorRepository,
  ) {}

  async findProfessorById(
    query: IFindProfessorByIdQuery,
  ): Promise<ProfessorDbEntity> {
    const { id, shouldThrowIfNotFound, options } = query;

    const targetProfessor = await this.professorRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetProfessor) {
      if (shouldThrowIfNotFound) {
        throw new NotFoundException(
          new AppError(
            'not-found',
            'Professor não foi encontrado',
            'professor',
          ),
        );
      } else {
        return null as any;
      }
    }

    const professor = <ProfessorDbEntity>await this.professorRepository.findOne(
      {
        where: { id: targetProfessor.id },
        ...options,
      },
    );

    return professor;
  }

  async findProfessorApelidos(professorId: number) {
    const professor = await this.findProfessorById({
      id: professorId,
      options: { select: ['id'] },
    });

    const apelidos = await this.apelidoRepository.find({
      where: { professor: { id: professor.id } },
    });

    return apelidos;
  }
}
