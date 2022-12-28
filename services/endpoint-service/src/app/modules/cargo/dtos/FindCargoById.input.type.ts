import { IFindCargoByIdInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindCargoByIdInputType implements IFindCargoByIdInput {
  @Field(() => Int)
  id!: number;
}
