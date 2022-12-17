import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoMembershipDbEntity } from './instituicao-membership.db.entity';
import { User } from '@horario-estudantil/schemas';

@Entity('Usuario')
export class UserDbEntity implements User {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'keycloak_id_usu' })
  keycloakId!: string;

  @Column({ name: 'nome_usu' })
  nome!: string;

  @OneToMany(
    () => InstituicaoMembershipDbEntity,
    (membership) => membership.usuario,
  )
  memberships!: InstituicaoMembershipDbEntity[];
}
