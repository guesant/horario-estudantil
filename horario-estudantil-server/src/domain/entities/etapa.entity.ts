import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';

@Entity('Etapa')
export class EtapaEntity {
  @PrimaryGeneratedColumn({ name: 'id_eta' })
  id!: number;

  @ManyToOne(() => PeriodoLetivoEntity)
  periodoLetivo: PeriodoLetivoEntity;
}
