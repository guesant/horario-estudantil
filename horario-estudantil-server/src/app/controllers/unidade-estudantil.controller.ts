import { Controller, Get } from '@nestjs/common';
import { UnidadeEstudantilService } from '../../domain/services/unidade-estudantil.service';

@Controller('unidade-estudantil')
export class UnidadeEstudantilController {
  constructor(
    private readonly unidadeEstudantilService: UnidadeEstudantilService,
  ) {}

  @Get('')
  find() {
    return this.unidadeEstudantilService.find();
  }
}
