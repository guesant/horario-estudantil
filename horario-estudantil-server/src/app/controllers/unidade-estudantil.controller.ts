import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUnidadeEstudantilDto } from '../../domain/dto/create-unidade-estudantil.dto';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';

@Controller('unidade-estudantil')
export class UnidadeEstudantilController {
  constructor(
    private readonly unidadeEstudantilService: UnidadeEstudantilService,
  ) {}

  @Get('')
  findAllUnidadesEstudantis() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId')
  findUnidadeEstudantil() {
    throw new NotImplementedException();
  }

  @Post('')
  createUnidadeEstudantil(@Body() data: CreateUnidadeEstudantilDto) {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId')
  updateUnidadeEstudantil(
    @Param('unidadeEstudantilId', ParseIntPipe) unidadeEstudantilId: number,
    @Body() data: CreateUnidadeEstudantilDto,
  ) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId')
  deleteUnidadeEstudantil() {
    throw new NotImplementedException();
  }

  // Períodos Letivos

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

  @Post(':unidadeEstudantilId/periodos')
  createPeriodoLetivo() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/periodos/:periodoId')
  updatePeriodoLetivo(@Param('periodoId', ParseIntPipe) periodoId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/periodos/:periodoId')
  deletePeriodoLetivo(@Param('periodoId', ParseIntPipe) periodoId: number) {
    throw new NotImplementedException();
  }

  // Períodos Letivos / Etapas

  @Get(':unidadeEstudantilId/etapas')
  findAllEtapas() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/etapas/:etapaId')
  findEtapa(@Param('etapaId', ParseIntPipe) etapaId: number) {
    throw new NotImplementedException();
  }

  @Post(':unidadeEstudantilId/etapas')
  createEtapa() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/etapas/:etapaId')
  updateEtapa(@Param('etapaId', ParseIntPipe) etapaId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/etapas/:etapaId')
  deleteEtapa(@Param('etapaId', ParseIntPipe) etapaId: number) {
    throw new NotImplementedException();
  }

  // Semanas

  @Get(':unidadeEstudantilId/semanas')
  findAllSemanas(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/semanas/:semanaId')
  findSemana(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  @Post(':unidadeEstudantilId/semanas')
  createSemana() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/semanas/:semanaId')
  updateSemana(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/semanas/:semanaId')
  deleteSemana(@Param('semanaId', ParseIntPipe) semanaId: number) {
    throw new NotImplementedException();
  }

  // Materias

  @Get(':unidadeEstudantilId/materias')
  findAllUnidadeEstudantilMaterias() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/materias/:materiaId')
  findMateria(@Param('materiaId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Post(':unidadeEstudantilId/materias')
  createMateria() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/materias/:materiaId')
  updateMateria(@Param('materiaId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/materias/:materiaId')
  deleteMateria(@Param('materiaId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  // Professores

  @Get(':unidadeEstudantilId/professores')
  findAllUnidadeEstudantilProfessores() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/professores/:professorId')
  findProfessor(@Param('professorId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Post(':unidadeEstudantilId/professores')
  createProfessor() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/professores/:professorId')
  updateProfessor(@Param('professorId', ParseIntPipe) materiaId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/professores/:professorId')
  deleteProfessor(@Param('professorId', ParseIntPipe) professorId: number) {
    throw new NotImplementedException();
  }

  // Turmas

  @Get(':unidadeEstudantilId/turmas')
  findAllUnidadeEstudantilTurmas() {
    throw new NotImplementedException();
  }

  @Get(':unidadeEstudantilId/turmas/:turmaId')
  findTurma(@Param('turmaId', ParseIntPipe) turmaId: number) {
    throw new NotImplementedException();
  }

  @Post(':unidadeEstudantilId/turmas')
  createTurma() {
    throw new NotImplementedException();
  }

  @Patch(':unidadeEstudantilId/turmas/:turmaId')
  updateTurma(@Param('turmaId', ParseIntPipe) turmaId: number) {
    throw new NotImplementedException();
  }

  @Delete(':unidadeEstudantilId/turmas/:turmaId')
  deleteTurma(@Param('turmaId', ParseIntPipe) turmaId: number) {
    throw new NotImplementedException();
  }
}
