import { DataSource, DataSourceOptions } from 'typeorm';
import { getSharedDataSourceOptions } from './config/getSharedDataSourceOptions';

export const getAppDataSource = () => {
  const options = {
    ...getSharedDataSourceOptions(),

    entities: [__dirname + '/../../../app/entities/*{.ts,.js}'],
    subscribers: [__dirname + '/../../../app/subscribers/*{.ts,.js}'],
  };

  if (!options.type) {
    return null;
  }

  return new DataSource(options as DataSourceOptions);
};

const appDataSource = getAppDataSource();

export default appDataSource;
