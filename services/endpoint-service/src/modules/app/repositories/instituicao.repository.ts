import { DataSource } from 'typeorm';
import { InstituicaoDbEntity } from '../entities/instituicao.db.entity';

export type IInstituicaoRepository = ReturnType<
  typeof getInstituicaoRepository
>;

export const getInstituicaoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(InstituicaoDbEntity).extend({});
};
