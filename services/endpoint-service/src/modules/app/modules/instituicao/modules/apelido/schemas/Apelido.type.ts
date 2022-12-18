import { MateriaType } from '../../materia/schemas/materia.type';
import { ProfessorType } from '../../professor/schemas/professor.type';
import { TurmaType } from '../../turma/schemas/turma.type';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Apelido,
  Materia,
  Professor,
  Turma,
} from '@horario-estudantil/schemas';

@ObjectType('Apelido')
export class ApelidoType implements Apelido {
  @Field(() => Int)
  id!: number;

  @Field()
  texto!: string;

  @Field(() => String)
  tipo!: 'turma' | 'materia' | 'professor';

  @Field(() => TurmaType, { nullable: true })
  turma!: Turma | null;

  @Field(() => ProfessorType, { nullable: true })
  professor!: Professor | null;

  @Field(() => MateriaType, { nullable: true })
  materia!: Materia | null;
}
