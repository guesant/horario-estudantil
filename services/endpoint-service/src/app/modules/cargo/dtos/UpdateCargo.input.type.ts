import { IUpdateCargoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateCargoInputType implements IUpdateCargoInput {
  @Field(() => Int)
  id!: number;
}
