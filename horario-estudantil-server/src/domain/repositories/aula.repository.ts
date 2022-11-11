import { DataSource } from 'typeorm';
import { AulaEntity } from '../entities/aula.entity';

export type IAulaRepository = ReturnType<typeof getAulaRepository>;

export const getAulaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaEntity).extend({});
};
