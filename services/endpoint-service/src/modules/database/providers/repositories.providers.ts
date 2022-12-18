import { getApelidoRepository } from 'src/modules/app/repositories/apelido.repository';
import { getAulaTurmaRepository } from 'src/modules/app/repositories/aula-turma.repository';
import { getAulaRepository } from 'src/modules/app/repositories/aula.repository';
import { getCategoriaTurmaRepository } from 'src/modules/app/repositories/turma-categoria.repository';
import { getEtapaRepository } from 'src/modules/app/repositories/etapa.repository';
import { getEventoRepository } from 'src/modules/app/repositories/evento.repository';
import { getMateriaRepository } from 'src/modules/app/repositories/materia.repository';
import { getPeriodoLetivoRepository } from 'src/modules/app/repositories/periodo-letivo.repository';
import { getProfessorRepository } from 'src/modules/app/repositories/professor.repository';
import { getTurmaRepository } from 'src/modules/app/repositories/turma.repository';
import { getInstituicaoMembershipRepository } from 'src/modules/app/repositories/instituicao-membership.repository';
import { getInstituicaoRepository } from 'src/modules/app/repositories/instituicao.repository';
import { getUsuarioRepository } from 'src/modules/app/repositories/usuario.repository';
import { DataSource } from 'typeorm';
import {
  REPOSITORY_APELIDO,
  REPOSITORY_AULA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
  REPOSITORY_CATEGORIA_TURMA,
  REPOSITORY_ETAPA,
  REPOSITORY_EVENTO,
  REPOSITORY_INSTITUICAO,
  REPOSITORY_INSTITUICAO_MEMBERSHIP,
  REPOSITORY_MATERIA,
  REPOSITORY_PERIODO_LETIVO,
  REPOSITORY_PROFESSOR,
  REPOSITORY_TURMA,
  REPOSITORY_USUARIO,
} from '../constants/REPOSITORIES';
import { DATA_SOURCE } from '../constants/DATA_SOURCE';

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
