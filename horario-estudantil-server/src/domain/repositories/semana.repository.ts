import { DataSource } from 'typeorm';
import { SemanaEntity } from '../entities/semana.entity';

export type ISemanaRepository = ReturnType<typeof getSemanaRepository>;

export const getSemanaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(SemanaEntity).extend({});
};
