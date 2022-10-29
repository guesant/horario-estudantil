import { Module } from '@nestjs/common';
import { UnidadeEstudantilService } from './UnidadeEstudantilService';
import { UnidadeEstudantilController } from './UnidadeEstudantilController';
import { UnidadeEstudantilMateriasController } from './Materias/MateriasController';
import { UnidadeEstudantilProfessoresController } from './Professores/ProfessoresController';
import { UnidadeEstudantilTurmasController } from './Turmas/TurmasController';

@Module({
  controllers: [
    UnidadeEstudantilController,
    UnidadeEstudantilMateriasController,
    UnidadeEstudantilProfessoresController,
    UnidadeEstudantilTurmasController,
  ],
  providers: [UnidadeEstudantilService],
})
export class UnidadeEstudantilModule {}
