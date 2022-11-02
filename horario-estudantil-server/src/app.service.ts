import { Injectable } from '@nestjs/common';
import { version } from '../package.json';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: 'ok',
      message: `Horario Estudantil's server is running at version ${version}.`,
    };
  }
}
