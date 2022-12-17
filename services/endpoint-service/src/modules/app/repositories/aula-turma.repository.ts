import { DataSource } from 'typeorm';
import { AulaTurmaDbEntity } from '../entities/aula-turma.db.entity';

export type IAulaTurmaRepository = ReturnType<typeof getAulaTurmaRepository>;

export const getAulaTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaTurmaDbEntity).extend({});
};
