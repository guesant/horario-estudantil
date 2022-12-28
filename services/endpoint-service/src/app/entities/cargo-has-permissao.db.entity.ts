import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PermissaoDbEntity } from './permissao.db.entity';
import { CargoDbEntity } from './cargo.db.entity';

@Entity('cargo_has_permissao')
export class CargoHasPermissaoDbEntity {
  @PrimaryGeneratedColumn({ name: 'id_car_per' })
  id!: number;

  @ManyToOne(() => CargoDbEntity)
  @JoinColumn({ name: 'id_car_fk' })
  cargo!: CargoDbEntity;

  @ManyToOne(() => PermissaoDbEntity)
  @JoinColumn({ name: 'id_per_fk' })
  permissao!: PermissaoDbEntity;
}
