import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { EventoService } from 'src/domain/services/evento.service';
import { SkipAuth } from 'src/infraestructure/auth/skip-auth';

@Resolver('Evento')
export class EventoResolver {
  constructor(private eventoService: EventoService) {}

  @SkipAuth()
  @ResolveField('aula')
  async getAula(@Parent() evento) {
    const { id } = evento;
    return this.eventoService.findEventoAula({ id });
  }

  @SkipAuth()
  @ResolveField('semana')
  async getSemana(@Parent() evento) {
    const { id } = evento;
    return this.eventoService.findEventoSemana({ id });
  }
}
