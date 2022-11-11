import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UnidadeEstudantilMembershipEntity } from './unidade-estudantil-membership.entity';

@Entity('Usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'keycloak_id_usu' })
  keycloakId!: string;

  @Column({ name: 'nome_usu' })
  nome!: string;

  @OneToMany(
    () => UnidadeEstudantilMembershipEntity,
    (membership) => membership.usuario,
  )
  unidadeEstudantilMemberships: UnidadeEstudantilMembershipEntity[];
}
