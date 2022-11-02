import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unidade-estudantil')
export class UnidadeEstudantilEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'nome_ue' })
  nome: string;

  @Column({ name: 'apelido_ue' })
  apelido: string;

  @Column({ name: 'sigla_ue' })
  sigla: string;
}
