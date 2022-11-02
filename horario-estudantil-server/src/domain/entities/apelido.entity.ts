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

  @ManyToOne(() => ProfessorEntity)
  professor: ProfessorEntity | null;

  @ManyToOne(() => TurmaEntity)
  turma: TurmaEntity | null;

  @ManyToOne(() => MateriaEntity)
  materia: MateriaEntity | null;
}
