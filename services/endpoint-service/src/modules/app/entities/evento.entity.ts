import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaEntity } from './aula.entity';
import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@Entity('Evento')
@ObjectType('Evento')
export class EventoEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_eve' })
  id!: number;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ name: 'data_fim_eve', type: 'timestamptz', nullable: true })
  dataFim!: Date | null;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({ name: 'data_inicio_eve', type: 'timestamptz', nullable: true })
  dataInicio!: Date | null;

  @Field(() => AulaEntity, { nullable: true })
  @OneToOne(() => AulaEntity, (aula) => aula.evento)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaEntity | null;
}
