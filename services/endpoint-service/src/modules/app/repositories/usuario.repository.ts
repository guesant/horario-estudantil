import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

export type IUsuarioRepository = ReturnType<typeof getUsuarioRepository>;

export const getUsuarioRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UserEntity).extend({});
};
