import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [UserService],
})
export class UserModule {}
