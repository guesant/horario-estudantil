import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteInstituicaoInputType {
  @Field(() => Int)
  id!: number;
}
