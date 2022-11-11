import { Module } from '@nestjs/common';
import { databaseRepositoriesProviders } from '../providers/database-repositories.providers';
import { databaseProviders } from '../providers/database.providers';

@Module({
  providers: [...databaseProviders, ...databaseRepositoriesProviders],
  exports: [...databaseProviders, ...databaseRepositoriesProviders],
})
export class DatabaseModule {}
