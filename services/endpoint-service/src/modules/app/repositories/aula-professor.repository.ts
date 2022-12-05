import { DataSource } from 'typeorm';
import { AulaProfessorEntity } from '../entities/aula-professor.entity';

export type IAulaProfessorRepository = ReturnType<
  typeof getAulaProfessorRepository
>;

export const getAulaProfessorRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaProfessorEntity).extend({});
};
