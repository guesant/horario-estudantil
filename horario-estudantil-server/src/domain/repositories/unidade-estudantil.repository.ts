import { DataSource } from 'typeorm';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';

export type IUnidadeEstudantilRepository = ReturnType<
  typeof getUnidadeEstudantilRepository
>;

export const getUnidadeEstudantilRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UnidadeEstudantilEntity).extend({});
};
