import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EtapaEntity } from './etapa.entity';
import { InstituicaoEntity } from './instituicao.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('PeriodoLetivo')
@ObjectType('PeriodoLetivo')
export class PeriodoLetivoEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @Field(() => [EtapaEntity])
  @OneToMany(() => EtapaEntity, (etapa) => etapa.periodoLetivo)
  etapas!: EtapaEntity[];

  @Field(() => InstituicaoEntity)
  @ManyToOne(
    () => InstituicaoEntity,
    (instituicao) => instituicao.periodosLetivos,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoEntity;
}
