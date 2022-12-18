import { DataSource } from 'typeorm';
import { CategoriaTurmaDbEntity } from '../entities/categoria-turma.db.entity';

export type ICategoriaTurmaRepository = ReturnType<
  typeof getCategoriaTurmaRepository
>;

export const getCategoriaTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(CategoriaTurmaDbEntity).extend({});
};
