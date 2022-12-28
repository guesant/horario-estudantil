import { getUsuarioRepository } from 'src/app/repositories/usuario.repository';
import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../constants/DATA_SOURCE';
import { REPOSITORY_USUARIO } from '../constants/REPOSITORY_USUARIO';
import { Provider } from '@nestjs/common';
import { getCargoRepository } from '../../../app/repositories/cargo.repository';
import { REPOSITORY_CARGO } from '../constants/REPOSITORY_CARGO';
import { getPermissaoRepository } from '../../../app/repositories/permissao.repository';
import { REPOSITORY_PERMISSAO } from '../constants/REPOSITORY_PERMISSAO';
import { REPOSITORY_CARGO_HAS_PERMISSAO } from '../constants/REPOSITORY_CARGO_HAS_PERMISSAO';
import { getCargoHasPermissaoRepository } from '../../../app/repositories/cargo-has-permissao.repository';

const makeRepositoryProvider = <R extends Repository<any>>(
  key: any,
  factory: (dataSource: DataSource) => R,
): Provider => ({
  provide: key,
  useFactory: (dataSource: DataSource) => factory(dataSource),
  inject: [DATA_SOURCE],
});

const repositoryPermissaoProvider = makeRepositoryProvider(
  REPOSITORY_PERMISSAO,
  getPermissaoRepository,
);

const repositoryCargoProvider = makeRepositoryProvider(
  REPOSITORY_CARGO,
  getCargoRepository,
);

const repositoryCargoHasPermissaoProvider = makeRepositoryProvider(
  REPOSITORY_CARGO_HAS_PERMISSAO,
  getCargoHasPermissaoRepository,
);

const repositoryUsuarioProvider = makeRepositoryProvider(
  REPOSITORY_USUARIO,
  getUsuarioRepository,
);

export const repositoriesProviders = [
  repositoryUsuarioProvider,
  repositoryPermissaoProvider,
  repositoryCargoProvider,
  repositoryCargoHasPermissaoProvider,
];
