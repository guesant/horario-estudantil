import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoriaTurmaDbEntity } from './categoria-turma.db.entity';
import { PeriodoLetivoDbEntity } from './periodo-letivo.db.entity';
import { InstituicaoMembershipDbEntity } from './instituicao-membership.db.entity';
import { Instituicao } from '@horario-estudantil/schemas';

@Entity('Instituicao')
export class InstituicaoDbEntity implements Instituicao {
  @PrimaryGeneratedColumn({ name: 'id_ins' })
  id!: number;

  @Column({ name: 'nome_ins' })
  nome!: string;

  @Column({ name: 'sigla_ins' })
  sigla!: string;

  @Column({ name: 'apelido_ins' })
  apelido!: string;

  @OneToMany(() => CategoriaTurmaDbEntity, (grupo) => grupo.instituicao)
  categoriasTurma!: CategoriaTurmaDbEntity[];

  @OneToMany(
    () => InstituicaoMembershipDbEntity,
    (membership) => membership.instituicao,
  )
  memberships!: InstituicaoMembershipDbEntity[];

  @OneToMany(
    () => PeriodoLetivoDbEntity,
    (periodosLetivos) => periodosLetivos.instituicao,
  )
  periodosLetivos!: PeriodoLetivoDbEntity[];

  @UpdateDateColumn({
    name: 'data_last_update_ins',
    nullable: true,
    type: 'timestamptz',
  })
  lastUpdate!: Date | null;

  @Column({
    name: 'data_last_search_sync_ins',
    nullable: true,
    type: 'timestamptz',
  })
  lastSearchSync!: Date | null;
}
