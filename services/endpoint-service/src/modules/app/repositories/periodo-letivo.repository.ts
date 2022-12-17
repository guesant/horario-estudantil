import { DataSource } from 'typeorm';
import { PeriodoLetivoDbEntity } from '../entities/periodo-letivo.db.entity';

export type IPeriodoLetivoRepository = ReturnType<
  typeof getPeriodoLetivoRepository
>;

export const getPeriodoLetivoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(PeriodoLetivoDbEntity).extend({});
};
