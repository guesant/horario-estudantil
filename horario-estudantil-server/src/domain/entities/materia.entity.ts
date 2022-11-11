import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaEntity } from './aula.entity';

@Entity('Materia')
export class MateriaEntity {
  @PrimaryGeneratedColumn({ name: 'id_mat' })
  id!: number;

  @Column({ name: 'nome_mat' })
  nome: string;

  @OneToMany(() => AulaEntity, (aula) => aula.materia)
  aulas: AulaEntity[];

  @OneToMany(() => ApelidoEntity, (apelido) => apelido.materia)
  apelidos: ApelidoEntity[];
}
