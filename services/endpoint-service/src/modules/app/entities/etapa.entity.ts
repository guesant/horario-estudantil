import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Etapa')
@ObjectType('Etapa')
export class EtapaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_eta' })
  id!: number;

  @Field(() => PeriodoLetivoEntity)
  @ManyToOne(() => PeriodoLetivoEntity, (periodoLetivo) => periodoLetivo.etapas)
  @JoinColumn({ name: 'id_per_fk', referencedColumnName: 'id' })
  periodoLetivo!: PeriodoLetivoEntity;
}
