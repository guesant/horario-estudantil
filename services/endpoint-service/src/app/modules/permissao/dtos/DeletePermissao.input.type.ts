import { IDeletePermissaoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeletePermissaoInputType implements IDeletePermissaoInput {
  @Field(() => Int)
  id!: number;
}
