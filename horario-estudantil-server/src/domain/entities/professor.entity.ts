import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Professor')
export class ProfessorEntity {
  @PrimaryGeneratedColumn({ name: 'id_prof' })
  id!: number;

  @Column({ name: 'nome_prof' })
  nome: string;
}
