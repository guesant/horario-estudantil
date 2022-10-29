import { Controller, Get } from '@nestjs/common';

@Controller('unidade-estudantil/:ue/turmas')
export class UnidadeEstudantilTurmasController {
  constructor() {}

  @Get('')
  getHello() {
    return '[GET] /unidade-estudantil/:ue/turmas';
  }
}
