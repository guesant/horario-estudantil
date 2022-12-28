import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { CargoService } from './cargo.service';
import { CargoResolver } from './cargo.resolver';
import { PermissaoModule } from '../permissao/permissao.module';

@Module({
  imports: [DatabaseModule, PermissaoModule],
  exports: [CargoService],
  providers: [CargoService, CargoResolver],
})
export class CargoModule {}
