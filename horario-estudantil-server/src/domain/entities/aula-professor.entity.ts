import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaEntity } from './aula.entity';
import { ProfessorEntity } from './professor.entity';

@Entity('Aula_Professor')
export class AulaProfessorEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul_prof' })
  id!: number;

  @ManyToOne(() => AulaEntity, (aula) => aula.aulaTurmaRelations)
  aula: AulaEntity;

  @ManyToOne(
    () => ProfessorEntity,
    (professor) => professor.aulaProfessorRelations,
  )
  professor: ProfessorEntity;
}
