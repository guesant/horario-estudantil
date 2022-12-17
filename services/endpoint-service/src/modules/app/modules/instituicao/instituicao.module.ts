import { Module } from '@nestjs/common';
import { AulaResolver } from 'src/modules/app/modules/instituicao/modules/aula/aula.resolver';
import { CategoriaTurmaResolver } from 'src/modules/app/modules/instituicao/modules/categoria-turma/categoria-turma.resolver';
import { EtapaResolver } from 'src/modules/app/modules/instituicao/modules/etapa/etapa.resolver';
import { EventoResolver } from 'src/modules/app/modules/instituicao/modules/evento/evento.resolver';
import { MateriaResolver } from 'src/modules/app/modules/instituicao/modules/materia/materia.resolver';
import { PeriodoLetivoResolver } from 'src/modules/app/modules/instituicao/modules/periodo-letivo/periodo-letivo.resolver';
import { ProfessorResolver } from 'src/modules/app/modules/instituicao/modules/professor/professor.resolver';
import { TurmaResolver } from 'src/modules/app/modules/instituicao/modules/turma/turma.resolver';
import { InstituicaoMembershipResolver } from 'src/modules/app/modules/instituicao/modules/instituicao-membership/instituicao-membership.resolver';
import { InstituicaoResolver } from 'src/modules/app/modules/instituicao/instituicao.resolver';
import { UserResolver } from 'src/modules/app/modules/user/user.resolver';
import { AulaService } from 'src/modules/app/modules/instituicao/modules/aula/aula.service';
import { EtapaService } from 'src/modules/app/modules/instituicao/modules/etapa/etapa.service';
import { EventoService } from 'src/modules/app/modules/instituicao/modules/evento/evento.service';
import { MateriaService } from 'src/modules/app/modules/instituicao/modules/materia/materia.service';
import { PeriodoLetivoService } from 'src/modules/app/modules/instituicao/modules/periodo-letivo/periodo-letivo.service';
import { ProfessorService } from 'src/modules/app/modules/instituicao/modules/professor/professor.service';
import { TurmaService } from 'src/modules/app/modules/instituicao/modules/turma/turma.service';
import { InstituicaoMembershipService } from 'src/modules/app/modules/instituicao/modules/instituicao-membership/instituicao-membership.service';
import { UserService } from 'src/modules/app/modules/user/user.service';
import { CategoriaTurmaService } from 'src/modules/app/modules/instituicao/modules/categoria-turma/categoria-turma.service';
import { DatabaseModule } from '../../../database/database.module';
import { SearchModule } from '../../../search/search.module';
import { InstituicaoService } from './instituicao.service';

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
    TurmaService,
    InstituicaoMembershipService,
    InstituicaoService,
    UserService,

    //

    AulaResolver,
    EtapaResolver,
    EventoResolver,
    CategoriaTurmaResolver,
    MateriaResolver,
    PeriodoLetivoResolver,
    ProfessorResolver,
    TurmaResolver,
    InstituicaoMembershipResolver,
    InstituicaoResolver,
    UserResolver,
  ],
})
export class InstituicaoModule {}
