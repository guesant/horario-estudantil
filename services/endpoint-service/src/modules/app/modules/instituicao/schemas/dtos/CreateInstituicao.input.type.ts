import { Field, InputType } from '@nestjs/graphql';
import { ICreateInstituicaoInput } from '@horario-estudantil/schemas';

@InputType()
export class CreateInstituicaoInputType implements ICreateInstituicaoInput {
  @Field()
  nome!: string;

  @Field()
  sigla!: string;

  @Field()
  apelido!: string;
}
