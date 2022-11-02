import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infraestructure/module/database.module';
import { UnidadeEstudantilModule } from './infraestructure/module/unidade-estudantil.module';

@Module({
  imports: [ConfigModule.forRoot(), UnidadeEstudantilModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
