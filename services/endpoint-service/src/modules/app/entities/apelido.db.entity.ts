import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MateriaDbEntity } from './materia.db.entity';
import { ProfessorDbEntity } from './professor.db.entity';
import { TurmaDbEntity } from './turma.db.entity';
import { Apelido } from '@horario-estudantil/schemas';

@Entity('Apelido')
export class ApelidoDbEntity implements Apelido {
  @PrimaryGeneratedColumn({ name: 'id_ape' })
  id!: number;

  @Column({ name: 'tipo_ape' })
  tipo!: 'turma' | 'professor' | 'materia';

  @Column({ name: 'texto_ape' })
  texto!: string;

  @ManyToOne(() => TurmaDbEntity, (turma) => turma.apelidos)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma!: TurmaDbEntity | null;

  @ManyToOne(() => ProfessorDbEntity, (professor) => professor.apelidos)
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor!: ProfessorDbEntity | null;

  @ManyToOne(() => MateriaDbEntity, (materia) => materia.apelidos)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia!: MateriaDbEntity | null;
}
