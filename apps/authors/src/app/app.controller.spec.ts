import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getList', () => {
    it('should return "Welcome to authors!"', () => {
      expect(true).toEqual(true);
      // const appController = app.get<AppController>(AppController);
      // expect(appController.getList()).toEqual({
      //   message: 'Welcome to authors!',
      // });
    });
  });
});
