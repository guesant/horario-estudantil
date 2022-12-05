import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaEntity } from './aula.entity';
import { TurmaEntity } from './turma.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Aula_Turma')
@ObjectType('Aula_Turma')
export class AulaTurmaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_aul_tur' })
  id!: number;

  @Field(() => AulaEntity)
  @ManyToOne(() => AulaEntity, (aula) => aula.aulaTurmaRelations)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaEntity;

  @Field(() => TurmaEntity)
  @ManyToOne(() => TurmaEntity, (turma) => turma.aulaTurmaRelations)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma!: TurmaEntity;
}
