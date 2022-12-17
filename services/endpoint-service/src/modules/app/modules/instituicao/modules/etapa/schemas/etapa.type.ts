import { PeriodoLetivoType } from '../../periodo-letivo/schemas/periodo-letivo.type';
import { Etapa, PeriodoLetivo } from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Etapa')
export class EtapaType implements Etapa {
  @Field(() => Int)
  id!: number;

  @Field(() => PeriodoLetivoType)
  periodoLetivo!: PeriodoLetivo;
}
