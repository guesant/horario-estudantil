import { Field, InputType } from '@nestjs/graphql';
import { IFindTurmaByApelidoInput } from '@horario-estudantil/schemas';

@InputType()
export class FindTurmaByApelidoInputType implements IFindTurmaByApelidoInput {
  @Field(() => String)
  apelido!: string;
}
