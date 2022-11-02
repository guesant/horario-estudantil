import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn({ name: 'id_usu' })
  id!: number;

  @PrimaryGeneratedColumn({ name: 'nome_usu' })
  nome!: string;
}
