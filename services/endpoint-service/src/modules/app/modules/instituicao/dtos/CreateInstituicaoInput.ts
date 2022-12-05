import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInstituicaoInput {
  @Field()
  nome!: string;

  @Field()
  sigla!: string;

  @Field()
  apelido!: string;
}
