import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoMembershipEntity } from './instituicao-membership.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity('Usuario')
@ObjectType('User')
export class UserEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'keycloak_id_usu' })
  keycloakId!: string;

  @Field()
  @Column({ name: 'nome_usu' })
  nome!: string;

  @OneToMany(
    () => InstituicaoMembershipEntity,
    (membership) => membership.usuario,
  )
  memberships!: InstituicaoMembershipEntity[];
}
