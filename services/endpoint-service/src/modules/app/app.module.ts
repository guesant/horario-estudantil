import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HttpExceptionFilter } from './exception-filters/HttpExceptionFilter';
import { IS_PRODUCTION_MODE } from '../constants';
import { InstituicaoModule } from './modules/instituicao.module';
import { SearchModule } from '../search/search.module';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      debug: false,
      playground: !IS_PRODUCTION_MODE,

      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),

    SearchModule,
    InstituicaoModule,
    DatabaseModule,
    AuthModule,
  ],

  controllers: [],

  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
