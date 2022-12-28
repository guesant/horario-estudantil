import { DataSource, EntityManager } from 'typeorm';
import { CargoDbEntity } from '../entities/cargo.db.entity';

export type ICargoRepository = ReturnType<typeof getCargoRepository>;

export const getCargoRepository = (dataSource: DataSource | EntityManager) =>
  dataSource.getRepository(CargoDbEntity).extend({});
