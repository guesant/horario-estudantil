import { DataSource } from 'typeorm';
import { UserDbEntity } from '../entities/user.db.entity';

export type IUsuarioRepository = ReturnType<typeof getUsuarioRepository>;

export const getUsuarioRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UserDbEntity).extend({});
};
