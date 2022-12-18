import { DataSource, EntityManager } from 'typeorm';
import { PeriodoLetivoDbEntity } from '../entities/periodo-letivo.db.entity';

export type IPeriodoLetivoRepository = ReturnType<
  typeof getPeriodoLetivoRepository
>;

export const getPeriodoLetivoRepository = (
  dataSource: DataSource | EntityManager,
) => {
  return dataSource.getRepository(PeriodoLetivoDbEntity).extend({});
};
