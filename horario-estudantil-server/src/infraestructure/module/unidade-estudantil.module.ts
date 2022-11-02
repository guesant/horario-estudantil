import { Module } from '@nestjs/common';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';
import { UnidadeEstudantilController } from '../../app/controllers/unidade-estudantil.controller';
import { DatabaseModule } from './database.module';
import { unidadeEstudantilProviders } from '../providers/unidade-estudantil.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadeEstudantilController],
  providers: [UnidadeEstudantilService, ...unidadeEstudantilProviders],
})
export class UnidadeEstudantilModule {}
