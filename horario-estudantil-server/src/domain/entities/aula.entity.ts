import {
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaProfessorEntity } from './aula-professor.entity';
import { AulaTurmaEntity } from './aula-turma.entity';
import { EventoEntity } from './evento.entity';
import { MateriaEntity } from './materia.entity';
import { ProfessorEntity } from './professor.entity';

@Entity('Aula')
export class AulaEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul' })
  id!: number;

  @OneToOne(() => EventoEntity, (evento) => evento.aula)
  evento: EventoEntity;

  @ManyToOne(() => MateriaEntity)
  materia: MateriaEntity | null;

  @OneToMany(() => AulaTurmaEntity, (aulaTurma) => aulaTurma.aula)
  aulaTurmaRelations: AulaTurmaEntity[];

  @OneToMany(() => AulaProfessorEntity, (aulaProfessor) => aulaProfessor.aula)
  aulaProfessorRelations: AulaProfessorEntity[];

  // @ManyToMany(() => ProfessorEntity, (professor) => professor.aulas)
  // @JoinTable()
  // professores: ProfessorEntity[];

  // @ManyToMany(() => TurmaEntity)
  // @JoinTable()
  // turmas: TurmaEntity[];
}
