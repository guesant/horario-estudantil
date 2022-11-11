import { DataSource } from 'typeorm';
import { ProfessorEntity } from '../entities/professor.entity';

export type IProfessorRepository = ReturnType<typeof getProfessorRepository>;

export const getProfessorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(ProfessorEntity).extend({});
};
