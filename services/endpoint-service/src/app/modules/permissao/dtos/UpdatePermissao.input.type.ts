import { IUpdatePermissaoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePermissaoInputType implements IUpdatePermissaoInput {
  @Field(() => Int)
  id!: number;

  @Field(() => String, { nullable: true })
  receita?: string;
}
