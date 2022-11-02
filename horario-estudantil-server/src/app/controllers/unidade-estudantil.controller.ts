import {
  Body,
  Controller,
  Get,
  NotImplementedException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';

@Controller('unidade-estudantil')
export class UnidadeEstudantilController {
  constructor(
    private readonly unidadeEstudantilService: UnidadeEstudantilService,
  ) {}

  @Post('')
  performBatchOperations(@Body() batchOperations: any) {
    return {};
  }

  @Get('')
  findAllUnidadesEstudantis() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId')
  findUnidadeEstudantil() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/periodos')
  findAllPeriodosLetivos() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/periodos/:periodoId')
  findPeriodoLetivo(
    @Param('unidadeEstudantilId', ParseIntPipe) unidadeEstudantilId: number,
    @Param('periodoId', ParseIntPipe) periodoId: number,
  ) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/etapas')
  findAllEtapas() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/etapas/:etapaId')
  findEtapa(@Param('etapaId', ParseIntPipe) etapaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/semanas')
  findAllSemanas(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/semanas/:semanaId')
  findSemana(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/materias')
  findAllUnidadeEstudantilMaterias() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/materias/:materiaId')
  findMateria(@Param('materiaId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/professores')
  findAllUnidadeEstudantilProfessores() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/professores/:professorId')
  findProfessor(@Param('professorId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/turmas')
  findAllUnidadeEstudantilTurmas() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/turmas/:turmaId')
  findTurma(@Param('turmaId', ParseIntPipe) turmaId: number) {
    throw new NotImplementedException();
  }
}
