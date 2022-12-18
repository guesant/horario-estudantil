import { Field, InputType, Int } from '@nestjs/graphql';
import { IFindInstituicaoByIdInput } from '@horario-estudantil/schemas';

@InputType()
export class FindInstituicaoByIdInputType implements IFindInstituicaoByIdInput {
  @Field(() => Int)
  id!: number;
}
