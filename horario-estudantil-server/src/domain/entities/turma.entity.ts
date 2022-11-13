import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaTurmaEntity } from './aula-turma.entity';
import { CategoriaTurmaEntity } from './catergoria-turma.entity';

@Entity('Turma')
export class TurmaEntity {
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;

  @Column({ name: 'nome_tur' })
  nome!: string | null;

  @OneToMany(() => ApelidoEntity, (apelido) => apelido.turma)
  apelidos: ApelidoEntity[];

  @OneToMany(
    () => AulaTurmaEntity,
    (aulaTurmaRelation) => aulaTurmaRelation.turma,
  )
  aulaTurmaRelations: AulaTurmaEntity[];

  @ManyToOne(
    () => CategoriaTurmaEntity,
    (categoriaTurma) => categoriaTurma.turmas,
  )
  @JoinColumn({ name: 'id_cat_tur_fk', referencedColumnName: 'id' })
  categoriaTurma: CategoriaTurmaEntity | null;
}
