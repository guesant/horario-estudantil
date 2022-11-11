import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GrupoEntity } from './grupo.entity';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { UnidadeEstudantilMembershipEntity } from './unidade-estudantil-membership.entity';

@Entity('UnidadeEstudantil')
export class UnidadeEstudantilEntity {
  @PrimaryGeneratedColumn({ name: 'id_ue' })
  id!: number;

  @Column({ name: 'nome_ue' })
  nome: string;

  @Column({ name: 'sigla_ue' })
  sigla: string;

  @Column({ name: 'apelido_ue' })
  apelido: string;

  @OneToMany(() => GrupoEntity, (grupo) => grupo.unidadeEstudantil)
  grupos: GrupoEntity[];

  @OneToMany(
    () => UnidadeEstudantilMembershipEntity,
    (membership) => membership.unidadeEstudantil,
  )
  memberships: UnidadeEstudantilMembershipEntity[];

  @OneToMany(
    () => PeriodoLetivoEntity,
    (periodosLetivos) => periodosLetivos.unidadeEstudantil,
  )
  periodosLetivos: PeriodoLetivoEntity[];
}
