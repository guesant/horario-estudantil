import { getUnidadeEstudantilRepository } from 'src/domain/repositories/unidade-estudantil.repository';
import { DataSource } from 'typeorm';
import { DATA_SOURCE, UNIDADE_ESTUDANTIL_REPOSITORY } from '../constants';

export const unidadeEstudantilProviders = [
  {
    provide: UNIDADE_ESTUDANTIL_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      getUnidadeEstudantilRepository(dataSource),
    inject: [DATA_SOURCE],
  },
];
