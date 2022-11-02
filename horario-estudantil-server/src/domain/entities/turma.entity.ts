import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Turma')
export class TurmaEntity {
  @PrimaryGeneratedColumn({ name: 'id_tur' })
  id!: number;
}
