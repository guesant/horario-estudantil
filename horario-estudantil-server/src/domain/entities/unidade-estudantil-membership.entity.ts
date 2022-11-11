import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UnidadeEstudantilEntity } from './unidade-estudantil.entity';
import { UsuarioEntity } from './usuario.entity';

@Entity('UnidadeEstudantil_Membership')
export class UnidadeEstudantilMembershipEntity {
  @PrimaryGeneratedColumn({ name: 'id_ue_mem' })
  id!: number;

  @ManyToOne(
    () => UsuarioEntity,
    (usuario) => usuario.unidadeEstudantilMemberships,
  )
  @JoinColumn({ name: 'id_usu_fk', referencedColumnName: 'id' })
  usuario: UsuarioEntity;

  @ManyToOne(
    () => UnidadeEstudantilEntity,
    (unidadeEstudantil) => unidadeEstudantil.memberships,
  )
  @JoinColumn({ name: 'id_ue_fk', referencedColumnName: 'id' })
  unidadeEstudantil: UnidadeEstudantilEntity;
}
