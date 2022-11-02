import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './infraestructure/module/auth.module';
import { DatabaseModule } from './infraestructure/module/database.module';
import { UnidadeEstudantilModule } from './infraestructure/module/unidade-estudantil.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UnidadeEstudantilModule,
    DatabaseModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
