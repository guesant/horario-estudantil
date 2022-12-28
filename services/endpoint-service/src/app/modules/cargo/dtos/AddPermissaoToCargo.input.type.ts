import { IAddPermissaoToCargoInput } from '@horario-estudantil/schemas';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddPermissaoToCargoInputType implements IAddPermissaoToCargoInput {
  @Field(() => Int)
  cargoId!: number;

  @Field(() => Int)
  permissaoId!: number;
}
