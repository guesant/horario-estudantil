import { DataSource } from 'typeorm';
import { EtapaDbEntity } from '../entities/etapa.db.entity';

export type IEtapaRepository = ReturnType<typeof getEtapaRepository>;

export const getEtapaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(EtapaDbEntity).extend({});
};
