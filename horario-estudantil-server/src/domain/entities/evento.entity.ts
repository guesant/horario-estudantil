import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaEntity } from './aula.entity';
import { SemanaEntity } from './semana.entity';

@Entity('Evento')
export class EventoEntity {
  @PrimaryGeneratedColumn({ name: 'id_eve' })
  id!: number;

  @Column({ name: 'dia_da_sem_eve' })
  diaDaSemana: number;

  @Column({ name: 'inicio_eve' })
  inicio: Date;

  @Column({ name: 'fim_eve' })
  fim: Date;

  @ManyToOne(() => SemanaEntity, (semana) => semana.eventos)
  semana: SemanaEntity;

  @OneToOne(() => AulaEntity, (aula) => aula.evento)
  @JoinTable()
  aula: AulaEntity | null;
}
