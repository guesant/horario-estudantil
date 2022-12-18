import { Field, InputType, Int } from '@nestjs/graphql';
import { IFindTurmaByIdInput } from '@horario-estudantil/schemas';

@InputType()
export class FindTurmaByIdInputType implements IFindTurmaByIdInput {
  @Field(() => Int)
  id!: number;
}
