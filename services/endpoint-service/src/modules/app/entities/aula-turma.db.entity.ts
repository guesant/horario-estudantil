import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AulaDbEntity } from './aula.db.entity';
import { TurmaDbEntity } from './turma.db.entity';
import { AulaTurma } from '@horario-estudantil/schemas';

@Entity('Aula_Turma')
export class AulaTurmaDbEntity implements AulaTurma {
  @PrimaryGeneratedColumn({ name: 'id_aul_tur' })
  id!: number;

  @ManyToOne(() => AulaDbEntity)
  @JoinColumn({ name: 'id_aul_fk', referencedColumnName: 'id' })
  aula!: AulaDbEntity;

  @ManyToOne(() => TurmaDbEntity)
  @JoinColumn({ name: 'id_tur_fk', referencedColumnName: 'id' })
  turma!: TurmaDbEntity;
}
