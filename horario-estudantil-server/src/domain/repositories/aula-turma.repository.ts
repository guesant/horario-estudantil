import { DataSource } from 'typeorm';
import { AulaTurmaEntity } from '../entities/aula-turma.entity';

export type IAulaTurmaRepository = ReturnType<typeof getAulaTurmaRepository>;

export const getAulaTurmaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(AulaTurmaEntity).extend({});
};
