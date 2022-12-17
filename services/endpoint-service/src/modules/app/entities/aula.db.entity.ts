import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaProfessorDbEntity } from './aula-professor.db.entity';
import { AulaTurmaDbEntity } from './aula-turma.db.entity';
import { EventoDbEntity } from './evento.db.entity';
import { MateriaDbEntity } from './materia.db.entity';
import { TurmaDbEntity } from './turma.db.entity';
import { ProfessorDbEntity } from './professor.db.entity';
import { Aula } from '@horario-estudantil/schemas';

@Entity('Aula')
export class AulaDbEntity implements Aula {
  @PrimaryGeneratedColumn({ name: 'id_aul' })
  id!: number;

  @OneToOne(() => EventoDbEntity, (evento) => evento.aula)
  evento!: EventoDbEntity;

  @ManyToOne(() => MateriaDbEntity)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia!: MateriaDbEntity | null;

  turmas!: TurmaDbEntity[];

  professores!: ProfessorDbEntity[];

  @OneToMany(() => AulaTurmaDbEntity, (aulaTurma) => aulaTurma.aula)
  aulaTurmaRelations!: AulaTurmaDbEntity[];

  @OneToMany(() => AulaProfessorDbEntity, (aulaProfessor) => aulaProfessor.aula)
  aulaProfessorRelations!: AulaProfessorDbEntity[];
}
