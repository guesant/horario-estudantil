import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InstituicaoType } from '../schemas/instituicao.type';
import { Instituicao } from '@horario-estudantil/schemas';

@ObjectType('SearchInstituicoesResult')
export class SearchInstituicoesResultType {
  @Field(() => Int)
  estimatedTotalHits!: number;

  @Field(() => [InstituicaoType])
  hits!: Instituicao[];

  @Field(() => Int)
  limit!: number;

  @Field(() => Int)
  offset!: number;
}
