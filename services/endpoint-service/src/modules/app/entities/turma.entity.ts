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
import { TurmaCategoriaEntity } from './turma-categoria.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Turma')
@ObjectType('Turma')
export class TurmaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'nome_tur', type: 'varchar', nullable: true })
  nome!: string | null;

  @Field(() => [ApelidoEntity])
  @OneToMany(() => ApelidoEntity, (apelido) => apelido.turma)
  apelidos!: ApelidoEntity[];

  @OneToMany(
    () => AulaTurmaEntity,
    (aulaTurmaRelation) => aulaTurmaRelation.turma,
  )
  aulaTurmaRelations!: AulaTurmaEntity[];

  @Field(() => [TurmaEntity])
  turmas!: TurmaEntity[];

  @Field(() => [TurmaCategoriaEntity])
  @ManyToOne(
    () => TurmaCategoriaEntity,
    (turmaCategoria) => turmaCategoria.turmas,
  )
  @JoinColumn({ name: 'id_cat_tur_fk', referencedColumnName: 'id' })
  turmaCategoria!: TurmaCategoriaEntity | null;
}
