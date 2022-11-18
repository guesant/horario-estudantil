import { DataSource } from 'typeorm';

export const getDataSource = () => {
  const DATABASE_CONNECTION = process.env.DATABASE_CONNECTION;

  const dataSource = new DataSource({
    synchronize: false,

    type: 'postgres',
    url: DATABASE_CONNECTION,

    logging: ['warn', 'error', 'migration', 'schema'],

    entities: [__dirname + '/../../domain/entities/*{.ts,.js}'],
    subscribers: [__dirname + '/../../domain/subscribers/*{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],

    migrationsTableName: 'app_migration',
  });

  return dataSource;
};

export default getDataSource();
