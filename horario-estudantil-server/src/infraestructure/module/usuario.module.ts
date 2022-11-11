import { Module } from '@nestjs/common';
import { UsuarioService } from '../../domain/services/usuario.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  exports: [UsuarioService],
  providers: [UsuarioService],
})
export class UsuarioModule {}
