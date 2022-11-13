import { DataSource } from 'typeorm';
import { CategoriaTurmaEntity } from '../entities/catergoria-turma.entity';

export type ICategoriaTurmaRepository = ReturnType<
  typeof getCategoriaTurmaRepository
>;

export const getCategoriaTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(CategoriaTurmaEntity).extend({});
};
