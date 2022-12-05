import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MateriaEntity } from './materia.entity';
import { ProfessorEntity } from './professor.entity';
import { TurmaEntity } from './turma.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Apelido')
@ObjectType('Apelido')
export class ApelidoEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_ape' })
  id!: number;

  @Field()
  @Column({ name: 'apelido_ape' })
  apelido!: string;

  @Field(() => TurmaEntity, { nullable: true })
  @ManyToOne(() => TurmaEntity, (turma) => turma.apelidos)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma!: TurmaEntity | null;

  @Field(() => ProfessorEntity, { nullable: true })
  @ManyToOne(() => ProfessorEntity, (professor) => professor.apelidos)
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor!: ProfessorEntity | null;

  @Field(() => MateriaEntity, { nullable: true })
  @ManyToOne(() => MateriaEntity, (materia) => materia.apelidos)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia!: MateriaEntity | null;
}
