import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UnidadeEstudantil')
export class UnidadeEstudantilEntity {
  @PrimaryGeneratedColumn({ name: 'id_ue' })
  id!: number;

  @Column({ name: 'nome_ue' })
  nome: string;

  @Column({ name: 'apelido_ue' })
  apelido: string;

  @Column({ name: 'sigla_ue' })
  sigla: string;
}
