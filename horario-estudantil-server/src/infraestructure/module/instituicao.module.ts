import { Module } from '@nestjs/common';
import { AulaResolver } from 'src/app/resolvers/aula.resolver';
import { CategoriaTurmaResolver } from 'src/app/resolvers/categoria-turma.resolver';
import { EtapaResolver } from 'src/app/resolvers/etapa.resolver';
import { EventoResolver } from 'src/app/resolvers/evento.resolver';
import { MateriaResolver } from 'src/app/resolvers/materia.resolver';
import { PeriodoLetivoResolver } from 'src/app/resolvers/periodo-letivo.resolver';
import { ProfessorResolver } from 'src/app/resolvers/professor.resolver';
import { SemanaResolver } from 'src/app/resolvers/semana.resolver';
import { TurmaResolver } from 'src/app/resolvers/turma.resolver';
import { InstituicaoMembershipResolver } from 'src/app/resolvers/instituicao-membership.resolver';
import { InstituicaoResolver } from 'src/app/resolvers/instituicao.resolver';
import { UsuarioResolver } from 'src/app/resolvers/usuario.resolver';
import { AulaService } from 'src/domain/services/aula.service';
import { EtapaService } from 'src/domain/services/etapa.service';
import { EventoService } from 'src/domain/services/evento.service';
import { MateriaService } from 'src/domain/services/materia.service';
import { PeriodoLetivoService } from 'src/domain/services/periodo-letivo.service';
import { ProfessorService } from 'src/domain/services/professor.service';
import { SemanaService } from 'src/domain/services/semana.service';
import { TurmaService } from 'src/domain/services/turma.service';
import { InstituicaoMembershipService } from 'src/domain/services/instituicao-membership.service';
import { UsuarioService } from 'src/domain/services/usuario.service';
import { InstituicaoService } from '../../domain/services/instituicao.service';

import { CategoriaTurmaService } from 'src/domain/services/categoria-turma.service';
import { DatabaseModule } from './database.module';
import { SearchModule } from './search.module';

@Module({
  imports: [DatabaseModule, SearchModule],
  controllers: [],
  providers: [
    //

    AulaService,
    EtapaService,
    EventoService,
    CategoriaTurmaService,
    MateriaService,
    PeriodoLetivoService,
    ProfessorService,
    SemanaService,
    TurmaService,
    InstituicaoMembershipService,
    InstituicaoService,
    UsuarioService,

    //

    AulaResolver,
    EtapaResolver,
    EventoResolver,
    CategoriaTurmaResolver,
    MateriaResolver,
    PeriodoLetivoResolver,
    ProfessorResolver,
    SemanaResolver,
    TurmaResolver,
    InstituicaoMembershipResolver,
    InstituicaoResolver,
    UsuarioResolver,
  ],
})
export class InstituicaoModule {}
