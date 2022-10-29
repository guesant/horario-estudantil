import { Controller, Get } from '@nestjs/common';

@Controller('unidade-estudantil/:ue/materias')
export class UnidadeEstudantilMateriasController {
  constructor() {}

  @Get('')
  getHello() {
    return '[GET] /unidade-estudantil/:ue/materias';
  }
}
