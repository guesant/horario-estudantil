import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaEntity } from './aula.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Materia')
@ObjectType('Materia')
export class MateriaEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_mat' })
  id!: number;

  @Field()
  @Column({ name: 'nome_mat' })
  nome!: string;

  @Field(() => [AulaEntity])
  @OneToMany(() => AulaEntity, (aula) => aula.materia)
  aulas!: AulaEntity[];

  @Field(() => [ApelidoEntity])
  @OneToMany(() => ApelidoEntity, (apelido) => apelido.materia)
  apelidos!: ApelidoEntity[];
}
