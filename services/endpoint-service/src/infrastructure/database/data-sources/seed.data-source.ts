import { DataSource, DataSourceOptions } from 'typeorm';
import { getSharedDataSourceOptions } from './config/getSharedDataSourceOptions';

const getSeedDataSource = () => {
  const options = {
    ...getSharedDataSourceOptions(),

    migrations: [__dirname + '/../seeds/*{.ts,.js}'],

    migrationsTableName: 'app_migration_seed',
  };

  if (!options.type) {
    return null;
  }

  return new DataSource(options as DataSourceOptions);
};

const seedDataSource = getSeedDataSource();

export default seedDataSource;
