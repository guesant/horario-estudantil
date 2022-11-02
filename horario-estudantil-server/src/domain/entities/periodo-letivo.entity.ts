import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';

@Entity('PeriodoLetivo')
export class PeriodoLetivoEntity {
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @ManyToOne(() => UnidadeEstudantilEntity)
  unidadeEstudantil: UnidadeEstudantilEntity;
}
