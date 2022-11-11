import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaEntity } from './aula.entity';
import { TurmaEntity } from './turma.entity';

@Entity('Aula_Turma')
export class AulaTurmaEntity {
  @PrimaryGeneratedColumn({ name: 'id_aul_tur' })
  id!: number;

  @ManyToOne(() => AulaEntity, (aula) => aula.aulaTurmaRelations)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula: AulaEntity;

  @ManyToOne(() => TurmaEntity, (turma) => turma.aulaTurmaRelations)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma: TurmaEntity;
}
