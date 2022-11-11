import { Module } from '@nestjs/common';
import { AulaResolver } from 'src/app/resolvers/aula.resolver';
import { EtapaResolver } from 'src/app/resolvers/etapa.resolver';
import { UnidadeEstudantilResolver } from 'src/app/resolvers/unidade-estudantil.resolver';
import { AulaService } from 'src/domain/services/aula.service';
import { EtapaService } from 'src/domain/services/etapa.service';
import { PeriodoLetivoService } from 'src/domain/services/periodo-letivo.service';
import { UnidadeEstudantilController } from '../../app/controllers/unidade-estudantil.controller';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';

import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UnidadeEstudantilController],
  providers: [
    //

    AulaService,
    EtapaService,
    UnidadeEstudantilService,
    PeriodoLetivoService,

    //

    AulaResolver,
    EtapaResolver,
    UnidadeEstudantilResolver,
  ],
})
export class UnidadeEstudantilModule {}
