import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '@horario-estudantil/schemas';
import { CargoDbEntity } from './cargo.db.entity';

@Entity('usuario')
export class UsuarioDbEntity implements Usuario {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @Column({ name: 'kc_id_usu' })
  keycloakId!: string;

  @ManyToOne(() => CargoDbEntity)
  @JoinColumn({ name: 'id_car_fk' })
  cargo!: CargoDbEntity;
}
