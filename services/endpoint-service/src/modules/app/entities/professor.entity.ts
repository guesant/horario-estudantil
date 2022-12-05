import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaProfessorEntity } from './aula-professor.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Professor')
@ObjectType('Professor')
export class ProfessorEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_prof' })
  id!: number;

  @Field()
  @Column({ name: 'nome_prof' })
  nome!: string;

  @Field(() => [ApelidoEntity])
  @OneToMany(() => ApelidoEntity, (apelido) => apelido.professor)
  apelidos!: ApelidoEntity[];

  @OneToMany(
    () => AulaProfessorEntity,
    (aulaProfessorRelation) => aulaProfessorRelation.professor,
  )
  aulaProfessorRelations!: AulaProfessorEntity[];

  @Field(() => [ProfessorEntity])
  professores!: ProfessorEntity[];
}
