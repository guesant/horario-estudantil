import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { PermissaoService } from './permissao.service';
import { PermissaoResolver } from './permissao.resolver';

@Module({
  imports: [DatabaseModule],
  exports: [PermissaoService],
  providers: [PermissaoService, PermissaoResolver],
})
export class PermissaoModule {}
