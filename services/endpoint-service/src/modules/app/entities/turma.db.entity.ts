import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApelidoDbEntity } from './apelido.db.entity';
import { CategoriaTurmaDbEntity } from './categoria-turma.db.entity';
import { Turma } from '@horario-estudantil/schemas';
import { InstituicaoDbEntity } from './instituicao.db.entity';
import { AulaTurmaDbEntity } from './aula-turma.db.entity';

@Entity('Turma')
export class TurmaDbEntity implements Turma {
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;

  @ManyToOne(() => InstituicaoDbEntity)
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoDbEntity;

  @OneToMany(() => ApelidoDbEntity, (apelido) => apelido.turma)
  apelidos!: ApelidoDbEntity[];

  @ManyToOne(
    () => CategoriaTurmaDbEntity,
    (categoriaTurma) => categoriaTurma.turmas,
  )
  @JoinColumn({ name: 'id_cat_tur_fk', referencedColumnName: 'id' })
  categoriaTurma!: CategoriaTurmaDbEntity | null;

  //

  @OneToMany(() => AulaTurmaDbEntity, (at) => at.turma)
  aulasTurma!: AulaTurmaDbEntity[];
}
