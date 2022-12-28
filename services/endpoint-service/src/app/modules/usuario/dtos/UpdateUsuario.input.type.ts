import { IUpdateUsuarioInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUsuarioInputType implements IUpdateUsuarioInput {
  @Field(() => Int)
  id!: number;
}
