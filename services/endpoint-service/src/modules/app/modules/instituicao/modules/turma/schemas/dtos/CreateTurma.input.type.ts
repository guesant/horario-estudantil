import { Field, InputType, Int } from '@nestjs/graphql';
import { ICreateTurmaInput } from '@horario-estudantil/schemas';

@InputType()
export class CreateTurmaInputType implements ICreateTurmaInput {
  @Field(() => Int)
  instituicaoId!: number;

  @Field()
  nome!: string;
}
