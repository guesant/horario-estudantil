import { ApelidoType } from '../../apelido/schemas/Apelido.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Apelido, Professor } from '@horario-estudantil/schemas';

@ObjectType('Professor')
export class ProfessorType implements Professor {
  @Field(() => Int)
  id!: number;

  @Field(() => ApelidoType)
  apelidoPrincipal!: Apelido;

  @Field(() => [ApelidoType])
  apelidos!: Apelido[];
}
