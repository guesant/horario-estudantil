import { DataSource } from 'typeorm';
import { MateriaEntity } from '../entities/materia.entity';

export type IMateriaRepository = ReturnType<typeof getMateriaRepository>;

export const getMateriaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(MateriaEntity).extend({});
};
