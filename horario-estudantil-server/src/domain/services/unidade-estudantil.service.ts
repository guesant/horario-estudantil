import { Inject, Injectable } from '@nestjs/common';
import { UNIDADE_ESTUDANTIL_REPOSITORY } from 'src/infraestructure/constants';
import { Repository } from 'typeorm';
import { UnidadeEstudantilEntity } from '../entities/unidade-estudantil.entity';

@Injectable()
export class UnidadeEstudantilService {
  constructor(
    @Inject(UNIDADE_ESTUDANTIL_REPOSITORY)
    private unidadeEstudantilRepository: Repository<UnidadeEstudantilEntity>,
  ) {}

  find() {
    return this.unidadeEstudantilRepository.find();
  }
}
