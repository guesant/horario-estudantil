import { Field, InputType, Int } from '@nestjs/graphql';
import { IDeleteInstituicaoInput } from '@horario-estudantil/schemas';

@InputType()
export class DeleteInstituicaoInputType implements IDeleteInstituicaoInput {
  @Field(() => Int)
  id!: number;
}
