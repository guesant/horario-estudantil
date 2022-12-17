import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EtapaDbEntity } from './etapa.db.entity';
import { InstituicaoDbEntity } from './instituicao.db.entity';
import { PeriodoLetivo } from '@horario-estudantil/schemas';

@Entity('PeriodoLetivo')
export class PeriodoLetivoDbEntity implements PeriodoLetivo {
  @PrimaryGeneratedColumn({ name: 'id_per' })
  id!: number;

  @OneToMany(() => EtapaDbEntity, (etapa) => etapa.periodoLetivo)
  etapas!: EtapaDbEntity[];

  @ManyToOne(
    () => InstituicaoDbEntity,
    (instituicao) => instituicao.periodosLetivos,
  )
  @JoinColumn({ name: 'id_ins_fk', referencedColumnName: 'id' })
  instituicao!: InstituicaoDbEntity;
}
