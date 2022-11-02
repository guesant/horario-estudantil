import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';

@Entity('Grupo')
export class GrupoEntity {
  @PrimaryGeneratedColumn({ name: 'id_gru' })
  id!: number;

  @ManyToOne(() => UnidadeEstudantilEntity)
  unidadeEstudantil: UnidadeEstudantilEntity;

  @Column({ name: 'titulo_gru' })
  titulo: string;

  @OneToOne(() => GrupoEntity, (grupo) => grupo.id)
  @JoinColumn()
  grupoPai: GrupoEntity | null;
}
