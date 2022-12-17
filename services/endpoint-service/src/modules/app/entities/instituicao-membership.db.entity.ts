import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { InstituicaoDbEntity } from './instituicao.db.entity';
import { UserDbEntity } from './user.db.entity';
import { InstituicaoMembership } from '@horario-estudantil/schemas';

@Entity('Instituicao_Membership')
export class InstituicaoMembershipDbEntity implements InstituicaoMembership {
  @PrimaryGeneratedColumn({ name: 'id_ins_mem' })
  id!: number;

  @ManyToOne(() => UserDbEntity, (usuario) => usuario.memberships)
  @JoinColumn({ name: 'id_usu_fk', referencedColumnName: 'id' })
  usuario!: UserDbEntity;

  @ManyToOne(
    () => InstituicaoDbEntity,
    (instituicao) => instituicao.memberships,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoDbEntity;
}
