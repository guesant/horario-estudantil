import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('SearchInstituicoesInput')
export class SearchInstituicoesInputType {
  @Field(() => String, { nullable: true })
  query?: string;

  @Field(() => Int, { nullable: true })
  limit?: number;

  @Field(() => Int, { nullable: true })
  offset?: number;

  @Field(() => Boolean, { nullable: true })
  onlyMemberships?: boolean;
}
