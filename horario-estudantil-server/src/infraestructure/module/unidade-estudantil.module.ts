import { Module } from '@nestjs/common';
import { UnidadeEstudantilController } from '../../app/controllers/unidade-estudantil.controller';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';
import { unidadeEstudantilProviders } from '../providers/database-repositories.providers';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadeEstudantilController],
  providers: [UnidadeEstudantilService, ...unidadeEstudantilProviders],
})
export class UnidadeEstudantilModule {}
