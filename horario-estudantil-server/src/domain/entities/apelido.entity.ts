import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MateriaEntity } from './materia.entity';
import { ProfessorEntity } from './professor.entity';
import { TurmaEntity } from './turma.entity';

@Entity('Apelido')
export class ApelidoEntity {
  @PrimaryGeneratedColumn({ name: 'id_ape' })
  id!: number;

  @Column({ name: 'apelido_ape' })
  apelido: string;

  @ManyToOne(() => TurmaEntity, (turma) => turma.apelidos)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma: TurmaEntity | null;

  @ManyToOne(() => ProfessorEntity, (professor) => professor.apelidos)
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor: ProfessorEntity | null;

  @ManyToOne(() => MateriaEntity, (materia) => materia.apelidos)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia: MateriaEntity | null;
}
