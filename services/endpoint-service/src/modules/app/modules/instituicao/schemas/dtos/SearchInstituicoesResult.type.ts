import { Field, Int, ObjectType } from '@nestjs/graphql';
import { InstituicaoType } from '../instituicao.type';
import {
  Instituicao,
  ISearchInstituicoesInput,
} from '@horario-estudantil/schemas';

@ObjectType('SearchInstituicoesResult')
export class SearchInstituicoesResultType implements ISearchInstituicoesInput {
  @Field(() => Int)
  estimatedTotalHits!: number;

  @Field(() => [InstituicaoType])
  hits!: Instituicao[];

  @Field(() => Int)
  limit!: number;

  @Field(() => Int)
  offset!: number;
}
