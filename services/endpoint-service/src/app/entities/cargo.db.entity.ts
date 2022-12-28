import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cargo } from '@horario-estudantil/schemas';
import { CargoHasPermissaoDbEntity } from './cargo-has-permissao.db.entity';
import { PermissaoDbEntity } from './permissao.db.entity';
import { UsuarioDbEntity } from './usuario.db.entity';

@Entity('cargo')
export class CargoDbEntity implements Cargo {
  @PrimaryGeneratedColumn({ name: 'id_car' })
  id!: number;

  @OneToMany(() => UsuarioDbEntity, (entity) => entity.cargo)
  usuarios!: UsuarioDbEntity[];

  @OneToMany(() => CargoHasPermissaoDbEntity, (entity) => entity.cargo)
  relationsCargoHasPermissao!: CargoHasPermissaoDbEntity[];

  permissoes!: PermissaoDbEntity[];
}
