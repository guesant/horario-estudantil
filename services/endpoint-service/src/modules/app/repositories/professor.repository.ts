import { DataSource } from 'typeorm';
import { ProfessorDbEntity } from '../entities/professor.db.entity';

export type IProfessorRepository = ReturnType<typeof getProfessorRepository>;

export const getProfessorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(ProfessorDbEntity).extend({});
};
