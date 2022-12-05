import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TurmaCategoriaEntity } from './turma-categoria.entity';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { InstituicaoMembershipEntity } from './instituicao-membership.entity';
import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@Entity('Instituicao')
@ObjectType('Instituicao')
export class InstituicaoEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_ins' })
  id!: number;

  @Field()
  @Column({ name: 'nome_ins' })
  nome!: string;

  @Field()
  @Column({ name: 'sigla_ins' })
  sigla!: string;

  @Field()
  @Column({ name: 'apelido_ins' })
  apelido!: string;

  @Field(() => [TurmaCategoriaEntity])
  @OneToMany(() => TurmaCategoriaEntity, (grupo) => grupo.instituicao)
  turmaCategorias!: TurmaCategoriaEntity[];

  @Field(() => [InstituicaoMembershipEntity])
  @OneToMany(
    () => InstituicaoMembershipEntity,
    (membership) => membership.instituicao,
  )
  memberships!: InstituicaoMembershipEntity[];

  @Field(() => [PeriodoLetivoEntity])
  @OneToMany(
    () => PeriodoLetivoEntity,
    (periodosLetivos) => periodosLetivos.instituicao,
  )
  periodosLetivos!: PeriodoLetivoEntity[];

  @Field(() => GraphQLISODateTime, { nullable: true })
  @UpdateDateColumn({
    name: 'data_last_update_ins',
    nullable: true,
    type: 'timestamptz',
  })
  lastUpdate!: Date | null;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @Column({
    name: 'data_last_search_sync_ins',
    nullable: true,
    type: 'timestamptz',
  })
  lastSearchSync!: Date | null;
}
