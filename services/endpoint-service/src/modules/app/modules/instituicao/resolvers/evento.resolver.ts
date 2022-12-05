import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EventoEntity } from '../../../entities/evento.entity';
import { SkipAuth } from '../../../../auth/skip-auth';
import { EventoService } from '../services/evento.service';
import { AulaEntity } from '../../../entities/aula.entity';

@Resolver(() => EventoEntity)
export class EventoResolver {
  constructor(private eventoService: EventoService) {}

  @SkipAuth()
  @ResolveField('aula', () => AulaEntity)
  async aula(@Parent() evento: EventoEntity) {
    const { id } = evento;
    return this.eventoService.findEventoAula({ id });
  }
}
