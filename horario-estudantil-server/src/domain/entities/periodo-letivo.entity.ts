import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EtapaEntity } from './etapa.entity';
import { InstituicaoEntity } from './instituicao.entity';

@Entity('PeriodoLetivo')
export class PeriodoLetivoEntity {
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @OneToMany(() => EtapaEntity, (etapa) => etapa.periodoLetivo)
  etapas: EtapaEntity[];

  @ManyToOne(() => InstituicaoEntity, (instituicao) => instituicao.periodosLetivos)
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao: InstituicaoEntity;
}
