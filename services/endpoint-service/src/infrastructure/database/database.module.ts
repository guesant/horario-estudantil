import { Module } from '@nestjs/common';
import { repositoriesProviders } from './providers/repositories.providers';
import { databaseProviders } from './providers/database.providers';

@Module({
  providers: [...databaseProviders, ...repositoriesProviders],
  exports: [...databaseProviders, ...repositoriesProviders],
})
export class DatabaseModule {}
