import { Provider } from '@nestjs/common';
import { getAppDataSource } from '../data-sources/app.data-source';
import { DATA_SOURCE } from '../constants/DATA_SOURCE';
import { DataSource } from 'typeorm';
import { wait } from '../../wait';

const RETRY_INTERVAL = 5 * 1000;

export const dataSourceProvider: Provider = {
  provide: DATA_SOURCE,
  useFactory: async () => {
    let dataSource: DataSource | null;

    do {
      console.log('[INFO] trying to connect to the database');

      dataSource = getAppDataSource();

      if (dataSource === null) {
        console.log(
          "[INFO] can't connect to the database. trying again in some instants...",
        );
        await wait(RETRY_INTERVAL);
      }
    } while (dataSource === null);

    console.log('[INFO] database connection succeeded');

    return dataSource.initialize();
  },
};

export const databaseProviders = [dataSourceProvider];
