import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TurmaDbEntity } from './turma.db.entity';
import { InstituicaoDbEntity } from './instituicao.db.entity';
import { CategoriaTurma } from '@horario-estudantil/schemas';

@Entity('TurmaCategoria')
export class CategoriaTurmaDbEntity implements CategoriaTurma {
  @PrimaryGeneratedColumn({ name: 'id_tur_cat' })
  id!: number;

  @Column({ name: 'titulo_tur_cat', type: 'varchar', nullable: true })
  titulo!: string | null;

  @Column({ name: 'titulo_filhos_tur_cat' })
  tituloFilhos!: string;

  @OneToMany(() => TurmaDbEntity, (turma) => turma.categoriaTurma)
  turmas!: TurmaDbEntity[];

  @ManyToOne(
    () => InstituicaoDbEntity,
    (instituicao) => instituicao.categoriasTurma,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoDbEntity;

  @OneToOne(() => CategoriaTurmaDbEntity)
  @JoinColumn({ name: 'id_tur_cat_pai_fk', referencedColumnName: 'id' })
  turmaCategoriaPai!: CategoriaTurmaDbEntity | null;
}
