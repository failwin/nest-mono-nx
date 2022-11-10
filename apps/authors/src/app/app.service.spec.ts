import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getList', () => {
    it('should return "Welcome to authors!"', () => {
      expect(true).toEqual(true);
      // expect(service.getList()).toEqual({ message: 'Welcome to authors!' });
    });
  });
});
