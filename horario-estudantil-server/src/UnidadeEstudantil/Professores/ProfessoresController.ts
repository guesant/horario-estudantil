import { Controller, Get } from '@nestjs/common';

@Controller('unidade-estudantil/:ue/professores')
export class UnidadeEstudantilProfessoresController {
  constructor() {}

  @Get('')
  getHello() {
    return '[GET] /unidade-estudantil/:ue/professores';
  }
}
