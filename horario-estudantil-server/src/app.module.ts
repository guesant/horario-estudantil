import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UnidadeEstudantilModule } from './UnidadeEstudantil/UnidadeEstudantilModule';

@Module({
  imports: [UnidadeEstudantilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
