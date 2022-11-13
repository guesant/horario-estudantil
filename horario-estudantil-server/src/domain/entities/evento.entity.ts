import {
  Column,
  Entity,
  JoinColumn,
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

  @Column({ name: 'fim_eve' })
  fim: Date;

  @Column({ name: 'inicio_eve' })
  inicio: Date;

  @Column({ name: 'dia_da_sem_eve' })
  diaDaSemana: number;

  @ManyToOne(() => SemanaEntity, (semana) => semana.eventos)
  @JoinColumn({ name: 'id_sem_fk', referencedColumnName: 'id' })
  semana: SemanaEntity;

  @OneToOne(() => AulaEntity, (aula) => aula.evento)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula: AulaEntity | null;
}
