import { AulaType } from './Aula.type';
import { ProfessorType } from '../../professor/schemas/professor.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Aula, AulaProfessor, Professor } from '@horario-estudantil/schemas';

@ObjectType('Aula_Professor')
export class AulaProfessorType implements AulaProfessor {
  @Field(() => Int)
  id!: number;

  @Field(() => AulaType)
  aula!: Aula;

  @Field(() => ProfessorType)
  professor!: Professor;
}
