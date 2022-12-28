import { DataSource, EntityManager } from 'typeorm';
import { PermissaoDbEntity } from '../entities/permissao.db.entity';

export type IPermissaoRepository = ReturnType<typeof getPermissaoRepository>;

export const getPermissaoRepository = (
  dataSource: DataSource | EntityManager,
) => dataSource.getRepository(PermissaoDbEntity).extend({});
