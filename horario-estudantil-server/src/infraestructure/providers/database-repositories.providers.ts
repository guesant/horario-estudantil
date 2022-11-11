import { getApelidoRepository } from 'src/domain/repositories/apelido.repository';
import { getAulaTurmaRepository } from 'src/domain/repositories/aula-turma.repository';
import { getAulaRepository } from 'src/domain/repositories/aula.repository';
import { getEtapaRepository } from 'src/domain/repositories/etapa.repository';
import { getEventoRepository } from 'src/domain/repositories/evento.repository';
import { getGrupoRepository } from 'src/domain/repositories/grupo.repository';
import { getMateriaRepository } from 'src/domain/repositories/materia.repository';
import { getPeriodoLetivoRepository } from 'src/domain/repositories/periodo-letivo.repository';
import { getProfessorRepository } from 'src/domain/repositories/professor.repository';
import { getSemanaRepository } from 'src/domain/repositories/semana.repository';
import { getTurmaRepository } from 'src/domain/repositories/turma.repository';
import { getUnidadeEstudantilMembershipRepository } from 'src/domain/repositories/unidade-estudantil-membership.repository';
import { getUnidadeEstudantilRepository } from 'src/domain/repositories/unidade-estudantil.repository';
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
  REPOSITORY_GRUPO,
  REPOSITORY_MATERIA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_PROFESSOR,
  REPOSITORY_SEMANA,
  REPOSITORY_TURMA,
  REPOSITORY_UNIDADE_ESTUDANTIL,
  REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
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
    provide: REPOSITORY_UNIDADE_ESTUDANTIL,
    useFactory: (dataSource: DataSource) => {
      return getUnidadeEstudantilRepository(dataSource);
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
    provide: REPOSITORY_UNIDADE_ESTUDANTIL_MEMBERSHIP,
    useFactory: (dataSource: DataSource) => {
      return getUnidadeEstudantilMembershipRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
  {
    provide: REPOSITORY_GRUPO,
    useFactory: (dataSource: DataSource) => {
      return getGrupoRepository(dataSource);
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
