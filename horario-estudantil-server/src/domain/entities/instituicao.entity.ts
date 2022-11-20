import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoriaTurmaEntity } from './catergoria-turma.entity';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { InstituicaoMembershipEntity } from './instituicao-membership.entity';

@Entity('Instituicao')
export class InstituicaoEntity {
  @PrimaryGeneratedColumn({ name: 'id_ins' })
  id!: number;

  @Column({ name: 'nome_ins' })
  nome: string;

  @Column({ name: 'sigla_ins' })
  sigla: string;

  @Column({ name: 'apelido_ins' })
  apelido: string;

  @OneToMany(() => CategoriaTurmaEntity, (grupo) => grupo.instituicao)
  grupos: CategoriaTurmaEntity[];

  @OneToMany(
    () => InstituicaoMembershipEntity,
    (membership) => membership.instituicao,
  )
  memberships: InstituicaoMembershipEntity[];

  @OneToMany(
    () => PeriodoLetivoEntity,
    (periodosLetivos) => periodosLetivos.instituicao,
  )
  periodosLetivos: PeriodoLetivoEntity[];

  @UpdateDateColumn({ name: 'data_last_update_ins' })
  lastUpdate: Date;

  @Column({ name: 'data_last_search_sync_ins' })
  lastSearchSync: Date;
}
