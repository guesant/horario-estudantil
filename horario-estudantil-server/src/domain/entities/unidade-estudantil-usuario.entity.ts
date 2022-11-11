import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';
import { UsuarioEntity } from './usuario.entity';

@Entity('UnidadeEstudantil_Usuario')
export class UnidadeEstudantilUsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_ue_usu' })
  id!: number;

  @ManyToOne(
    () => UsuarioEntity,
    (usuario) => usuario.unidadeEstudantilMemberships,
  )
  usuario: UsuarioEntity;

  @ManyToOne(
    () => UnidadeEstudantilEntity,
    (unidadeEstudantil) => unidadeEstudantil.memberships,
  )
  unidadeEstudantil: UnidadeEstudantilEntity;
}
