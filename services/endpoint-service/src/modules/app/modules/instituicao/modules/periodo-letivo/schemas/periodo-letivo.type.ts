import { EtapaType } from '../../etapa/schemas/etapa.type';
import { InstituicaoType } from '../../../schemas/instituicao.type';
import { Etapa, Instituicao, PeriodoLetivo } from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('PeriodoLetivo')
export class PeriodoLetivoType implements PeriodoLetivo {
  @Field(() => Int)
  id!: number;

  @Field(() => [EtapaType])
  etapas!: Etapa[];

  @Field(() => InstituicaoType)
  instituicao!: Instituicao;
}
