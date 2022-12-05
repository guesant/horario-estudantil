import { DataSource } from 'typeorm';
import { TurmaCategoriaEntity } from '../entities/turma-categoria.entity';

export type ITurmaCategoriaRepository = ReturnType<
  typeof getTurmaCategoriaRepository
>;

export const getTurmaCategoriaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(TurmaCategoriaEntity).extend({});
};
