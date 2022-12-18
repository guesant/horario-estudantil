import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoDbEntity } from './apelido.db.entity';
import { AulaDbEntity } from './aula.db.entity';
import { Materia } from '@horario-estudantil/schemas';

@Entity('Materia')
export class MateriaDbEntity implements Materia {
  @PrimaryGeneratedColumn({ name: 'id_mat' })
  id!: number;

  @OneToMany(() => ApelidoDbEntity, (apelido) => apelido.materia)
  apelidos!: ApelidoDbEntity[];

  @OneToMany(() => AulaDbEntity, (aula) => aula.materia)
  aulas!: AulaDbEntity[];
}
