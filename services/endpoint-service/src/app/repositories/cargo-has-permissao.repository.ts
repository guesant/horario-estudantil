import { DataSource, EntityManager } from 'typeorm';
import { CargoHasPermissaoDbEntity } from '../entities/cargo-has-permissao.db.entity';

export type ICargoHasPermissaoRepository = ReturnType<
  typeof getCargoHasPermissaoRepository
>;

export const getCargoHasPermissaoRepository = (
  dataSource: DataSource | EntityManager,
) => dataSource.getRepository(CargoHasPermissaoDbEntity).extend({});
