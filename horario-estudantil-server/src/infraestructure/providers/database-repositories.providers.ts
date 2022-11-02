import { getUnidadeEstudantilRepository } from 'src/domain/repositories/unidade-estudantil.repository';
import { getUsuarioRepository } from 'src/domain/repositories/usuario.repository';
import { DataSource } from 'typeorm';
import {
  DATA_SOURCE,
  UNIDADE_ESTUDANTIL_REPOSITORY,
  USUARIO_REPOSITORY,
} from '../constants';

export const unidadeEstudantilProviders = [
  {
    provide: UNIDADE_ESTUDANTIL_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return getUnidadeEstudantilRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
];

export const usuarioProviders = [
  {
    provide: USUARIO_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return getUsuarioRepository(dataSource);
    },
    inject: [DATA_SOURCE],
  },
];
