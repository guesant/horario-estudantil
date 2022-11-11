import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApelidoEntity } from './apelido.entity';
import { AulaTurmaEntity } from './aula-turma.entity';
import { GrupoEntity } from './grupo.entity';

@Entity('Turma')
export class TurmaEntity {
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;

  @OneToMany(() => ApelidoEntity, (apelido) => apelido.turma)
  apelidos: ApelidoEntity[];

  @OneToMany(
    () => AulaTurmaEntity,
    (aulaTurmaRelation) => aulaTurmaRelation.turma,
  )
  aulaTurmaRelations: AulaTurmaEntity[];

  @ManyToOne(() => GrupoEntity, (grupo) => grupo.turmas)
  grupo: GrupoEntity | null;
}
