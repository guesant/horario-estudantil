import { AulaType } from '../../aula/schemas/Aula.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Aula, Evento } from '@horario-estudantil/schemas';

@ObjectType('Evento')
export class EventoType implements Evento {
  @Field(() => Int)
  id!: number;

  @Field(() => Date, { nullable: true })
  dataFim!: Date | null;

  @Field(() => Date, { nullable: true })
  dataInicio!: Date | null;

  @Field(() => AulaType, { nullable: true })
  aula!: Aula | null;
}
