import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { SemanaEntity } from './semana.entity';

@Entity('Etapa')
export class EtapaEntity {
  @PrimaryGeneratedColumn({ name: 'id_eta' })
  id!: number;

  @OneToMany(() => SemanaEntity, (semana) => semana.etapa)
  semanas: SemanaEntity[];

  @ManyToOne(() => PeriodoLetivoEntity, (periodoLetivo) => periodoLetivo.etapas)
  @JoinColumn({ name: 'id_per_fk', referencedColumnName: 'id' })
  periodoLetivo: PeriodoLetivoEntity;
}
