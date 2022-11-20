import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoMembershipEntity } from './instituicao-membership.entity';

@Entity('Usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'keycloak_id_usu' })
  keycloakId!: string;

  @Column({ name: 'nome_usu' })
  nome!: string;

  @OneToMany(
    () => InstituicaoMembershipEntity,
    (membership) => membership.usuario,
  )
  instituicaoMemberships: InstituicaoMembershipEntity[];
}
