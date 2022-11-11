import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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
  turma: TurmaEntity | null;

  @ManyToOne(() => ProfessorEntity, (professor) => professor.apelidos)
  professor: ProfessorEntity | null;

  @ManyToOne(() => MateriaEntity, (materia) => materia.apelidos)
  materia: MateriaEntity | null;
}
