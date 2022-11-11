import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaProfessorEntity } from './aula-professor.entity';

@Entity('Professor')
export class ProfessorEntity {
  @PrimaryGeneratedColumn({ name: 'id_prof' })
  id!: number;

  @Column({ name: 'nome_prof' })
  nome: string;

  @OneToMany(() => ApelidoEntity, (apelido) => apelido.professor)
  apelidos: ApelidoEntity[];

  @OneToMany(
    () => AulaProfessorEntity,
    (aulaProfessorRelation) => aulaProfessorRelation.professor,
  )
  aulaProfessorRelations: AulaProfessorEntity[];
}
