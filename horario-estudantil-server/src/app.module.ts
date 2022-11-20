import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './app/HttpExceptionFilter';
import { IS_PRODUCTION_MODE } from './infraestructure/constants';
import { AuthModule } from './infraestructure/module/auth.module';
import { DatabaseModule } from './infraestructure/module/database.module';
import { SearchModule } from './infraestructure/module/search.module';
import { InstituicaoModule } from './infraestructure/module/instituicao.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      debug: false,
      playground: !IS_PRODUCTION_MODE,

      typePaths: ['./**/*.graphql'],

      definitions: {
        path: join(
          process.cwd(),
          'src/infraestructure/graphql/interfaces/graphql.ts',
        ),
        outputAs: 'class',
      },
    }),

    SearchModule,

    InstituicaoModule,
    DatabaseModule,
    AuthModule,
  ],

  controllers: [AppController],

  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
