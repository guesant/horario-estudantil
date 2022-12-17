import { DataSource } from 'typeorm';
import { AulaProfessorDbEntity } from '../entities/aula-professor.db.entity';

export type IAulaProfessorRepository = ReturnType<
  typeof getAulaProfessorRepository
>;

export const getAulaProfessorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaProfessorDbEntity).extend({});
};
