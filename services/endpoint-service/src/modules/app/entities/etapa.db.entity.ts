import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeriodoLetivoDbEntity } from './periodo-letivo.db.entity';
import { Etapa } from '@horario-estudantil/schemas';

@Entity('Etapa')
export class EtapaDbEntity implements Etapa {
  @PrimaryGeneratedColumn({ name: 'id_eta' })
  id!: number;

  @ManyToOne(
    () => PeriodoLetivoDbEntity,
    (periodoLetivo) => periodoLetivo.etapas,
  )
  @JoinColumn({ name: 'id_per_fk', referencedColumnName: 'id' })
  periodoLetivo!: PeriodoLetivoDbEntity;
}
