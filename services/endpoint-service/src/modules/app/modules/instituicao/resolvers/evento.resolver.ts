import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EventoEntity } from '../../../entities/evento.entity';
import { ResourceAuth } from '../../../../auth/ResourceAuth';
import { EventoService } from '../services/evento.service';
import { AulaEntity } from '../../../entities/aula.entity';
import { AuthMode } from '../../../../auth/AuthMode';

@Resolver(() => EventoEntity)
export class EventoResolver {
  constructor(private eventoService: EventoService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aula', () => AulaEntity)
  async aula(@Parent() evento: EventoEntity) {
    const { id } = evento;
    return this.eventoService.findEventoAula({ id });
  }
}
