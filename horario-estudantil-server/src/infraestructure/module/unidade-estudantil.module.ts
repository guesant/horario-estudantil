import { Module } from '@nestjs/common';
import { AulaResolver } from 'src/app/resolvers/aula.resolver';
import { EtapaResolver } from 'src/app/resolvers/etapa.resolver';
import { EventoResolver } from 'src/app/resolvers/evento.resolver';
import { GrupoResolver } from 'src/app/resolvers/grupo.resolver';
import { MateriaResolver } from 'src/app/resolvers/materia.resolver';
import { PeriodoLetivoResolver } from 'src/app/resolvers/periodo-letivo.resolver';
import { ProfessorResolver } from 'src/app/resolvers/professor.resolver';
import { SemanaResolver } from 'src/app/resolvers/semana.resolver';
import { TurmaResolver } from 'src/app/resolvers/turma.resolver';
import { UnidadeEstudantilMembershipResolver } from 'src/app/resolvers/unidade-estudantil-membership.resolver';
import { UnidadeEstudantilResolver } from 'src/app/resolvers/unidade-estudantil.resolver';
import { UsuarioResolver } from 'src/app/resolvers/usuario.resolver';
import { AulaService } from 'src/domain/services/aula.service';
import { EtapaService } from 'src/domain/services/etapa.service';
import { EventoService } from 'src/domain/services/evento.service';
import { GrupoService } from 'src/domain/services/grupo.service';
import { MateriaService } from 'src/domain/services/materia.service';
import { PeriodoLetivoService } from 'src/domain/services/periodo-letivo.service';
import { ProfessorService } from 'src/domain/services/professor.service';
import { SemanaService } from 'src/domain/services/semana.service';
import { TurmaService } from 'src/domain/services/turma.service';
import { UnidadeEstudantilMembershipService } from 'src/domain/services/unidade-estudantil-membership.service';
import { UsuarioService } from 'src/domain/services/usuario.service';
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
    EventoService,
    GrupoService,
    MateriaService,
    PeriodoLetivoService,
    ProfessorService,
    SemanaService,
    TurmaService,
    UnidadeEstudantilMembershipService,
    UnidadeEstudantilService,
    UsuarioService,

    //

    AulaResolver,
    EtapaResolver,
    EventoResolver,
    GrupoResolver,
    MateriaResolver,
    PeriodoLetivoResolver,
    ProfessorResolver,
    SemanaResolver,
    TurmaResolver,
    UnidadeEstudantilMembershipResolver,
    UnidadeEstudantilResolver,
    UsuarioResolver,
  ],
})
export class UnidadeEstudantilModule {}
