import { ApelidoType } from '../../apelido/schemas/Apelido.type';
import { AulaType } from '../../aula/schemas/Aula.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Apelido, Aula, Materia } from '@horario-estudantil/schemas';

@ObjectType('Materia')
export class MateriaType implements Materia {
  @Field(() => Int)
  id!: number;

  @Field(() => ApelidoType)
  apelidoPrincipal!: Apelido;

  @Field(() => [AulaType])
  aulas!: Aula[];

  @Field(() => [ApelidoType])
  apelidos!: Apelido[];
}
