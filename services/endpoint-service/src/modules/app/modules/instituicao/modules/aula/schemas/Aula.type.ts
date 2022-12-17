import { EventoType } from '../../evento/schemas/evento.type';
import { MateriaType } from '../../materia/schemas/materia.type';
import { TurmaType } from '../../turma/schemas/turma.type';
import { ProfessorType } from '../../professor/schemas/professor.type';
import {
  Aula,
  Evento,
  Materia,
  Professor,
  Turma,
} from '@horario-estudantil/schemas';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Aula')
export class AulaType implements Aula {
  @Field(() => Int)
  id!: number;

  @Field(() => EventoType)
  evento!: Evento;

  @Field(() => MateriaType, { nullable: true })
  materia!: Materia | null;

  @Field(() => [TurmaType])
  turmas!: Turma[];

  @Field(() => [ProfessorType])
  professores!: Professor[];
}
