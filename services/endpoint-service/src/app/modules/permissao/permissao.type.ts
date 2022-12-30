import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Permissao } from '@horario-estudantil/schemas';

@ObjectType('Permissao')
export class PermissaoType implements Permissao {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  receita!: string;
}
