import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TurmaEntity } from './turma.entity';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';

@Entity('Grupo')
export class GrupoEntity {
  @PrimaryGeneratedColumn({ name: 'id_gru' })
  id!: number;

  @Column({ name: 'titulo_gru' })
  titulo: string;

  @OneToOne(() => GrupoEntity, (grupo) => grupo.id)
  @JoinColumn()
  grupoPai: GrupoEntity | null;

  @ManyToOne(
    () => UnidadeEstudantilEntity,
    (unidadeEstudantil) => unidadeEstudantil.grupos,
  )
  unidadeEstudantil: UnidadeEstudantilEntity;

  @OneToMany(() => TurmaEntity, (turma) => turma.grupo)
  turmas: TurmaEntity[];
}
