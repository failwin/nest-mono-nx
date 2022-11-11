import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './models';
import { AuthorCreateDto } from './dto';

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

  async getOne(id: number): Promise<Author> {
    const item = await this.authorsRepository.findOneBy({ id });
    return item;
  }

  async create(data: AuthorCreateDto): Promise<Author> {
    const obj = this.authorsRepository.create(data);
    const author = await this.authorsRepository.save(obj)
    return author;
  }
}
