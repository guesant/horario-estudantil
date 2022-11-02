import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Materia')
export class MateriaEntity {
  @PrimaryGeneratedColumn({ name: 'id_mat' })
  id!: number;

  @Column({ name: 'nome_mat' })
  nome: string;
}
