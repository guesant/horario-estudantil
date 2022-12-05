import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInstituicaoInput {
  @Field(() => String, { nullable: true })
  nome?: string | null;

  @Field(() => String, { nullable: true })
  sigla?: string | null;

  @Field(() => String, { nullable: true })
  apelido?: string | null;
}
