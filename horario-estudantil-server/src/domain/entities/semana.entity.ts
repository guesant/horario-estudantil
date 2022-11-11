import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EtapaEntity } from './etapa.entity';
import { EventoEntity } from './evento.entity';

@Entity('Semana')
export class SemanaEntity {
  @PrimaryGeneratedColumn({ name: 'id_sem' })
  id!: number;

  @Column({ name: 'inicio_sem' })
  inicio: Date;

  @Column({ name: 'fim_sem' })
  fim: Date;

  @ManyToOne(() => EtapaEntity, (etapa) => etapa.semanas)
  @JoinColumn({ name: 'id_eta_fk', referencedColumnName: 'id' })
  etapa: EtapaEntity;

  @OneToMany(() => EventoEntity, (evento) => evento.semana)
  eventos: EventoEntity[];
}
