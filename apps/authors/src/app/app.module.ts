import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Author } from './models';
import dataSource from './datasource';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => {
        return {};
      },
      dataSourceFactory: () => {
        return Promise.resolve(dataSource);
      },
    }),
    TypeOrmModule.forFeature([Author]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
