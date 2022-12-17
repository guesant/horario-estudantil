import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaDbEntity } from './aula.db.entity';
import { ProfessorDbEntity } from './professor.db.entity';
import { AulaProfessor } from '@horario-estudantil/schemas';

@Entity('Aula_Professor')
export class AulaProfessorDbEntity implements AulaProfessor {
  @PrimaryGeneratedColumn({ name: 'id_aul_prof' })
  id!: number;

  @ManyToOne(() => AulaDbEntity, (aula) => aula.aulaTurmaRelations)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaDbEntity;

  @ManyToOne(
    () => ProfessorDbEntity,
    (professor) => professor.aulaProfessorRelations,
  )
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor!: ProfessorDbEntity;
}
