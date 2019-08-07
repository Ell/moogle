import * as path from 'path';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import isDev from 'src/util/isDev';

import { AppModule } from './app/app.module';

export async function startServer(
  host: string = '127.0.0.1',
  port: number = 3000,
) {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: isDev ? '*' : ['http://127.0.0.1:8080', `http://${host}:${port}`],
  });

  app.setBaseViewsDir(path.join(__dirname, 'views'));
  app.setViewEngine('hbs');

  app.listen(port, host);
}

export default startServer;
