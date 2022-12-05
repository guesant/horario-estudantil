import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoEntity } from './instituicao.entity';
import { UserEntity } from './user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Instituicao_Membership')
@Entity('Instituicao_Membership')
export class InstituicaoMembershipEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ name: 'id_ins_mem' })
  id!: number;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (usuario) => usuario.memberships)
  @JoinColumn({ name: 'id_usu_fk', referencedColumnName: 'id' })
  usuario!: UserEntity;

  @Field(() => InstituicaoEntity)
  @ManyToOne(() => InstituicaoEntity, (instituicao) => instituicao.memberships)
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoEntity;
}
