import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import compression from 'compression';

import { NestExpressApplication } from '@nestjs/platform-express';
import { IS_PRODUCTION_MODE } from './infrastructure/consts/IS_PRODUCTION_MODE.const';

const helmetModule = import('helmet').then((mod) => mod.default);

async function bootstrap() {
  const PORT = process.env.PORT ?? 3001;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  const helmet = await helmetModule;

  app.use(
    helmet({ contentSecurityPolicy: IS_PRODUCTION_MODE ? undefined : false }),
  );

  app.use(compression());

  await app.listen(PORT);
}

bootstrap();
