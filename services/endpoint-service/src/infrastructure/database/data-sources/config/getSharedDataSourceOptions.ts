import { DataSourceOptions } from 'typeorm';

export const getSharedDataSourceOptions = (): Partial<DataSourceOptions> => {
  const sharedEnvConfig = {};

  const DB_CONNECTION = process.env.DB_CONNECTION;

  if (DB_CONNECTION !== undefined) {
    const DB_HOST = process.env.DB_HOST;
    const DB_PORT = process.env.DB_PORT;
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_DATABASE = process.env.DB_DATABASE;
    const DB_SCHEMA = process.env.DB_SCHEMA;
    const TYPEORM_LOGGING = process.env.TYPEORM_LOGGING;

    const DATABASE_URL = process.env.DATABASE_URL;
    const DATABASE_USE_SSL = process.env.DATABASE_USE_SSL;

    Object.assign(sharedEnvConfig, {
      type: DB_CONNECTION,

      host: DB_HOST,
      port: DB_PORT && parseInt(DB_PORT),

      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      schema: DB_SCHEMA,

      synchronize: false,

      logging: TYPEORM_LOGGING,
    } as Partial<DataSourceOptions>);

    if (DATABASE_URL) {
      Object.assign(sharedEnvConfig, {
        url: DATABASE_URL,
      });
    }

    if (DATABASE_USE_SSL !== 'false') {
      Object.assign(sharedEnvConfig, {
        options: {
          validateConnection: false,
          trustServerCertificate: true,
        },

        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      });
    }
  }

  return {
    ...sharedEnvConfig,
  };
};
