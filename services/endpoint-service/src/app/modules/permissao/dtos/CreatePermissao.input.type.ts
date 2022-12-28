import { ICreatePermissaoInput } from '@horario-estudantil/schemas';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePermissaoInputType implements ICreatePermissaoInput {
  @Field(() => String)
  receita!: string;
}
