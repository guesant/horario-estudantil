import { Field, InputType, Int } from '@nestjs/graphql';
import { IDeleteTurmaInput } from '@horario-estudantil/schemas';

@InputType()
export class DeleteTurmaInputType implements IDeleteTurmaInput {
  @Field(() => Int)
  id!: number;
}
