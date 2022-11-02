import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUnidadeEstudantilDto } from 'src/domain/dto/create-unidade-estudantil.dto';
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

  @Post('')
  create(@Body() data: CreateUnidadeEstudantilDto) {
    return this.unidadeEstudantilService.create(data);
  }
}
