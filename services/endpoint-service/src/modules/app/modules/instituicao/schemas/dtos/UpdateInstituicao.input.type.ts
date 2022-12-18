import { Field, InputType } from '@nestjs/graphql';
import { IUpdateInstituicaoInput } from '@horario-estudantil/schemas';

@InputType()
export class UpdateInstituicaoInputType implements IUpdateInstituicaoInput {
  @Field(() => String, { nullable: true })
  nome?: string;

  @Field(() => String, { nullable: true })
  sigla?: string;

  @Field(() => String, { nullable: true })
  apelido?: string;
}
