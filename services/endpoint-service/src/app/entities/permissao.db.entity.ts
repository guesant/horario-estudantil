import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Permissao } from '@horario-estudantil/schemas';
import { CargoHasPermissaoDbEntity } from './cargo-has-permissao.db.entity';

@Entity('permissao')
export class PermissaoDbEntity implements Permissao {
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @Column({ name: 'receita_per' })
  receita!: string;

  @OneToMany(() => CargoHasPermissaoDbEntity, (entity) => entity.permissao)
  relationsCargoHasPermissao!: CargoHasPermissaoDbEntity[];
}
