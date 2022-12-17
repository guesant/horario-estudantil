import { DataSource } from 'typeorm';
import { CategoriaTurmaDbEntity } from '../entities/categoria-turma.db.entity';

export type ITurmaCategoriaRepository = ReturnType<
  typeof getTurmaCategoriaRepository
>;

export const getTurmaCategoriaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(CategoriaTurmaDbEntity).extend({});
};
