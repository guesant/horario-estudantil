import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'keycloak_id_usu' })
  keycloakId!: string;

  @Column({ name: 'nome_usu' })
  nome!: string;
}
