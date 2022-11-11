import { DataSource } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';

export type IUsuarioRepository = ReturnType<typeof getUsuarioRepository>;

export const getUsuarioRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UsuarioEntity).extend({});
};
