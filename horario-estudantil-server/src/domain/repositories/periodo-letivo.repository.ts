import { DataSource } from 'typeorm';
import { PeriodoLetivoEntity } from '../entities/periodo-letivo.entity';

export type IPeriodoLetivoRepository = ReturnType<
  typeof getPeriodoLetivoRepository
>;

export const getPeriodoLetivoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(PeriodoLetivoEntity).extend({});
};
