import { DataSource, EntityManager } from 'typeorm';
import { ApelidoDbEntity } from '../entities/apelido.db.entity';

export type IApelidoRepository = ReturnType<typeof getApelidoRepository>;

export const getApelidoRepository = (
  dataSource: DataSource | EntityManager,
) => {
  return dataSource.getRepository(ApelidoDbEntity).extend({});
};
