import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaDbEntity } from './aula.db.entity';
import { Evento } from '@horario-estudantil/schemas';

@Entity('Evento')
export class EventoDbEntity implements Evento {
  @PrimaryGeneratedColumn({ name: 'id_eve' })
  id!: number;

  @Column({ name: 'data_fim_eve', type: 'timestamptz', nullable: true })
  dataFim!: Date | null;

  @Column({ name: 'data_inicio_eve', type: 'timestamptz', nullable: true })
  dataInicio!: Date | null;

  @OneToOne(() => AulaDbEntity, (aula) => aula.evento)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaDbEntity | null;
}
