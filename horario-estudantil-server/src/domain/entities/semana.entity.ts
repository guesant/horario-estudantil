import {
  Column,
  Entity,
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
  etapa: EtapaEntity;

  @OneToMany(() => EventoEntity, (evento) => evento.semana)
  eventos: EventoEntity[];
}
