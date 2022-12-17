import { DataSource } from 'typeorm';
import { AulaDbEntity } from '../entities/aula.db.entity';

export type IAulaRepository = ReturnType<typeof getAulaRepository>;

export const getAulaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaDbEntity).extend({});
};
