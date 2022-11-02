import { DataSource } from 'typeorm';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';

export const getUnidadeEstudantilRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UnidadeEstudantilEntity).extend({});
};
