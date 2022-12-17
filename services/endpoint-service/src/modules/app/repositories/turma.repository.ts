import { DataSource } from 'typeorm';
import { TurmaDbEntity } from '../entities/turma.db.entity';

export type ITurmaRepository = ReturnType<typeof getTurmaRepository>;

export const getTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(TurmaDbEntity).extend({});
};
