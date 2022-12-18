import { Field, InputType, Int } from '@nestjs/graphql';
import { ISearchInstituicoesInput } from '@horario-estudantil/schemas';

@InputType('SearchInstituicoesInput')
export class SearchInstituicoesInputType implements ISearchInstituicoesInput {
  @Field(() => String, { nullable: true })
  query?: string;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { nullable: true })
  offset?: number;

  @Field(() => Boolean, { nullable: true })
  onlyMemberships?: boolean;
}
