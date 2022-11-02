import { Provider } from '@nestjs/common';
import { DATA_SOURCE } from '../constants';
import { getDataSource } from '../database/data-source';

export const databaseProviders: Provider[] = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = getDataSource();
      return dataSource.initialize();
    },
  },
];
