import { AulaType } from './Aula.type';
import { TurmaType } from '../../turma/schemas/turma.type';
import { Aula, AulaTurma, Turma } from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Aula_Turma')
export class AulaTurmaType implements AulaTurma {
  @Field(() => Int)
  id!: number;

  @Field(() => AulaType)
  aula!: Aula;

  @Field(() => TurmaType)
  turma!: Turma;
}
