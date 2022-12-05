import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaEntity } from './aula.entity';
import { ProfessorEntity } from './professor.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Aula_Professor')
@ObjectType('Aula_Professor')
export class AulaProfessorEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_aul_prof' })
  id!: number;

  @Field(() => AulaEntity)
  @ManyToOne(() => AulaEntity, (aula) => aula.aulaTurmaRelations)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaEntity;

  @Field(() => ProfessorEntity)
  @ManyToOne(
    () => ProfessorEntity,
    (professor) => professor.aulaProfessorRelations,
  )
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor!: ProfessorEntity;
}
