import { IFindUsuarioByIdInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindUsuarioByIdInputType implements IFindUsuarioByIdInput {
  @Field(() => Int)
  id!: number;
}
