import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaEntity } from './aula.entity';
import { ProfessorEntity } from './professor.entity';

@Entity('Aula_Professor')
export class AulaProfessorEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul_prof' })
  id!: number;

  @ManyToOne(() => AulaEntity, (aula) => aula.aulaTurmaRelations)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula: AulaEntity;

  @ManyToOne(
    () => ProfessorEntity,
    (professor) => professor.aulaProfessorRelations,
  )
  @JoinColumn({ name: 'id_prof_fk', referencedColumnName: 'id' })
  professor: ProfessorEntity;
}
