import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindInstituicaoInputType {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  sigla?: string;
}
