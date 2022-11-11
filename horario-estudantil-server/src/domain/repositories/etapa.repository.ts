import { DataSource } from 'typeorm';
import { EtapaEntity } from '../entities/etapa.entity';

export type IEtapaRepository = ReturnType<typeof getEtapaRepository>;

export const getEtapaRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(EtapaEntity).extend({});
};
