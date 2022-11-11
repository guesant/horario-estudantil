import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
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

  @ManyToOne(
    () => UnidadeEstudantilEntity,
    (unidadeEstudantil) => unidadeEstudantil.grupos,
  )
  @JoinColumn({ name: 'id_ue_fk', referencedColumnName: 'id' })
  unidadeEstudantil: UnidadeEstudantilEntity;

  @OneToMany(() => TurmaEntity, (turma) => turma.grupo)
  turmas: TurmaEntity[];
}
