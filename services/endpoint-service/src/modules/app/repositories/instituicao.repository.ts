import { DataSource } from 'typeorm';
import { InstituicaoEntity } from '../entities/instituicao.entity';

export type IInstituicaoRepository = ReturnType<
  typeof getInstituicaoRepository
>;

export const getInstituicaoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(InstituicaoEntity).extend({});
};
