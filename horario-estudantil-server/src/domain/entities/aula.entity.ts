import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MateriaEntity } from './materia.entity';
import { ProfessorEntity } from './professor.entity';
import { TurmaEntity } from './turma.entity';

@Entity('Aula')
export class AulaEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul' })
  id!: number;

  @ManyToOne(() => MateriaEntity)
  materia: MateriaEntity;

  @ManyToMany(() => ProfessorEntity)
  @JoinTable()
  professores: ProfessorEntity[];

  @ManyToMany(() => TurmaEntity)
  @JoinTable()
  turmas: TurmaEntity[];
}
