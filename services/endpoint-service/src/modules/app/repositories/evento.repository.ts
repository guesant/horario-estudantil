import { DataSource } from 'typeorm';
import { EventoEntity } from '../entities/evento.entity';

export type IEventoRepository = ReturnType<typeof getEventoRepository>;

export const getEventoRepository = (dataSource: DataSource) => {
  return dataSource.getRepository(EventoEntity).extend({});
};
