import { ICreateCargoInput } from '@horario-estudantil/schemas';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCargoInputType implements ICreateCargoInput {
  @Field(() => Boolean, { nullable: true })
  placeholder!: true;
}
