import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IS_PRODUCTION_MODE } from './infraestructure/constants';
import { AuthModule } from './infraestructure/module/auth.module';
import { DatabaseModule } from './infraestructure/module/database.module';
import { UnidadeEstudantilModule } from './infraestructure/module/unidade-estudantil.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,

      debug: !IS_PRODUCTION_MODE,
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

    UnidadeEstudantilModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
