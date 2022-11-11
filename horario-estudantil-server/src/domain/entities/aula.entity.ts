import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AulaProfessorEntity } from './aula-professor.entity';
import { AulaTurmaEntity } from './aula-turma.entity';
import { EventoEntity } from './evento.entity';
import { MateriaEntity } from './materia.entity';

@Entity('Aula')
export class AulaEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul' })
  id!: number;

  @OneToOne(() => EventoEntity, (evento) => evento.aula)
  evento: EventoEntity;

  @ManyToOne(() => MateriaEntity)
  @JoinColumn({ name: 'id_mat_fk', referencedColumnName: 'id' })
  materia: MateriaEntity | null;

  @OneToMany(() => AulaTurmaEntity, (aulaTurma) => aulaTurma.aula)
  aulaTurmaRelations: AulaTurmaEntity[];

  @OneToMany(() => AulaProfessorEntity, (aulaProfessor) => aulaProfessor.aula)
  aulaProfessorRelations: AulaProfessorEntity[];
}
