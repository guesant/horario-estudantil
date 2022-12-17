import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInstituicaoInputType {
  @Field(() => String, { nullable: true })
  nome?: string;

  @Field(() => String, { nullable: true })
  sigla?: string;

  @Field(() => String, { nullable: true })
  apelido?: string;
}
