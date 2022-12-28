import { ICreateUsuarioInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUsuarioInputType implements ICreateUsuarioInput {
  @Field(() => Int, { nullable: true })
  cargoId!: number;
}
