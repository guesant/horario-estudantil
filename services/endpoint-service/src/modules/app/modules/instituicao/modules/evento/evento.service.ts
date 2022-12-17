import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { EventoDbEntity } from '../../../../entities/evento.db.entity';
import { IEventoRepository } from '../../../../repositories/evento.repository';
import { REPOSITORY_EVENTO } from '../../../../../database/constants/REPOSITORIES';

export type IFindEventoQuery = Partial<Pick<EventoDbEntity, 'id'>>;

@Injectable()
export class EventoService {
  constructor(
    @Inject(REPOSITORY_EVENTO)
    private eventoRepository: IEventoRepository,
  ) {}

  async findEvento(
    query: IFindEventoQuery,
    options?: FindOneOptions<EventoDbEntity>,
  ) {
    const { id } = query;

    const evento = await this.eventoRepository.findOne({
      where: { id },
      ...options,
    });

    if (!evento) {
      throw new NotFoundException();
    }

    return evento;
  }

  async findEventoAula(query: IFindEventoQuery) {
    const evento = await this.findEvento(query, { relations: ['aula'] });

    const { aula } = evento;

    return aula;
  }
}
