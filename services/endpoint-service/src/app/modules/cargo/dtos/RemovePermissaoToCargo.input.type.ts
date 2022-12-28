import { IRemovePermissaoToCargoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class RemovePermissaoToCargoInputType
  implements IRemovePermissaoToCargoInput
{
  @Field(() => Int)
  cargoId!: number;

  @Field(() => Int)
  permissaoId!: number;
}
