import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaProfessorEntity } from './aula-professor.entity';
import { AulaTurmaEntity } from './aula-turma.entity';
import { EventoEntity } from './evento.entity';
import { MateriaEntity } from './materia.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TurmaEntity } from './turma.entity';
import { ProfessorEntity } from './professor.entity';

@Entity('Aula')
@ObjectType('Aula')
export class AulaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_aul' })
  id!: number;

  @Field(() => EventoEntity)
  @OneToOne(() => EventoEntity, (evento) => evento.aula)
  evento!: EventoEntity;

  @Field(() => MateriaEntity, { nullable: true })
  @ManyToOne(() => MateriaEntity)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia!: MateriaEntity | null;

  @OneToMany(() => AulaTurmaEntity, (aulaTurma) => aulaTurma.aula)
  aulaTurmaRelations!: AulaTurmaEntity[];

  @OneToMany(() => AulaProfessorEntity, (aulaProfessor) => aulaProfessor.aula)
  aulaProfessorRelations!: AulaProfessorEntity[];

  // gql only
  @Field(() => [TurmaEntity])
  turmas!: TurmaEntity[];

  // gql only
  @Field(() => [ProfessorEntity])
  professores!: ProfessorEntity[];
}
