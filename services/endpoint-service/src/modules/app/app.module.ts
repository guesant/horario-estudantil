import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { HttpExceptionFilter } from '../graphql/HttpExceptionFilter';
import { InstituicaoModule } from './modules/instituicao/instituicao.module';
import { SearchModule } from '../search/search.module';
import { DatabaseModule } from '../database/database.module';
import { AuthModule } from '../auth/auth.module';
import { IS_PRODUCTION_MODE } from '../consts/IS_PRODUCTION_MODE.const';
import { ThrottlerModule } from '@nestjs/throttler';
import { DateScalar } from '../graphql/DateScalar';

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

    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
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

    DateScalar,
  ],
})
export class AppModule {}
