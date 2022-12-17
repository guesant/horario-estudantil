import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInstituicaoInputType {
  @Field()
  nome!: string;

  @Field()
  sigla!: string;

  @Field()
  apelido!: string;
}
