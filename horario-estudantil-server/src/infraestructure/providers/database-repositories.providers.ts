import { getApelidoRepository } from 'src/domain/repositories/apelido.repository';
import { getAulaTurmaRepository } from 'src/domain/repositories/aula-turma.repository';
import { getAulaRepository } from 'src/domain/repositories/aula.repository';
import { getCategoriaTurmaRepository } from 'src/domain/repositories/categoria-turma.repository';
import { getEtapaRepository } from 'src/domain/repositories/etapa.repository';
import { getEventoRepository } from 'src/domain/repositories/evento.repository';
import { getMateriaRepository } from 'src/domain/repositories/materia.repository';
import { getPeriodoLetivoRepository } from 'src/domain/repositories/periodo-letivo.repository';
import { getProfessorRepository } from 'src/domain/repositories/professor.repository';
import { getSemanaRepository } from 'src/domain/repositories/semana.repository';
import { getTurmaRepository } from 'src/domain/repositories/turma.repository';
import { getInstituicaoMembershipRepository } from 'src/domain/repositories/instituicao-membership.repository';
import { getInstituicaoRepository } from 'src/domain/repositories/instituicao.repository';
import { getUsuarioRepository } from 'src/domain/repositories/usuario.repository';
import { DataSource } from 'typeorm';
import {
  DATA_SOURCE,
  REPOSITORY_APELIDO,
  REPOSITORY_AULA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
  REPOSITORY_ETAPA,
  REPOSITORY_EVENTO,
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_MATERIA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_PROFESSOR,
  REPOSITORY_SEMANA,
  REPOSITORY_TURMA,
  REPOSITORY_INSTITUICAO,
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
  REPOSITORY_USUARIO,
} from '../constants';

export const databaseRepositoriesProviders = [
  {
    provide: REPOSITORY_APELIDO,
    useFactory: (dataSource: DataSource) => {
      return getApelidoRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_PERIODO_LETIVO,
    useFactory: (dataSource: DataSource) => {
      return getPeriodoLetivoRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_AULA_PROFESSOR,
    useFactory: (dataSource: DataSource) => {
      return getAulaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_PROFESSOR,
    useFactory: (dataSource: DataSource) => {
      return getProfessorRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_AULA,
    useFactory: (dataSource: DataSource) => {
      return getAulaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_SEMANA,
    useFactory: (dataSource: DataSource) => {
      return getSemanaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_AULA_TURMA,
    useFactory: (dataSource: DataSource) => {
      return getAulaTurmaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_TURMA,
    useFactory: (dataSource: DataSource) => {
      return getTurmaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_ETAPA,
    useFactory: (dataSource: DataSource) => {
      return getEtapaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_INSTITUICAO,
    useFactory: (dataSource: DataSource) => {
      return getInstituicaoRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_EVENTO,
    useFactory: (dataSource: DataSource) => {
      return getEventoRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_INSTITUICAO_MEMBERSHIP,
    useFactory: (dataSource: DataSource) => {
      return getInstituicaoMembershipRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_CATEGORIA_TURMA,
    useFactory: (dataSource: DataSource) => {
      return getCategoriaTurmaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_USUARIO,
    useFactory: (dataSource: DataSource) => {
      return getUsuarioRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_MATERIA,
    useFactory: (dataSource: DataSource) => {
      return getMateriaRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
];
