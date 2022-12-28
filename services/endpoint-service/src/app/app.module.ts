import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { HttpExceptionFilter } from '../infrastructure/graphql/HttpExceptionFilter';
import { SearchModule } from '../infrastructure/search/search.module';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { AuthModule } from '../infrastructure/auth/auth.module';
import { IS_PRODUCTION_MODE } from '../infrastructure/consts/IS_PRODUCTION_MODE.const';
import { ThrottlerModule } from '@nestjs/throttler';
import { DateScalar } from '../infrastructure/graphql/DateScalar';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AppResolver } from './app.resolver';
import { PermissaoModule } from './modules/permissao/permissao.module';
import { CargoModule } from './modules/cargo/cargo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      introspection: true,
      debug: !IS_PRODUCTION_MODE,
      autoSchemaFile: true,
      // resolvers: { JSON: GraphQLJSON },
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    SearchModule,
    DatabaseModule,
    AuthModule,
    //
    UsuarioModule,
    PermissaoModule,
    CargoModule,
  ],

  controllers: [],

  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    DateScalar,
    AppResolver,
  ],
})
export class AppModule {}
