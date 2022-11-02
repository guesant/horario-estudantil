import { DataSource } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';

export const getUsuarioRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(UsuarioEntity).extend({});
};

export type IUsuarioRepository = ReturnType<typeof getUsuarioRepository>;
