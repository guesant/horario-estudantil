import { DataSource } from 'typeorm';
import { EventoDbEntity } from '../entities/evento.db.entity';

export type IEventoRepository = ReturnType<typeof getEventoRepository>;

export const getEventoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(EventoDbEntity).extend({});
};
