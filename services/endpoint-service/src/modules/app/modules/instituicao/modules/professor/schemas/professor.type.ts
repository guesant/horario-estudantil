import { ApelidoType } from '../../apelido/schemas/Apelido.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Apelido, Professor } from '@horario-estudantil/schemas';

@ObjectType('Professor')
export class ProfessorType implements Professor {
  @Field(() => Int)
  id!: number;

  @Field()
  nome!: string;

  @Field(() => [ApelidoType])
  apelidos!: Apelido[];
}
