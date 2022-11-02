import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('UnidadeEstudantil_Usuario')
export class UnidadeEstudantilEntity {
  @PrimaryGeneratedColumn({ name: 'id_ue_usu' })
  id!: number;

  @ManyToOne(() => UsuarioEntity)
  usuario: UsuarioEntity;

  @ManyToOne(() => UnidadeEstudantilEntity)
  unidadeEstudantil: UnidadeEstudantilEntity;
}
