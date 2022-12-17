import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoDbEntity } from './apelido.db.entity';
import { AulaProfessorDbEntity } from './aula-professor.db.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Professor } from '@horario-estudantil/schemas';

@Entity('Professor')
@ObjectType('Professor')
export class ProfessorDbEntity implements Professor {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_prof' })
  id!: number;

  @Field()
  @Column({ name: 'nome_prof' })
  nome!: string;

  @Field(() => [ApelidoDbEntity])
  @OneToMany(() => ApelidoDbEntity, (apelido) => apelido.professor)
  apelidos!: ApelidoDbEntity[];

  @OneToMany(
    () => AulaProfessorDbEntity,
    (aulaProfessorRelation) => aulaProfessorRelation.professor,
  )
  aulaProfessorRelations!: AulaProfessorDbEntity[];
}
