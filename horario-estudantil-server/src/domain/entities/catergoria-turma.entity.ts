import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TurmaEntity } from './turma.entity';
import { InstituicaoEntity } from './instituicao.entity';

@Entity('CategoriaTurma')
export class CategoriaTurmaEntity {
  @PrimaryGeneratedColumn({ name: 'id_cat_tur' })
  id!: number;

  @Column({ name: 'titulo_cat_tur' })
  titulo: string | null;

  @Column({ name: 'titulo_filhos_cat_tur' })
  tituloFilhos: string;

  @OneToMany(() => TurmaEntity, (turma) => turma.categoriaTurma)
  turmas: TurmaEntity[];

  @ManyToOne(
    () => InstituicaoEntity,
    (instituicao) => instituicao.grupos,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao: InstituicaoEntity;

  @OneToOne(() => CategoriaTurmaEntity)
  @JoinColumn({ name: 'id_cat_tur_pai_fk', referencedColumnName: 'id' })
  categoriaTurmaPai: CategoriaTurmaEntity | null;
}
