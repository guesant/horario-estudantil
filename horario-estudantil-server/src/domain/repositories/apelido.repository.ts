import { DataSource } from 'typeorm';
import { ApelidoEntity } from '../entities/apelido.entity';

export type IApelidoRepository = ReturnType<typeof getApelidoRepository>;

export const getApelidoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(ApelidoEntity).extend({});
};
