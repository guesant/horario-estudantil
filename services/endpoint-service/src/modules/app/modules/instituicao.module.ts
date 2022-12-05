import { Module } from '@nestjs/common';
import { AulaResolver } from 'src/modules/app/modules/instituicao/resolvers/aula.resolver';
import { TurmaCategoriaResolver } from 'src/modules/app/modules/instituicao/resolvers/turma-categoria.resolver';
import { EtapaResolver } from 'src/modules/app/modules/instituicao/resolvers/etapa.resolver';
import { EventoResolver } from 'src/modules/app/modules/instituicao/resolvers/evento.resolver';
import { MateriaResolver } from 'src/modules/app/modules/instituicao/resolvers/materia.resolver';
import { PeriodoLetivoResolver } from 'src/modules/app/modules/instituicao/resolvers/periodo-letivo.resolver';
import { ProfessorResolver } from 'src/modules/app/modules/instituicao/resolvers/professor.resolver';
import { TurmaResolver } from 'src/modules/app/modules/instituicao/resolvers/turma.resolver';
import { InstituicaoMembershipResolver } from 'src/modules/app/modules/instituicao/resolvers/instituicao-membership.resolver';
import { InstituicaoResolver } from 'src/modules/app/modules/instituicao/resolvers/instituicao.resolver';
import { UsuarioResolver } from 'src/modules/app/modules/instituicao/resolvers/usuario.resolver';
import { AulaService } from 'src/modules/app/modules/instituicao/services/aula.service';
import { EtapaService } from 'src/modules/app/modules/instituicao/services/etapa.service';
import { EventoService } from 'src/modules/app/modules/instituicao/services/evento.service';
import { MateriaService } from 'src/modules/app/modules/instituicao/services/materia.service';
import { PeriodoLetivoService } from 'src/modules/app/modules/instituicao/services/periodo-letivo.service';
import { ProfessorService } from 'src/modules/app/modules/instituicao/services/professor.service';
import { TurmaService } from 'src/modules/app/modules/instituicao/services/turma.service';
import { InstituicaoMembershipService } from 'src/modules/app/modules/instituicao/services/instituicao-membership.service';
import { UserService } from 'src/modules/user/user.service';
import { TurmaCategoriaService } from 'src/modules/app/modules/instituicao/services/turma-categoria.service';
import { DatabaseModule } from '../../database/database.module';
import { SearchModule } from '../../search/search.module';
import { InstituicaoService } from './instituicao/services/instituicao.service';

@Module({
  imports: [DatabaseModule, SearchModule],
  controllers: [],
  providers: [
    //

    AulaService,
    EtapaService,
    EventoService,
    TurmaCategoriaService,
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
    TurmaCategoriaResolver,
    MateriaResolver,
    PeriodoLetivoResolver,
    ProfessorResolver,
    TurmaResolver,
    InstituicaoMembershipResolver,
    InstituicaoResolver,
    UsuarioResolver,
  ],
})
export class InstituicaoModule {}
