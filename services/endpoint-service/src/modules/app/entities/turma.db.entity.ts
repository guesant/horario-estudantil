import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApelidoDbEntity } from './apelido.db.entity';
import { AulaTurmaDbEntity } from './aula-turma.db.entity';
import { CategoriaTurmaDbEntity } from './categoria-turma.db.entity';
import { Turma } from '@horario-estudantil/schemas';

@Entity('Turma')
export class TurmaDbEntity implements Turma {
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;

  @Column({ name: 'nome_tur', type: 'varchar', nullable: true })
  nome!: string | null;

  @OneToMany(() => ApelidoDbEntity, (apelido) => apelido.turma)
  apelidos!: ApelidoDbEntity[];

  @ManyToOne(
    () => CategoriaTurmaDbEntity,
    (turmaCategoria) => turmaCategoria.turmas,
  )
  @JoinColumn({ name: 'id_tur_cat_fk', referencedColumnName: 'id' })
  categoriaTurma!: CategoriaTurmaDbEntity | null;

  @OneToMany(
    () => AulaTurmaDbEntity,
    (aulaTurmaRelation) => aulaTurmaRelation.turma,
  )
  aulaTurmaRelations!: AulaTurmaDbEntity[];
}
