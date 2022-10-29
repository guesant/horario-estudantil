import { Controller, Get } from '@nestjs/common';
import { UnidadeEstudantilService } from './UnidadeEstudantilService';

@Controller('unidade-estudantil')
export class UnidadeEstudantilController {
  constructor(
    private readonly unidadeEstudantilService: UnidadeEstudantilService,
  ) {}

  @Get('')
  find() {
    return 'ok';
  }
}
