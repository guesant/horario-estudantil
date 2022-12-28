import { IDeleteUsuarioInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteUsuarioInputType implements IDeleteUsuarioInput {
  @Field(() => Int)
  id!: number;
}
