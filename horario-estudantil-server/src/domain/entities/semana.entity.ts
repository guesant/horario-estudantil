import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EtapaEntity } from './etapa.entity';

@Entity('Semana')
export class SemanaEntity {
  @PrimaryGeneratedColumn({ name: 'id_sem' })
  id!: number;

  @ManyToOne(() => EtapaEntity)
  etapa: EtapaEntity;

  @Column({ name: 'inicio_sem' })
  inicioSemana: Date;

  @Column({ name: 'fim_sem' })
  fimSemana: Date;
}
