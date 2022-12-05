import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteInstituicaoInput {
  @Field()
  id!: number;
}
