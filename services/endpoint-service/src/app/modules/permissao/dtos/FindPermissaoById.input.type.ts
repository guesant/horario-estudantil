import { IFindPermissaoByIdInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindPermissaoByIdInputType implements IFindPermissaoByIdInput {
  @Field(() => Int)
  id!: number;
}
