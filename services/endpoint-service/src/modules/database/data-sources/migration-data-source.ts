import { DataSource, DataSourceOptions } from 'typeorm';
import { getSharedDataSourceOptions } from './config/getSharedDataSourceOptions';

export const getMigrationDataSource = () => {
  const options = {
    ...getSharedDataSourceOptions(),

    migrations: [__dirname + '/../migrations/*{.ts,.js}'],

    migrationsTableName: 'db_migration_app',
  };

  if (!options.type) {
    return null;
  }

  return new DataSource(options as DataSourceOptions);
};

const migrationDataSource = getMigrationDataSource();

export default migrationDataSource;
