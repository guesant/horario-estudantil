import { IDeleteCargoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteCargoInputType implements IDeleteCargoInput {
  @Field(() => Int)
  id!: number;
}
