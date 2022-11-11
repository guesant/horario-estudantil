import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  REPOSITORY_EVENTO,
  REPOSITORY_SEMANA,
} from 'src/infraestructure/constants';
import { FindOneOptions } from 'typeorm';
import { EventoEntity } from '../entities/evento.entity';
import { IEventoRepository } from '../repositories/evento.repository';
import { ISemanaRepository } from '../repositories/semana.repository';

export type IFindEventoQuery = Partial<Pick<EventoEntity, 'id'>>;

@Injectable()
export class EventoService {
  constructor(
    @Inject(REPOSITORY_EVENTO)
    private eventoRepository: IEventoRepository,

    @Inject(REPOSITORY_SEMANA)
    private semanaRepository: ISemanaRepository,
  ) {}

  async findEvento(
    query: IFindEventoQuery,
    options?: FindOneOptions<EventoEntity>,
  ) {
    const { id } = query;

    const evento = await this.eventoRepository.findOne({
      where: { id },
      ...options,
    });

    if (!evento) {
      throw new NotFoundException('Evento not found');
    }

    return evento;
  }

  async findEventoAula(query: IFindEventoQuery) {
    const evento = await this.findEvento(query, { relations: ['aula'] });

    const { aula } = evento;

    return aula;
  }

  async findEventoSemana(query: IFindEventoQuery) {
    const evento = await this.findEvento(query, { relations: ['semana'] });

    const { semana } = evento;

    return semana;
  }
}
