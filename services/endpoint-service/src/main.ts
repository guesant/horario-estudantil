import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import * as compression from 'compression';
import helmet from 'helmet';
import { NestExpressApplication } from '@nestjs/platform-express';
import { IS_PRODUCTION_MODE } from './modules/consts/IS_PRODUCTION_MODE.const';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3001;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.use(
    helmet({ contentSecurityPolicy: IS_PRODUCTION_MODE ? undefined : false }),
  );

  app.use(compression());

  await app.listen(PORT);
}

bootstrap();
