import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './models';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async getList(): Promise<Author[]> {
    const res = await this.authorsRepository.find();
    return res;
  }
}
