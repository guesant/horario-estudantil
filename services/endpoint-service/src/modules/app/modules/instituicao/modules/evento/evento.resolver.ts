import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { ResourceAuth } from '../../../../../auth/ResourceAuth.decorator';
import { EventoService } from './evento.service';
import { AuthMode } from '../../../../../auth/AuthMode';
import { EventoType } from './schemas/evento.type';
import { AulaType } from '../aula/schemas/Aula.type';

@Resolver(() => EventoType)
export class EventoResolver {
  constructor(private eventoService: EventoService) {}

  @ResourceAuth(AuthMode.ANONYMOUS)
  @ResolveField('aula', () => AulaType)
  async aula(@Parent() evento: EventoType) {
    const { id } = evento;
    return this.eventoService.findEventoAula({ id });
  }
}
