import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GrupoEntity } from './grupo.entity';
import { PeriodoLetivoEntity } from './periodo-letivo.entity';
import { UnidadeEstudantilUsuarioEntity } from './unidade-estudantil-usuario.entity';

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
    () => UnidadeEstudantilUsuarioEntity,
    (obj) => obj.unidadeEstudantil,
  )
  memberships: UnidadeEstudantilUsuarioEntity[];

  @OneToMany(
    () => PeriodoLetivoEntity,
    (periodosLetivos) => periodosLetivos.unidadeEstudantil,
  )
  periodosLetivos: PeriodoLetivoEntity[];
}
