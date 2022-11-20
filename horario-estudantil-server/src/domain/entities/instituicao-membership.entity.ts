import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoEntity } from './instituicao.entity';
import { UsuarioEntity } from './usuario.entity';

@Entity('Instituicao_Membership')
export class InstituicaoMembershipEntity {
  @PrimaryGeneratedColumn({ name: 'id_insF_mem' })
  id!: number;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.instituicaoMemberships)
  @JoinColumn({ name: 'id_usu_fk', referencedColumnName: 'id' })
  usuario: UsuarioEntity;

  @ManyToOne(() => InstituicaoEntity, (instituicao) => instituicao.memberships)
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao: InstituicaoEntity;
}
