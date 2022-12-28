import { DataSource, DataSourceOptions } from 'typeorm';
import { getSharedDataSourceOptions } from './config/getSharedDataSourceOptions';

export const getMigrationDataSource = () => {
  const options = {
    ...getSharedDataSourceOptions(),

    migrations: [__dirname + '/../migrations/*{.ts,.js}'],

    migrationsTableName: 'app_migration_db',
  };

  if (!options.type) {
    return null;
  }

  return new DataSource(options as DataSourceOptions);
};

const appMigrationDataSource = getMigrationDataSource();

export default appMigrationDataSource;
