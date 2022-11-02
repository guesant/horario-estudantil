import { Module } from '@nestjs/common';
import { UsuarioService } from '../../domain/services/usuario.service';
import { usuarioProviders } from '../providers/database-repositories.providers';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  exports: [UsuarioService],
  providers: [UsuarioService, ...usuarioProviders],
})
export class UsuarioModule {}
