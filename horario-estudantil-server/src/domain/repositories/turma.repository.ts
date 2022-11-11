import { DataSource } from 'typeorm';
import { TurmaEntity } from '../entities/turma.entity';

export type ITurmaRepository = ReturnType<typeof getTurmaRepository>;

export const getTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(TurmaEntity).extend({});
};
