import { Body, Controller, Post } from '@nestjs/common';
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
}
