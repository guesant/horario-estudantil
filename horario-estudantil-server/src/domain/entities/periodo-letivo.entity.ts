import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EtapaEntity } from './etapa.entity';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';

@Entity('PeriodoLetivo')
export class PeriodoLetivoEntity {
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @OneToMany(() => EtapaEntity, (etapa) => etapa.periodoLetivo)
  etapas: EtapaEntity[];

  @ManyToOne(() => UnidadeEstudantilEntity, (ue) => ue.periodosLetivos)
  @JoinColumn({ name: 'id_ue_fk', referencedColumnName: 'id' })
  unidadeEstudantil: UnidadeEstudantilEntity;
}
