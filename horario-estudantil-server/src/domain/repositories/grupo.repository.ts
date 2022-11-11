import { DataSource } from 'typeorm';
import { GrupoEntity } from '../entities/grupo.entity';

export type IGrupoRepository = ReturnType<typeof getGrupoRepository>;

export const getGrupoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(GrupoEntity).extend({});
};
