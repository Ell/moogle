import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import isDev from 'src/util/isDev';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: isDev,
    }),
  ],
  controllers: [AppController],
})
export class AppModule { }
