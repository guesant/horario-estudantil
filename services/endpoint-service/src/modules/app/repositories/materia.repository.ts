import { DataSource } from 'typeorm';
import { MateriaDbEntity } from '../entities/materia.db.entity';

export type IMateriaRepository = ReturnType<typeof getMateriaRepository>;

export const getMateriaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(MateriaDbEntity).extend({});
};
