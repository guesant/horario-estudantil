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
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('TurmaCategoria')
@ObjectType('TurmaCategoria')
export class TurmaCategoriaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_tur_cat' })
  id!: number;

  @Field(() => String, { nullable: true })
  @Column({ name: 'titulo_tur_cat', type: 'varchar', nullable: true })
  titulo!: string | null;

  @Field()
  @Column({ name: 'titulo_filhos_tur_cat' })
  tituloFilhos!: string;

  @Field(() => [TurmaEntity])
  @OneToMany(() => TurmaEntity, (turma) => turma.turmaCategoria)
  turmas!: TurmaEntity[];

  @Field(() => InstituicaoEntity)
  @ManyToOne(
    () => InstituicaoEntity,
    (instituicao) => instituicao.turmaCategorias,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoEntity;

  @Field(() => TurmaCategoriaEntity, { nullable: true })
  @OneToOne(() => TurmaCategoriaEntity)
  @JoinColumn({ name: 'id_tur_cat_pai_fk', referencedColumnName: 'id' })
  turmaCategoriaPai!: TurmaCategoriaEntity | null;
}
