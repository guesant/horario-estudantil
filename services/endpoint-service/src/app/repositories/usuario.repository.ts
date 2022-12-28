import { DataSource, EntityManager } from 'typeorm';
import { UsuarioDbEntity } from '../entities/usuario.db.entity';

export type IUsuarioRepository = ReturnType<typeof getUsuarioRepository>;

export const getUsuarioRepository = (dataSource: DataSource | EntityManager) =>
  dataSource.getRepository(UsuarioDbEntity).extend({});
